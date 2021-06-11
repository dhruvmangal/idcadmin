var localLink= window.location.href;

class Product{

	constructor(){
		
	}
	render(){
		var productPanel= this.productPanel();
		return productPanel;
	}
	productPanel(){
		let transform= {'<>': 'div', 'class': 'section-panel dashboard-panel', 'html':[
			{'<>': 'div', 'class': 'container-fluid', 'html':[
				{'<>': 'div', 'class': 'row', 'html':[
					{'<>': 'div', 'class': 'col-md-12', 'html': [
						{'<>': 'div', 'class': 'action-panel', 'html': [
							{'<>': 'a', 'href': 'addproduct', 'html':[
								{'<>': 'button', 'id': 'addCategoryBtn', 'class': 'btn btn-primary', 'html': ' &plus; Add Product'}
							]},
							
						]}
					]}
				]},
				{'<>': 'div', 'class': 'search-row', 'html':[
				        
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
	addProduct(data){
		
		let transform= {
			'parent':{'<>': 'div', 'class': 'addProductPanel', 'html':[
			{'<>': 'form', 'id': 'addProductInfoForm', 'enctype': 'multipart/form-data', 'html':[
				{'<>': 'h5', 'html': 'Product Info'},
				{'<>': 'hr'},
				{'<>': 'label', 'for': 'Category Name', 'html': ' Enter Product Name'},
				{'<>': 'input', 'type': 'text', 'class': 'form-control', 'name': 'name', 'required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category', 'html': 'Select Product Category'}, 
				
				
				{'<>': 'br'},
				{'<>': 'div', 'html': function(){ return (json2html.transform(data, transform.child))}},
					
				{'<>':'br'},
				{'<>': 'label', 'for': 'HSN Code', 'html': 'HSN Code'},	
				{'<>': 'input', 'type': 'text', 'class': 'form-control', 'name': 'hsn', 'required': 'required' },
				{'<>': 'br'},
				{'<>': 'label','for': 'GST', 'html': 'GST'},
				{'<>': 'input', 'type': 'number', 'name': 'gst', 'class': 'form-control', 'required': 'required'},
				{'<>': 'br'},	
				
				
				{'<>':'h5', 'html': 'Product Image'},
				{'<>': 'hr'},
				{'<>': 'label', 'for': 'Category Name', 'html': ' Enter Image Title'},
				{'<>': 'input', 'type': 'text', 'class': 'form-control', 'name': 'image_title', 'required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category', 'html': 'Select Product Image'},	
				{'<>': 'input', 'type': 'file', 'class': 'form-control', 'name': 'fileToUpload'},	
				{'<>':'br'},
				{'<>': 'label', 'for': 'HSN Code', 'html': 'Enter Image Descripiton'},	
				{'<>': 'textarea', 'class': 'form-control', 'name': 'image_description', 'required': 'required' },
				{'<>': 'br'},
				
				
				{'<>':'h5', 'html': 'Product Variance'},
				{'<>': 'hr'},
				{'<>': 'label', 'for': 'Category Name', 'html': ' Enter Product Quantity'},,
				{'<>': 'input', 'type': 'number', 'class': 'form-control', 'name': 'quantity','required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'Category Name', 'html': ' Enter Product Unit'},,
				{'<>': 'input', 'type': 'text', 'class': 'form-control', 'name': 'unit','required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'product price', 'html': 'Enter Product Price'},
				{'<>': 'input', 'type': 'number', 'class': 'form-control', 'name': 'price','required': 'required'},
				{'<>': 'br'},
				
				{'<>': 'h5', 'html': 'Product Description'},
				{'<>': 'hr'},
				{'<>': 'label', 'for': 'title', 'html': 'Descripiton Title'},
				{'<>': 'input', 'type': 'text', 'name': 'title', 'class': 'form-control'},
				{'<>':'br'},
				{'<>': 'label', 'for': 'Descripiton', 'html': 'Product Description'},
				{'<>': 'textarea', 'class': 'form-control', 'name': 'description'},
				{'<>': 'br'},
				{'<>': 'input', 'type': 'submit', 'class': 'form-control btn btn-primary', 'value': 'Next'},
				
			
			]}
			]},
			'child': {'<>': 'div', 'class': 'catgeory-radio-panel', 'html': [
				{'<>': 'input', 'type':'radio', 'name': 'category', 'class': 'category-radio-input', 'value': '${id}', 'required': 'required'},
				{'<>': 'div', 'class':'radio-category', 'html':[
					{'<>': 'img', 'src': '../backend/static/category/'+'${image}', 'class': 'category-img'},
					{'<>': 'p', 'class': 'catgeory-radio-name','html': '${name}'}
				]}
			]}
		};
		var doc =  (json2html.transform({},transform.parent));
		return doc;
	}
	
	addProductImage(){
		let transform= {
			'parent':{'<>': 'div', 'class': 'addProductPanel', 'html':[
			{'<>': 'form', 'id': 'addProductImageForm', 'enctype': 'multipart/form-data', 'html':[
				
				{'<>': 'label', 'for': 'Category Name', 'html': ' Enter Image Title'},
				{'<>': 'input', 'type': 'text', 'class': 'form-control', 'name': 'image_title', 'required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category', 'html': 'Select Product Image'},	
				{'<>': 'input', 'type': 'file', 'class': 'form-control', 'name': 'fileToUpload'},	
				{'<>':'br'},
				{'<>': 'label', 'for': 'HSN Code', 'html': 'Descripiton'},	
				{'<>': 'textarea', 'class': 'form-control', 'name': 'image_description', 'required': 'required' },
				{'<>': 'br'},
				{'<>': 'input', 'type': 'submit', 'class': 'form-control btn btn-primary', 'value': 'Submit'},
				
			
			]}
			]},
		};
		var doc =  (json2html.transform({},transform.parent));
		return doc;
	}
	addProductVariant(){
		let transform= {
			'parent':{'<>': 'div', 'class': 'addProductPanel', 'html':[
			{'<>': 'form', 'id': 'addProductVariantForm', 'enctype': 'multipart/form-data', 'html':[
			
				{'<>':'h5', 'html': 'Product Variance'},
				{'<>': 'hr'},
				{'<>': 'label', 'for': 'Category Name', 'html': ' Enter Product Quantity'},,
				{'<>': 'input', 'type': 'number', 'class': 'form-control', 'name': 'quantity','required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'Category Name', 'html': ' Enter Product Unit'},,
				{'<>': 'input', 'type': 'number', 'class': 'form-control', 'name': 'unit','required': 'required'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'product price', 'html': 'Enter Product Price'},
				{'<>': 'input', 'type': 'number', 'class': 'form-control', 'name': 'price','required': 'required'},
				{'<>': 'br'},
				{'<>': 'br'},
				{'<>': 'input', 'type': 'submit', 'class': 'form-control btn btn-primary', 'value': 'Submit'},
		
			]}
			]},
		};
		var doc =  (json2html.transform({},transform.parent));
		return doc;
	}
	
	addProductDescription(){
		let transform= {
			'parent':{'<>': 'div', 'class': 'addProductPanel', 'html':[
			{'<>': 'form', 'id': 'addProductDescForm', 'enctype': 'multipart/form-data', 'html':[
				{'<>': 'h5', 'html': 'Product Description'},
				{'<>': 'hr'},
				{'<>': 'label', 'for': 'title', 'html': 'Descripiton Title'},
				{'<>': 'input', 'type': 'text', 'name': 'title', 'class': 'form-control', 'required': 'required'},
				{'<>':'br'},
				{'<>': 'label', 'for': 'Descripiton', 'html': 'Product Description'},
				{'<>': 'textarea', 'class': 'form-control', 'name': 'description', 'required': 'required'},
			
				{'<>': 'br'},
				{'<>': 'input', 'type': 'submit', 'class': 'form-control btn btn-primary', 'value': 'Submit'},
		
			]}
			]},
		};
		var doc =  (json2html.transform({},transform.parent));
		return doc;
	}
}

export {Product};