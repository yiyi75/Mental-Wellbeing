// INSTRUCTIONS

// preload images 
var images = [
    './assets/respiration_basic.jpg',
    './assets/respiration_instruct.jpg', 
    './assets/entrain_instruct.jpg',
    './assets/CombinedLogo.png',
    './assets/confrating.jpg',
    './assets/arousalrating.jpg',
    './assets/Feedback.jpg',
    './assets/questionnaire.png'                
];
var preload = {
    type: 'preload',
    images:images,
    auto_preload: true 
};

let logo = "<p class='image'><img style='width:502px; height:130px;' src='./assets/CombinedLogo.png' /></p>";

// welcome message
var welcome_trial = {
    type: "html-keyboard-response",
    stimulus: logo,
    choices: ['ArrowRight'], //'rightarrow' stopped working
    prompt: "<p class='description'> Welcome to the study, please press <em_black>RIGHT ARROW</em_black> on your keyboard to continue. </p>",    
    post_trial_gap: 500
};


// goodbye message
var goodbye_trial = {
    type: "html-keyboard-response",
    stimulus: logo,
    choices: ['ArrowRight'],
    prompt: "<p style='text-align:center;'>You have completed the Pre-Screener. </p>" + 
            "<p style='text-align:center;'>We will send out future assessments on <b>1/28</b>, <b>2/18</b>, <b>3/11</b>, and <b>4/1</b>. Thanks again for your interest in our study.</p>" +            
            "<p style='text-align:center;'>You may close the window now. </p>"   , 
    post_trial_gap: 500,
    authentation: authnum
  }; 
  