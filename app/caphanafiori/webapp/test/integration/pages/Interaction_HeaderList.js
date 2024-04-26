sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.caphanafiori',
            componentId: 'Interaction_HeaderList',
            contextPath: '/Interaction_Header'
        },
        CustomPageDefinitions
    );
});