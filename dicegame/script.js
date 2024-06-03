var randomnum1 = (Math.floor(Math.random() * 6)) + 1;

var image1 = "dice" + randomnum1 + ".png";
var img1lo = "images/" + image1;

var yo = document.querySelectorAll("img")[0];
yo.setAttribute("src", img1lo);
var randomnum2 = (Math.floor(Math.random() * 6)) + 1;
var image2 = "dice" + randomnum2 + ".png";
var img2lo = "images/" + image2;
var go = document.querySelectorAll("img")[1];
go.setAttribute("src", img2lo);

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="Player 1 won ";
}
else if ( randomnum1 < randomnum2 ){
    document.querySelector("h1").innerHTML="Player 2 won ";
   
}
else{
    document.querySelector("h1").innerHTML="DRAW !!!";

}


