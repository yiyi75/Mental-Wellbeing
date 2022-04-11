// get email and SignupID

emailHTML =  '	<!-- ####################### IDs ####################### -->' +
  '		<div class="ids" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:top">' +
 '			<!-- Explanatory text -->' +
 '            <p font-size:110%><b>ID information:</b></p>' +
 '			<p> To begin our assessment, please enter your email address and SignUp ID again.</p><br>' +
 '			<!-- Email -->' +
 '           <label for="email"><b>Email: &nbsp;</b></label><input id="email" name="email" size = "30" required = "true" /><br /><br />' +
 '			<!-- SignUpID -->' +
 '           <label for="signupid"><b>SignUp ID: &nbsp;</b></label><input id="signupid" name="signupid" size = "30" required = "true" /><br /><br />' +
 '       </p></div>';

 var email_node = {
    type: 'survey-html-form',
    html:  function(){
        return emailHTML
    },        
    on_finish: function(data){       
    
            pData.email  = data.response.email;
            pData.signupid  = data.response.signupid;
    }        
}
