import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Component1, Component2, Component3, Component4 } from './app.component';
import { routing, appRoutingProviders }  from './app.routing';
import { Ng2BreadcrumbModule, BreadcrumbService } from '../app/app.module';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        Ng2BreadcrumbModule
    ],
    declarations: [
        AppComponent,
        Component1,
        Component2,
        Component3,
        Component4
    ],
    providers: [
        appRoutingProviders,
        BreadcrumbService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }