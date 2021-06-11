class Home{
	constructor(){
		document.getElementById('section').innerHTML= this.render();
	}
	
	render(){
		let transform= {'<>': 'section', 'class': 'app-section', 'html':[
			{'<>': 'div', 'class': 'container-fluid', 'html': [
				{'<>': 'div', 'class': 'row', 'html':[
					{'<>': 'div', 'class': 'col-md-4'},
					
					{'<>': 'div', 'class': 'col-md-4', 'html': [
						{'<>': 'div', 'class': 'app-container', 'html': [
							{'<>': 'p', 'html': 'Online/ Offline'},
							{'<>': 'label', 'class': 'switch', 'html': [
								{'<>': 'input', 'type': 'checkbox'},
								{'<>': 'span', 'class': 'slider round'}
							]}
						]}
						
					]},
					{'<>': 'div', 'class': 'col-md-4'},
				]}
			]}
		]};
		
		var doc =  (json2html.transform({},transform));
		return doc;
	}
}

export {Home};