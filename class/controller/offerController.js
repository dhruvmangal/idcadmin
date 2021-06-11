var localLink= window.location.href;

class OfferController{
	
	createOffer(){
		event.preventDefault();
		let myForm= document.getElementById('addOfferForm');
		let formData= new FormData(myForm);
		formData.append('method', 'create');
		formData.append('type', '1');
		formData.append('token', localStorage.getItem('adminToken'));
		$.ajax({
			type:"POST",
			url:'../backend/admin/categoryDiscountController.php',
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
	viewOffer(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/categoryDiscountController.php',
			data: {'method': 'view', 'token':localStorage.getItem('adminToken'), 'type': '1'},
			success: function(r){
				val= r;
			}
		})
		return val;
	}
	deleteOffer(id){
		var flag= false;
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/categoryDiscountController.php',
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
	updateOffer(row, name){
		var arr= row.getData();
		
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/categoryDiscountController.php',
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

export {OfferController};