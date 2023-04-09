# React tutorial

This repository is Complete understating of my personal experience.
In this ReadMe.md file you can read about simplified my version of React.

| Title           | Value             |
| --------------- | ----------------- |
| @author:        | Dashpuntsag Oidov |
| @react version: | 18.0.3            |
| @createdDate:   | 2022-Nov-10       |
| @updatedDate:   | 2022-Nov-25       |

## What is React.js ?

React.Js is a declarative, efficient and flexible Javascipt library for frontend development. In 2010s and 2020s MVC architectural pattern is most commonly used. React.js is only responsible for view layer.

React.js library is designs simple view for each state in your application, and It will efficiently update and render just the right component when your data is changed.

## Folder & file structure explained

When working on large projects, structuring your code by categorizing and naming them properly is crucial. This section aims to provide you with a brief explanation of the best approach to follow when organizing your React.js project. Here's a basic explanation of a typical React folder and file structure:

```
|-- public
|-- src/
├── components/
│ ├── ComponentA/
│ │ ├── ComponentA.js
│ │ ├── ComponentA.css
│ │ └── ComponentA.test.js
│ ├── ComponentB/
│ │ ├── ComponentB.js
│ │ ├── ComponentB.css
│ │ └── ComponentB.test.js
│ └── index.js
├── pages/
│ ├── PageA/
│ │ ├── PageA.js
│ │ ├── PageA.css
│ │ └── PageA.test.js
│ ├── PageB/
│ │ ├── PageB.js
│ │ ├── PageB.css
│ │ └── PageB.test.js
│ └── index.js
├── utils/
│ ├── helperFunctions.js
│ ├── api.js
│ └── constants.js
├── App.js
├── index.js
├── index.css
└── serviceWorker.js
```

- **public folder**: Here is where all the static assets that are used by the appication such as images, fonts and HTML files. The content of `public` folder are not processed by the build tools, but instead are directly coppied into the build folder during the build process. `public` folder usually contains `index.html` file which is the main HTML file that serves as the entry point for the React application. It contains a div element with an id of root, which is where your React components will be rendered.
-

## How React.js works

When react code is executed index.js in the src folder would be first code to run

## Run the project

To install node packages:

```
    npm install
```

Simply run following command:

```
    npm run dev
```

## Experience

### Setting up tailwindcss into your react.js project

### Swiper in react

Swiper is one of the most simle yet most useful feature of a web application. There are many ways to implement swiper in web and one of those ways is using react/swiper library

- documentation: <https://swiperjs.com/react#what-next>
- demo/sandbox: <https://swiperjs.com/demos>
