
demographicsHTML =  '	<!-- ####################### Demographics ####################### -->' +
 '		<div class="demographics" style="text-align:left; border:0px solid; padding:10px;  width:800px; font-size:90%; float:top">' +
 '			<!-- Explanatory text -->' +
 '            <p font-size:110%><b>Demographic information:</b></p>' +
 '			<p>We need this information for our records, but it is kept completely separate from'  +
 '                your ID. As long as you finish the assessments you will get ' +
 '                course credits no matter what you put here, so please be honest.</p><br>' +
 '			<!-- SexualOrientation -->' +
 '           <label for="sexualorientation"><b>Sexual Orientation: &nbsp;</b></label>' +
 '           <input type="radio" name="sexualorientation" id="straight" value="straight" /> Heterosexual or Straight &nbsp; ' +
 '           <input type="radio" name="sexualorientation" id="gay" value="gay" /> Gay &nbsp;' +
 '           <input type="radio" name="sexualorientation" id="lesbian" value="lesbian" /> Lesbian &nbsp;' +
 '           <input type="radio" name="sexualorientation" id="bisexual" value="bisexual" /> Bisexual &nbsp;' +
 '           <input type="radio" name="sexualorientation" id="other" value="other" /> Other <br /><br />' +
 '			<!-- FirstGeneration -->' + 
 '           <label for="firstgeneration"><b>Are you a first-generation student (e.g., your parents did not complete a 4-year college or university degree)? &nbsp;</b></label>' +
 '           <input type="radio" name="firstgeneration" id="yes"value="yes" /> Yes &nbsp; ' +
 '           <input type="radio" name="firstgeneration" id="no" value="no" /> No <br /><br />' +
 '			<!-- YearofStudy -->' +
 '           <label for="yearofstudy"><b>What year of study are you currently in? &nbsp;</b></label>' +
 '           <input type="radio" name="yearofstudy" id="firstyear" value="firstyear" /> First year &nbsp; ' +
 '           <input type="radio" name="yearofstudy" id="secondyear" value="secondyear" /> Second year &nbsp;' +
 '           <input type="radio" name="yearofstudy" id="thirdyear" value="thirdyear" /> Third year &nbsp;' +
 '           <input type="radio" name="yearofstudy" id="fourthyear" value="fourthyear" /> Fourth year &nbsp;' +
 '           <input type="radio" name="yearofstudy" id="fifthyear" value="fifthyear" /> Fifth year and above <br /><br />' +
 '       <br / ><br />' + 
 '       </p>' +
 '</div>';


var demographics_node ={
    timeline: [demographicsHTML],
    loop_function: function(){                
        if(goodDemographics){            
          saveSessionData2("Demographics");
          pData.TrialNum = 0;
          return false; //exit loop
        } else {  
           currentHTML = demographicsHTML + 
            '<p style="text-align:center; color:red;"><b>Please respond to all of the questions above to proceed.</b></p>';
          return true; //break out of loop when filling out all necessary area
        }
    } 
};

