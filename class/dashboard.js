var localLink= window.location.href;


class Dashboard{
	constructor(){
		document.getElementById('section').innerHTML= this.render();
		document.getElementById('menutext').innerHTML= 'Dashboard';
	}
	render(){
		var dashboardPanel= this.dashboardPanel();
		return dashboardPanel;
	}
	dashboardPanel(){
		let transform= {'<>': 'div', 'class': 'section-panel dashboard-panel'};
		var doc =  (json2html.transform({},transform));
		return doc;
		
	}
}

export {Dashboard};