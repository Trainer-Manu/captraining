sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.caphanafiori',
            componentId: 'Interaction_ItemsObjectPage',
            contextPath: '/Interaction_Header/ITEMS'
        },
        CustomPageDefinitions
    );
});