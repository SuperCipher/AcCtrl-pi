// this is dedicate to bind event listeners to button clicks only //
function LoginController()
{
	//retrive password button
	$('#retrieve-password-submit').click(function(){
		 $('#get-credentials-form').submit();
	});
	//forgot password button
	$('#login #forgot-password').click(function(){
		$('#cancel').html('Cancel');
		$('#retrieve-password-submit').show();
		$('#get-credentials').modal('show');
	});
	//remember-me button
	$('#login .button-rememember-me').click(function(e) {
		var span = $(this).find('span');
		//show or remove check box
		if (span.hasClass('glyphicon-unchecked')){
			span.addClass('glyphicon-ok');
			span.removeClass('glyphicon-unchecked');
		}	else{
			span.removeClass('glyphicon-ok');
			span.addClass('glyphicon-unchecked');
		}
	});

// automatically toggle focus between the email modal window and the login form //
	$('#get-credentials').on('shown.bs.modal', function(){ $('#email-tf').focus(); });
	$('#get-credentials').on('hidden.bs.modal', function(){ $('#user-tf').focus(); });
}
