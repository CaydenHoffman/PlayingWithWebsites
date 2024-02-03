$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
	// Function for Yes button click
    function onYesClicked() {
        document.body.style.backgroundColor = "pink";

		// Add a new div for the message with a pink box behind it
		var messageDiv = '<div style="font-size: 48px; font-family: \'Brush Script MT\', cursive; text-align: center; ' +
                     'position: absolute; width: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%); ' +
                     'background-color: lightpink; padding: 20px; border-radius: 15px;">' +
                     'I knew you would say yes!' +
                     '</div>';

		document.body.innerHTML += messageDiv;
    }

    // Function for No button click
    function onNoClicked() {
        alert("Wrong answer, please try again.");
    }

    // Adding click event listeners to the buttons
    $('.button1').click(onYesClicked);
    $('.button2').click(onNoClicked);
});