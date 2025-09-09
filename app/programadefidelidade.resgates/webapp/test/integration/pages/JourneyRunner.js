sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"programadefidelidade/resgates/test/integration/pages/RedemptionsList",
	"programadefidelidade/resgates/test/integration/pages/RedemptionsObjectPage"
], function (JourneyRunner, RedemptionsList, RedemptionsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('programadefidelidade/resgates') + '/index.html',
        pages: {
			onTheRedemptionsList: RedemptionsList,
			onTheRedemptionsObjectPage: RedemptionsObjectPage
        },
        async: true
    });

    return runner;
});

