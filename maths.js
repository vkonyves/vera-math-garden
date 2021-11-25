
var answer;
var score = 0;
var bgImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);  // random gives range 0 to less than 1 (inclusive of 0, but not 1) 
    // random * 5 never gives 5, so floor will be between 0-4
    document.getElementById('n1').innerHTML = n1;
    // Call it when button gets pressed in index.html

    const n2 = Math.floor(Math.random() * 6);  // get this one between 0-6 
    document.getElementById('n2').innerHTML = n2;

    answer = n1 + n2;
}


function checkAnswer() {
    
    const prediction = predictImage();
    console.log(`Answer: ${answer}, prediction ${prediction}`)

    if (prediction == answer) {
        score++;  // increase by 1 if correct
        console.log(`Correct! Score: ${score}`);
        if (score <= 6) {
       
            bgImages.push(`url('./images/background${score}.svg')`);
            document.body.style.backgroundImage = bgImages;
        } else {
            alert("Well done! That's all folks! Want to start again?");
            score = 0;
            bgImages = [];
            document.body.style.backgroundImage = bgImages;
        }
                
    } else {
        if (score != 0) {score--;} 
        console.log(`Wrong! Score: ${score}`);
        alert("Oopsy! Check math and writing too; it must be a neat and clear number.");
        setTimeout(function () {
        bgImages.pop();
        document.body.style.backgroundImage = bgImages;
        }, 500);  // 1000 ms = 1 sec   
    }

}
