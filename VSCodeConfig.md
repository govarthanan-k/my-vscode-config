```
{
  "workbench.colorTheme": "cursor-dark",
  "workbench.activityBar.orientation": "vertical",
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "explorer.compactFolders": false,
  "workbench.startupEditor": "none",
  "terminal.integrated.allowChords": false,
  "editor.autoIndent": "full",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.renderWhitespace": "none",
  "typescript.preferences.importModuleSpecifier": "shortest",
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": "always",
    "source.addMissingImports": "always",
    "source.organizeImports": "always",
    "source.sortImports": "always",
    "source.removeUnusedImports": "always"
  },
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "errorLens.messageTemplate": "[$severity] $message ($source)",
  "errorLens.enabled": true,
  "errorLens.fontWeight": "bold",
  "errorLens.gutterIconsEnabled": true,
  "errorLens.followCursor": "closestProblem",
  "editor.fontFamily": "'Cascadia Code', Consolas, 'Courier New', monospace",
  "editor.cursorBlinking": "expand",
  "terminal.integrated.env.windows": {},
  "console-ninja.featureSet": "Community",
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "update.showReleaseNotes": false,
  "terminal.external.windowsExec": "C:\\Program Files\\Git.exe",
  "terminal.explorerKind": "external"
}



cedricverlinden.cursor-dark
dsznajder.es7-react-js-snippets
jmkrivocapich.drawfolderstructure
mariusalchimavicius.json-to-ts
nrwl.angular-console
viktorqvarfordt.vscode-pitch-black-theme
aaron-bond.better-comments
adpyke.codesnap
bradlc.vscode-tailwindcss
cardinal90.multi-cursor-case-preserve
chakrounanas.turbo-console-log
dbaeumer.vscode-eslint
eamodio.gitlens
esbenp.prettier-vscode
formulahendry.auto-rename-tag
formulahendry.auto-close-tag
github.github-vscode-theme
gruntfuggly.todo-tree
johnpapa.winteriscoming
meganrogge.template-string-converter
naumovs.color-highlight
pkief.material-icon-theme
pranaygp.vscode-css-peek
ritwickdey.liveserver
liamhammett.inline-parameters
usernamehw.errorlens
vincaslt.highlight-matching-tag
vitest.explorer
vunguyentuan.vscode-css-variables
wallabyjs.console-ninja
xabikos.javascriptsnippets
yoavbls.pretty-ts-errors
csstools.postcss
streetsidesoftware.code-spell-checker
oderwat.indent-rainbow
shardulm94.trailing-spaces
ms-playwright.playwright
wmaurer.change-case
alefragnani.bookmarks
styled-components.vscode-styled-components
AykutSarac.jsoncrack-vscode
gera2ld.markmap-vscode
DavidAnson.vscode-markdownlint
github.copilot
github.copilot-chat
anthropic.claude-code

Remove all existing extensions: code --list-extensions | xargs -n 1 code --uninstall-extension

For VS Code:
"cedricverlinden.cursor-dark","dsznajder.es7-react-js-snippets","jmkrivocapich.drawfolderstructure","mariusalchimavicius.json-to-ts","nrwl.angular-console","viktorqvarfordt.vscode-pitch-black-theme","aaron-bond.better-comments","adpyke.codesnap","bradlc.vscode-tailwindcss","cardinal90.multi-cursor-case-preserve","chakrounanas.turbo-console-log","dbaeumer.vscode-eslint","eamodio.gitlens","esbenp.prettier-vscode","formulahendry.auto-rename-tag","formulahendry.auto-close-tag","github.github-vscode-theme","gruntfuggly.todo-tree","johnpapa.winteriscoming","meganrogge.template-string-converter","naumovs.color-highlight","pkief.material-icon-theme","pranaygp.vscode-css-peek","ritwickdey.liveserver","liamhammett.inline-parameters","usernamehw.errorlens","vincaslt.highlight-matching-tag","vitest.explorer","vunguyentuan.vscode-css-variables","wallabyjs.console-ninja","xabikos.javascriptsnippets","yoavbls.pretty-ts-errors","csstools.postcss","streetsidesoftware.code-spell-checker","oderwat.indent-rainbow","shardulm94.trailing-spaces","ms-playwright.playwright","wmaurer.change-case","alefragnani.bookmarks","styled-components.vscode-styled-components","AykutSarac.jsoncrack-vscode","gera2ld.markmap-vscode","DavidAnson.vscode-markdownlint","github.copilot","github.copilot-chat","anthropic.claude-code" -split "," | ForEach-Object { code --install-extension $_ }

For Cursor:
"dsznajder.es7-react-js-snippets","jmkrivocapich.drawfolderstructure","mariusalchimavicius.json-to-ts","nrwl.angular-console","viktorqvarfordt.vscode-pitch-black-theme","aaron-bond.better-comments","adpyke.codesnap","bradlc.vscode-tailwindcss","cardinal90.multi-cursor-case-preserve","chakrounanas.turbo-console-log","dbaeumer.vscode-eslint","eamodio.gitlens","esbenp.prettier-vscode","formulahendry.auto-rename-tag","formulahendry.auto-close-tag","github.github-vscode-theme","gruntfuggly.todo-tree","johnpapa.winteriscoming","meganrogge.template-string-converter","naumovs.color-highlight","pkief.material-icon-theme","pranaygp.vscode-css-peek","ritwickdey.liveserver","liamhammett.inline-parameters","usernamehw.errorlens","vincaslt.highlight-matching-tag","vitest.explorer","vunguyentuan.vscode-css-variables","wallabyjs.console-ninja","xabikos.javascriptsnippets","yoavbls.pretty-ts-errors","csstools.postcss","streetsidesoftware.code-spell-checker","oderwat.indent-rainbow","shardulm94.trailing-spaces","ms-playwright.playwright","wmaurer.change-case","alefragnani.bookmarks","styled-components.vscode-styled-components","AykutSarac.jsoncrack-vscode","gera2ld.markmap-vscode","DavidAnson.vscode-markdownlint","github.copilot","github.copilot-chat","anthropic.claude-code" -split "," | ForEach-Object { cursor --install-extension $_ }


New ones to be added:
shd101wyy.markdown-preview-enhanced
WallabyJs.quokka-vscode
imgildev.vscode-auto-barrel
imgildev.vscode-nextjs-generator

```
