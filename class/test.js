var homeLink=  'http://localhost:8012/potadmin/';
var localLink= window.location.href;


class Test{
	constructor(){
		document.getElementById('section').innerHTML= this.render();
		this.data= [];
		this.table();
		
		var addTest= this.addTest();
		var createTest = this.createTest;
		//console.log(addCabs);
		document.getElementById('addTestBtn').addEventListener('click', function(){
			document.getElementById('popupBody').innerHTML= addTest;
			document.getElementById('popup').style.display= 'block';
			document.getElementById('addTestForm').addEventListener('submit', createTest);
			
		})
	}
	createTest(){
		//var getdata= this.getCabs;
		event.preventDefault();
		var myForm= document.getElementById('addTestForm');
		let formData= new FormData(myForm);
		formData.append('token', localStorage.getItem('admin'));
		$.ajax({
			type:"POST",
			url:'../pot/test/create/',
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
					alert('Testimonial has been added');
					
				}
			}
		});
	}
	getTest(){
		var val='';
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/test/view/',
			data: {'token': localStorage.getItem('admin'), 'status': '1'},
			success: function(res){
				
				val = res;
			}
		})
		return val;
	}
	
	updateTest(row, name){
		var arr= row.getData();
		console.log(arr);
		
		$.ajax({
			type:"POST",
			
			url:'../pot/test/update/',
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
	deleteTest(id){
		$.ajax({
			async: false,
			type: 'POST',
			url: '../pot/test/delete/',
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
	addTest(){
		let transform= {'<>': 'div', 'class': 'popup-container', 'html': [
			{'<>': 'form', 'id': 'addTestForm', 'enctype': 'multipart/form-data', 'html': [
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Testimonial Name'},
				{'<>': 'input', 'type': 'text', 'name': 'name', 'id': 'name', 'class': 'form-control', 'placeholder': 'Testimonial Name', 'required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'title', 'html': 'Testimonial Image'},
				{'<>': 'input', 'type': 'file', 'name': 'image', 'id': 'image', 'class': 'form-control', 'placeholder': 'Testimonial image', 'required': 'required'},
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
						{'<>': 'button', 'class': 'btn btn-primary', 'id': 'addTestBtn','html': 'Add Testimonial <i class="fa fa-plus"></i>'}
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
		var del = this.deleteTest;
		
		var data= this.getTest();
		
		var update= this.updateTest;
		
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
				{title:"Description", field:"desc", editor: 'input', cellEdited: function(row, cell){update(row, 'desc')}},
				{title:"Status", field:"status", formatter: statusIcon, editor: 'select', editorParams: {'1': 'ACTIVE', '0': 'INACTIVE'}, cellEdited: function(row, cell){update(row, 'status')}},
				
				{title:"delete", formatter: trashIcon, cellClick: function(e, cell, row){del(cell.getRow().getData().id); cell.getRow().delete();}},
			],
		});
	}
	
}
export {Test};