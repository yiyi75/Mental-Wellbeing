/*Decentering questionnaire*/
var Decenter_items = [
     
    "1 - Never or Very Rarely", 
    "2 - Rarely", 
    "3 - Sometimes", 
    "4 - Often",
    "5 - Very Often or Always"
  ];

var Decentering_1to7 = {
        type: 'survey-likert',
        preamble:   '<p>We are interested in your day-to-day experiences. The following questions will ask you about different ways you might experience thoughts, emotions, and sensations during the past 3 weeks.' +
              'Please read each statement carefully and indicate how often you have had the following experiences.</p>',
        questions: [

          {prompt: "I am able to watch myself thinking.", name: 'Decenter_01', labels: Decenter_items, required: true},
          {prompt: "I am able to watch my thoughts and feelings like someone watching a movie.", name: 'Decenter_02', labels: Decenter_items, required: true},
          {prompt: "I can watch my thoughts and emotions drift by like leaves on a stream.", name: 'Decenter_03', labels: Decenter_items, required: true},
          {prompt: "I can watch my thoughts and emotions come and go like clouds. ", name: 'Decenter_04', labels: Decenter_items, required: true},          
          {prompt: "I am able to step back and watch my mind work.", name: 'Decenter_05', labels: Decenter_items, required: true},  
          {prompt: "My sense of self is larger than my thoughts and feelings.", name: 'Decenter_06', labels: Decenter_items, required: true},  
          {prompt: "I am more than my thoughts and feelings.", name: 'Decenter_07', labels: Decenter_items, required: true}, 

        ],

    on_finish: function(data){
        pData.Decenter_01 = 1 + data.response.Decenter_01;
        pData.Decenter_02 = 1 + data.response.Decenter_02;
        pData.Decenter_03 = 1 + data.response.Decenter_03;
        pData.Decenter_04 = 1 + data.response.Decenter_04;
        pData.Decenter_05 = 1 + data.response.Decenter_05;
        pData.Decenter_06 = 1 + data.response.Decenter_06;
        pData.Decenter_07 = 1 + data.response.Decenter_07;
    },
};

var Decentering_8to15 = {
        type: 'survey-likert',
        preamble:   '<p> Please read each statement carefully and indicate how often you have had the following experiences during the past 3 weeks.</p>',
        questions: [

          {prompt: "My sense of self is separate from my changing thoughts and feelings.", name: 'Decenter_08', labels: Decenter_items, required: true},  
          {prompt: "My thoughts and emotions are part of me, but they are not me.", name: 'Decenter_09', labels: Decenter_items, required: true},  
          {prompt: "I am separate from my changing thoughts and feelings.", name: 'Decenter_10', labels: Decenter_items, required: true},  
          
          //Catch Question 1: should be 4
          {prompt: "Please select 'Often' for this question", name: 'Catch_01', labels: Decenter_items, required: true},   

          {prompt: "I can observe unpleasant thoughts and feelings without trying to change them.", name: 'Decenter_11', labels: Decenter_items, required: true},
          {prompt: "I can step back and be aware of distressing thoughts and emotions without being taken over by them.", name: 'Decenter_12', labels: Decenter_items, required: true},
          {prompt: "When I have distressing thoughts or emotions, I just notice them and let them go.", name: 'Decenter_13', labels: Decenter_items, required: true},
          {prompt: "I can be aware of unpleasant thoughts or feelings without immediately reacting to them.", name: 'Decenter_14', labels: Decenter_items, required: true},          
          {prompt: "When I have distressing thoughts or feelings I am able just to notice them without reacting.", name: 'Decenter_15', labels: Decenter_items, required: true},  

        ],
      
      on_finish: function(data){
         pData.Decenter_08 = 1 + data.response.Decenter_08;
         pData.Decenter_09 = 1 + data.response.Decenter_09;
         pData.Decenter_10 = 1 + data.response.Decenter_10; 
         pData.Decenter_11 = 1 + data.response.Decenter_11;
         pData.Decenter_12 = 1 + data.response.Decenter_12;
         pData.Decenter_13 = 1 + data.response.Decenter_13;
         pData.Decenter_14 = 1 + data.response.Decenter_14;
         pData.Decenter_15 = 1 + data.response.Decenter_15;
         pData.Catch_01 = 1 + data.response.Catch_01;
      },
};

var Decenter_node ={
    timeline: [Decentering_1to7, Decentering_8to15],
    on_timeline_finish: function(){        
        pData.Decenter_total = pData.Decenter_01 + pData.Decenter_02 + pData.Decenter_03 + pData.Decenter_04 
                              + pData.Decenter_05 + pData.Decenter_06 + pData.Decenter_07 + pData.Decenter_08 + pData.Decenter_09 
                              + pData.Decenter_10 + pData.Decenter_11 + pData.Decenter_12 + pData.Decenter_13 + pData.Decenter_14 
                              + pData.Decenter_15;
        saveSessionData2("Q_decentering");
                
      },
 };
