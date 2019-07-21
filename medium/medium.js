let randomNumber = parseInt(Math.random() * 1000);

let attempts = 0;

function checkAnswer(){
    // alert(randomNumber)
    // alert("Guess the Number");
    let answer = document.querySelector("input").value;

    attempts++;

    if(answer < randomNumber){
        alert("Too Small!");
    }else{
        if(answer > randomNumber){
            alert("Too Large!")
        }else if(answer = randomNumber){
            alert("Congratulations You did In " + attempts+ " Attempts!")
        };
    }

}