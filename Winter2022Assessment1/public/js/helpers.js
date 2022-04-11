// Helper Functions


const NUMBER_OF_TRIALS_1 = 1; // original: 15

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}

// random integer generator
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// populates the trial array based on experiment specified number of trials
function generatetrials(numtrials) {   
    var bucket = [];    
    if (numtrials >= 3){ //random without replacement if we can help it
        for (let i = 0; i < numtrials; i++) {
            switch(i%3){
                case 0:
                    bucket.push("faster");
                    break;
                case 1:
                    bucket.push("slower");
                    break;
                case 2:
                    bucket.push("nochange");
            }
        } 
    } else { //just random with replacement if there are only a few trials
        for(let i = 0; i < numtrials; i++) {
            var pick = getRandomInt(0,2);
            switch(pick%3){
                case 0:
                    bucket.push("faster");
                    break;
                case 1:
                    bucket.push("slower");
                    break;
                case 2:
                    bucket.push("nochange");
            }
        }
    }
    return bucket;
}

//generate random authentication number
function getAuthNum() {
    return Math.floor(Math.random() * 90000) + 10000
}

//get correct response
function getCorrect(trialType){
    switch(trialType){
        case "faster":
            return "ArrowRight";
        case "slower":
            return "ArrowLeft";
        default:
            return "ArrowUp";
    }
}


var images = [
                'assets/respiration_basic.jpg',
                'assets/respiration_instruct.jpg', 
                'assets/entrain_instruct.jpg',
                'assets/CombinedLogo.png',
                'assets/confrating.jpg',
                'assets/arousalrating.jpg',
                'assets/Feedback.jpg',
                'assets/questionnaire.png'                
            ];
var preload = {
    type: 'preload',
    images:images,
    auto_preload: true 
}

var canvasSpecs = "<canvas id='myCanvas' width='800' height='500'></canvas>" +
"<p id='prompt' style='text-align:center;font-weight:bold;'></p>";



function resetLogVars(){            

    pData.Stress = "";    
    
}