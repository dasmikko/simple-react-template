# Simple React Template
Super simple, and easy to use, opinionated React template, with a bunch of features.

There is always room for improvement, so feel free to fork, make change and then make a PR.

## Features
- Uses Webpack 4
- Latest ES2017 syntax support
- Routing via React Router
- HMR (Hot Module Reloading)
- Development server
- Source Maps for easy development
- SCSS support
- Markdown file loading (For quick static sites)
- Redux (Persistant store + Redux Thunk for async actions)

## Folder structure
```
root
    - dist/ (Where the builded project files go)
    - src/
        - js/ (All js related stuff)
            - actions/ (Redux Actions)
            - components/ (Simple components, like buttons etc..)
            - layouts/ (Layout components)
            - pages/ (Page components, AKA pages)
                - Home/ (Example home page)
            - reducers/ (Redux Reducers)
            - app.js (App js entry point)
            - routes.js (App routes)
            - store.js (Store setup)
            - styles.js (Importing of all the styles for the app)
        - scss/ (All SCSS styles)
            - components/ (SCSS styles for components)
            - global/ (Global SCSS)
            - main.scss (SCSS entry point)
    - index.html (Entry point of the app)
    - markdown-loader.js (Markdown loader config)
    - package.json
    - webpack.config.js (Webpack config file)
```

## Getting started
- Clone the project
- Run `npm install` inside the folder
- Run `npm run start` to start the development server
- Open the URL `http:\\localhost:8080`
- App is now running, so get to developing awesome stuff!

## Building production app
You simply run `npm run build:prod`

After it's done, four new files with be in the `dist/` folder.

Upload the `index.html` and the `dist/` folder to your server, and your good to go!

**How it should look on your server**
```
- dist/
    - main.css
    - main.css.map
    - bundle.js
    - bundle.js.map
index.html
```

NOTE: Please remember to route all URL's on your server to the `index.html` file, for best experience.

## Redux store persistence
Currently the template is setup to put the whole Redux store into `localStorage`, but you could easily expand it to only store the stuff you want persistent.

## Credits
Big thanks for to **KriaSoft** for their markdown-loader.js file [- KriaSoft](https://github.com/kriasoft/react-static-boilerplate)
