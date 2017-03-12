# Angular Tour Of Heroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

Please follow the installation instruction at the link above if you do not have Angular CLI installed.

## Dependencies
Run `yarn` to load the `node_modules`.

## Development Server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200`. The app will automatically reload if you change 
any of the source files.

## Spring Web Server
Run `./gradlew bootRun` to start the Spring server with an embedded Tomcat. Navigate to `http://localhost:8093`. It also
serves up the Angular client. The distribution is copied to `src/main/resources/static`.

The development server can run at the same time. The idea is to have the Spring Server provide a convenient spot for 
REST endpoints. `in-memory-data.server.ts` could be replaced with Java REST controllers (servlets).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use 
`ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag 
for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the 
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
