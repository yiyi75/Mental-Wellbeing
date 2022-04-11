
demographicsHTML =  '	<!-- ####################### Demographics ####################### -->' +
 '		<div class="demographics" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:top">' +
 '			<!-- Explanatory text -->' +
 '            <p font-size:110%><b>Demographic information:</b></p>' +
 '			<p>We need this information for our records, but it is kept completely separate from'  +
 '                your ID. As long as you finish the assessments you will get ' +
 '                course credits no matter what you put here, so please be honest.</p><br /><br />' +
 '          <!-- SexualOrientation -->' +
 '              <label for="sexualorientation"><b> Sexual Orientation: &nbsp;</b></label>  ' +
 '              <select name="sexualorientation" id="sexualorientation" class="drop-menu">' +
 '              <option disabled selected value> -- select an option -- </option><option>Heterosexual or Straight</option><option>Gay</option><option>Lesbian</option><option>Bisexual</option><option>Other</option></select> <br / ><br />' + 
 '         <!-- FirstGeneration -->' +
 '              <label for="firstgeneration"><b> Are you a first-generation student (e.g., your parents did not complete a 4-year college or university degree)? &nbsp;</b></label>  ' +
 '              <select name="firstgeneration" id="firstgeneration" class="drop-menu">' +
 '              <option disabled selected value> -- select an option -- </option><option>Yes</option><option>No</option></select> <br / ><br />' + 
 '         <!-- YearofStudy -->' +
 '              <label for="yearofstudy"><b> What year of study are you currently in? &nbsp;</b></label>  ' +
 '              <select name="yearofstudy" id="yearofstudy" class="drop-menu">' +
 '              <option disabled selected value> -- select an option -- </option><option>First year</option><option>Second year</option><option>Third year</option><option>Fourth year</option><option>Fifth year and aboce</option></select> <br / ><br />'
 '       </p>' +
 '</div>';

let currentHTML= demographicsHTML;

var goodDemographics = false;
var demographics_trial = {
    on_load: function() { goodDemographics = false; },
    type: 'survey-html-form',        
    html:  function(){
        return currentHTML
    },
    on_finish: function(data){       

         console.log(data.response);
            
        if(data.response.sexualorientation == "" ||
            data.response.firstgeneration == "" ||
            data.response.yearofstudy == "") {  

        }else{           
            goodDemographics = true;
            console.log(data.response);       
            pData.SexualOrientation  = data.response.sexualorientation;
            pData.FirstGeneration  = data.response.firstgeneration;
            pData.YearofStudy  = data.response.yearofstudy;      
        }        
    }
};


var demographics_node ={
    timeline: [demographics_trial],
    loop_function: function(){                
        if(goodDemographics){            
          saveSessionData2("Q_Demographics");
          pData.TrialNum = 0;
          return false; //exit loop
        } else {  
           currentHTML = demographicsHTML + 
            '<p style="text-align:center; color:red;"><b>Please respond to all of the questions above to proceed.</b></p>';
          return true; //break out of loop when filling out all necessary area
        }
    } 
};

