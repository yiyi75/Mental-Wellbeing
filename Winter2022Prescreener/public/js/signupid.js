// get email and SignupID

var goodSignupID = false;

var signupIDInstruction_trial = {
  type: "html-keyboard-response",
  stimulus: logo,
  choices: ['ArrowRight'], //'rightarrow' stopped working
  prompt: "<p class='description'> Next, to make sure we can award you course credit, we will need your sign-up ID. This is the number that is provided when you log in to the online credit system (e.g., https://app.utm.utoronto.ca/experiments-signup/). Usually this ID is 5 or 6 digits. Just to be clear, it is NOT your student number." + 
  ' Please press <em_black>RIGHT ARROW</em_black> to continue. </p>',    
  post_trial_gap: 500
};

var SignupIDText = '<table>' +
'<tr>'+
'<td><p class="inputQ">Please enter your Sign-up ID here: </p></td>' +
'<td><p class="input"><input name="signupid1" id="signupid1" type="number"> </td>' +
'</tr><tr>'+
'<td><p class="inputQ">Please enter your Sign-up ID again to confirm: </p></td>' +
'<td><p class="input"><input name = "signupid2" id="signupid2" type="number"> </p></td>'+
'</tr></table>';

var SignupID_trial = {
type: 'survey-html-form',        
html:  function(){
    return SignupIDText
},
autofocus: 'signupid1',
data: { taskType: "signupid"},
on_finish: function(data){       
    //console.log(data.response);
    
    if(data.response.signupid1&&data.response.signupid1 == data.response.signupid2){
        //console.log(data.response.userId1);
        pData.signupid  = data.response.signupid1;
        goodSignupID = true; //get out of the loop
    }        
}
};

var validateSignupID_node = {
    timeline: [SignupID_trial],
    on_load: function() { pData.TrialNum = 1; },
    loop_function: function(){                
        if(goodSignupID){            
            console.log("Good SignUpID: ", pData.signupid); //make sure the number matches the timeline order (from 0)
            saveSessionData2("signupid");
            pData.TrialNum = 0;
            return false; //exit loop
        } else {  
            pData.TrialNum++;          
            SignupIDText = '<p>Sorry, those IDs are invalid or do not match. Please try again: ' +
            '<input name="signupid1" id="signupid1" type="text" /> </p>' +
            '<p> Please enter your Sign-up ID a second time to make sure we get it right: ' +
            '<input name = "signupid2" id="signupid2" type="text" /> </p>';
            //console.log("Bad ID");
            return true; //break out of loop when ID is valid
        }
    }
}
