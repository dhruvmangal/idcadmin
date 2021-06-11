var localLink= window.location.href;


class OrderController{
	
	viewOrder(){
		
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/orderController.php',
			data: {'method': 'view', 'token':localStorage.getItem('adminToken'), 'type': '1'},
			success: function(r){
				val= r;
			}
		})
		return val;
	}
	viewOrderItem(id){
	    var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../backend/admin/orderController.php',
			data: {'method': 'viewItem', 'token':localStorage.getItem('adminToken'), 'type': '1', 'id': id},
			success: function(r){
				val= r;
			}
		})
		return val;
	}
}

export {OrderController};