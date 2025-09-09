sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"programadefidelidade/clientes/test/integration/pages/CustomersList",
	"programadefidelidade/clientes/test/integration/pages/CustomersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('programadefidelidade/clientes') + '/index.html',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage
        },
        async: true
    });

    return runner;
});

