var main = function() {
	//displaying the contact form when the button is clicked or disabling the button on too small mobile screen size
	$(".message").click(function() {
		var width = $(window).width();
		if (width <= 500) {
			$(this).prop("disabled", true);
			alert("Screen too small for popup form");
		} else {
			$("#contact").css("display", "block");
		}
	});

	//hiding the contact form when the close icon is click and resetting the input values to null
	$("#close").click(function() {
		$("#contact").css("display", "none");
		$("input, textarea").val("");
		//$("textarea").val("");
		$(".name-error, .email-error, .feedback-error").empty();
	});
	//hover effect for contact form button and nav-pills
	$(".message").hover(function() {
		$(this).toggleClass("shadow");
	});
	$(".nav-pills li").hover(function() {
		$(this).toggleClass("shadow");
	});
	//highlighting the nav-pill that is active on click and dropdown-menu as well
	$(".nav li").click(function() {
		$(".nav li").removeClass("active");
		$(this).addClass("active");
	});

	$(".dropdown-menu li").click(function() {
		$(".dropdown-menu li").removeClass("active");
		$(this).addClass("active");
	})
	
	//form validation on submission
	$(document).on("submit","form", function(e) {
		e.preventDefault();
	var name = $("#name").val();
	var email = $("#email").val();
	var message = $("#message").val();
	//This was the first validation control flow statement I made. 
	//while it had the luxury of personalized message, it was problematic.
	//validating the form fields. I intentionally did not use the validate.js plugin 
		if(name === "") {
			$(".name-error").text("Please enter your name");
			$("form").effect("shake");
		}
		if(email === "") {
			$(".email-error").text("I'll need your email to contact you");
			$("form").effect("shake");
		}
		if(message === "") {
			$(".feedback-error").text("You shall not pass unless you leave your kickass message!");
			$("form").effect("shake");
		}

		function alertUser() { 
				alert("Thanks for your message " + name + "." + " You will hear from me soon.");
				location.reload();	
			};

		if((name !=="") && (email !=="") && (message !=="")) {
			$("form").hide("explode", {pieces: 24}, 2000);
			//reseting form-fields after sending
			$("input, textarea").val("");
			//hiding the pop up div
			$("#contact").hide();
			//timeout to thank user for the feedback
			setTimeout(alertUser, 3000);	
		}
	});
};

$(document).ready(main);