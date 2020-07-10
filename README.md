1) Create Webpack Workflow
   - [x] Webpack, webpack dev server install and setup script
   - [x] Babel & React Setup (React, ReactDOM, @babel/core, babel-loader, @babel/preset-env, @babel/preset-react)
   - [x] HTML Webpack Plugin (html-loader, html-webpack-plugin)
   - [x] CSS/Style Loaders -> css-loader, style-loader , babel-plugin-react-css-modules
   - [x] Apply POC styling on App.js
   - [x] Setup Css Extract Plugin
   - [x] Setup Dev and Prod configs/scripts for webpack

2) Set Testing Suite for React
   - [x] Install Jest, react-testing-library -> create __tests__ folder
   - [x] POC Test on App.js

3) Create API
   - [x] Setup Express
   - [x] Get Giphy API Key
   - [x] Get Pixabay API Key
   - [x] create Axios requests (seperate async functions) for both API's
   - [x] Setup .env file (will not be hidden in this project)
   - [x] Set CORS ( for now make it available for all)
   - [x] Set /search-images endpoint

4) Test Suite for API
   - [x] Setup Jest (npm script, jest config, and __tests__ folder)
   - [x] Giphy Endpoint Test
   - [x] Pixabay Endpoint Test
   
5) Css Reset
   - [x] Feature on webpack to import raw CSS files (example import "App.css?raw")
   - [x] Create and import reset.css
   
6) React App
   - [X] Color Palette in root css
   - [X] Apply Neumorphism to searchbox
   - [X] Install Axios
   - [X] Debounce SearchBox Input
   - [X] Create SearchBox Component
   - [X] Create ResultsViewer Component
   - [X] Mobile First Fluid FlexBox (with wrapping) styling
   - [X] Lazy Load Images

7) Deployment
   - [ ] Deploy API
   - [ ] Deploy React-App
   
8) Additional Features
   - [x] Use Promise.all to do two requests async 
   - [ ] Test SearchBox Component
   - [ ] Test ResultsViewer Component
   - [ ] Infinite Loader
   - [ ] Dockerize React App
   - [ ] Dockerize Api