var homeLink=  'http://localhost:8012/potadmin/';
var localLink= window.location.href;

class Admin{
	constructor(){
		document.getElementById('section').innerHTML= this.render();
		this.table();
		var createAdmin = this.createAdmin;
		var addAdmin= this.addAdmin();
		document.getElementById('addAdminBtn').addEventListener('click', function(){
			document.getElementById('popupBody').innerHTML= addAdmin;
			document.getElementById('popup').style.display= 'block';
			document.getElementById('addAdminForm').addEventListener('submit', createAdmin);
			
		})
	}
	createAdmin(){
		var getdata= this.getAdmin;
		event.preventDefault();
		var myForm= document.getElementById('addAdminForm');
		let formData= new FormData(myForm);
		formData.append('token', localStorage.getItem('admin'));
		$.ajax({
			type:"POST",
			url:'../pot/admin/auth/signup/',
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
					alert('admin has been added');
					
				}
			}
		});
		
		var data= getdata;
		
		var tbData= JSON.parse(data);
		
		this.data= tbData['data'];
	}
	getAdmin(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/admin/view/',
			data: {'token': localStorage.getItem('admin'), 'status': '1'},
			success: function(res){
				
				val = res;
			}
		})
		return val;
	}
	updateAdmin(row, name){
		var arr= row.getData();
		console.log(arr);
		
		$.ajax({
			type:"POST",
			
			url:'../pot/admin/update/',
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
	deleteAdmin(id){
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/admin/delete/',
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
	addAdmin(){
		let transform= {'<>': 'div', 'class': 'popup-container', 'html': [
			{'<>': 'form', 'id': 'addAdminForm', 'enctype': 'multipart/form-data', 'html': [
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Admin Name'},
				{'<>': 'input', 'type': 'text', 'name': 'name', 'id': 'name', 'class': 'form-control', 'placeholder': 'Enter name here', 'required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Phone'},
				{'<>': 'input', 'type': 'number', 'name': 'phone', 'id': 'phone', 'class': 'form-control', 'placeholder': 'phone', 'required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Password'},
				{'<>': 'input', 'type': 'number', 'name': 'password', 'id': 'password', 'class': 'form-control', 'placeholder': 'Enter your password', 'required': 'required'},
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
					{'<>': 'div', 'class': 'col-md-10'},
					{'<>': 'div', 'class': 'col-md-2', 'html':[
						{'<>': 'button', 'class': 'btn btn-primary', 'id': 'addAdminBtn','html': 'Add Admin <i class="fa fa-plus"></i>'}
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
		var del = this.deleteAdmin;
		
		var data= this.getAdmin();
		
		var update= this.updateAdmin;
		
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
			return "<img class= 'slider-img' src='../pot/view/"+cell.getData().slide+"'></i>";
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
				{column:"name", dir:"asc"},
			],
			columns:[                 //define the table columns
				{title:"Name", field:"name", editor: 'input', cellEdited: function(row, cell){update(row, 'name')}},
				{title:"Phone", field:"phone", editor: 'input', cellEdited: function(e, cell){update(row, 'phone')}},
				{title:"delete", formatter: trashIcon, cellClick: function(e, cell, row){del(cell.getRow().getData().id); cell.getRow().delete();}},
			],
		});
	}
	
}

export {Admin};