/*Reappraisaling questionnaire*/
var Reappraisal_items = [   
    "1 - Strongly Disagree", 
    "2 - Disagree", 
    "3 - Somewhat Disagree", 
    "4 - Neutral",
    "5 - Somewhat Agree",
    "6 - Agree",
    "7 - Strongly Agree"
];

/*SRI has different scoring (only 5-likert) */
var Reappraisal_items2 = [   
    "1 - Strongly Disagree", 
    "2 - Disagree", 
    "3 - Neutral",
    "4 - Agree",
    "5 - Strongly Agree"
];

var Reappraisal_ERQ = {
    type: 'survey-likert',
    preamble:   '<p> We would like to ask you some questions about your emotional life, in particular, how you control (that is, regulate and manage) your emotions.'
    + ' For each item, please select the answer that best describes you during the past 3 weeks.</p>',
    questions: [
/*
Items are pre-ordered in this scale so do not randomize 
*/
      {prompt: "When I want to feel more positive emotion (such as joy or amusement), I change what I’m thinking about.", name: 'Reappraisal_01', labels: Reappraisal_items, required: true},
      {prompt: "When I want to feel less negative emotion (such as sadness or anger), I change what I’m thinking about.", name: 'Reappraisal_02', labels: Reappraisal_items, required: true},
      {prompt: "When I’m faced with a stressful situation, I make myself think about it in a way that helps me stay calm.", name: 'Reappraisal_03', labels: Reappraisal_items, required: true},
      {prompt: "When I want to feel more positive emotion, I change the way I’m thinking about the situation.", name: 'Reappraisal_04', labels: Reappraisal_items, required: true},          
      {prompt: "I control my emotions by changing the way I think about the situation I’m in.", name: 'Reappraisal_05', labels: Reappraisal_items, required: true},  
      {prompt: "When I want to feel less negative emotion, I change the way I’m thinking about the situation.", name: 'Reappraisal_06', labels: Reappraisal_items, required: true},  
    ],

    on_finish: function(data){
        pData.Reappraisal_01 = 1 + data.response.Reappraisal_01;
        pData.Reappraisal_02 = 1 + data.response.Reappraisal_02;
        pData.Reappraisal_03 = 1 + data.response.Reappraisal_03;
        pData.Reappraisal_04 = 1 + data.response.Reappraisal_04;            
        pData.Reappraisal_05 = 1 + data.response.Reappraisal_05;
        pData.Reappraisal_06 = 1 + data.response.Reappraisal_06;
        pData.Reappraisal_ERQ = pData.Reappraisal_01 + pData.Reappraisal_02 + pData.Reappraisal_03 + pData.Reappraisal_04 + pData.Reappraisal_05 + pData.Reappraisal_06;
    },   
};

var Reappraisal_CFI = {
    type: 'survey-likert',
    preamble:   '<p> Please use the scale below to indicate the extent to which you agree or disagree with the following statements </p>',
    questions: [

      {prompt: "I consider multiple options before making a decision.", name: 'Reappraisal_07', labels: Reappraisal_items, required: true},
      {prompt: "I like to look at difficult situations from many different angles.", name: 'Reappraisal_08', labels: Reappraisal_items, required: true},
      
      //Catch Question 2: should be 7
      {prompt: "Please select 'Strongly Agree' for this question", name: 'Catch_02', labels: Reappraisal_items, required: true},  
      
      {prompt: "When in difficult situations, I consider multiple options before deciding how to behave.", name: 'Reappraisal_09', labels: Reappraisal_items, required: true},
      {prompt: "I often look at a situation from different viewpoints.", name: 'Reappraisal_10', labels: Reappraisal_items, required: true},          
      {prompt: "When I encounter difficult situations, I stop and try to think of several ways to resolve it.", name: 'Reappraisal_11', labels: Reappraisal_items, required: true},  
    ],

    on_finish: function(data){
        pData.Reappraisal_07 = 1 + data.response.Reappraisal_07;
        pData.Reappraisal_08 = 1 + data.response.Reappraisal_08;
        pData.Reappraisal_09 = 1 + data.response.Reappraisal_09;
        pData.Reappraisal_10 = 1 + data.response.Reappraisal_10;            
        pData.Reappraisal_11 = 1 + data.response.Reappraisal_11;
        pData.Reappraisal_CFI = pData.Reappraisal_07 + pData.Reappraisal_08 + pData.Reappraisal_09 + pData.Reappraisal_10 + pData.Reappraisal_11;
        pData.Catch_02 = 1 + data.response.Catch_02;
    },   
};

/* First 3 are to increase positive last 3 are to decrease negative */
var Reappraisal_SRI = {
    type: 'survey-likert',
    preamble:   '<p> Please use the scale below to indicate the extent to which you agree or disagree with the following statements </p>',
    questions: [

      {prompt: "I try to think of positive consequences of this week.", name: 'Reappraisal_12', labels: Reappraisal_items2, required: true},
      {prompt: "I try to look for something positive in what happened this week.", name: 'Reappraisal_13', labels: Reappraisal_items2, required: true},
      {prompt: "I try to think of positive aspects of this week.", name: 'Reappraisal_14', labels: Reappraisal_items2, required: true},
      {prompt: "The consequences of this week are not as significant as I thought they would be.", name: 'Reappraisal_15', labels: Reappraisal_items2, required: true},          
      {prompt: "This week has less effect on my life than I thought it would have.", name: 'Reappraisal_16', labels: Reappraisal_items2, required: true}, 
      {prompt: "This week is not as meaningful as I initially thought it was. ", name: 'Reappraisal_17', labels: Reappraisal_items2, required: true},   
    ],

    on_finish: function(data){
        pData.Reappraisal_12 = 1 + data.response.Reappraisal_12;
        pData.Reappraisal_13 = 1 + data.response.Reappraisal_13;
        pData.Reappraisal_14 = 1 + data.response.Reappraisal_14;
        pData.Reappraisal_15 = 1 + data.response.Reappraisal_15;            
        pData.Reappraisal_16 = 1 + data.response.Reappraisal_16;
        pData.Reappraisal_17 = 1 + data.response.Reappraisal_17;
        pData.Reappraisal_SRI = pData.Reappraisal_12 + pData.Reappraisal_13 + pData.Reappraisal_14 + pData.Reappraisal_15 + pData.Reappraisal_16 + pData.Reappraisal_17;
    },    
};

var Reappraisal_node ={
    timeline: [Reappraisal_ERQ, Reappraisal_CFI, Reappraisal_SRI],
    on_timeline_finish: function(){        
        pData.Reappraisal_total = pData.Reappraisal_01 + pData.Reappraisal_02 + pData.Reappraisal_03 + pData.Reappraisal_04 
                              + pData.Reappraisal_05 + pData.Reappraisal_06 + pData.Reappraisal_07 + pData.Reappraisal_08 + pData.Reappraisal_09 
                              + pData.Reappraisal_10 + pData.Reappraisal_11 + pData.Reappraisal_12 + pData.Reappraisal_13 + pData.Reappraisal_14 
                              + pData.Reappraisal_15 + pData.Reappraisal_16 + pData.Reappraisal_17;
        saveSessionData2("Q_Reappraisal");
                
      },
 };