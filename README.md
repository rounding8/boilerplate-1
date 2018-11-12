
# Demo #1 ∞ Express + EJS Application 🍽

### Client-side Web Application using Express + EJS

> The purpose of this boilerplate is to show that I know one of many ways to create a web application; feel free to clone|fork and use as needed :D

<br>

This setup would be ideal for deploying via [Docker](https://www.docker.com), [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk), [Microsoft Azure](https://azure.microsoft.com/en-us), or directly onto a server (i.e. old school drag n' drop), etc.

<br>

## Development

```
$ git clone ssh://git@github.com:rounding8/boilerplate-1.git        # Clone Remote Repository
$ cd boilerplate-1/                                                 # Change Directory to "boilerplate-1" of Local Repository
$ yarn                                                              # Install Application Dependencies via [Yarn](https://yarnpkg.com)
$ yarn start                                                        # Execute in "Development" Mode
```

<br>

![screenshot-1](https://github.com/rounding8/boilerplate-1/blob/master/docs/screenshot-1.jpg)
![screenshot-2](https://github.com/rounding8/boilerplate-1/blob/master/docs/screenshot-2.jpg)
![screenshot-3](https://github.com/rounding8/boilerplate-1/blob/master/docs/screenshot-3.jpg)

<br>

## Deployment

> App deployment can be handled using [CircleCI](https://circleci.com), [Jenkins](https://jenkins.io), [Grunt](https://gruntjs.com), etc.

<br>

## Structure

```javascript
|- client                       -- Client-side (front-end) of application
    |- static                   // Static client-side public dependencies
        |- assets               // Imported (external) assets; rarely modified, imported as-is
            |- css
            |- font
            |- js
        |- css                  // Internal application assets; created/modified by dev
        |- icon
        |- img
        |- js
    |- views                    // EJS HTML Templates
        |- partials             // Reuseable templates
            |- head.ejs         // HTML <head> elements
            |- js.ejs           // JS Script tags
            |- menu.ejs         // Hamburger/Pancakes Menu HTML elements
        |- path                 // Main views (related to routes)
            |- index.ejs        // Main Index Entry File
            |- login.ejs        // Login Page
            |- user.ejs         // User Page
|- docs
|- node_modules/                // Packages installed via Yarn (dependencies & devDependencies)
|- server                       -- Server-side (back-end) of application
    |- routes                   // Application (server) route/path handlers
        |- api.js
        |- login.js
    |- index.js
|- .gitignore                   // Git repository tracking files & folders to ignore
|- LICENSE
|- package.json                 // Resource for installing & managing Application dependencies
|- README.md                    // Project Documentation & Code Development Management Reference
|- yarn.lock
```

<br>

### Client

| Resource                                 | Source       | Type      | Implementation                                                                |
|------------------------------------------|--------------|-----------|-------------------------------------------------------------------------------|
| [Font Awesome](http://fontawesome.io)    | `CSS`        | Library   | Defines CSS for icons, e.g. Nav menu & Performance icons                      |
| [Google Fonts](https://fonts.google.com) | `Font`       | Library   | Imports base application font, [Lato](https://fonts.google.com/specimen/Lato) |
| [jQuery](https://jquery.com)             | `JavaScript` | Library   | Core methods used for event handling, DOM manipulation, REST requests, etc.   |
| [Pure](http://purecss.io)                | `CSS`        | Framework | Responsive Framework for Mobile/Tablet & Desktop support                      |

<br>

### Server

| Resource                                                    | npm                                                              | Description / Implementation                              |
|-------------------------------------------------------------|------------------------------------------------------------------|-----------------------------------------------------------|
| [body-parser](https://github.com/expressjs/body-parser)     | [body-parser](https://www.npmjs.com/package/body-parser)         | Node body parsing middleware                              |
| [EJS](http://www.embeddedjs.com)                            | [ejs](https://www.npmjs.com/package/ejs)                         | Templates for views & passing data to client              |
| [Express](https://expressjs.com/en/api.html)                | [express](https://www.npmjs.com/package/express)                 | Node Web Application Framework for creating HTTP server   |
| [express-session](https://github.com/expressjs/session)     | [express-session](https://www.npmjs.com/package/express-session) | Simple session middleware for Express                     |
| [MongoDB](http://mongodb.github.io/node-mongodb-native/2.2) | [mongodb](https://www.npmjs.com/package/mongodb)                 | Official MongoDB Node driver                              |

<br>

### API

| Route | Endpoint                                                                      | HTTP  | Params | Description |
|-------|-------------------------------------------------------------------------------|-------|--------|-------------|
| User  | [/user](https://github.com/rounding8/boilerplate-1/blob/master/server/api.js) | `GET` |        | User Info   |

<br>

## Changelog

| Version | Date     | Commit                                                                                                | Description |
|---------|----------|-------------------------------------------------------------------------------------------------------|-------------|
| 1.0.0   | 11-12-18 | [b21580e](https://github.com/rounding8/boilerplate-1/commit/b21580e6d652eb0211a75e891f7a9cc68dbf2eb7) | Updated Boilerplate w/ Initial Application |
| 0.0.0   | 11-12-18 | [ee3b852](https://github.com/rounding8/boilerplate-1/commit/ee3b852a951f68c04bc121ca12ed57f783887206) | 🎉  Initial commit |
