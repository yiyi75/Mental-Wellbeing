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
    choices: ['ArrowRight'], 
    prompt: "<p class='description'> Welcome to the study! The following survey section will take about 20-30 minutes to complete.</p>"+
    "<div><p>Please read every question carefully and rate how true each statement is for you by using the scale to fill in your choice. </p></div>"+
    "<div><p> Please press <em_black><b>RIGHT ARROW</em_black></b> on your keyboard to continue. </p></div>",    
    post_trial_gap: 500
};

var goodbye_trial = {
    type: "html-keyboard-response",
    stimulus: logo,
    choices: ['ArrowRight'],
    prompt: "<p style='text-align:center;'>You have completed the FIRST Assessment.</p>" + 
            "<p style='text-align:center;'>Thanks for your participation.</p>" +           
            "<p style='text-align:center;'>You may close the window now.</p>",
    post_trial_gap: 500,
    authentation: authnum    
};