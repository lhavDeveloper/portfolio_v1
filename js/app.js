
var age=23;
var quotes="That’s been one of my mantras – focus and simplicity. Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains. - Steve Jobs";

function init(){


var x=0;
var parent=$('#hobbies');
var currentWord=1;
// var intervalID = setInterval(function () {
//     $('#age').html(x);
//    if (x++ === age) {
//        window.clearInterval(intervalID);
//    }
// }, 50);

// var intervalID2 = setInterval(function () {

// // var h=$('#hobbies li:nth-child('+currentWord+')');
// // if(currentWord == $('#hobbies li').length)
// // currentWord=0;
// // var n=$('#hobbies li:nth-child('+ (++currentWord) +')');
// // h.attr("class","invisible");
// // n.attr("class","visible");
 
// // }, 2000);
var target=document.getElementById('quote');
showText(target,quotes,0,50)
}

function showText (target, message, index, interval) {  
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

function redirectPage(){
	var loc=window.location+'templates/myWork.html';
	window.location.replace(loc);
}
