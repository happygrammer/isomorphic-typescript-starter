## Isomorphic Typescript Starter ##

This is a project developed with an attempt to figure out how to develop servers and clients using only typescript(isormorphic!). In order to be a isormorphic typescript application. you have to use a single language(typescript) when developing for the server and client, as well as define and use a common module. With a single language, you can eliminate duplicate logic code between the client and the server.


## Table of Contents ##

- [Features](#features)
- [Installation](#installation)
- [Run](#run)
- [Demo](#demo)
- [Project Description](#project-description)
- [Directory structure](#directory-structure)



## Features ##

- Develop client and server simultaneously using typescript(isormorphic!)
- Run commands using Grunt and perform the bundling using the webpack.
- Restart the server If the code changes on the client or server.
- livereloading

## Required environment ##

- Node.js 6.10.0 +

## Installation ##

This project installs the relevant package through npm based on the package.json file.

	$ npm install
	
	
## Run ##

execution can be performed immediately using npm command.

	$ npm run dev // Development Mode. copy & build & change detection & live reloading ... ($ grunt)
	$ npm run start // Operation mode, Run server only ($ node ./server.js)

As soon as you enter the above commands, the server will be launched and the browser will start.

	http://localhost:8080

## Demo ##
This video is a demonstration of running the bookmark application simply after running the server.

[![Isomorphic typescript starter DEMO](https://i.ytimg.com/vi/7tBzEHerEQE/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=V8PdvJPkWE2ExyOFuS8cr5brMJU)](https://www.youtube.com/watch?v=7tBzEHerEQE&feature=youtu.be)


## Project Description ##

This project is a bookmark application introduced to how to develop using typescript. This project has the following characteristics.

- this project does not use the database.
- this project using only typescripts
- this project can utilize grunt to build simultaneously.
- this project use common modules. (client directory used)

The bookmark application works in the following order:

- The server renders the template by default.
- You can register bookmark information using the registration button.
- The entered bookmark information is verified by a common module (located in the common directory).
- If the validation passes, the bookmark information is added back to the client from the server.

## Directory structure ##

The server code is made up of a Model View Controller (MVC) structure and is located in the following directory:

	/server

The client code is located in the client directory.

	/client

The Client directory contains both static files and user application files. The following is a directory of static files.

	/client/css
	/client/img

The following is the directory to use when developing client applications. The client application used JQuery and is located in the following directory:

	/client/js

shared modules by the server and client are defined in the following directory:

	/common