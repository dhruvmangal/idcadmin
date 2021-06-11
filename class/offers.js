var localLink= window.location.href;

class Offer{

	constructor(){
		document.getElementById('section').innerHTML= this.render();
		
	}
	render(){
		
		var offerPanel= this.offerPanel();
		//var viewCategory= this.viewCategory();
		return offerPanel;
	}
	offerPanel(){
		let transform= {'<>': 'div', 'class': 'section-panel dashboard-panel', 'html':[
			{'<>': 'div', 'class': 'container-fluid', 'html':[
				{'<>': 'div', 'class': 'row', 'html':[
					{'<>': 'div', 'class': 'col-md-12', 'html': [
						{'<>': 'div', 'class': 'action-panel', 'html': [
							{'<>': 'a', 'href': 'addoffer', 'html':[
								{'<>': 'button', 'id': 'addCategoryBtn', 'class': 'btn btn-primary', 'html': ' &plus; Add Offer'}
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
	addOffer(data){
		
		let transform= {
			
			'parent': {'<>': 'div', 'class': 'addAdminPanel', 'html':[
			{'<>': 'form', 'id': 'addOfferForm', 'enctype': 'multipart/form-data', 'html':[
				{'<>': 'label', 'for': 'Admin Name', 'html': 'Discount Title'},
				{'<>': 'input', 'type': 'text', 'class': 'form-control', 'name': 'title'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category', 'html': 'Select Product Category'}, 
				{'<>': 'br'},
				{'<>': 'div', 'html': function(){ return (json2html.transform(data, transform.child))}},
				{'<>': 'label', 'for': 'category Image', 'html': 'Discount Type'},
				{'<>': 'select', 'class': 'form-control', 'name': 'type', 'html':[
					{'<>': 'option', 'value': '%', 'html': '% ( Percentage )'},
					{'<>': 'option', 'value': 'Value', 'html': 'Value'},
				]},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'Discount'},
				{'<>': 'input', 'class': 'form-control', 'name': 'discount', 'type': 'number'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'Description'},
				{'<>': 'textarea', 'class': 'form-control', 'name': 'description'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'Image'},
				{'<>': 'input', 'class': 'form-control', 'name': 'img', 'type': 'file'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'Start Date'},
				{'<>': 'input', 'class': 'form-control', 'name': 'start_date', 'type': 'date'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'End Date'},
				{'<>': 'input', 'class': 'form-control', 'name': 'end_date', 'type': 'date'},
				{'<>': 'br'},
				{'<>': 'input', 'type': 'submit', 'class': 'form-control btn btn-primary', 'value': 'Add Admin'}
				
				
			]}
		]},
			'child': {'<>': 'div', 'class': 'catgeory-radio-panel', 'html': [
				{'<>': 'input', 'type':'radio', 'name': 'id', 'class': 'category-radio-input', 'value': '${id}', 'required': 'required'},
				{'<>': 'div', 'class':'radio-category', 'html':[
					{'<>': 'img', 'src': '../backend/static/category/'+'${image}', 'class': 'category-img'},
					{'<>': 'p', 'class': 'catgeory-radio-name','html': '${name}'}
				]}
			]}
	
	};
		var doc =  (json2html.transform({},transform.parent));
		return doc;
	}	

}

export {Offer}