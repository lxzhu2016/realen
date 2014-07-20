;(function(){
	var appContext=window.getAppContext();
	$(document).on('pagecontainerbeforeshow',function(evt,ui){
		var id=ui.toPage.attr('id');		
		if('article'==id){
			//alert(JSON.stringify(appContext.data.index.articles[1]));
		  var articleIndex=appContext.data.index.articles[1];
		  alert(JSON.stringify(articleIndex));
		  createArticlePage(articleIndex);
		}
	});
	
	function createArticlePage(articleIndex){
		var article={};
		appContext.data.article=article;		
		getScriptEn(articleIndex.script.en);
	}
	function getScriptEn(file){
		$.ajax({
			type:'GET',
			url:'buzdata/'+file,
			success:function(data){
				$('#article-scripten').empty();
				$('#article-scripten').append(data);
			},
			error:function(xhr,status,ex){
				
			}
		});
	}
}());