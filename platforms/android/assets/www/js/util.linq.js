;(function(){
	var linq={};
	var appContext=window.getAppContext();
	appContext.linq=linq;
	window.linq=linq;
	linq.each=function(list,act){
		if(list instanceof Array){
			for(var i=0;i<list.length;i++){
				var canContinue=act(i,list[i]);
				if(false===canContinue){
					break;
				}
			}
		}
	};
	linq.any=function(list,act){
		var anyMatch=false;
		linq.each(list,function(idx,it){
			anyMatch=act(idx,it);
			if(anyMatch===true){
				//return false to break the low level loop
				return false;
			}
		});
		return anyMatch;
	};
	linq.contains=function(list,item,predictor){
		
		if(!predictor){
			predictor=function(a,b){
				return a==b;
			}
		}		
		var anyMatch=linq.any(list,function(idx,it){
			return predictor(it,item);
		});
		return anyMatch;
	};
	linq.where=function(list,filter){
		var retList=[];
		linq.each(list,function(idx,it){
			if(filter(idx,it)){
				retList.push(it);
			}
		});
		return retList;
	};
}());