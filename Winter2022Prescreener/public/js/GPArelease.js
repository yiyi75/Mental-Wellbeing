var GPArelease = [  "I hereby <u><strong>authorize</strong></u> the Office of the Registrar to release my <strong>de-identified</strong> session GPA for the current academic term.", 
                    "I <u><strong>do not</strong></u> authorize the Office of the Registrar to release my <strong>de-identified</strong> session GPA for the current academic term."]


var GPA_block = {
    type: 'survey-multi-choice',
    questions: [
      {prompt: "Additionally, we would like the Office of the Registrar to provide the study team with your de-identified GPA for the semester (session GPA) in which you completed the study."
      + " We will provide the Office of the Registrar your student number and they will give us a list of participant session GPAs with replaced random numbers."
      + " Therefore, we will not know exactly which GPA is yours." +
       " This will allow us to do data analysis without compromising your identity in any way.     ", name: 'GPA', options: GPArelease, required: true}
    ],

    on_finish: function(data){
        console.log(data.response);

        pData.GPAconsent = data.response.GPA;
        
    }
  };



  var GPA_node = {
    timeline: [GPA_block],
   
}
