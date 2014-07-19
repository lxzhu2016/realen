;(function(){
	var appContext=window.getAppContext();
	var appConfig=appContext.config;
	var debug=appContext.debug;
	appContext.createEventHub=function(host,events){
		var hub={
			events:{}
		};
		hub.declare=function(name){
			if(!hub.events[name]){
				hub.events[name]={
					name:name,
					handles:[]
				};
			}
		};
		hub.on=function(name,action){			
			hub.declare(name);
			var evt=hub.events[name];
			evt.handles.push(action);
		};
		hub.fire=function(name,data){
		debug.alert('eventHub.fire ('+name+')');
			var evt=hub.events[name];
			if(evt&& evt.handles){				
				for(var i=0;i<evt.handles.length;i++){
					var act=evt.handles[i];
					if(typeof act=='function'){
						act({
							name:name,
							data:data,
							target:hub
						});
					}
				}
			}
		};
		
		hub.host=host;
		var evts=[];
		$.merge(evts,events);
		$.each(evts,function(idx,evt){
			hub.declare(evt);
		});
		return hub;
	};
	debug.alert(appContext.createEventHub);
	var appContextEvents=[];
	for(var key in appConfig.events){
		if(appConfig.events.hasOwnProperty(key)){
			appContextEvents.push(key);
		}
	}
	appContext.events=appContext.createEventHub(appContext,appContextEvents);
}());