export const environment = {
	production: true,

	keycloak: {
		url: 'https://auth.dev.redhat.com/auth',
		realm: 'EmployeeIDP',
		clientId: 'helloworld',
		'ssl-required': 'external',
		'public-client': true
	}
};
