/*Decentering questionnaire*/
var FFMQ_items = [
     
    "1 - Never or Very Rarely True", 
    "2 - Rarely True", 
    "3 - Sometimes True", 
    "4 - Often True",
    "5 - Very Often or Always True"
  ];

var FFMQ_1to7 = {
        type: 'survey-likert',
        preamble:   '<p>Please use the following scale provided to indicate how true the below statements are of you during the past 3 weeks. Select the rating that represents your own opinion of what is generally true for you.</p>',
        questions: [

          {prompt: "When I take a shower or a bath, I stay alert to the  sensations of water on my body.", name: 'FFMQ_01', labels: FFMQ_items, required: true},
          {prompt: "I’m good at finding words to describe my feelings.", name: 'FFMQ_02', labels: FFMQ_items, required: true},
          {prompt: "I don’t pay attention to what I’m doing because I’m  daydreaming, worrying, or otherwise distracted.", name: 'FFMQ_03', labels: FFMQ_items, required: true},
          {prompt: "I believe some of my thoughts are abnormal or bad and  I shouldn’t think that way.", name: 'FFMQ_04', labels: FFMQ_items, required: true},          
          {prompt: "When I have distressing thoughts or images, I “step  back” and am aware of the thought or image without  getting taken over by it.", name: 'FFMQ_05', labels: FFMQ_items, required: true},  
          {prompt: "I notice how foods and drinks affect my thoughts,  bodily sensations, and emotions.", name: 'FFMQ_06', labels: FFMQ_items, required: true},  
          {prompt: "I have trouble thinking of the right words to express  how I feel about things.", name: 'FFMQ_07', labels: FFMQ_items, required: true}, 

        ],
    //reverse: 3, 4, 7,
    on_finish: function(data){
        pData.FFMQ_01 = 1 + data.response.FFMQ_01;
        pData.FFMQ_02 = 1 + data.response.FFMQ_02;
        pData.FFMQ_03 = 6 - (1 + data.response.FFMQ_03);
        pData.FFMQ_04 = 6 - (1 + data.response.FFMQ_04);
        pData.FFMQ_05 = 1 + data.response.FFMQ_05;
        pData.FFMQ_06 = 1 + data.response.FFMQ_06;
        pData.FFMQ_07 = 6 - (1 + data.response.FFMQ_07);
    },
};

var FFMQ_8to15 = {
        type: 'survey-likert',
        preamble:   '<p> Please read each statement carefully and indicate how often you have had the following experiences during the past 3 weeks.</p>',
        questions: [

          {prompt: "I do jobs or tasks automatically without being aware of  what I’m doing.", name: 'FFMQ_08', labels: FFMQ_items, required: true},  
          {prompt: "I think some of my emotions are bad or inappropriate  and I shouldn’t feel them.", name: 'FFMQ_09', labels: FFMQ_items, required: true},  
          {prompt: "When I have distressing thoughts or images I am able  just to notice them without reacting.", name: 'FFMQ_10', labels: FFMQ_items, required: true},  
          
          //Catch Question 3: should be 4
          {prompt: "Please select 'Often True' for this question", name: 'Catch_03', labels: FFMQ_items, required: true},   

          {prompt: "I pay attention to sensations, such as the wind in my hair  or sun on my face.", name: 'FFMQ_11', labels: FFMQ_items, required: true},
          {prompt: "Even when I’m feeling terribly upset I can find a way to  put it into words.", name: 'FFMQ_12', labels: FFMQ_items, required: true},
          {prompt: "I find myself doing things without paying attention.", name: 'FFMQ_13', labels: FFMQ_items, required: true},
          {prompt: "I tell myself I shouldn’t be feeling the way I’m feeling.", name: 'FFMQ_14', labels: FFMQ_items, required: true},          
          {prompt: "When I have distressing thoughts or images I just notice  them and let them go.", name: 'FFMQ_15', labels: FFMQ_items, required: true},  

        ],
    //*Observing items: 1, 6, 11.
    //Describe items: 2, 7R, 12.
    //Acting with awareness items: 3R, 8R, 13R.
    //Non-judging items: 4R, 9R, 14R.
    //Non-reactivity items: 5, 10, 15.
    
    //reverse: 8, 9, 13, 14
      on_finish: function(data){
         pData.FFMQ_08 = 6 - (1 + data.response.FFMQ_08);
         pData.FFMQ_09 = 6 - (1 + data.response.FFMQ_09);
         pData.FFMQ_10 = 1 + data.response.FFMQ_10; 
         pData.FFMQ_11 = 1 + data.response.FFMQ_11;
         pData.FFMQ_12 = 1 + data.response.FFMQ_12;
         pData.FFMQ_13 = 6 - (1 + data.response.FFMQ_13);
         pData.FFMQ_14 = 6 - (1 + data.response.FFMQ_14);
         pData.FFMQ_15 = 1 + data.response.FFMQ_15;
         
         pData.Catch_03 = 1 + data.response.Catch_03;
         
         pData.FFMQ_Observing = pData.FFMQ_01 + pData.FFMQ_06 + pData.FFMQ_11; 
         pData.FFMQ_Describing = pData.FFMQ_02 + pData.FFMQ_07 + pData.FFMQ_12; 
         pData.FFMQ_ActingwAwareness = pData.FFMQ_03 + pData.FFMQ_08 + pData.FFMQ_13;
         pData.FFMQ_NonJudging = pData.FFMQ_04 + pData.FFMQ_09 + pData.FFMQ_14;
         pData.FFMQ_NonReactivity = pData.FFMQ_05 + pData.FFMQ_10 + pData.FFMQ_15;
      },
};

var FFMQ_node ={
    timeline: [FFMQ_1to7, FFMQ_8to15],
    on_timeline_finish: function(){        
        pData.FFMQ_total = pData.FFMQ_01 + pData.FFMQ_02 + pData.FFMQ_03 + pData.FFMQ_04 
                              + pData.FFMQ_05 + pData.FFMQ_06 + pData.FFMQ_07 + pData.FFMQ_08 + pData.FFMQ_09 
                              + pData.FFMQ_10 + pData.FFMQ_11 + pData.FFMQ_12 + pData.FFMQ_13 + pData.FFMQ_14 
                              + pData.FFMQ_15;
        saveSessionData2("Q_Mindfulness");
                
      },
 };
