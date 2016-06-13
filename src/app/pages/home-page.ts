import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
    templateUrl: './app/pages/home-page.html',
})
export class HomePage {
    /**
     *
     * @param router
     */
    constructor(private router:Router) {
    }
    
    /**
     *
     */
    public results(): void {
        this.router.navigate(['/results']);
    }

}
