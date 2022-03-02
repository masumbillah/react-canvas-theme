# React canvas theme

This template will be use service provider website. It's developing only React js(latest version), Redux, Redux thunk.


## Live demo
[https://react-canvas-theme.herokuapp.com/](https://react-canvas-theme.herokuapp.com/)

## Get start for now

At first pull the repo and install modules.

### `npm install` or `npm i`

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Documentation for Developers

### Folder stucture
1. react_canvas_theme()
   - public
      - theme-assets
   - src
      - Components
        - Common
        - Registration
        - AboutSection.js
        - ContactSection.js
        - HeaderSection.js 
        - PriceSection.js
        - ScreenshotSection.js
        - WorkSection.js
      - hooks 
      - resoursces
      - services
        - actions
        - reducers
        - store.js 
      - tools
        - App-helpers.js
      - types
      - App.js
      - App.test.js
      - index.js
      - setupTests.js


### Folder/Files Details
  #### 1. public:
   Public forlder contain root file and theme assets files. There are folders and files.
   
    - theme-assets
      - css
      - fonts
      - img
      - js
      - owl-carousel  
    - favicon.ico
    - index.html
    - etc

  #### 1. src:
   src folder is main forlder of the react project. Here define all react components and helper methods.
   
   a. Components: The folders contain all react components. there are sections and common components.

   b. hooks: We are define varous custom hooks the folder.

   c. resources: I'm using the folder for give theme dynamic data. It will be depend on your theme category. If you want to data by API so no need it.

   d. services: Services forlder basically redux method. Here define redux actions, reducer and store.

   c. tools: Tools forlder contain varisous js or others helper method. like as common app helpers and others.

   e. types: I'm using types functionality. So all types define here. I used only redux types from here.