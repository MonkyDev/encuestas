$(document).ready(function(e){
	$.ajax({
		beforeSend: function(){
			$('#'+screenPrincipal).html(gifLoad);
		},
		url: pathFrontInit,
		type: 'GET',
		success: function(request){
			$('#'+screenPrincipal).html(request);
		}
	});
});