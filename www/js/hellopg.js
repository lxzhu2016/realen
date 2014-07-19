;(function(){
    var appContext=window.getAppContext();
	var appConfig=appContext.config;	
	var debug=appContext.debug;
	
	var hellopg = {	   
		initialize: function() {
			this.bindEvents();
		},
		// Bind Event Listeners
		//
		// Bind any events that are required on startup. Common events are:
		// 'load', 'deviceready', 'offline', and 'online'.
		bindEvents: function() {
			document.addEventListener('deviceready', this.onDeviceReady, false);
		},
		// deviceready Event Handler
		//
		// The scope of 'this' is the event. In order to call the 'receivedEvent'
		// function, we must explicitly call 'app.receivedEvent(...);'
		onDeviceReady: function() {
			hellopg.receivedEvent('deviceready');
			hellopg.loadAppData();
		},
		// Update DOM on a Received Event
		receivedEvent: function(id) {
			debug.alert('hellopg',id);
		},
		loadAppData:function(){
				debug.alert('hellopg','enter loadAppData');
				$.ajax({
					type:'GET',
					url:'buzdata/index.json',
					dataType:'json',
					success:function(data){
						debug.alert('hellopg',data);						
					    appContext.data.index={};					    
						$.extend(appContext.data.index,data);
						appContext.events.fire(appConfig.events.indexDataLoaded,appContext.data.index);
					},
					error:function(xhr,status,error){
						alert('Error: status:'+status+'error:'+error);
					}
				});
			}
	};
	
	$(document).ready(function(){
		hellopg.initialize();
	});
}());
