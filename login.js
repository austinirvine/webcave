/*
Author Austin Irvine
Date   Sept. 22, 2017
File   login.js
Brief  This file provides a two-step verification password
       for logging into this profile on the website.
*/

var myPassword = "";
var verPassword = "";

var imageArray = [];
var currentIndex = 0;

function login()
{
	alert("Program Running");
}

function Submission()
{
	myPassword = document.getElementById("pass").value;
	verPassword = document.getElementById("verPass").value;

	if(myPassword.length < 8 || verPassword.length < 8)
	{
		alert("Re-enter A Passowrd length 8 or Greater");
	}
	else
	{
		if(myPassword == verPassword)
		{
			alert("Your Passwords Match!");
			window.location = "menu.html";
		}
		else
		{
			alert("Passwords Are Not A Match.");
		}
	}
}

function SubmitArtChange()
{
	var form1 = document.getElementById("form1").style;
	var text1 = document.getElementById("text1").style;
	var redBor = document.getElementById("redBor").value;
	var greenBor = document.getElementById("greenBor").value;
	var blueBor = document.getElementById("blueBor").value;
	var widthBor = document.getElementById("widthBor").value;
	
	var redBack = document.getElementById("redBack").value;
	var greenBack = document.getElementById("greenBack").value;
	var blueBack = document.getElementById("blueBack").value;
	
	text1.borderColor = rgb(redBor, greenBor, blueBor);
	text1.borderWidth = widthBor;
	
	alert("Here it is: "+widthBor);
	
	text1.backgroundColor = rgb(redBack, greenBack, blueBack);
}

function rgb(r, g, b)
{
	return "rgb("+r+","+g+","+b+")";
}

function GetImages()
{
	//runs onload
	//imageArray.push(document.getElementById("image0"));
	imageArray.push("0.jpg");
	imageArray.push("1.png");
	imageArray.push("2.png");
	imageArray.push("3.png");
	imageArray.push("4.png");
	
	SetCurrentImage();
}

function PreviousImage()
{
	alert("Running PreviousImage");
	currentIndex --;
	
	if(currentIndex < 0)
	{
		currentIndex = 4;
	}
	
	SetCurrentImage();
}

function NextImage()
{
	currentIndex ++;
	
	if(currentIndex > 4)
	{
		currentIndex = 0;
	}
	
	SetCurrentImage();
}

function SetCurrentImage()
{
	document.getElementById("image0").src = "slideshow-imgs\\" + imageArray[currentIndex];
}