# HEALTH HUB FRONT-END



## Description

Health Hub is a healthcare website designed for doctors and patients. Doctors can offer routines, add tips to specific routines, types of routines, or general health advice. Patients can follow multiple routines, track their progress, review tips related to their routines, and participate in a forum to exchange experiences and ask questions and get answers from doctors and get motivation from other users (patients) or have private conversations with them.

## Installation and launch guide

### Installation

```
- $ git clone https://https://github.com/JuanCalderon2005/Health-Hub-SPA-Frontend.git
- $ cd ../Health-Hub-SPA-Frontend-master
- $ npm install webpack
```

### Launch
```
$ npm run start
```

## Support

Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

## Technologies Used

- HTML
- CSS
- JavaScript
- *Node.js - Execution environment for JavaScript

## Dependencies

- [bootstrap](https://getbootstrap.com): Framework used to develop web applications and mobile first sites, focused on a layout that adapts to the screen of the device used by the user.
- [bootstrap-icons](https://icons.getbootstrap.com): icons available from bootstrap
- [boxicons](https://boxicons.com): Boxicons is a vector icon library used primarily in web development. 
- [three.js](https://threejs.org):
Three. js is an open-source JavaScript library that you can use to create dynamic and interactive websites with 2D and 3D graphics.

## Project estructure
```txt
HEALTH-HUB-SPA-FRONTED-MASTER/
│
├── app/                        # Source code folder
|   ├── api/                    
|   |   └──api.js
│   ├── assets/                 # Images, fonts, etc.
|   |   ├──img/
|   |   |   ├── file.png
|   |   |   └── video_login.mp4
|   |   ├── favicon.ico
|   |   ├── loader.svg
|   |   └── README.md
│   ├── components/             # Global reusable components
|   |   ├── custom-component-example/
|   |   |   ├── index.js
|   |   |   ├── navigation-bar.css
|   |   |   └── navigation-bar.js
|   |   ├── layout\private\dashboard/   # Basic organization of private views
|   |   |   ├── dashboard-layout.css
|   |   |   └── dashboard-layout.js
|   |   ├── link/               # prevents any predetermined actions
|   |   |   └── link.js
│   │   ├── navigation-bar/     # Navigation Bar
|   |   |   ├── index.js        # Every index.js works as an enrouter to the main html
│   │   │   ├── navigation-bar.js
│   │   │   └── navigation-bar.css
│   │   ├── sidebar-menu/       # Side menu
|   |   |   ├── index.js        # Every index.js works as an enrouter to the main html
│   │   │   ├── sidebar-menu.js
│   │   │   └── sidebar-menu.css
|   ├── helpers/                # Codes that help the operation of the Website
|   |   ├── form-validator.js
|   |   ├── index.js            # Every index.js works as an enrouter to the main html
|   |   ├── log-out.js
|   |   ├── ptops.js
|   |   └── routes.js
│   ├── scenes/                 # Visible scenes for users
|   |   ├── private\ physician\ home/       # Private view
|   |   |   ├── home.css
|   |   |   ├── home.js
|   |   |   └── index.js
|   |   ├── public/             # Visible scenes for every user or non-user
|   |   |   ├── about-us/
|   |   |   |   ├── about-us.js
|   |   |   |   └── index.js
|   |   |   ├── login/          # Login view
|   |   |   |   ├── components\form/    # Login form
|   |   |   |   |   ├── index.js        # Every index.js works as an enrouter to the main html
|   |   |   |   |   ├── login-form.css
|   |   |   |   |   └── login-form.js
|   |   |   |   ├── index.js
|   |   |   |   └── login.js
|   |   |   ├── register/       # register/create account view
|   |   |   |   ├── components/     # register form
|   |   |   |   |   ├── index.js        # Every index.js works as an enrouter to the main html
|   |   |   |   |   ├── registerForm.css
|   |   |   |   |   └── registerForm.js
|   |   |   |   └── register.js
│   ├── styles/                 # Estilos globales
│   |   ├── index.js                # Archivo principal de JavaScript
|   |   ├── App.js                  # Archivo principal de nuestra app SPA
|   |   └── Router.js               # Archivo de configuración de rutas de nuestra app SPA
├── leaning-tips/               # .md files that can help to understand or develop the project
├── node_modules/               # Directory that is created in the root folder of our project when we install packages or dependencies using npm.
├── .babelrc                    # Archivo de configuración de Babel
├── .gitignore                  # Archivo de ocultar archivos/directorios a Git
├── index.html                  # Archivo principal de HTML
├── package-lock.json           # Dependencias del proyecto con versiones exactas
├── package.json                # Dependencias del proyecto y scripts
├── README.md                   # Documentación del proyecto
└── webpack.config.js           # Archivo de configuración de Webpack
```