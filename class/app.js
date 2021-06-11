import page from "//unpkg.com/page/page.mjs";
import {Register, RegisterOTP, RegisterDetails} from "./register.js";
import {Home} from './home.js';
import {Slider} from './slider.js';
import {Admin} from './admin.js';
import {Cabs} from './cabs.js';
import {Test} from './test.js';
import {User} from './user.js';
import {Oneway} from './oneway.js';


var homeLink=  'http://localhost:8012/potadmin/';

var localLink= window.location.href;

class App{
	constructor(){
		var app= this.render();
		document.getElementById('app').innerHTML= app;
		var header= new Header();
		var nav= new Nav();
		var home= new Home();
		document.getElementById('popupClose').addEventListener('click', this.closePopup);
	}
	closePopup(){
		document.getElementById('popup').style.display= 'none';
	}
	render(){
		let transform={'<>': 'div' , 'html':[
			{'<>': 'div', 'id': 'header'},
			{'<>': 'div', 'id': 'nav'},
			{'<>': 'div', 'id': 'section'},
			{'<>': 'div', 'id': 'popup', 'html': [
				{'<>': 'div', 'class': 'container-fluid', 'html': [
					{'<>': 'div', 'class': 'row', 'html': [
						{'<>': 'div', 'class': 'col-md-4' },
						{'<>': 'div', 'class': 'col-md-4', 'html':[
							{'<>': 'div', 'class': 'popup-panel', 'html':[
								{'<>': 'div', 'class': 'popup-header', 'html': [
									{'<>': 'div', 'class': 'popup-close', 'id': 'popupClose','html': '&times;'}
								]}, 
								{'<>': 'div', 'id': 'popupBody', 'class': 'popup-body'}
							]}
						] },
						{'<>': 'div', 'class': 'col-md-4' },
					]}
				]}
				
			]}
		]};
		var doc =  (json2html.transform({},transform));
		return doc;
	}
	

}

class Header{
	
	constructor(){
		document.getElementById('header').innerHTML= this.render();
		document.getElementById('menuIcon').addEventListener('click', this.showNav);
	}
	showNav(){
		var nav= document.getElementById('nav');
		if(nav.style.display=='block'){
			nav.style.display= 'none';
		}else{
			nav.style.display= 'block';
		}
	}
	render(){
		let transform= {'<>': 'header', 'html':[
			{'<>': 'div', 'class': 'container-fluid', 'html':[
				{'<>': 'div', 'class': 'row', 'html': [
					{'<>':'div', 'class': 'col-md-2 col-xs-2 col-2', 'html':[
						//{'<>': 'img', 'src': homeLink+'static/img/logo.png'}
						{'<>':'div', 'class': 'menu-icon', 'id': 'menuIcon', 'html': '&#x2630;'}
					]},
					{'<>': 'div', 'class':'col-md-4 col-xs-0 col-0'},
					{'<>': 'div', 'class': 'col-md-5 col-xs-6 col-6', 'html':[
						
						
					]}
				]}
				
			]}
		]};
		
		var doc =  (json2html.transform({},transform));
		return doc;
	}
}
class Nav{
	constructor(){
		document.getElementById('nav').innerHTML= this.render();
		document.getElementsByClassName('side-close')[0].addEventListener('click', this.closeNav);
	}
	closeNav(){
		var nav= document.getElementById('nav');
		if(nav.style.display=='block'){
			nav.style.display= 'none';
		}
	}
	render(){
		let transform= {'<>': 'nav', 'html': [
			{'<>': 'div', 'class': 'nav-show nav-panel', 'html':[
				{'<>': 'div', 'class': 'close-menu nav-header', 'html': [
					{'<>': 'div', 'class': 'side-close', 'html': '&times;'}
				]},
				{'<>': 'ul', 'html': [
					{'<>': 'a', 'href': '/potadmin/', 'html': [{'<>': 'li', 'class': 'nav-list','html': '<i class="fa fa-home"></i> Dashboard'}]},
					{'<>': 'a', 'href': '/potadmin/slider', 'html': [{'<>': 'li', 'class': 'nav-list','html': '<i class="fa fa-image"></i> Slides'}]},
					{'<>': 'a', 'href': '/potadmin/cabs', 'html': [{'<>': 'li', 'class': 'nav-list','html': '<i class="fa fa-car"></i> cabs'}]},
					{'<>': 'a', 'href': '/potadmin/oneway', 'html': [{'<>': 'li', 'class': 'nav-list','html': '<i class="fa fa-road"></i> Oneway'}]},
					{'<>': 'a', 'href': '/potadmin/admin', 'html': [{'<>': 'li', 'class': 'nav-list','html': '<i class="fa fa-user"></i> Admin'}]},
					{'<>': 'a', 'href': '/potadmin/user', 'html': [{'<>': 'li', 'class': 'nav-list','html': '<i class="fa fa-user-plus"></i> Users'}]},
					{'<>': 'a', 'href': '/potadmin/test', 'html': [{'<>': 'li', 'class': 'nav-list','html': '<i class="fa fa-quote-left"></i> Testimonials'}]},
					{'<>': 'a', 'href': '/potadmin/feedback', 'html': [{'<>': 'li', 'class': 'nav-list','html': '<i class="fa fa-comments"></i> Feedback'}]},
				]},
				{'<>': 'div', 'class': 'version', 'html': [
					{'<>': 'center', 'html':[
						{'<>': 'p', 'html': 'Version 1.2'},
						{'<>': 'p', 'html': 'Copyrights 2021 &#169;. All Rights Reserved'}
					]}
				]}
			]}	
		]}
		var doc =  (json2html.transform({},transform));
		return doc;
	}
	
}

class Login{
	constructor(){
		document.getElementById('app').innerHTML= this.render();	
		document.getElementById('loginForm').addEventListener('submit', this.login);
	}
	login(){
		event.preventDefault();
		var phone= document.getElementById('phone').value;
		var password= document.getElementById('password').value;
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/admin/auth/login/',
			data: {'phone': phone, 'password': password},
			success: function(res){
				console.log(res);
				
				var arr= JSON.parse(res);
				if(arr['auth']== true ){
					localStorage.setItem('admin', arr['token']);
					window.location.href= homeLink;
				}else{
					document.getElementById('error').innerHTML= 'Username or Password incorrect. Please try again';
				}
			}
		})
		return val;
	}
	render(){
		let transform= {'<>': 'div', 'html':[
			
			{'<>': 'section', 'html':[
				{'<>': 'div', 'class': 'container-fluid', 'html':[
					{'<>':'div', 'class': 'row', 'html':[
						{'<>':'div', 'class':'col-md-4'},
						{'<>':'div', 'class':'col-md-4', 'html':[
							
							
							{'<>': 'h4', 'html': 'Admin Login'},
							{'<>': 'p','id': 'error', 'html': ''},
							{'<>': 'form', 'id': 'loginForm', 'html':[
								{'<>': 'label', 'for': 'username', 'html': 'Username'},
								{'<>': 'input', 'type': 'number', 'id': 'phone', 'class': 'form-control'},
								
								{'<>': 'br'},
								{'<>': 'label', 'for': 'username', 'html': 'Password'},
								{'<>': 'input', 'type': 'password', 'id': 'password', 'class': 'form-control'},
								{'<>': 'br'},
								{'<>': 'input', 'type': 'submit', 'value': 'Login', 'class': 'form-control btn btn-primary'}
							]},
							
							
						]},
						{'<>':'div', 'class':'col-md-4'}
					]}
				]}
			]}
		]};
		
		var doc =  (json2html.transform({},transform));
		return doc;
	}
}


page('/potadmin/', function(){
	if(!localStorage.getItem('admin')){
		page.redirect('/potadmin/login');
	}else{
		var app= new App();
	}
});
page('/potadmin/login', function(){
	if(localStorage.getItem('admin')){
		page.redirect('/potadmin/');
	}else{
		var login= new Login();	
	}
});

page('/potadmin/slider', function(){
	if(!localStorage.getItem('admin')){
		page.redirect('/potadmin/login');
	}else{
		var app= new App();
		var slider= new Slider();
	}
});

page('/potadmin/admin', function(){
	if(!localStorage.getItem('admin')){
		page.redirect('/potadmin/');
	}else{
		var app= new App();
		var admin = new Admin();
	}
});
page('/potadmin/cabs', function(){
	if(!localStorage.getItem('admin')){
		page.redirect('/potadmin/');
	}else{
		var app= new App();
		var cabs = new Cabs();
	}
});
page('/potadmin/test', function(){
	if(!localStorage.getItem('admin')){
		page.redirect('/potadmin/');
	}else{
		var app= new App();
		var test = new Test();
	}
});
page('/potadmin/user', function(){
	if(!localStorage.getItem('admin')){
		page.redirect('/potadmin/');
	}else{
		var app= new App();
		var user = new User();
	}
});
page('/potadmin/oneway', function(){
	if(!localStorage.getItem('admin')){
		page.redirect('/potadmin/');
	}else{
		var app= new App();
		var oneway = new Oneway();
	}
});
//page('*', notfound);
page.start();
