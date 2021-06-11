var localLink= window.location.href;


class Profile{
	
	constructor(){
		document.getElementById('section').innerHTML= this.render();
	}
	render(){
		var profile= this.profile();
		return profile;
	}
	profile(){
		let transform= {'<>': 'div', 'class': 'section-panel dashboard-panel', 'html':[
			{'<>': 'div', 'class': 'container-fluid', 'html':[
				{'<>': 'div', 'class': 'row', 'html':[
					{'<>': 'div', 'class': 'col-md-12', 'html': [
						{'<>': 'div', 'class': 'action-panel', 'html': [
							{'<>': 'a', 'href': 'addadmin', 'html':[
								{'<>': 'button', 'id': 'addCategoryBtn', 'class': 'btn btn-primary', 'html': ' &plus; Add Admin'}
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
	addAdmin(){
		let transform= {'<>': 'div', 'class': 'addAdminPanel', 'html':[
			{'<>': 'form', 'id': 'addAdminForm', 'enctype': 'multipart/form-data', 'html':[
				{'<>': 'label', 'for': 'Admin Name', 'html': 'Admin Name'},
				{'<>': 'input', 'type': 'text', 'class': 'form-control', 'name': 'name'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'Admin Phone'},
				{'<>': 'input', 'type': 'number', 'class': 'form-control', 'name': 'phone'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'Admin Email '},
				{'<>': 'input', 'class': 'form-control', 'name': 'email', 'type': 'email'},
				{'<>': 'br'},
				{'<>': 'label', 'for': 'category Image', 'html': 'Admin Password '},
				{'<>': 'input', 'class': 'form-control', 'name': 'pwd', 'type': 'password'},
				{'<>': 'br'},
				{'<>': 'input', 'type': 'submit', 'class': 'form-control btn btn-primary', 'value': 'Add Admin'}
				
				
			]}
		]};
		var doc =  (json2html.transform({},transform));
		return doc;
	}
}

export {Profile};