function validateEmail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function checkEmail() {
	const $errorMessage = $("#error");
	const email = $("#email").val();
	$errorMessage.text("");

	if (email == "") {
		$errorMessage.text("Oops! Please add your email");
		$(".inputs").css("margin-bottom", "14px");
	} else if (!validateEmail(email)) {
		$errorMessage.text("Oops! Please check your email");
		$(".inputs").css("margin-bottom", "14px");
	} else {
		$errorMessage.text("");
		$(".inputs").css("margin-bottom", "42px");
	}
}
