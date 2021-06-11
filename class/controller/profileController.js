var localLink= window.location.href;


class ProfileController{

	addAdmin(){
		event.preventDefault();
		let myForm= document.getElementById('addAdminForm');
		let formData= new FormData(myForm);
		formData.append('method', 'create');
		formData.append('type', '1');
		formData.append('token', localStorage.getItem('adminToken'));
		$.ajax({
			type:"POST",
			url:'../backend/admin/adminController.php',
			data: formData,
			processData: false,
			contentType: false,
			success: function(result){
					var arr= JSON.parse(result);
					if(arr['result']==true){
						window.history.back();
					}
			}
		})
	
	}
	viewAdmin(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/adminController.php',
			data: {'method': 'view', 'token':localStorage.getItem('adminToken'), 'type': '1'},
			success: function(r){
				val= r;
			}
		})
		return val;
	}
	deleteAdmin(id){
		alert(id);
		var flag= false;
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/adminController.php',
			data: {'method': 'delete', 'id': id, 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				var arr= JSON.parse(result);
				if(arr['result']==true){
					flag= true;
					
				}	
			}
			
		});
		
	}
	updateAdmin(row, name){
		var arr= row.getData();
		console.log(arr);
		
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/adminController.php',
			data: {'method': 'update', 'id': arr['id'], [name] : arr[name], 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				var arr= JSON.parse(result);
				if(arr['result']==1){
					alert('update successful');
				}	
			}
		})
	}
}

export {ProfileController};