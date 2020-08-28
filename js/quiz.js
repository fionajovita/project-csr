var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3"); 
var q4 = document.getElementById("q4"); 
var q5 = document.getElementById("q5"); 
var q6 = document.getElementById("q6"); 
var q1m = document.getElementById("q1m"); 
var q2m = document.getElementById("q2m");
var q3m = document.getElementById("q3m");
var q4m = document.getElementById("q4m");
var q5m = document.getElementById("q5m");
var q6m = document.getElementById("q6m");
var intmd = document.querySelector("#intmd");
var play_again = document.querySelector("#play-again");
var intmd_img = document.querySelector("#intmd-img");
q1.style.display = "none";
play_again.style.display = "none";
var playButton = document.querySelector("#playButton");

window.onload = function(){
    loader(q1, q1m);
}


var timeleft = 5;
var progressbar = document.getElementById("progressBar");

function readyToPlay(){
    playButton.style.display = "none";
    progressbar.style.display = "block";
    loader(q1, q1m);
}
function loader(question, music){

    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        progressbar.style.display = "none";
        question.style.display = "block";
        intmd.style.display ="none";
        
        music.play();
    }
        progressbar.value = 5 - timeleft;
        timeleft -= 1;
    }, 1000);
}

function loaderForLastQ(score){
    var downloadTimer2 = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer2);
        progressbar.style.display = "none";
        intmd.style.display ="none";
        showScore(score);
    }
        progressbar.value = 5 - timeleft;
        timeleft -= 1;
    }, 1000);
}

var score = 0;
function updateScore(questionNumber, answer){
    progressbar.value = 0;
    progressbar.style.display = "block";
    timeleft = 5;
    
    intmd.style.display="block";
    if(questionNumber == "q1"){
        q1.style.display = "none";
        q1m.pause();
        if(answer == "op2"){
            score+=1;               
            intmd_img.src="../images/right-answer.png";
            play_again.style.display = "none";
        }else{
            intmd_img.src="../images/wrong-answer.png";
            play_again.style.display = "block";
        }
        
        intmd.style.display ="block";
        loader(q2, q2m);
    }
    if(questionNumber == "q2"){
        q2.style.display = "none";
        q2m.pause();
        if(answer == "op1"){
            score+=1;              
            intmd_img.src="../images/right-answer.png";
            play_again.style.display = "none";
        }else{
            intmd_img.src="../images/wrong-answer.png";
            play_again.style.display = "block";
        }
        
        intmd.style.display ="block";
        loader(q3, q3m);
    }
    if(questionNumber == "q3"){
        
        q3.style.display = "none";
        q3m.pause();    
        if(answer == "op3"){
            score+=1;               
            intmd_img.src="../images/right-answer.png";
            play_again.style.display = "none";
        }else{
            intmd_img.src="../images/wrong-answer.png";
            play_again.style.display = "block";
        }

        
        intmd.style.display ="block";
        loader(q4, q4m);
    }
    if(questionNumber == "q4"){
        
        q4.style.display = "none";
        q4m.pause();    
        if(answer == "op4"){
            score+=1;               
            intmd_img.src="../images/right-answer.png";
            play_again.style.display = "none";
        }else{
            intmd_img.src="../images/wrong-answer.png";
            play_again.style.display = "block";
        }
        intmd.style.display ="block";
        loader(q5, q5m);
    }

    if(questionNumber == "q5"){
        
        q5.style.display = "none";
        q5m.pause();    
        if(answer == "op3"){
            score+=1;               
            intmd_img.src="../images/right-answer.png";
            play_again.style.display = "none";
        }else{
            intmd_img.src="../images/wrong-answer.png";
            play_again.style.display = "block";
        }
        intmd.style.display ="block";
        loader(q6, q6m);
    }

    if(questionNumber == "q6"){
        
        q6.style.display = "none";
        q6m.pause();    
        progressbar.style.display = "none";
        if(answer == "op2"){
            score+=1;               
            intmd_img.src="../images/right-answer.png";
            play_again.style.display = "none";
        }else{
            intmd_img.src="../images/wrong-answer.png";
            play_again.style.display = "block";
        }
        // await new Promise(r => setTimeout(r, 7000));
        play_again.style.display = "none";
        loaderForLastQ(score);
    }

}

function showScore(score){
    intmd.style.display ="block";
    if(score ==6){
        intmd_img.src = "../images/topscore.png";
    }else{
        intmd_img.src = "../images/tryAgain.png";
    }
}


