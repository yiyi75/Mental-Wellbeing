/*PSS questionnaire*/
var PSS_items = [
     
    "0 - Never", 
    "1 - Almost Never", 
    "2 - Sometimes", 
    "3 - Fairly Often",
    "4 - Very Often"
  ];

var Stress = {
        type: 'survey-likert',
        preamble:   '<p>The following questions ask you about your feelings and thoughts during the PAST 3 weeks. </p>',
        questions: [

          {prompt: "How often have you been upset because of something that happened unexpectedly?", name: 'PSS_01', labels: PSS_items, required: true},
          {prompt: "How often have you felt that you were unable to control the important things in your life?", name: 'PSS_02', labels: PSS_items, required: true},
          {prompt: "How often have you felt nervous and “stressed”?", name: 'PSS_03', labels: PSS_items, required: true},
          {prompt: "How often have you felt confident about your ability to handle your personal problems?", name: 'PSS_04', labels: PSS_items, required: true},          
          {prompt: "How often have you felt that things were going your way?", name: 'PSS_05', labels: PSS_items, required: true},  
          {prompt: "How often have you found that you could not cope with all the things that you had to do?", name: 'PSS_06', labels: PSS_items, required: true},  
          {prompt: "How often have you been able to control irritations in your life?", name: 'PSS_07', labels: PSS_items, required: true}, 
          {prompt: "How often have you felt that you were on top of things?", name: 'PSS_08', labels: PSS_items, required: true}, 
          {prompt: "How often have you been angered because of things that were outside of your control?", name: 'PSS_09', labels: PSS_items, required: true}, 
          {prompt: "How often have you felt difficulties were piling up so high that you could not overcome them?", name: 'PSS_10', labels: PSS_items, required: true}, 
        ],
    //reverse scores 4, 5, 7, 8
    on_finish: function(data){
        pData.PSS_01 = data.response.PSS_01;
        pData.PSS_02 = data.response.PSS_02;
        pData.PSS_03 = data.response.PSS_03;
        pData.PSS_04 = 4 - data.response.PSS_04;
        pData.PSS_05 = 4 - data.response.PSS_05;
        pData.PSS_06 = data.response.PSS_06;
        pData.PSS_07 = 4 - data.response.PSS_07;
        pData.PSS_08 = 4 - data.response.PSS_08;
        pData.PSS_09 = data.response.PSS_09;
        pData.PSS_10 = data.response.PSS_10;
    },
};


var Stress_node ={
    timeline: [Stress],
    on_timeline_finish: function(){        
        pData.PSS_total = pData.PSS_01 + pData.PSS_02 + pData.PSS_03 + pData.PSS_04 
                              + pData.PSS_05 + pData.PSS_06 + pData.PSS_07 + pData.PSS_08 + pData.PSS_09 
                              + pData.PSS_10;
        saveSessionData2("stress");
                
      },
 };
