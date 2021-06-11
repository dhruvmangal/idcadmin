var localLink= window.location.href;


class ProductController{

	addProductInfo(){
		event.preventDefault();
		let myForm= document.getElementById('addProductInfoForm');
		let formData= new FormData(myForm);
		formData.append('method', 'createInfo');
		formData.append('type', '1');
		formData.append('token', localStorage.getItem('adminToken'));
		$.ajax({
			type:"POST",
			url:'../backend/admin/productController.php',
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
	deleteProduct(id){
	    var flag= 0;
	    $.ajax({
			type:"POST",
			
			url:'../backend/admin/productController.php',
			data: {'method': 'delete', 'id': id, 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
			    console.log(result);
				var arr = JSON.parse(result);
				console.log(arr);
				if(arr['result']==true){
					flag= 1;
				}	
			}
		});
		return flag;
	}
	viewProduct(){
		
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/productController.php',
			data: {'method': 'view', 'token':localStorage.getItem('adminToken'), 'type': '1'},
			success: function(r){
				val= r;
			}
		})
		return val;
	}
	updateProductInfo(row, name){
		var arr= row.getData();
		
		
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/productController.php',
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
	addProductImage(id){
		event.preventDefault();
		let myForm= document.getElementById('addProductImageForm');
		let formData= new FormData(myForm);
		formData.append('method', 'createImage');
		formData.append('type', '1');
		formData.append('id', id);
		formData.append('token', localStorage.getItem('adminToken'));
		
		$.ajax({
			type:"POST",
			url:'../backend/admin/productController.php',
			data: formData,
			
			processData: false,
			contentType: false,
			success: function(result){
					var arr= JSON.parse(result);
					
					if(arr['result']==true){
						closePopupnew();
						
					}
			}
		})
	}
	
	addProductVariant(id){
		event.preventDefault();
		let myForm= document.getElementById('addProductVariantForm');
		let formData= new FormData(myForm);
		formData.append('method', 'createVariant');
		formData.append('type', '1');
		formData.append('id', id);
		formData.append('token', localStorage.getItem('adminToken'));
		
		$.ajax({
			type:"POST",
			url:'../backend/admin/productController.php',
			data: formData,
			
			processData: false,
			contentType: false,
			success: function(result){
					var arr= JSON.parse(result);
					
					if(arr['result']==true){
						closePopupnew();
						
					}
			}
		})
	}
	addProductDesc(id){
		event.preventDefault();
		let myForm= document.getElementById('addProductDescForm');
		let formData= new FormData(myForm);
		formData.append('method', 'createDescription');
		formData.append('type', '1');
		formData.append('id', id);
		formData.append('token', localStorage.getItem('adminToken'));
		
		$.ajax({
			type:"POST",
			url:'../backend/admin/productController.php',
			data: formData,
			
			processData: false,
			contentType: false,
			success: function(result){
					var arr= JSON.parse(result);
					
					if(arr['result']==true){
						closePopupnew();
						
					}
			}
		})
		
	}
	
	viewProductImage(id){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/productController.php',
			data: {'method': 'viewImage', 'token':localStorage.getItem('adminToken'), 'type': '1', 'id': id},
			success: function(r){
				val= r;
			}
		})
		console.log(val);
		return val;
	}
	deleteProductImage(id){
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/productController.php',
			data: {'method': 'deleteImage', 'id': id, 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				var arr = JSON.parse(result);
				if(arr['result']==true){
					closePopupnew();
				}	
			}
		})
	}
	
	updateProductImage(row, name){
		
		var arr= row.getData();
		
		
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/productController.php',
			data: {'method': 'updateImage', 'id': arr['id'], [name] : arr[name], 'token':localStorage.getItem('adminToken'), 'type': '1'},
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
	viewProductVariant(id){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/productController.php',
			data: {'method': 'viewVariant', 'token':localStorage.getItem('adminToken'), 'type': '1', 'id': id},
			success: function(r){
				val= r;
			}
		})
		
		return val;
	}
	
	deleteProductVariant(id){
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/productController.php',
			data: {'method': 'deleteVariant', 'id': id, 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				var arr = JSON.parse(result);
				if(arr['result']==true){
					closePopupnew();
				}	
			}
		})
	}
	
	updateProductVariant(row, name){
		var arr= row.getData();
		
		
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/productController.php',
			data: {'method': 'updateVariant', 'id': arr['id'], [name] : arr[name], 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				var arr = JSON.parse(result);	
				if(arr['result']==true){
					closePopupnew();
				}	
			}
		})
	}
	viewProductDescription(id){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/productController.php',
			data: {'method': 'viewDesc', 'token':localStorage.getItem('adminToken'), 'type': '1', 'id': id},
			success: function(r){
				val= r;
			}
		})
		
		return val;
	}
	
	deleteProductDescription(id){
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/productController.php',
			data: {'method': 'deleteDesc', 'id': id, 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				var arr = JSON.parse(result);
				if(arr['result']==true){
					closePopupnew();
				}	
			}
		})
	}
	updateProductDescription(row, name){
		var arr= row.getData();
		
		
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/productController.php',
			data: {'method': 'updateDesc', 'id': arr['id'], [name] : arr[name], 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				var arr = JSON.parse(result);	
				if(arr['result']==true){
					closePopupnew();
				}	
			}
		})
	}
}

export {ProductController};