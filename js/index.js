let randomNumber1 = Math.floor((Math.random()*6)+1);
let randomNumber2 = Math.floor((Math.random()*6)+1);

let src1 = "images/dice"+randomNumber1+".png";
let src2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").src = src1;
document.querySelector(".img2").src = src2;

document.body.addEventListener("onload", function() {
    document.querySelector("h1").innerHTML = "Refresh Me!";
});

if( randomNumber1 > randomNumber2 ) {
	document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}
else if( randomNumber1 < randomNumber2 ) {
	document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}
else {
	document.querySelector(".container h1").innerHTML = "Draw!";
}