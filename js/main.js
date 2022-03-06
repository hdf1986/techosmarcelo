
function popup(url) {
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(url, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=508,height=180');");
}
jQuery(document).ready(function() {
	$("#galeria ul li a *").click(function(e) {
		e.preventDefault();
		ancla=$(e.target).parent().attr('href');
		console.log(ancla);
		$(".actual").hide("slow");
		$(".actual").toggleClass('actual');
		$(ancla).show("slow")
		$(ancla).toggleClass('actual');
	});
	$(".volver").click(function(e) {
		e.preventDefault();
		$(".actual").hide("slow");
		$(".actual").toggleClass('actual');
		$("#galeria").show("slow");
		$("#galeria").toggleClass('actual');
	});
    $(".album ul li").click(function(e) {
    	console.log('f');
		console.log($(e.target).closest("img").attr('src'));
		$.fancybox.open($(e.target).closest("img").attr('src'));
	});

});