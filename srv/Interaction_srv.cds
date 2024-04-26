using cap.hana.app as myHanaSrv from '../db/schema';

service CatalogService {

    @requires: 'authenticated-user'   // platform authenticated users
    entity Interaction_Header as projection on myHanaSrv.Interaction_Header; 

    @require : 'Admin'  // can be written the roles like this way also
    @restrict: [{grant: 'READ'}]
    entity Interaction_Items as projection on myHanaSrv.Interaction_Items;
}



