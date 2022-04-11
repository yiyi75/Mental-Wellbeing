// Database Functions
// saves the data to firebase

// experiment main settings
const EXPERIMENT_START_TIME = new Date().getTime();

function now(){
    var now = new Date().getTime() - EXPERIMENT_START_TIME;
    return now
}


var pData = {
    StartTime: EXPERIMENT_START_TIME,
    Time: now(),        
    EventNum: 1,
    Block: "",
    TrialNum: 0,        

    //ID
    AuthId: "",
    ConsentId: "", //legal name
    ConsentStatus: false,

    //Signup ID
    signupid: "",

    //Email
    email: "",

    //GPA release
    GPAconsent: "",
    studentnumber: "",

    //DEMOGRAPHICS
    Gender: "",
    Age: "",
    Language: "",
    Country: "",
    Ethnicity: "",

    //Stress: PSS
    PSS_01: "",
    PSS_02: "",
    PSS_03: "",
    PSS_04: "",
    PSS_05: "",
    PSS_06: "",
    PSS_07: "",
    PSS_08: "",
    PSS_09: "",
    PSS_10: "",
    PSS_total: "",

    
    //Decentering QUESTIONNAIRE
    Decenter_01: "",
    Decenter_02: "",
    Decenter_03: "",
    Decenter_04: "",
    Decenter_05: "",
    Decenter_06: "",
    Decenter_07: "",
    Decenter_08: "",
    Decenter_09: "",
    Decenter_10: "",
    Decenter_11: "",
    Decenter_12: "",
    Decenter_13: "",
    Decenter_14: "",
    Decenter_15: "",
    Decenter_total: "",

    //Reappraisal questionnaire
    Reappraisal_01: "",
    Reappraisal_02: "",
    Reappraisal_03: "",
    Reappraisal_04: "",
    Reappraisal_05: "",
    Reappraisal_06: "",
    Reappraisal_07: "",
    Reappraisal_08: "",
    Reappraisal_09: "",
    Reappraisal_10: "",
    Reappraisal_11: "",
    Reappraisal_12: "",
    Reappraisal_13: "",
    Reappraisal_14: "",
    Reappraisal_15: "",
    Reappraisal_16: "",
    Reappraisal_17: "",
    Reappraisal_ERQ: "",
    Reappraisal_CFI: "",
    Reappraisal_SRI: "",
    Reappraisal_total: "",

    //PersonalWB Questionnaire
    PersonalWB_01: "",
    PersonalWB_02: "",
    PersonalWB_03: "",
    PersonalWB_04: "",
    PersonalWB_05: "",
    PersonalWB_06: "",
    PersonalWB_07: "",
    PersonalWB_08: "",
    PersonalWB_09: "",
    PersonalWB_10: "",
    PersonalWB_11: "",
    PersonalWB_SWLS: "",
    PersonalWB_Happiness: "",
    PersonalWB_Sadness: "",
    PersonalWB_Anger: "",
    PersonalWB_Anxiety: "",

    //Catch Questions
    Catch_01: "", //should be 4
    Catch_02: "", //should be 7

};

function saveSessionData2(blockName = ""){
    pData.Block = blockName;    
    pData.Time= now();
    firebase.database().ref('sessions/' + pData.AuthId + '/' + pData.EventNum).set(pData);
    pData.EventNum = pData.EventNum + 1;
}


function saveSummaryData() {
    var user = firebase.auth().currentUser;
    firebase.database().ref('data/' + user.uid ).push().set({
        StartTime: EXPERIMENT_START_TIME,
        Time: now(),
        UserId: signupid,
        Authentation: authnum   
    });
}

