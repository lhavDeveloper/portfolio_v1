var completeState=false;

function initializeProgressBar(id,current,final){
   var html='<div class="myBar first">'+
  '<div class="diamonds" style="display:none;">'+
  '<div class="diamond"></div>'+
  '<div class="diamond"></div>'+
  '<div class="diamond"></div>'+
  '<div class="diamond"></div>'+
  '<div class="diamond"></div>'+
  '<div class="diamond"></div>'+
  '<div class="diamond"></div>'+
  '<div class="diamond"></div>'+
  '<div class="diamond"></div>'+
  '<div class="diamond"></div>'+
  '</div><h4 class="status"></h4></div>'
  document.getElementById('myProgress').innerHTML=html;
  updateProgressBar(id,current,final)
}

function updateProgressBar(id,current,final){

current=parseInt(current);
final=parseInt(final);
var elem=document.getElementById(id).getElementsByClassName('myBar')[0];
var elem2=document.getElementById(id).getElementsByClassName('status')[0];
  if(completeState==true)
  {
  console.log(elem2)
  elem.style.width = '0%'; 
  elem.className = "myBar first";
  elem2.innerHTML='';
  elem2.className = "status";
  (document.getElementById(id).getElementsByClassName('diamonds')[0]).style.display = "none";
  completeState=false;
  }

if(current<final){
var width=parseInt(current*100/final);
    if(width<25)
    elem.className = "myBar first";
      else if(width>=25 && width<50)
        elem.className = "myBar second";
    else if(width>=50 && width<75)
        elem.className = "myBar third";
      else
        elem.className = "myBar fourth";
elem.style.width = width + '%';
elem2.innerHTML=width + '%';
}
else{
  completeState=true;
  elem.style.width = '100%'; 
  elem.className = "myBar fourth";
  elem2.innerHTML='COMPLETE!';
  elem2.className = "status complete";
  console.log((document.getElementById(id).getElementsByClassName('diamonds')[0]));
  (document.getElementById(id).getElementsByClassName('diamonds')[0]).style.display = "initial";
}
}

function clearProgressBar(id){
var elem=document.getElementById(id).getElementsByClassName('myBar')[0];
var elem2=document.getElementById(id).getElementsByClassName('status')[0];
elem.style.width = '0%'; 
elem2.innerHTML='0%';
(document.getElementById(id).getElementsByClassName('diamonds')[0]).style.display = "none";
}

var jsonVariable ={currentValue:30, targetValue:200};
function init(){
initializeProgressBar('myProgress',jsonVariable.currentValue,jsonVariable.targetValue);
}

var updateProgress=function(){
  updateProgressBar('myProgress',parseInt(document.getElementById('current').value),parseInt(document.getElementById('final').value));
}