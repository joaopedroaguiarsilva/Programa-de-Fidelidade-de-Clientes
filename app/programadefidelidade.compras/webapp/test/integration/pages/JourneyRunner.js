sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"programadefidelidade/compras/test/integration/pages/PurchasesList",
	"programadefidelidade/compras/test/integration/pages/PurchasesObjectPage"
], function (JourneyRunner, PurchasesList, PurchasesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('programadefidelidade/compras') + '/index.html',
        pages: {
			onThePurchasesList: PurchasesList,
			onThePurchasesObjectPage: PurchasesObjectPage
        },
        async: true
    });

    return runner;
});

