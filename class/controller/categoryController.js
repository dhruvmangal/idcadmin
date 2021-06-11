var localLink= window.location.href;


class CategoryController{

	addCategory(){
		event.preventDefault();
		let myForm= document.getElementById('addCategoryForm');
		let formData= new FormData(myForm);
		formData.append('method', 'create');
		formData.append('type', '1');
		formData.append('token', localStorage.getItem('adminToken'));
		$.ajax({
			type:"POST",
			url:'../backend/admin/categoryController.php',
			data: formData,
			
			processData: false,
			contentType: false,
			success: function(result){
					if(result['result']=='true'){
						window.history.back();
					}
			}
		})
	}
	
	viewCategory(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/categoryController.php',
			data: {'method': 'view', 'token':localStorage.getItem('adminToken'), 'type': '1'},
			success: function(r){
				val= r;
			}
		})
		return val;
		
	}
	updateCategory(row, name){
		
		var arr= row.getData();
		console.log(arr);
		
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/categoryController.php',
			data: {'method': 'update', 'id': arr['id'], [name] : arr[name], 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				if(result==1){
					alert('update successful');
				}	
			}
		})
	}
	
}

export {CategoryController};