
var random_questionnaire_order = jsPsych.randomization.shuffle([Decenter_node, Reappraisal_node, PersonalWB_node, Stress_node]);


////////////////////////////////////////////////////////
// Populate the Experiment Timeline
////////////////////////////////////////////////////////

// Create time variable and pushing different variables

var maintimeline = []; // the main experiment timeline

(firebase.auth);

maintimeline.push(preload); //instructions.js
maintimeline.push(welcome_trial); //instructions.js
maintimeline.push(criteria_trial); //criteria.js
maintimeline.push(QC_node); //QCcheck.js

maintimeline.push(Consent_node); //consent.js
maintimeline.push(GPA_node); //GPArelease.js

//Questionnaire variables:
maintimeline.push(demographics_node); //Q_Demographics.js

maintimeline.push(random_questionnaire_order[0]);
maintimeline.push(random_questionnaire_order[1]);
maintimeline.push(random_questionnaire_order[2]);
maintimeline.push(random_questionnaire_order[3]);

//Get email and Signup ID
maintimeline.push(emailInstruction_trial); // email.js
maintimeline.push(validateEmail_node); // email.js

maintimeline.push(signupIDInstruction_trial); // signupid.js
maintimeline.push(validateSignupID_node); // signupid.js

// good bye
maintimeline.push(goodbye_trial); // signupid.js

jsPsych.init({
    timeline: maintimeline,
    show_progress_bar: true,
})

;