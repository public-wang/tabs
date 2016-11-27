<!--
/*第一种形式 第二种形式 更换显示样式*/
function setTab(n){
 var tli=$(".menu0 li");
 var mli=$(".main ul");
 for(i=0;i<tli.length;i++){
 	$(tli[i]).removeClass("hover").addClass(i==n?"hover":"");
 	$(mli.get(i)).css("display", i==n?"block":"none");
  
 }
}
//-->

$(document).ready(function() {
	$("ul li").each(function(i){
		$(this).on("click", function(event){
			event.stopPropagation();
			setTab(i);
		})
	});
});