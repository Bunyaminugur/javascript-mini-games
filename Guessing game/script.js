let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = Math.floor(Math.random() * 17) + 1;
console.log(number);

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML = `You guessed right, your number was ${number}`
    } else if((number - 1 == input) || (input == number + 1)) {
        output.innerHTML = "So close, but you just missed it!"
    }
     else if(input < number) {
        output.innerHTML = "You guessed to low!"
    }
    else if(input > number){
        output.innerHTML = "you guessed to high!"
    }

})