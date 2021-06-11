var homeLink=  'http://localhost:8012/potadmin/';
var localLink= window.location.href;

class Cabs{
	constructor(){
		document.getElementById('section').innerHTML= this.render();
		this.data= [];
		this.table();
		
		var addCabs= this.addCabs();
		var createCabs = this.createCabs;
		console.log(addCabs);
		document.getElementById('addCabsBtn').addEventListener('click', function(){
			document.getElementById('popupBody').innerHTML= addCabs;
			document.getElementById('popup').style.display= 'block';
			document.getElementById('addCabsForm').addEventListener('submit', createCabs);
			
		})
	}
	createCabs(){
		var getdata= this.getCabs;
		event.preventDefault();
		var myForm= document.getElementById('addCabsForm');
		let formData= new FormData(myForm);
		formData.append('token', localStorage.getItem('admin'));
		$.ajax({
			type:"POST",
			url:'../pot/cab/create/',
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
					alert('cab has been added');
					
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
	updateCabs(row, name){
		var arr= row.getData();
		console.log(arr);
		
		$.ajax({
			type:"POST",
			
			url:'../pot/cab/update/',
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
	deleteCabs(id){
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/cab/delete/',
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
	addCabs(){
		let transform= {'<>': 'div', 'class': 'popup-container', 'html': [
			{'<>': 'form', 'id': 'addCabsForm', 'enctype': 'multipart/form-data', 'html': [
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Cab Name'},
				{'<>': 'input', 'type': 'text', 'name': 'name', 'id': 'name', 'class': 'form-control', 'placeholder': 'Cab Name', 'required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Image'},
				{'<>': 'input', 'type': 'file', 'name': 'cab', 'id': 'cab', 'class': 'form-control', 'placeholder': 'Cab image', 'required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Capacity'},
				{'<>': 'input', 'type': 'text', 'name': 'capacity', 'id': 'capacity', 'class': 'form-control', 'placeholder': 'Capacity', 'required': 'required'},
				{'<>': 'br'},
				
				{'<>': 'label', 'for': 'title', 'html': 'Bags'},
				{'<>': 'input', 'type': 'Number', 'name': 'bags', 'id': 'bags', 'class': 'form-control', 'placeholder': 'Bags', 'required': 'required'},
				{'<>': 'br'},
				
				{'<>': 'label', 'for': 'title', 'html': 'Description'},
				{'<>': 'textarea', 'name': 'desc', 'id': 'desc', 'class': 'form-control', 'placeholder': 'Description', 'required': 'required'},
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
						{'<>': 'button', 'class': 'btn btn-primary', 'id': 'addCabsBtn','html': 'Add Cabs <i class="fa fa-plus"></i>'}
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
		var del = this.deleteCabs;
		
		var data= this.getCabs();
		
		var update= this.updateCabs;
		
		var tbData= JSON.parse(data);
		
		this.data= tbData['data'];
		
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
				{title:"Name", field:"name", editor: 'input', cellEdited: function(row, cell){update(row, 'name')}},
				{title:"image", formatter:imageIcon, editor: 'input', cellClick: function(e, cell){showImage()}},
				{title:"capacity", field:"capacity", editor: 'input', cellEdited: function(row, cell){update(row, 'capacity')}},
				{title:"Bags", field:"bags", editor: 'input', cellEdited: function(row, cell){update(row, 'bags')}},
				
				{title:"Description", field:"desc", editor: 'input', cellEdited: function(row, cell){update(row, 'desc')}},
				
				{title:"capacity", field:"status", formatter: statusIcon, editor: 'select', editorParams: {'1': 'ACTIVE', '0': 'INACTIVE'}, cellEdited: function(row, cell){update(row, 'status')}},
				
				{title:"delete", formatter: trashIcon, cellClick: function(e, cell, row){del(cell.getRow().getData().id); cell.getRow().delete();}},
			],
		});
	}
		
	

}

export {Cabs};