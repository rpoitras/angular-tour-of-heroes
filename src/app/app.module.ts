import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/shared/hero.service';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';
import { NotFoundComponent } from './not-found/not-found.component';

/**
 * Every Angular app has at least one Angular module class, the root module, conventionally
 * named AppModule.
 *
 * While the root module may be the only module in a small application, most apps have many more
 * feature modules, each a cohesive block of code dedicated to an application domain, a workflow,
 * or a closely related set of capabilities.
 *
 * An Angular module, whether a root or feature, is a class with an @NgModule decorator.
 */
@NgModule({
  /*
   * Other modules whose exported classes are needed by component templates declared in this module.
   */
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  /*
   * The subset of declarations that should be visible and usable in the component
   * templates declared in this module. A root module has no reason to export anything because other components
   * don't need to import the root module.
   *
   * exports: [
   * ],
   */

  /*
   * The view classes that belong to this module. There are three kinds of view classes:
   *   - components
   *   - directives
   *   - pipes
   */
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    NotFoundComponent
  ],

  /*
   * Creators of services that this module contributes to the global collection of services. They
   * become accessible in all parts of the app.
   */
  providers: [ HeroService ],

  /*
   * The main application view, called the root component, that hosts all other app views. Only the
   * root module should set this bootstrap property.
   */
  bootstrap: [ AppComponent ]
})
export class AppModule { }
