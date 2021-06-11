var localLink= window.location.href;
var homeLink= 'http://localhost:8012/dsu/';

class Register{
	constructor(){
		document.getElementById('app').innerHTML= this.render();
		this.state= {};	
		document.getElementById('registerForm').addEventListener('submit', this.sendOTP);
	}
	sendOTP(){
		event.preventDefault();
		var phone= document.getElementById('phone').value;
		this.state={
			'phone': phone
		};
		//console.log(this.state);
		localStorage.setItem('registerState', JSON.stringify(this.state));
		window.location.href= '/dsu/otp';
	}
	
	render(){
		let transform= {'<>': 'div', 'html':[
			
			{'<>': 'section', 'html':[
				{'<>': 'div', 'class': 'container-fluid', 'html':[
					{'<>':'div', 'class': 'row', 'html':[
						{'<>':'div', 'class':'col-md-4'},
						{'<>':'div', 'class':'col-md-4', 'html':[
							{'<>': 'figure', 'html':[
								{'<>': 'center', 'html': [
									{'<>': 'img', 'src': localLink+'static/img/logo.png', 'class': 'login-logo'}
								]}
								
							]},
							{'<>': 'h4', 'html': 'Seller Register'},
							{'<>': 'form', 'id': 'registerForm', 'html':[
								{'<>': 'label', 'for': 'username', 'html': 'Enter your phone number'},
								{'<>': 'input', 'type': 'number', 'id': 'phone', 'class': 'form-control'},
								
								{'<>': 'br'},
								{'<>': 'input', 'type': 'submit', 'value': 'Generate OTP', 'class': 'form-control btn btn-primary'}
							]},
							{'<>': 'div', 'html': [
								{'<>': 'a', 'href': localLink+'login', 'html':[
									{'<>': 'p', 'html': ' Already a member? click here for login'}
								]}
							]}
							
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

class RegisterOTP{
	
	constructor(){
		document.getElementById('app').innerHTML= this.render();
		document.getElementsByClassName('error-msg')[0].style.display= 'none';
		document.getElementById('registerOTPForm').addEventListener('submit', this.validateOTP);
		this.timer();
	}
	timer(){
		var sec=90;
		var myVar = setInterval(displayTimer, 1000);
		function displayTimer(){
			document.getElementById('timer').innerHTML= sec+' sec';
			if(sec==0){
				//do something
				document.getElementById('otp').value='';
				document.getElementById('otp').readOnly= 'readOnly';
			}
			else{
				sec--;
				//displayTimer();
			}
		}
	}
	validateOTP(){
		event.preventDefault();	
		var otp= document.getElementById('otp').value;
		if(otp=='123456'){
			window.location.href= '/dsu/details';
		}else{
			document.getElementsByClassName('error-msg')[0].style.display= 'block';
			document.getElementsByClassName('error-msg')[0].style.color= 'red';
		}
	}
	render(){
		let transform= {'<>': 'div', 'html':[
			
			{'<>': 'section', 'html':[
				{'<>': 'div', 'class': 'container-fluid', 'html':[
					{'<>':'div', 'class': 'row', 'html':[
						{'<>':'div', 'class':'col-md-4'},
						{'<>':'div', 'class':'col-md-4', 'html':[
							{'<>': 'figure', 'html':[
								{'<>': 'center', 'html': [
									{'<>': 'img', 'src': homeLink+'static/img/logo.png', 'class': 'login-logo'}
								]}
								
							]},
							{'<>': 'h4', 'html': 'Enter OTP'},
							{'<>': 'h6', 'id': 'timer'},	
							{'<>': 'form', 'id': 'registerOTPForm', 'html':[
								{'<>': 'label', 'for': 'username', 'html': 'Enter your one time password'},
								{'<>': 'p', 'class': 'error-msg', 'html': 'Your OTP is incorrect. Please try again'},
								{'<>': 'input', 'type': 'number', 'id': 'otp', 'class': 'form-control'},
								
								{'<>': 'br'},
								{'<>': 'input', 'type': 'submit', 'value': 'Confirm OTP', 'class': 'form-control btn btn-primary'}
							]},
							{'<>': 'div', 'html': [
								{'<>': 'a', 'href':homeLink+'login', 'html':[
									{'<>': 'p', 'html': ' Already a member? click here for login'}
								]}
							]}
							
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

class RegisterDetails{
	constructor(){
		document.getElementById('app').innerHTML= this.render();
	}
	render(){
		let transform= {'<>': 'div', 'html':[
			
			{'<>': 'section', 'html':[
				{'<>': 'div', 'class': 'container-fluid', 'html':[
					{'<>':'div', 'class': 'row', 'html':[
						{'<>':'div', 'class':'col-md-4'},
						{'<>':'div', 'class':'col-md-4', 'html':[
							{'<>': 'figure', 'html':[
								{'<>': 'center', 'html': [
									{'<>': 'img', 'src': homeLink+'static/img/logo.png', 'class': 'login-logo'}
								]}
								
							]},
							{'<>': 'h4', 'html': 'Enter OTP'},
							{'<>': 'h6', 'id': 'timer'},	
							{'<>': 'form', 'id': 'registerOTPForm', 'html':[
								{'<>': 'label', 'for': 'username', 'html': 'Seller Name'},
								{'<>': 'input', 'type': 'text', 'id': 'otp', 'class': 'form-control', 'name': 'name'},
								{'<>': 'br'},
								
								{'<>': 'label', 'for': 'username', 'html': 'Business Name'},
								{'<>': 'input', 'type': 'text', 'id': 'business_name', 'class': 'form-control', 'name': 'business_name'},
								{'<>': 'br'},
								
								{'<>': 'label', 'for': 'email', 'html': 'Email'},
								{'<>': 'input', 'type': 'text', 'id': 'email', 'class': 'form-control', 'name': 'email'},
								{'<>': 'br'},
								
								{'<>': 'label', 'for': 'username', 'html': 'Street Address Line 1'},
								{'<>': 'input', 'type': 'text', 'id': 'street_address', 'class': 'form-control', 'name': 'stree_address'},
								{'<>': 'br'},
								{'<>': 'label', 'for': 'username', 'html': 'Street Address Line 2'},
								{'<>': 'input', 'type': 'text', 'id': 'street_address2', 'class': 'form-control', 'name': 'stree_address'},
								{'<>': 'br'},
								
								{'<>': 'label', 'for': 'username', 'html': 'City'},
								{'<>': 'input', 'type': 'text', 'id': 'city', 'class': 'form-control', 'name': 'city'},
								{'<>': 'br'},
								
								{'<>': 'label', 'for': 'username', 'html': 'state'},
								{'<>': 'input', 'type': 'text', 'id': 'state', 'class': 'form-control', 'name': 'state'},
								{'<>': 'br'},
								
								{'<>': 'label', 'for': 'username', 'html': 'Pincode'},
								{'<>': 'input', 'type': 'number', 'id': 'pincode', 'class': 'form-control', 'name': 'pincode'},
								{'<>': 'br'},
								
								{'<>': 'label', 'for': 'username', 'html': 'Street Address Line 2'},
								{'<>': 'input', 'type': 'text', 'id': 'street_address2', 'class': 'form-control', 'name': 'stree_address'},
								{'<>': 'br'},
								
								{'<>': 'label', 'for': 'aadhar', 'html': 'Aadhar'},
								{'<>': 'input', 'type': 'text', 'id': 'aadhar', 'class': 'form-control', 'name': 'aadhar'},
								{'<>': 'br'},
								
								{'<>': 'label', 'for': 'pan', 'html': 'PAN No'},
								{'<>': 'input', 'type': 'text', 'id': 'pan', 'class': 'form-control', 'name': 'pan'},
								{'<>': 'br'},
								
								
								{'<>': 'label', 'for': 'aadhar', 'html': 'GST'},
								{'<>': 'input', 'type': 'text', 'id': 'gst', 'class': 'form-control', 'name': 'gst'},
								{'<>': 'br'},
								
								{'<>': 'br'},
								{'<>': 'input', 'type': 'submit', 'value': 'Register', 'class': 'form-control btn btn-primary'}
							]},
							{'<>': 'div', 'html': [
								{'<>': 'a', 'href':homeLink+'login', 'html':[
									{'<>': 'p', 'html': ' Already a member? click here for login'}
								]}
							]}
							
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
export {Register, RegisterOTP, RegisterDetails};