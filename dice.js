var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImg="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImg;
 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomImageSource);


 var randomNumber2=Math.floor(Math.random()*6)+1;
 var rndmDiceImg="dice"+randomNumber2+".png";
 var rndmImageSource="images/"+rndmDiceImg;
 var image2=document.querySelectorAll("img")[1];
 image2.setAttribute("src",rndmImageSource);

 if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 Wins🚩"
}else if (randomNumber1<randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML="🚩Player 2 Wins"
    
 } else {
     document.getElementsByTagName("h1")[0].innerHTML="Draw !"
 }

 