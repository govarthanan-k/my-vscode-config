```

// store.js - Simple Redux store
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Fetch form data from API
export const loadForm = createAsyncThunk('form/load', async (formId) => {
  const response = await fetch(`/api/forms/${formId}`)
  return response.json()
})

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: null,
    loading: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadForm.pending, (state) => {
        state.loading = true
      })
      .addCase(loadForm.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
  }
})

export const store = configureStore({
  reducer: {
    form: formSlice.reducer
  }
})

// EForm.jsx - Your main component
import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { store, loadForm } from './store'

const EFormWrapper = ({ formId, children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (formId) {
      dispatch(loadForm(formId))
    }
  }, [formId, dispatch])

  return <div>{children}</div>
}

const EForm = ({ formId, children }) => {
  return (
    <Provider store={store}>
      <EFormWrapper formId={formId}>
        {children}
      </EFormWrapper>
    </Provider>
  )
}

export default EForm

// EFormCore.jsx - Your form component
import React from 'react'
import { useSelector } from 'react-redux'

export const EFormCore = () => {
  const { data, loading } = useSelector(state => state.form)

  if (loading) return <div>Loading...</div>
  if (!data) return <div>No form data</div>

  return (
    <div>
      <h2>{data.title}</h2>
      <form>
        {data.fields?.map(field => (
          <div key={field.id}>
            <label>{field.label}</label>
            <input type={field.type} name={field.id} />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

// Usage - App.jsx
import React from 'react'
import EForm from './EForm'
import { EFormCore } from './EFormCore'

const App = () => {
  return (
    <EForm formId="example-123">
      <EFormCore />
    </EForm>
  )
}


```
