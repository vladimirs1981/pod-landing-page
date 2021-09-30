function validateEmail(email) {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
}

$("#submit").click(function () {
	const $errorMessage = $("#error");
	const email = $("#email").val();

	if (email === "" || email == null) {
		$errorMessage.css({ visibility: "visible" });
	} else if (!validateEmail(email)) {
		$errorMessage
			.text("Oops! Please check your email")
			.css({ visibility: "visible" });
	} else {
		$errorMessage.css({ visibility: "hidden" });
	}
});
