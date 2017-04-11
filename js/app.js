
var age=23;

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

}