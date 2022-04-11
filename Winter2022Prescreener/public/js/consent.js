//Get User ID and Validate
var consenttext = '<div>'+
'<p class="image"><img style="width:502px; height:130px;" src="./assets/CombinedLogo.png" /></p>' +
'</div>'+
'<div style="text-align:left; font-size:14px;">'+
'<p class="consent" style="text-align:center;"><b>CONSENT FORM – Course Credit Participant</b></p>' +
 '<p class="consent">I agree to participate in a study that is investigating the impact of stress on academic performance.' + 
 ' I understand that my participation is entirely voluntary: I can leave the study at any time' +
 ' and this will have no bearing on the credit I receive, nor will it have any other undesirable' +
 ' consequences. </p>' +
 '<p class="consent"><b>The following points have been explained to me: </b></p>'+
 '<p class="consent"><b>1.	The purpose of this research </b>is to explore how people vary in their' +
 ' ability to cope with stress and how that relates to one’s sense of well-being. </p>' +
 '<p class="consent">The benefits I may expect to receive from this study are: ' +
 '<br>(a) an appreciation of research on mental well-being and state of mind,' +
 '<br>(b) an opportunity to contribute to scientific research, and ' +
 '<br>(c) up to 3% course credits: 2 assessments(1), 3 assessments(2), 4 assessments(3). </p>' +
 '<p class="consent"><b>2.	Each assessment will be about 20-30 min: </b>' +
 '<br>1) Complete Assessment 1 that will be sent on 01/28/2022;' +
 '<br>2) Complete Assessment 2 that will be sent on 02/18/2022;' +
 '<br>3) Complete Assessment 3 that will be sent on 03/11/2022;' +
 '<br>4) Complete Assessment 4 that will be sent on 04/01/2022;' +
 '<br> I will have 72 hours (3 days) to fill out each of them. </p>' +
 '<p class="consent"><b>3.	The researchers do not foresee any risks to me for participating in this study,</b> ' +
 'nor do they expect that I will experience any discomfort or stress.  ' +
 'If I do experience feelings of discomfort at any point during the study, I recognise that ' +
 'I am free to refrain from answering any question, or withdraw from the study at any time, ' +
 'without penalty, and will still receive credit for my participation regardless of my completion of the study.</p>'+
 '<p class="consent"><b>4.	All of the data collected will remain strictly confidential.</b> ' +
 ' Only people associated with the study will see my responses. This consent form will be stored separately.  ' +
 'My responses will not be associated with my name; instead, my name will be converted to a code ' +
 'number when the researchers store the date. </p>' +
 '<p class="consent"><b>5.	The experimenter will answer any other questions about the research by email.</b> ' + 
 ' If I have any other questions or concerns, I can address them to the principal investigator:  ' + 
 '   Yiyi Wang, email: mpas@radlab.zone ' + 
 'or the Office of Research Ethics, ' + 
 'email: ethics.review@utoronto.ca.</p>' +
 '<p class="consent"><b>6.	Upon completion of my participation,</b> I will receive a  written explanation about ' +
 'the rationale and predictions underlying this experiment.</p>'+
'<p class="consent"><b>By typing my name and student number below, I hereby consent to participate in the experiment, as described above.</b></p>'+
'<table><tr><td style="text-align:right;"><p class="inputQ"><b>Legal Name: </b></p></td>'+
'<td style="text-align:center;"><p class="input"><input name="consentID" id="consentID" type="text" /></p></td></tr></table>' +
'<table><tr><td style="text-align:right;"><p class="inputS"><b>Student Number: </b></p></td>'+
'<td style="text-align:center;"><p class="input"><input name="studentnumber" id="studentnumber" type="text" /></p></td></tr></table>' +
'</div>'

var consentIdText = consenttext;

var getConsent_trial = {
    type: 'survey-html-form',        
    html:  function(){
        return consentIdText
    },
    autofocus: 'consentID', 
    data: { taskType: "consentID"},
    on_finish: function(data){       
        console.log(data.response);
        if(data.response.consentID) {
            pData.ConsentId  = data.response.consentID;
            pData.ConsentStatus  = true;
            //console.log(pData.ConsentId); 
        }  
        if(data.response.studentnumber) {
            pData.studentnumber  = data.response.studentnumber;
            pData.ConsentId  = data.response.consentID;
            pData.ConsentStatus  = true;
            //console.log(pData.ConsentId); 
        }
    }
};

    // Logs that a consent ID has been created
    var Consent_node = {
        timeline: [getConsent_trial],
        on_load: function() { pData.TrialNum = 1; },
        loop_function: function(){                
            if(pData.ConsentStatus){            
                //console.log("Consent ID: ", consentID); //make sure the number matches the timeline order (from 0);
                pData.TrialNum = 0;
                return false; //exit loop
            } else {  
                pData.TrialNum +=1;         
                consentIdText = consenttext + 
                '<p style="text-align:center; color:red; font-size:14px;"><b>Sorry, but you must consent to participate in the ' +
                'study. Otherwise, please just close the browser window to exit.</b></p>'
                return true; //break out of loop when ID is valid
            }
        }
    }