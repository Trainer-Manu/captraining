using { Country} from '@sap/cds/common';

namespace cap.hana.app;

entity Interaction_Header {
    key ID : Integer;
    ITEMS : Composition of many Interaction_Items on ITEMS.INTHeader = $self;
    PARTNER : String(10);
    LOG_DATE : Date;
    BPCOUNTRY : Country;

}

entity Interaction_Items {
    key INTHeader : Association to Interaction_Header;
    KEY TEXT_ID : String(10);
    LANGU : String(2);
    LOGTEXT : String(1024);
}