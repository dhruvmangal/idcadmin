var homeLink=  'http://localhost:8012/potadmin/';
var localLink= window.location.href;

class Oneway{
	constructor(){
		document.getElementById('section').innerHTML= this.render();
		this.data= [];
		this.table();
		
		var addOneway= this.addOneway();
		var createOneway = this.createOneway;
		//console.log(addCabs);
		document.getElementById('addOnewayBtn').addEventListener('click', function(){
			document.getElementById('popupBody').innerHTML= addOneway;
			document.getElementById('popup').style.display= 'block';
			document.getElementById('addOnewayForm').addEventListener('submit', createOneway);
			
		})
	}
	createOneway(){
		event.preventDefault();
		var myForm= document.getElementById('addOnewayForm');
		let formData= new FormData(myForm);
		formData.append('token', localStorage.getItem('admin'));
		$.ajax({
			type:"POST",
			url:'../pot/oneway/create/',
			data: formData,
			
			processData: false,
			contentType: false,
			beforeSend: function(){
				alert('processing');
			},
			success: function(result){
				var res= JSON.parse(result);
				if(res['flag']==true){
					document.getElementById('popup').style.display= 'none';
					//alert('Oneway has been added');
					window.reload();
				}
			}
		});
	}
	getOneway(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/oneway/view/',
			data: {'token': localStorage.getItem('admin'), 'status': '1'},
			success: function(res){
				
				val = res;
			}
		})
		return val;
	}
	updateOneway(row, name){
		var arr= row.getData();
		console.log(arr);
		
		$.ajax({
			type:"POST",
			
			url:'../pot/oneway/update/',
			data: {'id': arr['id'], [name] : arr[name], 'token':localStorage.getItem('admin')},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				if(result['result']==true){
					
				}	
			}
		})
	}
	deleteOneway(id){
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/oneway/delete/',
			data: {'token': localStorage.getItem('admin'), 'id': id},
			success: function(res){
				var result= JSON.parse(res);
				if(result['auth'] == true && result['data'] == true){
					//alert('Slider Deleted Successfully');
					//table.updateData(this.viewSlider());
				}
			}
		})
	}
	addOneway(){
		let transform= {'<>': 'div', 'class': 'popup-container', 'html': [
			{'<>': 'form', 'id': 'addOnewayForm', 'enctype': 'multipart/form-data', 'html': [
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Origin'},
				{'<>': 'input', 'type': 'text', 'name': 'origin', 'id': 'origin', 'class': 'form-control', 'placeholder': 'Origin City', 'required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Destination'},
				{'<>': 'input', 'type': 'text', 'name': 'destination', 'id': 'destination', 'class': 'form-control', 'placeholder': 'Destination City', 'required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Kilometers'},
				{'<>': 'input', 'type': 'text', 'name': 'km', 'id': 'km', 'class': 'form-control', 'placeholder': 'Kilometers', 'required': 'required'},
				{'<>': 'br'},
				
				
				
				{'<>': 'input', 'type': 'submit', 'class': 'btn btn-primary form-control', 'value': 'Add'}
			]}
		]};
		var doc =  (json2html.transform({},transform));
		return doc;
	}
	render(){
		let transform= {'<>': 'div', 'html':[
			{'<>': 'div', 'class': 'container-fluid', 'html':[
				{'<>': 'div', 'class': 'row', 'html': [
					{'<>': 'div', 'class': 'col-md-12', 'html':[
						{'<>': 'button', 'class': 'btn btn-primary', 'id': 'addOnewayBtn','html': 'Add Oneway <i class="fa fa-plus"></i>'}
					]},
					
				]},
				{'<>': 'div', 'class': 'row', 'html': [
					{'<>': 'div', 'class': 'col-md-1'},
					{'<>': 'div', 'class': 'col-md-10', 'html':[
						{'<>': 'div', 'id': 'table'}
					]},
					{'<>': 'div', 'class': 'col-md-1'},
					
				]}
			]}
		]};
		var doc =  (json2html.transform({},transform));
		return doc;
	}
	table(){
		/* functions */ 
		var del = this.deleteOneway;
		
		var data= this.getOneway();
		
		var update= this.updateOneway;
		
		var tbData= JSON.parse(data);
		
		this.data= tbData['data'];
		
		/*one way cab*/
		var addOnewayCab = this.addOnewayCab;
		var createOnewayCabs = this.createOnewayCabs;
		var getOnewayCab = this.getOnewayCab;
		
		var cabTable =this.cabTable;
		
		var updateOnewayCabs = this.updateOnewayCabs;
		var deleteOnewayCabs = this.deleteOnewayCabs;
		var cabRender = this.cabRender;
		/* end oneway cabs*/
		
		/* oneway fair */
		
		var addOnewayFair= this.addOnewayFair;
		var createOnewayFair = this.createOnewayFair;
		var getOnewayFair = this.getOnewayFair;
		var updateOnewayFair= this.updateOnewayFair;
		var deleteOnewayFair= this.deleteOnewayFair;
		var fairRender = this.fairRender;
		var fairTable =this.fairTable;

		/* oneway fair ends*/
		var getCabs = this.getCabs;
		/* icons */
		var statusIcon= function(cell, formatterParams){
			if(cell.getData().status==1){
				return 'ACTIVE';
			}
			
			else{
				return "INACTIVE";
			}
		};
		var trashIcon= function(cell, formatterParams){
			return "<i class='fa fa-trash'></i>";
		};
		var eyeIcon= function(cell, formatterParams){
			return "<i class='fa fa-eye'></i>";
		};
		var plusIcon= function(cell, formatterParams){
			return "<i class='fa fa-plus'></i>";
		};
		var imageIcon= function(cell, formatterParams){
			return "<img class= 'slider-img' src='../pot/view/"+cell.getData().image+"'></i>";
		};
		 this.table = new Tabulator("#table", {
				
			downloadRowRange: 'all',
			reactiveData:true,
			height: 500,
				
			data: this.data,           //load row data from array
			layout:"fitData",      //fit columns to width of table
				
			tooltips:true,            //show tool tips on cells
			addRowPos:"top",          //when adding a new row, add it to the top of the table
			history:true,             //allow undo and redo actions on the table
			pagination:"local",       //paginate the data
			paginationSize:9,         //allow 7 rows per page of data
			movableColumns:true,      //allow column order to be changed
			resizableRows:true,       //allow row order to be changed
			initialSort:[             //set the initial sort order of the data
				{column:"Title", dir:"asc"},
			],
			columns:[                 //define the table columns
				{title:"Origin", field:"origin", editor: 'input', cellEdited: function(row, cell){update(row, 'origin')}},
				{title:"Destination", field:"destination", editor: 'input', cellEdited: function(row, cell){update(row, 'destination')}},
				{title:"Kilometers", field:"km", editor: 'input', cellEdited: function(row, cell){update(row, 'km')}},
				
				
				{title:"Status", field:"status", formatter: statusIcon, editor: 'select', editorParams: {'1': 'ACTIVE', '0': 'INACTIVE'}, cellEdited: function(row, cell){update(row, 'status')}},
				
				{formatter: plusIcon, title:"Add Cabs", cellClick: function(row, cell){addOnewayCab(cell.getRow().getData().id, getCabs);   document.getElementById('addOnewayCabsForm').addEventListener('submit', function(){createOnewayCabs();}); }   },
				{title:"View Cabs", formatter: eyeIcon, cellClick: function(row, cell){$.when(cabRender(cell.getRow().getData().id)).then(cabTable(getOnewayCab, updateOnewayCabs, deleteOnewayCabs))}},
				
				{formatter: plusIcon, title:"Add Fair", cellClick: function(row, cell){addOnewayFair(cell.getRow().getData().id);   document.getElementById('addOnewayFairForm').addEventListener('submit', function(){createOnewayFair();}); }   },
				{title:"View Fair", formatter: eyeIcon, cellClick: function(row, cell){$.when(fairRender(cell.getRow().getData().id)).then(fairTable(getOnewayFair, updateOnewayFair, deleteOnewayFair))}},
				
				{title:"delete", formatter: trashIcon, cellClick: function(e, cell, row){del(cell.getRow().getData().id); cell.getRow().delete();}},
			],
		});
	}
		
	createOnewayCabs(){
		event.preventDefault();
		var myForm= document.getElementById('addOnewayCabsForm');
		let formData= new FormData(myForm);
		formData.append('token', localStorage.getItem('admin'));
		$.ajax({
			type:"POST",
			url:'../pot/onewaycabs/create/',
			data: formData,
			
			processData: false,
			contentType: false,
			beforeSend: function(){
				alert('processing');
			},
			success: function(result){
				var res= JSON.parse(result);
				if(res['flag']==true){
					document.getElementById('popup').style.display= 'none';
					//alert('Oneway has been added');
					window.reload();
				}
			}
		});
	}
	getCabs(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/cab/view/',
			data: {'token': localStorage.getItem('admin'), 'status': '1'},
			success: function(res){
				
				val = res;
			}
		})
		return val;
	}
	getOnewayCab(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/onewaycabs/view/',
			data: {'token': localStorage.getItem('admin'), 'status': '1'},
			success: function(res){
				
				val = res;
			}
		})
		return val;
	}
	updateOnewayCabs(row, name){
		var arr= row.getData();
		
		
		$.ajax({
			type:"POST",
			
			url:'../pot/onewaycabs/update/',
			data: {'id': arr['id'], [name] : arr[name], 'token':localStorage.getItem('admin')},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				if(result['result']==true){
					
				}	
			}
		})
	}
	deleteOnewayCabs(id){
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/onewaycabs/delete/',
			data: {'token': localStorage.getItem('admin'), 'id': id},
			success: function(res){
				var result= JSON.parse(res);
				if(result['auth'] == true && result['data'] == true){
					//alert('Slider Deleted Successfully');
					//table.updateData(this.viewSlider());
				}
			}
		})
	}
	addOnewayCab(id, getCabs){
		var cab = getCabs();
		var tbData= JSON.parse(cab);
		
		var data= tbData['data'];
		let transform= { 	
		'parent': {'<>': 'div', 'class': 'popup-container', 'html': [
			{'<>': 'form', 'id': 'addOnewayCabsForm', 'enctype': 'multipart/form-data', 'html': [
				{'<>': 'br'},
				{'<>': 'input', 'type': 'hidden', 'name': 'id', 'value': function(){ return id;}},
				{'<>': 'label', 'for': 'title', 'html': 'Cab'},
				{'<>': 'select', 'name': 'cab_id', 'id': 'cab_id', 'class': 'form-control', 'placeholder': '', 'required': 'required' , 'html': function(){
					return(json2html.transform(data, transform.child));
				}},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Price / Km'},
				{'<>': 'input', 'type': 'text', 'name': 'price', 'id': 'price', 'class': 'form-control', 'placeholder': 'Price', 'required': 'required'},
				{'<>': 'br'},
				
				
				
				{'<>': 'input', 'type': 'submit', 'class': 'btn btn-primary form-control', 'value': 'Add'}
			]}
		]},
		'child': {'<>': 'div', 'html': [
			{'<>': 'option', 'value': '${id}', 'html': '${name}'}
		]}
		};
		var doc =  (json2html.transform({},transform.parent));
		document.getElementById('popupBody').innerHTML= doc;
		document.getElementById('popup').style.display= 'block';
		
	}
	cabRender(){
		let transform= {'<>': 'div', 'id': 'cabTable'};
		var doc =  (json2html.transform({},transform));
		document.getElementById('popupBody').innerHTML= doc;
		document.getElementById('popup').style.display= 'block';
	}
	cabTable(get, update, del){
		var cabs =get();
		var tbData= JSON.parse(cabs);
		
		var data= tbData['data'];
		
		
		/* icons */
		var statusIcon= function(cell, formatterParams){
			if(cell.getData().status==1){
				return 'ACTIVE';
			}
			
			else{
				return "INACTIVE";
			}
		};
		var trashIcon= function(cell, formatterParams){
			return "<i class='fa fa-trash'></i>";
		};
		var eyeIcon= function(cell, formatterParams){
			return "<i class='fa fa-eye'></i>";
		};
		var plusIcon= function(cell, formatterParams){
			return "<i class='fa fa-plus'></i>";
		};
		var imageIcon= function(cell, formatterParams){
			return "<img class= 'slider-img' src='../pot/view/"+cell.getData().image+"'></i>";
		};
		 this.table = new Tabulator("#cabTable", {
				
			downloadRowRange: 'all',
			reactiveData:true,
			height: 500,
				
			data: data,           //load row data from array
			layout:"fitData",      //fit columns to width of table
				
			tooltips:true,            //show tool tips on cells
			addRowPos:"top",          //when adding a new row, add it to the top of the table
			history:true,             //allow undo and redo actions on the table
			pagination:"local",       //paginate the data
			paginationSize:9,         //allow 7 rows per page of data
			movableColumns:true,      //allow column order to be changed
			resizableRows:true,       //allow row order to be changed
			initialSort:[             //set the initial sort order of the data
				{column:"Title", dir:"asc"},
			],
			columns:[                 //define the table columns
				{title:"Cab", field:"cab_name", editor: 'input'},
				{title:"Price", field:"price", editor: 'input', cellEdited: function(row, cell){update(row, 'price')}},
				{title:"Status", field:"status", formatter: statusIcon, editor: 'select', editorParams: {'1': 'ACTIVE', '0': 'INACTIVE'}, cellEdited: function(row, cell){update(row, 'status')}},
				
				
				{title:"delete", formatter: trashIcon, cellClick: function(e, cell, row){del(cell.getRow().getData().id); cell.getRow().delete();}},
			],
		});
	}
	
	createOnewayFair(){
		event.preventDefault();
		var myForm= document.getElementById('addOnewayFairForm');
		let formData= new FormData(myForm);
		formData.append('token', localStorage.getItem('admin'));
		$.ajax({
			type:"POST",
			url:'../pot/onewayfair/create/',
			data: formData,
			
			processData: false,
			contentType: false,
			beforeSend: function(){
				alert('processing');
			},
			success: function(result){
				var res= JSON.parse(result);
				if(res['flag']==true){
					document.getElementById('popup').style.display= 'none';
					//alert('Oneway has been added');
					window.reload();
				}
			}
		});
	}
	getOnewayFair(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/onewayfair/view/',
			data: {'token': localStorage.getItem('admin'), 'status': '1'},
			success: function(res){
				
				val = res;
			}
		})
		return val;
	}
	updateOnewayFair(row, name){
		var arr= row.getData();
		console.log(arr);
		
		$.ajax({
			type:"POST",
			
			url:'../pot/onewayfair/update/',
			data: {'id': arr['id'], [name] : arr[name], 'token':localStorage.getItem('admin')},
			//dataType: 'json',
			//processData: false,
			//contentType: false,
			success: function(result){
				if(result['result']==true){
					
				}	
			}
		})
	}
	deleteOnewayFair(id){
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/onewayfair/delete/',
			data: {'token': localStorage.getItem('admin'), 'id': id},
			success: function(res){
				var result= JSON.parse(res);
				if(result['auth'] == true && result['data'] == true){
					//alert('Slider Deleted Successfully');
					//table.updateData(this.viewSlider());
				}
			}
		})
	}
	addOnewayFair(id){
		let transform= {'<>': 'div', 'class': 'popup-container', 'html': [
			{'<>': 'form', 'id': 'addOnewayFairForm', 'enctype': 'multipart/form-data', 'html': [
				{'<>': 'br'},
				{'<>': 'input', 'type': 'hidden', 'name': 'id', 'value': function(){ return id;}},
				{'<>': 'label', 'for': 'title', 'html': 'Base Fair'},
				{'<>': 'input', 'type':'number', 'name': 'base_fair', 'id': 'base_fair', 'class': 'form-control', 'placeholder': '', 'required': 'required' },
				{'<>': 'br'},
				
				{'<>': 'label', 'for': 'title', 'html': 'Toll Tax'},
				{'<>': 'input', 'type': 'number', 'name': 'toll_tax', 'id': 'toll_tax', 'class': 'form-control', 'placeholder': 'Price', 'required': 'required'},
				{'<>': 'br'},
				
				{'<>': 'label', 'for': 'title', 'html': 'Fuel Charge'},
				{'<>': 'input', 'type': 'number', 'name': 'fuel_charge', 'id': 'fuel_charge', 'class': 'form-control', 'placeholder': 'Price', 'required': 'required'},
				{'<>': 'br'},
				
				{'<>': 'label', 'for': 'title', 'html': 'KMs Charge'},
				{'<>': 'input', 'type': 'number', 'name': 'kms_charge', 'id': 'kms_charge', 'class': 'form-control', 'placeholder': 'Price', 'required': 'required'},
				{'<>': 'br'},
				
				{'<>': 'label', 'for': 'title', 'html': 'Driver Allowance'},
				{'<>': 'input', 'type': 'number', 'name': 'driver_allowance', 'id': 'driver_allowance', 'class': 'form-control', 'placeholder': 'Price', 'required': 'required'},
				{'<>': 'br'},
				
				{'<>': 'label', 'for': 'title', 'html': 'Parking / Airtport'},
				{'<>': 'input', 'type': 'number', 'name': 'parking', 'id': 'parking', 'class': 'form-control', 'placeholder': 'Price', 'required': 'required'},
				{'<>': 'br'},
				
				{'<>': 'label', 'for': 'title', 'html': 'Pickup'},
				{'<>': 'input', 'type': 'number', 'name': 'pickup', 'id': 'pickup', 'class': 'form-control', 'placeholder': 'Price', 'required': 'required'},
				{'<>': 'br'},
				
				{'<>': 'label', 'for': 'title', 'html': 'Others'},
				{'<>': 'input', 'type': 'number', 'name': 'other', 'id': 'other', 'class': 'form-control', 'placeholder': 'Price', 'required': 'required'},
				{'<>': 'br'},
				
				{'<>': 'input', 'type': 'submit', 'class': 'btn btn-primary form-control', 'value': 'Add'}
			]}
		]};
		var doc =  (json2html.transform({},transform));
		document.getElementById('popupBody').innerHTML= doc;
		document.getElementById('popup').style.display= 'block';
		
	}
	
	fairRender(){
		let transform= {'<>': 'div', 'id': 'fairTable'};
		var doc =  (json2html.transform({},transform));
		document.getElementById('popupBody').innerHTML= doc;
		document.getElementById('popup').style.display= 'block';
	}
	
	fairTable(get, update, del){
		var cabs =get();
		var tbData= JSON.parse(cabs);
		
		var data= tbData['data'];
		
		
		/* icons */
		var statusIcon= function(cell, formatterParams){
			if(cell.getData().status==1){
				return 'ACTIVE';
			}
			
			else{
				return "INACTIVE";
			}
		};
		var trashIcon= function(cell, formatterParams){
			return "<i class='fa fa-trash'></i>";
		};
		var eyeIcon= function(cell, formatterParams){
			return "<i class='fa fa-eye'></i>";
		};
		var plusIcon= function(cell, formatterParams){
			return "<i class='fa fa-plus'></i>";
		};
		var imageIcon= function(cell, formatterParams){
			return "<img class= 'slider-img' src='../pot/view/"+cell.getData().image+"'></i>";
		};
		 this.table = new Tabulator("#fairTable", {
				
			downloadRowRange: 'all',
			reactiveData:true,
			height: 500,
				
			data: data,           //load row data from array
			layout:"fitData",      //fit columns to width of table
				
			tooltips:true,            //show tool tips on cells
			addRowPos:"top",          //when adding a new row, add it to the top of the table
			history:true,             //allow undo and redo actions on the table
			pagination:"local",       //paginate the data
			paginationSize:9,         //allow 7 rows per page of data
			movableColumns:true,      //allow column order to be changed
			resizableRows:true,       //allow row order to be changed
			initialSort:[             //set the initial sort order of the data
				{column:"Title", dir:"asc"},
			],
			columns:[                 //define the table columns
				{title:"Base Fair", field:"base_fair", editor: 'input', cellEdited: function(row, cell){update(row, 'base_fair')}},
				{title:"Toll Tax", field:"toll_tax", editor: 'input', cellEdited: function(row, cell){update(row, 'toll_tax')}},
				{title:"Fuel Charge", field:"fuel_charge", editor: 'input', cellEdited: function(row, cell){update(row, 'fuel_charge')}},
				{title:"KMs Charge", field:"kms_charge", editor: 'input', cellEdited: function(row, cell){update(row, 'kms_charge')}},
				{title:"Driver Allowance", field:"kms_charge", editor: 'input', cellEdited: function(row, cell){update(row, 'driver_allowance')}},
				{title:"Parking", field:"parking", editor: 'input', cellEdited: function(row, cell){update(row, 'parking')}},
				{title:"Pickup", field:"pickup", editor: 'input', cellEdited: function(row, cell){update(row, 'pickup')}},
				{title:"Others", field:"other", editor: 'input', cellEdited: function(row, cell){update(row, 'other')}},
				{title:"delete", formatter: trashIcon, cellClick: function(e, cell, row){del(cell.getRow().getData().id); cell.getRow().delete();}},
			],
		});
	}
	
}

export {Oneway};