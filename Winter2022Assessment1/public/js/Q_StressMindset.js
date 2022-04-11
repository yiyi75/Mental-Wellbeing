/*Decentering questionnaire*/
var SMM_items = [
     
    "0 - Strongly Disagree", 
    "1 - Disagree", 
    "2 - Neither Agree nor Disagree", 
    "3 - Agree",
    "4 - Strongly Agree"
  ];

var SMM = {
        type: 'survey-likert',
        preamble:   '<p>The following questions were developed to address the extent to which an individual adopts a mindset that the effects of stress are enhancing or debilitating. Rate the extent to which you agree or disagree with the following questions during the past 3 weeks.</p>',
        questions: [

          {prompt: "The effects of stress are negative and should be avoided.", name: 'SMM_01', labels: SMM_items, required: true},
          {prompt: "Experiencing stress facilitates my learning and growth.", name: 'SMM_02', labels: SMM_items, required: true},
          {prompt: "Experiencing stress depletes my health and vitality.", name: 'SMM_03', labels: SMM_items, required: true},
          {prompt: "Experiencing stress enhances my performance and productivity.", name: 'SMM_04', labels: SMM_items, required: true},          
          {prompt: "Experiencing stress inhibits my learning and growth.", name: 'SMM_05', labels: SMM_items, required: true},  
          {prompt: "Experiencing stress improves my health and vitality.", name: 'SMM_06', labels: SMM_items, required: true},  
          {prompt: "Experiencing stress debilitates my performance and productivity.", name: 'SMM_07', labels: SMM_items, required: true}, 
          {prompt: "The effects of stress are positive and should be utilized.", name: 'SMM_08', labels: SMM_items, required: true},

        ],
    //Reverse coding 1, 3, 5, 7      
    on_finish: function(data){
        pData.SMM_01 = 4 - data.response.SMM_01;
        pData.SMM_02 = data.response.SMM_02;
        pData.SMM_03 = 4 - data.response.SMM_03;
        pData.SMM_04 = data.response.SMM_04;
        pData.SMM_05 = 4 - data.response.SMM_05;
        pData.SMM_06 = data.response.SMM_06;
        pData.SMM_07 = 4 - data.response.SMM_07;
        pData.SMM_08 = data.response.SMM_08;
    },
};



var SMM_node ={
    timeline: [SMM],
    on_timeline_finish: function(){        
        pData.SMM_total = pData.SMM_01 + pData.SMM_02 + pData.SMM_03 + pData.SMM_04 
                              + pData.SMM_05 + pData.SMM_06 + pData.SMM_07 + pData.SMM_08;
        saveSessionData2("Q_StressMindset");
                
      },
 };
