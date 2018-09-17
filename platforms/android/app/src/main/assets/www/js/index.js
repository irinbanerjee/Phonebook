function compare(a,b) {
  if (a.displayName< b.displayName)
     return -1;
  if (a.displayName> b.displayName)
    return 1;
  return 0;
}

function contact_bubble(bubble,i){
	if(i%2==0){
		bubble.setAttribute('id', 'cbub1');
	}
	else{
		bubble.setAttribute('id', 'cbub2');
	}
}


function contactSuccess(contacts){
	contacts.sort(compare);
	for(var i=0;i<contacts.length;++i){
		var name=contacts[i].displayName;
			
		//NAME TEXT BUBBLE
		var bubble=document.createElement('div');  
		contact_bubble(bubble,i);
		bubble.innerHTML=name;
			

		//PROFILE PICTURE BUBBLE
		var dp=document.createElement('img');  
		dp.setAttribute('id', 'pbub1');
		if(contacts[i].photos!=null){
			dp.src=contacts[i].photos[0].value;
		}
		else{
			dp.src="img/avatar.png";
		}
		
		bubble.appendChild(dp);
		
		document.body.appendChild(bubble); 
	}
}



//CREATES CONTACT ARRAY AND SENDS TO contactSucess FOR DISPLAYING
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
var contactFields=["*"];
navigator.contacts.find(contactFields, contactSuccess);
}


