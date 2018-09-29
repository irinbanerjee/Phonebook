//CALLBACK FUNCTION FOR SORTING NAMES IN ALPHABETICAL ORDER
function compare(a,b) {
  if (a.displayName< b.displayName)
     return -1;
  if (a.displayName> b.displayName)
    return 1;
  return 0;
}


//CALLBACK FUNCTIONS FOR SENDING SMS
function success(){
	alert("Message sent successfully.");
}

function fail(){
	alert("Error occurred.");
}

//SETS WETHER TO USE NATIVE APP OR NOT
function options(){
	intent='INTENT';
}


//CREATES SMS POPUP
function create(popup,c,n1){
	var header=document.createElement('div');  
	header.setAttribute('class', 'cbub2');
	
	var back_button=document.createElement('img');
	back_button.src="img/back_button.png";
	back_button.setAttribute('class', 'pbub2');
	
	
	var t=document.createTextNode("NEW MESSAGE");
	header.appendChild(t);
	header.appendChild(back_button);
	header.addEventListener("click",function(){
		popup.style.display="none";
	});
	popup.appendChild(header);
	

	var x = document.createElement("FORM");
    	popup.appendChild(x);
	
	/*
	if(c.phoneNumbers!=null){
		for( var j=0;j<c.phoneNumbers.length;++j){
			var number=c.phoneNumbers[j].value;
			var num=document.createTextNode(number);
			var z = document.createElement("INPUT");
			z.setAttribute("type", "radio");
			z.setAttribute("value", number);
			z.setAttribute("class", 'cbub5');
			x.appendChild(z);
			x.appendChild(num);
			var linebreak = document.createElement("br");
			x.appendChild(linebreak);
		};
	}	*/

	//var n=document.createTextNode(n1);
	var tbox=document.createElement('div');  
	tbox.setAttribute('class', 'cbub2');
	tbox.appendChild(n1);




	x.appendChild(tbox);
	var linebreak = document.createElement("br");
	x.appendChild(linebreak);

    	var y = document.createElement("INPUT");
    	y.setAttribute("type", "text");
    	y.setAttribute("placeholder", "Enter message");
	y.setAttribute("class", "cbub3");
	x.appendChild(y);

	var sub=document.createElement("INPUT");
	sub.setAttribute("type", "button");
	sub.setAttribute("class","cbub4");
	sub.setAttribute("value", "SEND");



	sub.addEventListener("click",function(){
		alert(c.phoneNumbers[0].value);
		sms.send(c.phoneNumbers[0].value,y.value,options,success,fail);
		y.value=null;
		popup.style.display="none";
		
      	});
	x.appendChild(sub);

	
}


//FUNCTION CALLED WHEN DEVICE IS READY
function contactSuccess(contacts){
	contacts.sort(compare);
	for(let i=0;i<contacts.length;++i){
		//LOADING NAME TEXT 
 		var name=contacts[i].displayName;
		var t=document.createTextNode(name);
		
		var textbox=document.createElement('div');  
		textbox.setAttribute('class', 'cbub1');
			
		//LOADING PROFILE PICTURE
		var dp=document.createElement('img');  
		dp.setAttribute('class', 'pbub1');
		if(contacts[i].photos!=null){
			dp.src=contacts[i].photos[0].value;
		}
		else{
			dp.src="img/default_pic.jpg";
		}
		
		//ADDING PHOTO AND CONTACT TO CONTACT SLOT
		
		textbox.appendChild(dp);
		textbox.appendChild(t);
		
		//ADDING CONTACT SLOT TO MAIN BODY
		document.body.appendChild(textbox); 

		//CREATING SMS POPUP
		var popup=document.createElement('div');  
		popup.setAttribute('class','sms');
		var name1=contacts[i].displayName;
		var t1=document.createTextNode(name1);
		create(popup,contacts[i],t1);      
		document.body.appendChild(popup); 

		//CLICKING CONTACT OPENS POPUP
		textbox.addEventListener("click",function(){
			popup.style.display="block";
			//console.dir(contacts[i]);
		});
		
		document.addEventListener("backbutton",function(){
			popup.style.display="none";
		});
		//console.dir(contacts[i]);
	
}
}



//CREATES CONTACT ARRAY AND SENDS TO contactSucess FOR DISPLAYING
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
var contactFields=["*"];
navigator.contacts.find(contactFields, contactSuccess);

}


