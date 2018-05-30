$(function(){

	// 下拉框编历
	var array1=['Recommended'];
	    $.each(array1,function(index,i){
	    	$('#sortBy').get(0).selectedIndex=0;
	    	$('#sortBy').append('<option value='+i+'>'+i+'</option>');
	    });

	    // 图片抖动
	    function img(){
	            $(".productsCount img").each(function(k,img){
	                new JumpObj(img,10);
	                $(img).hover(function(){this.className="hover"});
	            });
	    }
	    img();


	});