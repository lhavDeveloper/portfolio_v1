/*
 * File name : app.js
 * Purpose : 1) Initialize the form on page load. 
             2) Customize invitation on click of "Create Design" button.
*/

todaysDate = new Date();

//defaultValue is an object containing the default data that has to be inserted into the invitation on page load
var defaultValues={
	title : 'Birthday Party',
	date : '2019-12-25',
	message : "Sarah's turning 12! Please be her guest at a birthday bash at The Black Bottle, Manhattan at 6:00pm. The party will have lots of music, balloons, games and food! There will be ice cream, cake and plenty of treats. Also, there will be a pool to beat the heat! Get your pajamas in case you get too tired to head back home and want to join the sleepover party right after! :)",
	backgroundColor : '#ffefd5',
	fontColor : '#b03060'
};

/*the variables below contain the type of fonts, border styles and images available. The form will be dynamically populated with the below
  variables on page load
*/
var fonts=[{title :'Arial', value:'Arial, Helvetica, sans-serif'},
           {title :'Comic Sans MS', value:'"Comic Sans MS", cursive, sans-serif'},
           {title :'Courier New', value:'"Courier New", Courier, monospace'},
           {title :'Arial Black', value:'"Arial Black", Gadget, sans-serif'},
           {title :'Impact', value:'Impact, Charcoal, sans-serif'}];
var borders=['dotted','dashed','solid','double','groove','ridge','inset','outset'];
	var images=['birthday.jpg','wedding.jpg', 'food.jpg', 'baby_shower.jpeg'];


/*
 * The following function is called when the page has loaded. 
 * Purpose : It calls the functions which populate the dropdowns, display the images and create the default invitation design
*/
function initializeForm(){

	// fill in the default values into the form from the defaultValues object
    document.getElementById("event_title").value=defaultValues.title;
    document.getElementById("event_date").value=defaultValues.date;
    document.getElementById("event_message").value=defaultValues.message;
    document.getElementById("background_color").value=defaultValues.backgroundColor;
    document.getElementById("font_color").value=defaultValues.fontColor;

    //the following functions populate dropdowns, display the images and create the default invitation design.
	populateFontStyles();
	populateBorderStyles();
	populateImages();
	createDesign();
}

/*
 * Purpose : Populates the dropdown box which allows the user to select the type of font they want to use in their invitation
*/
function populateFontStyles(){
	//NOTE : The fonts array is sorted below in case new font styles are added later. We wouldnt need to make sure that the array is in alphabetical order
	fonts.sort(function(a, b){
    var fontA=a.title.toLowerCase(), fontB=b.title.toLowerCase()
    if (fontA < fontB)
        return -1 
    if (fontA > fontB)
        return 1
    return 0
    })
    // The below code populates the dropdown dynamically
	var fontStyleDropdownBox = document.getElementById('font_family');
	for(var i=0; i<fonts.length; i++)
	{
		var option = document.createElement("option");
		option.text=fonts[i].title;
		option.value=fonts[i].value;
		fontStyleDropdownBox.appendChild(option);

	}
}

/* 
 * This function dynamically populates the drop down box with all the border styles provided by CSS
*/
function populateBorderStyles(){
	//NOTE : The borders array is sorted below in case new border styles are added later. We wouldnt need to make sure that the array is in alphabetical order
	borders.sort();
	// The below code populates the dropdown dynamically
	var borderStyleDropdownBox = document.getElementById('border_style');
	for(var i=0; i<borders.length; i++)
	{
		option = document.createElement("option");
		option.text=borders[i];
		option.value=borders[i];
		borderStyleDropdownBox.appendChild(option);
	}
}

/* 
 * This function creates the radio buttons and displays images next to the them so that the user can select an image for their invitation.
*/
function populateImages(){

	var containerDiv = document.getElementById('image_radio_buttons');
	for(var i=0; i<images.length; i++)
	{
		var div = document.createElement("div");
		div.className="image_div";
		var input = document.createElement("input");
		input.type='radio';
		input.name='event_image';
		input.value=images[i];
		//first radio button has to be selected by default
		if(i==0)
			input.checked=true;
		var image = document.createElement("img");
		image.src=images[i];
		div.appendChild(input);
		div.appendChild(image);
		containerDiv.appendChild(div);

	}
}

/*
* createDesign() manipulate the dom elements based on the values filled into the form.
*/
function createDesign(){

    //fetch all the dom elements
    var	invitationDOM = document.getElementById("finalDesignDiv");
    var	eventTitleDOM = document.getElementById("eventTitleHeading");		
    var	eventDateDOM = document.getElementById("eventDateHeading");
    var	messageDOM = document.getElementById("messageParagraph");
    var	imageDOM = document.getElementById("image");

    //changing the background color, font color, border style, border color and font style based on values filled into the form
    invitationDOM.style.backgroundColor=document.getElementById("background_color").value;
	invitationDOM.style.border=document.getElementById("border_style").value+" 3px "+document.getElementById("font_color").value;
	invitationDOM.style.color=document.getElementById("font_color").value;
	invitationDOM.style.fontFamily=document.getElementById("font_family").value;

    //changing the text of the dom elements and image based on the values filled into the form
	eventTitleDOM.innerHTML=document.getElementById("event_title").value;
	eventDateDOM.innerHTML=document.getElementById("event_date").value;
	messageDOM.innerHTML=document.getElementById("event_message").value;
	imageDOM.src = document.querySelector('input[name = "event_image"]:checked').value;
    	
}









