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
		document.getElementById("inputs").style.marginBottom = "14px";
	} else if (!validateEmail(email)) {
		$errorMessage.text("Oops! Please check your email");
		document.getElementById("inputs").style.marginBottom = "14px";
	} else {
		$errorMessage.text("");
		document.getElementById("inputs").style.marginBottom = "42px";
	}
}
