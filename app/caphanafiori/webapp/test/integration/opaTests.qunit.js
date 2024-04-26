sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/caphanafiori/test/integration/FirstJourney',
		'com/caphanafiori/test/integration/pages/Interaction_HeaderList',
		'com/caphanafiori/test/integration/pages/Interaction_HeaderObjectPage',
		'com/caphanafiori/test/integration/pages/Interaction_ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Interaction_HeaderList, Interaction_HeaderObjectPage, Interaction_ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/caphanafiori') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheInteraction_HeaderList: Interaction_HeaderList,
					onTheInteraction_HeaderObjectPage: Interaction_HeaderObjectPage,
					onTheInteraction_ItemsObjectPage: Interaction_ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);