function contactSuccess(contacts){
	for(var i=0;i<contacts.length;++i){
		var name=contacts[i].displayName;
		var bubble=document.createElement('div');  
		bubble.setAttribute('id', 'cbub1');
		bubble.innerHTML=name;
		document.body.appendChild(bubble); 
	}
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
//document.getElementById("demo").innerHTML=navigator.contacts;
var contactFields=["*"];
navigator.contacts.find(contactFields, contactSuccess);
}

/*<--bubble.appendChild(name); --> */
