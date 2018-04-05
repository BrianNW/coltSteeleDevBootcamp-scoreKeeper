var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type=number]");
var winningScoreDisplay = document.querySelector("p span"); // selects spans inside paragraphs
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function()  //callback function
{
	if(!gameOver)
	{		
		p1Score++;
		if(p1Score === winningScore)
		{
		 p1Display.classList.add("winner");// adds the winner css class to the h1 span element
		 gameOver = true;
		}
		p1Display.textContent = p1Score; //Changes the h1 span element based on score
	}		
});

p2Button.addEventListener("click", function()
{
	if(!gameOver)
	{	
		p2Score++;
		if(p1Score === winningScore)
		{
		 p1Display.classList.add("winner");	
		 gameOver = true;
		}
		p2Display.textContent = p2Score; //Changes the h1 span element based on score
	}
});

resetButton.addEventListener("click", function() 
{
	reset(); //calls reset function
});

function reset() {  //reset function to reset everything back to 0
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function() { //change event will run anytime a value changes either through clicking or keyboard
	winningScoreDisplay.textContent = numInput.value;	
	winningScore = Number(numInput.value);
	reset();
});