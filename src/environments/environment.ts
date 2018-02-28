export const environment = {
    production: false,

    keycloak: {
        url: 'https://auth.dev.redhat.com/auth',
        realm: 'EmployeeIDP',
        clientId: 'helloworld',
        'ssl-required': 'external',
        'public-client': true
    }
};
