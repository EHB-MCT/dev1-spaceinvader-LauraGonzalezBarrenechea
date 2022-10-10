"use strict";


drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

//This code makes the background
   context.fillStyle = "black";
   context.beginPath();
   context.rect(50, 50, 300, 300);
   context.fill();

//This code is the square placed on top
   context.fillStyle = "#00ff00";
   context.beginPath();
   context.rect(175, 100, 50, 50);
   context.fill();
   
//The following 3 codes are the squares underneath the top square
   context.fillStyle = "#00ff00";
   context.beginPath();
   context.rect(225, 150, 50, 50);
   context.fill();


   context.fillStyle = "#00ff00";
   context.beginPath();
   context.rect(125, 150, 50, 50);
   context.fill();


   context.fillStyle = "#00ff00";
   context.beginPath();
   context.rect(175, 150, 50, 50);
   context.fill();

//The following 3 codes are the squares from the right side of the black background
   context.fillStyle = "#00ff00";
   context.beginPath();
   context.rect(275, 200, 50, 50);
   context.fill();


   context.fillStyle = "#00ff00";
   context.beginPath();
   context.rect(275, 250, 50, 50);
   context.fill();


   context.fillStyle = "#00ff00";
   context.beginPath();
   context.rect(225, 250, 50, 50);
   context.fill();

//The following 3 codes are the squares from the left side of the black background
   context.fillStyle = "#00ff00";
   context.beginPath();
   context.rect(125, 250, 50, 50);
   context.fill();


   context.fillStyle = "#00ff00";
   context.beginPath();
   context.rect(75, 250, 50, 50);
   context.fill();


   context.fillStyle = "#00ff00";
   context.beginPath();
   context.rect(75, 200, 50, 50);
   context.fill();
}