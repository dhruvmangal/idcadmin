function appendChildToParent( parent,child){
	document.getElementById(parent).innerHTML= child;
}
function autoRun(){
	document.getElementById('navOpen').addEventListener('click', openNav);
	document.getElementById('navClose').addEventListener('click', closeNav);	
	document.getElementById('popupClose').addEventListener('click', closePopup);
	
}
function openNav(){
	document.getElementById('nav').style.display= 'block';
}
function closeNav(){
	document.getElementById('nav').style.display= 'none';
}

function openPopup(){
	//alert('hey');
	document.getElementById('popup').style.display= 'block';
}
function closePopup(){
	//alert('hey');
	window.history.back();
}
function openPopupnew(){
	//alert('hey');
	document.getElementById('popupnew').style.display= 'block';
}
function closePopupnew(){
	//alert('hey');
	document.getElementById('popupnew').style.display= 'none';
}