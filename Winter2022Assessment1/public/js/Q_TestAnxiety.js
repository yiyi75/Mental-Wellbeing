/*Reappraisaling questionnaire*/
var TestAxiety_items2 = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5 or more"
];

var TestAnxiety_Check = {
    type: 'survey-likert',
    questions: [
        {prompt: "For the last 3 weeks, how many major evaluations did you have? E.G., any evaluation worth more than 25% or 30% of your total grades.", name: 'TestAnxiety_numberoftest', labels: TestAxiety_items2, required: true},
    ],
    on_finish: function(data){
        pData.TestAnxiety_numberoftest = data.response.TestAnxiety_numberoftest;
    },   
};

var TestAnxiety_node ={
    timeline: [TestAnxiety_Check],
    on_timeline_finish: function(){        
        saveSessionData2("Q_TestAnxiety");
                
      },
 };