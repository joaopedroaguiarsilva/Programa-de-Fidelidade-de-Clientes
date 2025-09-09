sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"programadefidelidade/produtos/test/integration/pages/ProductsList",
	"programadefidelidade/produtos/test/integration/pages/ProductsObjectPage"
], function (JourneyRunner, ProductsList, ProductsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('programadefidelidade/produtos') + '/index.html',
        pages: {
			onTheProductsList: ProductsList,
			onTheProductsObjectPage: ProductsObjectPage
        },
        async: true
    });

    return runner;
});

