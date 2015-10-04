// =================================
// iMacro generator
// Variables declaration

var support;
var action;
var howMuch = 0;
console.log(howMuch);

var textTwitter = "TYPE=BUTTON ATTR=TXT:Suivre<SP>Abonné<SP>Se<SP>désabonner<SP>Bloqué<SP>Débloquer*"
var textTumblr = "TYPE=BUTTON ATTR=TXT:S'abonner"

// Generating .iim content
function generate(support,howMuch) {

	// Checking if howMuch is a number
	if (isNaN(howMuch)) {
		howMuch = prompt("Please enter a number greater then 10");
	}
	// Checking if howMuch is bigget then 5 (script for Twitter start at 5)
	else if (howMuch === 0) {
		howMuch = prompt("Choose a number bigger then 10");
	}
	// Checking if howMuch is bigget then 5 (script for Twitter start at 5)
	else if (howMuch < 5) {
		howMuch = prompt("Choose a number bigger then 10");
	}
	// Warning for browser alerts/ crash
	else if (howMuch > 250) {
		alert("If you do that much, it's might crash your browser. Just press 'continue' if you have a script alert. (Tested up to 1000 on a Lenovo x201 core i7 and 4Go)");
	}
	else {}

	// Condition for Twitter and Tumblr
	
	// Generating content for Twitter
	if (support === "twitter") {
		for (i = 4; i < howMuch; i++) {

			// Generate the click on the follow button
			document.getElementById('content').innerHTML += "TAG POS=" + i + " " + textTwitter + "\n"
			
			// Generate a random pause time between each clic
			// document.getElementById('content').innerHTML += "WAIT SECONDS=" + Math.floor((Math.random() * (5) + 1)) + "\n"

			// Generate a fixe pause time between each clic
			document.getElementById('content').innerHTML += "WAIT SECONDS=4" + "\n"

		}
	}

	// Generaint content for Tumblr
	else if (support === "tumblr") {
		for (i = 4; i < howMuch; i++) {

			// Generate the click on the follow button
			document.getElementById('content').innerHTML += "TAG POS=" + i + " " + textTumblr + "\n"

		}
	}	else {}
}

// User settings

// Setting info for support
$('#info-tumblr').hide();
$('#support').click(function () {
	if ($('#support option:selected').val() === "tumblr") {
		$('#info-tumblr').show();
		$('#info-twitter').hide();
	} else if ($('#support option:selected').val() === "twitter"){
		$('#info-tumblr').hide();
		$('#info-twitter').show();
	}
})

// Getting variables values from click on GO button
$('#go').click(function () {
	
	// Preparing the space for generated content display
	$('#result').show();
	$('#content').remove();
	$('#contentgate').append('<xmp id="content"></xmp>');

	// Getting info from user
	support = $('#support option:selected').val();
	console.log(support);
	action = $('#action option:selected').val();
	console.log(action);
	howMuch = $('#howMuch').val();
	console.log(howMuch);

	// Generating .iim
	generate(support,howMuch);

})

// Activating enter key to generate iMacro
$("#howMuch").keyup(function(event){
    if(event.keyCode == 13){
        $("#go").click();
    }
});

// ======================================
// Zeroclipboard
// Check it out : https://github.com/zeroclipboard

var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( 'ready', function(event) {
	console.log( 'ZeroClipboard loaded' );

	client.on( 'copy', function(event) {
		event.clipboardData.setData('text/plain', event.target.children.innerHTML);
	} );

	client.on( 'aftercopy', function(event) {
		console.log('Copied text to clipboard: ' + event.data['text/plain']);
	} );

} );

client.on( 'error', function(event) {
	// console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
	ZeroClipboard.destroy();
} );
