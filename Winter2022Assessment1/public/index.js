

var random_questionnaire_order = jsPsych.randomization.shuffle([Decenter_node, FFMQ_node, Reappraisal_node, PersonalWB_node, SocialWB_node, TestAnxiety_node, Stress_node, SMM_node]);


////////////////////////////////////////////////////////
// Populate the Experiment Timeline
////////////////////////////////////////////////////////

  // Create time variable and pushing different variables

  var maintimeline = []; // the main experiment timeline

  (firebase.auth);

  var questionnaires = []; // the part of the timeline that includes questionnaires- keeping it separate to start so we can shuffle it

  maintimeline.push(preload); //instructions.js
  maintimeline.push(welcome_trial); //instructions.js

  
  //put email and signupID again
  maintimeline.push(email_node); //email2.js

  //demographic info
  maintimeline.push(demographics_node); //Q_Demographics.js
  
  //Questionnaire variables:
  maintimeline.push(random_questionnaire_order[0]);
  maintimeline.push(random_questionnaire_order[1]);
  maintimeline.push(random_questionnaire_order[2]);
  maintimeline.push(random_questionnaire_order[3]);
  maintimeline.push(random_questionnaire_order[4]);
  maintimeline.push(random_questionnaire_order[5]);
  maintimeline.push(random_questionnaire_order[6]);
  maintimeline.push(random_questionnaire_order[7]);


  //maintimeline.push(Decenter_node); //Q_Decentering.js
  //maintimeline.push(Reappraisal_node); //Q_Reappraisal.js
  //maintimeline.push(PersonalWB_node); //Q_PersonalWB.js
  //maintimeline.push(SocialWB_node); //Q_SocialWB.js
  //maintimeline.push(TestAnxiety_node); //Q_TestAnxiety.js

  maintimeline.push(goodbye_trial);
  
  console.log(maintimeline);

  jsPsych.init({
        timeline: maintimeline,
        show_progress_bar: true
  })

;