;(function(){
	var appContext=window.getAppContext();
	var appConfig=appContext.config;
	var debug={};
	appContext.debug=debug;
	
	debug.alert=function(){			
		if(appConfig.debug){
			var tag=null;
			var message=null;
			var argc=arguments.length;
			if(1==argc){
			  tag='unknown';
			  message=arguments[0];
			}else if(2==argc){
				tag=arguments[0];
				message=arguments[1];
			}
			
			if(message){
				var hasDebugTags=appConfig.debugTags.length>0;				
				var tagExists=!hasDebugTags;			
				if(hasDebugTags){					
					for(var idx=0;idx<appConfig.debugTags.length;idx++){
						if(appConfig.debugTags[idx]==tag){							
							tagExists=true;
							break;
						}
					}
				}
				if(tagExists){
					window.alert(message);
				}
			}
		}
	};	
}());