function validateEmail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

<<<<<<< HEAD
$('#submit').click(function () {
	const $errorMessage = $('#error');
	const email = $('#email').val();
=======
$("#submit").click(function () {
	const $errorMessage = $('#error');
	const email = $("#email").val();
>>>>>>> bdf721cc33909a4d850745bd530e3161e5119034

	if (email === '' || email == null) {
		$errorMessage.css({ visibility: 'visible' });
	} else if (!validateEmail(email)) {
		$errorMessage
			.text('Oops! Please check your email')
			.css({ visibility: 'visible' });
	} else {
		$errorMessage.css({ visibility: 'hidden' });
	}
});
