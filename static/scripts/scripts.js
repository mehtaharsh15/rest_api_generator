function hideDelay(id, delayTime){
	$('#'+id).delay(delayTime).fadeOut('slow');
}

function formatdate(date){

	if(date != ""){
		var date = new Date(date);
		return $.datepicker.formatDate('yy-mm-dd', date);
	}
	return date;
	
}