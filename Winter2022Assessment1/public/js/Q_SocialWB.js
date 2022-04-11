/*Social WB questionnaire*/
var SocialWB_items = [   
    "0 - Not Satisfied At All", 
    "1",
    "2", 
    "3", 
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10 - Completely Satisfied",
];

var SocialWB_items0 = [   
    "0 - Extremely Unhappy", 
    "1",
    "2", 
    "3", 
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10 - Extremely Happy",
];

var SocialWB_items1 = [   
    "0 - Poor", 
    "1",
    "2", 
    "3", 
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10 - Excellent",
];

var SocialWB_items2 = [   
    "0 - Not At All Worthwhile", 
    "1",
    "2", 
    "3", 
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10 - Completely Worthwhile",
];

var SocialWB_items3 = [   
    "0 - Strongly Disagree", 
    "1",
    "2", 
    "3", 
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10 - Strongly Agree",
];

var SocialWB_items4 = [   
    "0 - Not True of Me", 
    "1",
    "2", 
    "3", 
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10 - Completely True of Me",
];


var SocialWB_Domains = {
    type: 'survey-likert',
    preamble:   '<p> The following questions assess how satisfied you were with specific aspects of your life in the PAST 3 Weeks.</p>',
    questions: [
//Domain1: Happiness and Life Satisfaction
      {prompt: "Over the past week, how satisfied were you with life as a whole?", name: 'SocialWB_01', labels: SocialWB_items, required: true},
      {prompt: "In general, how happy or unhappy did you usually feel over the past week?", name: 'SocialWB_02', labels: SocialWB_items0, required: true},
//Domain2: Mental and Physical Health
      {prompt: "In general, how would you rate your physical health over the past week?", name: 'SocialWB_03', labels: SocialWB_items1, required: true},
      {prompt: "How would you rate your overall mental health over the past week?", name: 'SocialWB_04', labels: SocialWB_items1, required: true},
//Domain 3: Meaning and Purpose    
      {prompt: "Over the past week, to what extent do you feel the things you did in your life were worthwhile?", name: 'SocialWB_05', labels: SocialWB_items2, required: true},
      {prompt: "I understood my purpose in life over the past week.", name: 'SocialWB_06', labels: SocialWB_items3, required: true},
//Domain 4: Character and Virtue      
      {prompt: "Over the past week, I always acted to promote good in all circumstances, even in difficult and challenging situations.", name: 'SocialWB_07', labels: SocialWB_items4, required: true},
      {prompt: "Over the past week, I was always able to give up some happiness now for greater happiness later.", name: 'SocialWB_08', labels: SocialWB_items4, required: true},
//Domain 5: Close Social Relationships      
      {prompt: "Over the past week, I was content with my friendships and relationships", name: 'SocialWB_09', labels: SocialWB_items3, required: true},
      {prompt: "My relationships were as satisfying as I would want them to be over the past week.", name: 'SocialWB_10', labels: SocialWB_items3, required: true},
  
    ],
    randomize_question_order: true,

    on_finish: function(data){
        pData.SocialWB_01 = data.response.SocialWB_01;
        pData.SocialWB_02 = data.response.SocialWB_02;
        pData.SocialWB_03 = data.response.SocialWB_03;
        pData.SocialWB_04 = data.response.SocialWB_04;
        pData.SocialWB_05 = data.response.SocialWB_05;
        pData.SocialWB_06 = data.response.SocialWB_06;
        pData.SocialWB_07 = data.response.SocialWB_07;
        pData.SocialWB_08 = data.response.SocialWB_08;
        pData.SocialWB_09 = data.response.SocialWB_09;
        pData.SocialWB_10 = data.response.SocialWB_10;
        pData.Domain1 = pData.SocialWB_01 + pData.SocialWB_02;
        pData.Domain2 = pData.SocialWB_03 + pData.SocialWB_04;
        pData.Domain3 = pData.SocialWB_05 + pData.SocialWB_06;
        pData.Domain4 = pData.SocialWB_07 + pData.SocialWB_08;
        pData.Domain5 = pData.SocialWB_09 + pData.SocialWB_10;
    }
};

var SocialWB_node ={
    timeline: [SocialWB_Domains],
    on_timeline_finish: function(){        
        pData.SocialDomains_total = pData.SocialWB_01 + pData.SocialWB_02 + pData.SocialWB_03 + pData.SocialWB_04 + pData.SocialWB_05 + pData.SocialWB_06 +pData.SocialWB_07 +pData.SocialWB_08+pData.SocialWB_09+pData.SocialWB_10;
        saveSessionData2("Q_SocialWB");
                
      },
 };