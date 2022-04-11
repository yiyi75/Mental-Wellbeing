
var criteria = '<div>'+
'<p class="image"><img style="width:502px; height:130px;" src="./assets/CombinedLogo.png" /></p>' +
'</div>'+
'<div style="text-align:left; font-size:14px;">'+
'<p class="criteria" style="text-align:center;"><b>Prescreener</b></p>' +
 '<p class="criteria">Thank you for considering participation in our study. The purpose of the study is to investigate the impact of stress on academic performance.' + 
 ' Your participation is entirely voluntary: you can leave the study at any time' +
 ' and this will have no bearing on the credit you receive, nor will it have any other undesirable' +
 ' consequences. </p>' +
 '<p class="criteria"><b>The following points have been explained to me: </b></p>'+
 '<p class="criteria"><b>1.	The purpose of this research </b>is to explore how people vary in their' +
 ' ability to cope with stress and how that relates to one’s sense of well-being. </p>' +
 '<p class="criteria">The benefits I may expect to receive from this study are: ' +
 '<br>(a) an appreciation of research on mental well-being and state of mind,' +
 '<br>(b) an opportunity to contribute to scientific research, and ' +
 '<br>(c) up to 3% course credits: 2 assessments(1), 3 assessments(2), 4 assessments(3). </p>' +
 '<p class="criteria"><b>2.	I will finish 4 assessments and each will take about 20-30 min: </b>' +
 '<br>1) Complete Assessment 1 that will be sent on 01/28/2022;' +
 '<br>2) Complete Assessment 2 that will be sent on 02/18/2022;' +
 '<br>3) Complete Assessment 3 that will be sent on 03/11/2022;' +
 '<br>4) Complete Assessment 4 that will be sent on 04/01/2022;' +
 '<br> I will have 72 hours (3 days) to fill out each of them. </p>' +

'</div>';

var criteria_trial = {
    type: 'survey-html-form',        
    html:  function(){
        return criteria
    }
}
// on_finish: function(data){       
//     //console.log(data.response);
    
//     if(data.response.consentID){                
//         pData.ConsentId  = data.response.consentID;
//         pData.ConsentStatus  = true;
//         //console.log(pData.ConsentId);
        
//     }        
// }
// };