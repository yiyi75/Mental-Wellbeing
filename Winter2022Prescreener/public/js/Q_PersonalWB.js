/*Reappraisaling questionnaire*/
var PersonalWB_items = [   
    "1 - Strongly Disagree", 
    "2 - Disagree", 
    "3 - Somewhat Disagree", 
    "4 - Neutral",
    "5 - Somewhat Agree",
    "6 - Agree",
    "7 - Strongly Agree"
];

/*SRI has different scoring (only 5-likert) */
var PersonalWB_items2 = [     
    "1 - Almost Never", 
    "2 - Very Rarely", 
    "3 - Rarely",
    "4 - Sometimes", 
    "5 - Often",
    "6 - Very Often",
    "7 - Almost Always",
];

var PersonalWB_SWLS = {
    type: 'survey-likert',
    preamble:   '<p> The following questions are about your feelings in the PAST Week.</p>'
    + '<p> Over the past week: </p>',
    questions: [

      {prompt: "In most ways my life was close to my ideal.", name: 'PersonalWB_01', labels: PersonalWB_items, required: true},
      {prompt: "The conditions of my life were excellent.", name: 'PersonalWB_02', labels: PersonalWB_items, required: true},
      {prompt: "I was satisfied with my life", name: 'PersonalWB_03', labels: PersonalWB_items, required: true},
    ],

    on_finish: function(data){
        pData.PersonalWB_01 = 1 + data.response.PersonalWB_01;
        pData.PersonalWB_02 = 1 + data.response.PersonalWB_02;
        pData.PersonalWB_03 = 1 + data.response.PersonalWB_03;
        pData.PersonalWB_SWLS = pData.PersonalWB_01 + pData.PersonalWB_02 + pData.PersonalWB_03;
    },    
};

var PersonalWB_Mood = {
    type: 'survey-likert',
    preamble:   '<p> The following questions are about your feelings in the PAST week. </p>'
                + '<p> How much of the waking time on a typical day did you experience the following feelings? </p>',
    questions: [
        {prompt: "I felt angry", name: 'PersonalWB_04', labels: PersonalWB_items2, required: true},
        {prompt: "I felt cheerful", name: 'PersonalWB_05', labels: PersonalWB_items2, required: true},
        {prompt: "I felt sad", name: 'PersonalWB_06', labels: PersonalWB_items2, required: true},
        {prompt: "I felt anxious", name: 'PersonalWB_07', labels: PersonalWB_items2, required: true},
        {prompt: "I felt happy", name: 'PersonalWB_08', labels: PersonalWB_items2, required: true},
        {prompt: "I felt irritated", name: 'PersonalWB_09', labels: PersonalWB_items2, required: true},
        {prompt: "I felt depressed", name: 'PersonalWB_10', labels: PersonalWB_items2, required: true},
        {prompt: "I felt worried", name: 'PersonalWB_11', labels: PersonalWB_items2, required: true},

    ],

    randomize_question_order: true,

    on_finish: function(data){
        pData.PersonalWB_04 = 1 + data.response.PersonalWB_04;
        pData.PersonalWB_05 = 1 + data.response.PersonalWB_05;
        pData.PersonalWB_06 = 1 + data.response.PersonalWB_06;
        pData.PersonalWB_07 = 1 + data.response.PersonalWB_07;
        pData.PersonalWB_08 = 1 + data.response.PersonalWB_08;
        pData.PersonalWB_09 = 1 + data.response.PersonalWB_09;            
        pData.PersonalWB_10 = 1 + data.response.PersonalWB_10;
        pData.PersonalWB_11 = 1 + data.response.PersonalWB_11;           
        pData.PersonalWB_Happiness = pData.PersonalWB_05 + pData.PersonalWB_08;
        pData.PersonalWB_Sadness = pData.PersonalWB_06 + pData.PersonalWB_10;
        pData.PersonalWB_Anger = pData.PersonalWB_04 + pData.PersonalWB_09;
        pData.PersonalWB_Anxiety = pData.PersonalWB_07 + pData.PersonalWB_11;
    },   
};

var PersonalWB_node ={
    timeline: [PersonalWB_SWLS, PersonalWB_Mood],
    on_timeline_finish: function(){        
        
        saveSessionData2("Q_PersonalWB");
                
      },
 };