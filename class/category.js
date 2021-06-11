var localLink= window.location.href;


class Category{
	constructor(){
		document.getElementById('section').innerHTML= this.render();
		
		
	}
	render(){
		var categoryPanel= this.categoryPanel();
		//var viewCategory= this.viewCategory();
		return categoryPanel;
	}
	categoryPanel(){
		let transform= {'<>': 'div', 'class': 'section-panel dashboard-panel', 'html':[
			{'<>': 'div', 'class': 'container-fluid', 'html':[
				{'<>': 'div', 'class': 'row', 'html':[
					{'<>': 'div', 'class': 'col-md-12', 'html': [
						{'<>': 'div', 'class': 'action-panel', 'html': [
							{'<>': 'a', 'href': 'addcategory', 'html':[
								{'<>': 'button', 'id': 'addCategoryBtn', 'class': 'btn btn-primary', 'html': ' &plus; Add Category'}
							]},
							
						]}
					]}
				]},
				{'<>': 'div', 'class': 'row', 'html':[
					{'<>': 'div', 'class': 'col-md-12', 'html':[
						{'<>': 'div', 'id': 'table'}
					]}
				]}
			]}
		]};
		var doc =  (json2html.transform({},transform));
		return doc;
		
	}
	categoryTable(){
		
		
	}
	addCategory(){
		let transform= {'<>': 'div', 'class': 'addCategoryPanel', 'html':[
			{'<>': 'form', 'id': 'addCategoryForm', 'enctype': 'multipart/form-data', 'html':[
				{'<>': 'label', 'for': 'Category Name', 'html': 'Category Name'},
				{'<>': 'input', 'type': 'text', 'class': 'form-control', 'name': 'name'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'Category Image'},
				{'<>': 'input', 'type': 'file', 'class': 'form-control', 'name': 'fileToUpload'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'Category Currency '},
				{'<>': 'select', 'class': 'form-control', 'name': 'currency', 'html':[
					{'<>':'option', 'value': 'INR', 'html': 'Indian National Ruppes (INR)'}
				]},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'Category Unit '},
				{'<>': 'select', 'class': 'form-control', 'name': 'unit', 'html':[
					{'<>':'option', 'value': 'KG', 'html': 'Kilogram (KG)'},
					{'<>':'option', 'value': 'Gm', 'html': 'Gram (Gm)'},
					{'<>':'option', 'value': 'Ltr', 'html': 'Liter (Ltr)'},
					{'<>':'option', 'value': 'ML', 'html': 'Mili Liter (Ml)'},
					{'<>':'option', 'value': 'Unit', 'html': 'Unit'},
				]},
				{'<>': 'br'},
				{'<>': 'input', 'type': 'submit', 'class': 'form-control btn btn-primary', 'value': 'Add Category'}
				
				
			]}
		]};
		var doc =  (json2html.transform({},transform));
		return doc;
		
	}
	viewCategory(arr){
		
		
		
	}
}

export {Category};