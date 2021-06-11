
var localLink= window.location.href;


class UserController{
	
	addUser(){
		event.preventDefault();
		let myForm= document.getElementById('addUserForm');
		let formData= new FormData(myForm);
		formData.append('method', 'create');
		formData.append('type', '1');
		formData.append('token', localStorage.getItem('adminToken'));
		$.ajax({
			type:"POST",
			url:'../backend/admin/userController.php',
			data: formData,
			
			processData: false,
			contentType: false,
			success: function(result){
					if(result['result']!=0){
						window.history.back();
					}
			}
		})
	}
	viewUser(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/userController.php',
			data: {'method': 'viewAdmin', 'token':localStorage.getItem('adminToken'), 'type': '1'},
			success: function(r){
				val= r;
			}
		})
		return val;
	}
}

export {UserController};