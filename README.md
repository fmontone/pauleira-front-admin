***Atention: as this is in front-end phase yet, you should change "signed" status on raw code to visualize internal or login pages on `~/src/routes/Route.js`**

# GoMench - React Js CRA Template

This package was created and bootstrapped with create-react-app with GoMench React Js template. If you wanna create a project on your own, just run:

`npx create-react-app <your-project-name> --template @gomench/gomench-reactjs`

## Run, Build & Test

*this was created with `yarn` so feel free to run `npm` commands instead if you wish.

- `yarn start` runs this application in port **3000**
- `yarn build` to build on production mode
- `yarn test` to run tests (pointing to __tests__ folder)

## Basic Dependencies and important rules

### React Root Import

This template uses **babel-plugin-root-import** and when you import some module, just use **~/** before any file under **./src** folder and your IDE intellisense will find what you are looking for.

### Styled Components

Create global CSS rules inside **~/styles/global.js** module, and create styled components files whenever it's necessary.

### Source Of Truth

For the single source of truth and side effects updating, this template is assembled with **redux**, **`redux-saga`** and `redux-persist`, all ready and speaking clearly to **reactotron** in development mode. There is also a **auth** (authentication) reducer + actions + saga pretty well wrapped, standardized and ready to use right after you create necessary parameters and payloads.

### Routes and Api

You'll also find a simple routing pre-configured pointing to a simple main page component. And you'll find Axios api also ready-to use, needing justa few configuration if you api is not located on `http://localhost:3333`.

### Last But Not Lint (oops!) - Linting and Code Styling

We love clear and organized code, so this package follow some AirBnB standards with **Prettier** and **Eslint**.

## GoMench

**GoMench** embrionary-alias-startup-software-house that aims to create application for better future. For now you'll see nothing much at [gomench.com](http://gomench.com), but you can say hello to the creator of this package, Fabio Montone, via [montone@gmail.com]('mailto:montone@gmail.com')
