
var localLink= window.location.href;

class LoginController{

	login(){
		event.preventDefault();
		let myForm= document.getElementById('loginForm');
		let formData= new FormData(myForm);
		formData.append('method', 'login');
		$.ajax({
			type:"POST",
			url:'../backend/admin/adminController.php',
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false,
			success: function(result){
				localStorage.setItem("adminToken", result['token']);
				window.location.href='/grocery/admin/';
			}
		})
	
	}
}

export {LoginController};