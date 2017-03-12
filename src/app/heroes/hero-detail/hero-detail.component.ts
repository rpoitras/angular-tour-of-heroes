import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    // hero id is a number. Route params are always strings. Convert the value to a number with the JS (+) operator.
    // Subscriptions are cleaned up by Angular when the component is destroyed.
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  /**
   * Going back too far could take us out of the application. That's acceptable in a demo. We'd guard against it in a
   * real application, perhaps with the CanDeactivate guard.
   *
   * https://angular.io/docs/ts/latest/api/router/index/CanDeactivate-interface.html
   */
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
