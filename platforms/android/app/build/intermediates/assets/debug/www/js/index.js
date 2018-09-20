/*function compare(a,b) {
	var str1=a.displayName.toUpperCase();
	var str2=b.displayName.toUpperCase();
  if (str1< str2)
     return -1;
  if (str1> str2)
    return 1;
  return 0;
}*/

function compare(a,b) {
  if (a.displayName< b.displayName)
     return -1;
  if (a.displayName> b.displayName)
    return 1;
  return 0;
}



function contactSuccess(contacts){
	contacts.sort(compare);
	for(var i=0;i<contacts.length;++i){
		//var slot=document.getElementById('contact_list'); 
 		var name=contacts[i].displayName;
		
		//NAME TEXT 
		var textbox=document.createElement('div');  
		textbox.setAttribute('class', 'cbub1');
			
		//PROFILE PICTURE
		var dp=document.createElement('img');  
		dp.setAttribute('class', 'pbub1');
		if(contacts[i].photos!=null){
			dp.src=contacts[i].photos[0].value;
		}
		else{
			dp.src="img/default_pic.jpg";
		}
		

		t=document.createTextNode(name);
		
		textbox.appendChild(dp);
		//textbox.innerHTML=dp;
		textbox.appendChild(t);
		//textbox.innerHTML=name;
		
		//slot.appendChild(name);
		//document.body.appendChild(dp);
		document.body.appendChild(textbox); 
		console.dir(contacts[i]);
	}
}



//CREATES CONTACT ARRAY AND SENDS TO contactSucess FOR DISPLAYING
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
var contactFields=["*"];
navigator.contacts.find(contactFields, contactSuccess);
}


