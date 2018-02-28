import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../keycloak/keycloak.service';
import { KeycloakHttp } from '../../keycloak/keycloak.http';
import { environment } from '../../../environments/environment';


@Component({
    selector: 'app-token-user-info',
    templateUrl: './token-user-info.component.html',
    styleUrls: ['./token-user-info.component.css']
})

export class TokenUserInfoComponent implements OnInit {

    username: string;
    fullName: string;

    constructor(private keycloakHttp: KeycloakHttp) { }

    ngOnInit() {
        this.getUserInfoFromToken();
    }

    getUserInfoFromToken(): void {
        this.username = KeycloakService.getUsername();
        this.fullName = KeycloakService.getFullName();
    }

}
