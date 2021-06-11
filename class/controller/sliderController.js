var localLink= window.location.href;

class SliderController{
	
	addSlider(){
		event.preventDefault();
		let myForm= document.getElementById('addSliderForm');
		let formData= new FormData(myForm);
		formData.append('method', 'create');
		formData.append('type', '1');
		formData.append('token', localStorage.getItem('adminToken'));
		$.ajax({
			type:"POST",
			url:'../backend/admin/sliderController.php',
			data: formData,
			
			processData: false,
			contentType: false,
			success: function(result){
				console.log(result);
				if(result['result']== 'true'){
					window.history.back();
				}
			}
		})
		
	}
	viewSlider(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/sliderController.php',
			data: {'method': 'view', 'token':localStorage.getItem('adminToken'), 'type': '1'},
			success: function(r){
				val= r;
			}
		})
		return val;
	}
	
	updateSlider(row, name){
		
		var arr= row.getData();
		console.log(arr);
		
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/sliderController.php',
			data: {'method': 'update', 'id': arr['id'], [name] : arr[name], 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				if(result['result']==true){
					
				}	
			}
		})
	}
	
	deleteSlider(id){
		
		
		
		$.ajax({
			type:"POST",
			
			url:'../backend/admin/sliderController.php',
			data: {'method': 'delete', 'id': id, 'token':localStorage.getItem('adminToken'), 'type': '1'},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				if(result['result']==true){
					table.updateData(this.viewSlider());
				}	
			}
		})
		
	}
}

export {SliderController};