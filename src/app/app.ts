import { Component, ViewEncapsulation } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {HomePage} from './pages/home-page';
import {ResultsPage} from './pages/results-page';

@Component({
  moduleId: module.id,
  selector: 'tortuga-app',
  templateUrl: 'app.html',
  styleUrls: ['app.css'],
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
})
@Routes([
  {path: '/', component: HomePage},
  {path: 'results', component: ResultsPage}
])
export class App {

  /**
   * 
   * @param router
     */
  constructor(private router:Router) {
  }

  /**
   *
   */
  public home(): void {
    this.router.navigate(['/']);
  }
  
}
