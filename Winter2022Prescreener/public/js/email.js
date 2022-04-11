// get email and SignupID

var goodEmial = false;

var emailInstruction_trial = {
  type: "html-keyboard-response",
  stimulus: logo,
  choices: ['ArrowRight'], //'rightarrow' stopped working
  prompt: "<p class='description'> To deliver our future assessments, we will need your email address. At the end of the study, we will replace your email address with a random number, so the data can not be used to identify you. Please press <em_black>RIGHT ARROW</em_black> to continue. </p>",    
  post_trial_gap: 500
};

var emailText = '<table>' +
'<tr>'+
'<td><p class="inputQ">Please enter your email address here: </p></td>' +
'<td><p class="input"><input name="email1" id="email1" type="text"> </td>' +
'</tr><tr>'+
'<td><p class="inputQ">Please enter your email address again to confirm: </p></td>' +
'<td><p class="input"><input name = "email2" id="email2" type="text"> </p></td>'+
'</tr></table>';

var email_trial = {
type: 'survey-html-form',        
html:  function(){
    return emailText
},
autofocus: 'email1',
data: { taskType: "email"},
on_finish: function(data){       
    //console.log(data.response);
    
    if(data.response.email1&&data.response.email1 == data.response.email2){
        //console.log(data.response.userId1);
        pData.email  = data.response.email1;
        goodEmial = true; //get out of the loop
    }        
}
};


// Logs that a user ID has been created
var validateEmail_node = {
    timeline: [email_trial],
    on_load: function() { pData.TrialNum = 1; },
    loop_function: function(){                
        if(goodEmial){            
            console.log("Good email: ", pData.email); //make sure the number matches the timeline order (from 0)
            saveSessionData2("email");
            pData.TrialNum = 0;
            return false; //exit loop
        } else {  
            pData.TrialNum++;          
            emailText = '<p>Sorry, those emails are invalid or do not match. Please try again: ' +
            '<input name="email1" id="email1" type="text" /> </p>' +
            '<p> Please enter your email a second time to make sure we get it right: ' +
            '<input name = "email2" id="email2" type="text" /> </p>';
            //console.log("Bad ID");
            return true; //break out of loop when ID is valid
        }
    }
}

var emailEnding_trial = {
  type: "html-keyboard-response",
  stimulus: logo,
  choices: ['ArrowRight'], //'rightarrow' stopped working
  prompt: "<p class='description'> Thanks. We will send out the assessments on <b>10/15</b>, <b>10/22</b>, and <b>10/29</b>. You may close the window now. </p>",    
  post_trial_gap: 500
};

