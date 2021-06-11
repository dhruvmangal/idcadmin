var localLink= window.location.href;


class Order{
	constructor(){
		document.getElementById('section').innerHTML= this.render();
		
		
	}
	render(){
		var orderPanel= this.orderPanel();
		//var viewCategory= this.viewCategory();
		return orderPanel;
	}
	orderPanel(){
		let transform= {'<>': 'div', 'class': 'section-panel dashboard-panel', 'html':[
			{'<>': 'div', 'class': 'container-fluid', 'html':[
				{'<>': 'div', 'class': 'row', 'html':[
					{'<>': 'div', 'class': 'col-md-12', 'html': [
						{'<>': 'div', 'class': 'action-panel', 'html': [
							
							{'<>': 'form', 'id': 'searchOrderForm', 'html':[
								{'<>': 'input', 'type': 'text', 'class':'form-control search-input', 'name' :'id', 'placeholder': 'Order ID'},
								{'<>': 'input', 'type': 'text', 'class':'form-control search-input', 'name' :'user', 'placeholder': 'User Name'},
								{'<>': 'input', 'type': 'date', 'class':'form-control search-input' , 'name' :'from', 'placeholder': 'Order ID'},
								{'<>': 'input', 'type': 'date', 'class':'form-control search-input' , 'name' :'to', 'placeholder': 'Order ID'},
								{'<>': 'input', 'type': 'submit', 'class':'form-control search-input btn btn-primary' , 'name' :'submit', 'value': 'Search'},
							]}
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
	
}

export {Order};