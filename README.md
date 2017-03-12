![Angular + Spring Logo](src/assets/angular-plus-spring.png)

# Angular Tour Of Heroes

This project takes the [Angular Tour of Heroes Tutorial](https://angular.io/docs/ts/latest/tutorial/) and combines 
[Angular CLI](https://github.com/angular/angular-cli) and [Spring Boot](http://projects.spring.io/spring-boot/).

## Prerequisites

### Angular CLI

Please follow the [Angular CLI instructions](https://github.com/angular/angular-cli#installation).

### Spring

All Spring server side dependencies will be pulled in using the included script, `gradlew` or `gradle.bat` for Windows. 
Note that I haven't tested on Windows. The Spring server is optional. Everything will work fine using only the Angular
CLI managed development server, `ng serve`. Otherwise Spring requires Java 1.8 or greater. [OpenJDK 8](http://openjdk.java.net/projects/jdk8/) 
works fine.

### JS Dependencies

Pick either [npm](https://docs.npmjs.com/cli/install) or [yarn](https://yarnpkg.com/lang/en/docs/install/) for the 
JavaScript dependencies.

## Quick Start

1. Run `yarn install` or `npm install`.
1. Run `ng serve` to start the Angular CLI managed development server.
1. Navigate to `http://localhost:4200`. The app will automatically reload if you change any of the source files.

## Spring Web Server

Run `./gradlew bootRun` from the project root to start the Spring server with an embedded Tomcat. Navigate to 
`http://localhost:8093`. It also serves up the Angular client. The distribution is copied to 
`src/main/resources/static`.

The development server, `ng serve` can run at the same time as the Spring Server. The idea is to have the Spring Server 
provide a convenient spot for REST endpoints. `in-memory-data.server.ts` could be replaced with Java REST controllers 
(servlets).

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
