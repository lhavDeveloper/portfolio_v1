
var age=23;
var quotes="The future is a concept, it doesn’t exist﻿ There is no such thing as tomorrow. There never will be because time is always now. That’s one of the things we discover when we stop talking to ourselves and stop thinking. We find there is only present, only an eternal now.";

function init(){


var x=0;
var parent=$('#hobbies');
var currentWord=1;
var intervalID = setInterval(function () {
    $('#age').html(x);
   if (x++ === age) {
       window.clearInterval(intervalID);
   }
}, 50);

var intervalID2 = setInterval(function () {

var h=$('#hobbies li:nth-child('+currentWord+')');
if(currentWord == $('#hobbies li').length)
currentWord=0;
var n=$('#hobbies li:nth-child('+ (++currentWord) +')');
h.attr("class","invisible");
n.attr("class","visible");
 
}, 2000);
var target=document.getElementById('quote');
showText(target,quotes,0,50)
}

function showText (target, message, index, interval) {  
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}