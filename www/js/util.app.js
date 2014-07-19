;(function(){
	var config={		
		debug:true,
		debugTags:['page.index','hellopg'],
		//global event names
		events:['indexDataLoaded'],
		
	};
	var appContext={
		config:config,
		data:{}
	};
	
	window.getAppContext=function(){
		return appContext;
	};
	//#region convert events from string array to object
    var evts=config.events;
    config.events={};
    $.each(evts,function(idx,e){
		config.events[e]=e;
	});	
	//#endregion
}());