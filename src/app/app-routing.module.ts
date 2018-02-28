import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenUserInfoComponent } from './components/token-user-info/token-user-info.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

const routes: Routes = [
    { path: 'helloworld', component: HelloWorldComponent },
    { path: 'userinfo', component: TokenUserInfoComponent },
    { path: '', redirectTo: '/helloworld', pathMatch: 'full' },
    // Default Route
    { path: '**', component: HelloWorldComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
    TokenUserInfoComponent,
    HelloWorldComponent
];
