import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {enableProdMode} from '@angular/core';
import {App} from './app/app';
import {environment} from './app/environment';
import {MODAL_BROWSER_PROVIDERS} from 'angular2-modal/platform-browser';

if (environment.production) {
    enableProdMode();
}

bootstrap(App, [MODAL_BROWSER_PROVIDERS, ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);

