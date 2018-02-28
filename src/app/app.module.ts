import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { KeycloakService } from './keycloak/keycloak.service';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { KeycloakHttp, keycloakHttpFactory } from './keycloak/keycloak.http';
import { TokenUserInfoComponent } from './components/token-user-info/token-user-info.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
    declarations: [
        AppComponent,
        TokenUserInfoComponent,
        routingComponents,
        HelloWorldComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: KeycloakHttp,
            useFactory: keycloakHttpFactory,
            deps: [XHRBackend, RequestOptions, KeycloakService]
        },
        KeycloakService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
