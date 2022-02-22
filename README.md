# API Automation Cypress (https://petstore.swagger.io)

### Prerequisite

- Download [Node.js LTS](https://nodejs.org/en/) and install based on your system.
- To check installation: Open command prompt and run **node -v**. [NODE.js VERSION](https://ibb.co/tZy3X2b). Restart pc if needed. **\*Only if** there is error then set environment variable _NODE_HOME_, Variable Value = \*C:\Program Files\nodejs\*\*.
- Download [Visual Studio Code](https://code.visualstudio.com/Download) and install based on your system. **Install with Default Configuration**
- Latest Chrome or Firefox browser.

---

### Test flow.

- User flow: _Pet store_ Add a new pet to the store, find, update and, delete it.
- Data is fetched from fixtures `dataAPI.json` file.

---

### How to run test case.

- Clone/Download repo into local machine and extract it.
- Open VS-code and open extracted repo.
- Run command in VS-code terminal `npm install cypress --save-dev` it may take little longer.
- To run cypress for the first time, either run custom command using VS-Code termial `npm run cy:open` (package.json) or `./node_modules/.bin/cypress open` to Open cypress test runner.
- [Choose](https://ibb.co/HDHL3tF) browser from top right corder. Recommended _ELECTRON_. Cypress GUI runner.
- To run test case using command line use `npm run *name of script*` or `npm run RunTests` to run all test from integration folder. _package.json_
- Do not change any folder structure. It may result in test failure.\_
- Configuration of [cypress.json](https://docs.cypress.io/guides/references/configuration#cypress-json)

---

### Things to consider while executing test case.

- Do not run API test too many times in small span of time.

---

### Test execution result and report.

- Test execution video and reports can be found under _videos and reports_ folder
