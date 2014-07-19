;(function(){
	var appContext=window.getAppContext();
	var appConfig=appContext.config;
	var debug=appContext.debug;
	debug.alert('page.index','page.index:'+appConfig.events.indexDataLoaded);
	appContext.events.on(appConfig.events.indexDataLoaded,function(evt){
		appContext.debug.alert('page.index','articles.length:'+evt.data.articles.length);
		createListView(evt.data.articles);
	});
	
	function createListView(articleList){
		//var listview=$("<ul data-role='listview'>");
		var listview=$("#index>div>ul");
		listview.empty();		
		linq.each(articleList,function(idx,it){
			var li=$("<li>");
		    var anchor=$("<a href='#article?id="+it.id+"'>");
			debug.alert('page.index',anchor.html());
			anchor.append("<img src='buzdata/"+it.image+"'>","<h2>"+it.title+"</h2>","<p>"+it["class"]+"</p>");
			li.append(anchor);			
			listview.append(li);
		});		
		listview.listview('refresh');
	}
}());