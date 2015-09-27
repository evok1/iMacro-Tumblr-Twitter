// =================================
// iMacro generator
// Variables declaration
var support;
var toDo;
var howMuch = 0;
var textTwitter = " TYPE=BUTTON ATTR=TXT:Suivre<SP>Abonné<SP>Se<SP>désabonner<SP>Bloqué<SP>Débloquer*"

// Generating .iim content
function generate(howMuch) {

	// Check if howMuch is greater then 5 and a number
	if (howMuch < 5) {
		howMuch = prompt("Choose a number bigger then 10");
	} else if (isNaN(howMuch)) {
		howMuch = prompt("Please enter a number greater then 10");
	}
	else {
	}
	
	// Generating content
	for (i = 4; i < howMuch; i++) {
		
		// Generate the click on the follow button
		document.getElementById('content').innerHTML += "TAG POS=" + i + textTwitter + "<br><br>"
		
		// Generate a random pause time between each clic
		document.getElementById('content').innerHTML += "WAIT SECONDS=" + Math.floor((Math.random() * 10) + 1) + "<br><br>	"
	}	
}

// Getting variables values from click on GO button
$('#go').click(function () {
	
	// Preparing the space for generated content display
	$('#result').show();
	$('#content').remove();
	$('#contentgate').append('<div id="content"><br></div>');

	// Getting info from user
	support = $('#support option:selected').val();
	toDo = $('#toDo option:selected').val();
	howMuch = $('#howMuch').val();

	// Generating .iim
	generate(howMuch);

})

// ======================================
// Zeroclipboard

var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( 'ready', function(event) {
	//console.log( 'zeroClipboard loaded' );

	client.on( 'copy', function(event) {
		event.clipboardData.setData('text/plain', event.target.innerHTML);
	} );

	client.on( 'aftercopy', function(event) {
		console.log('Copied text to clipboard: ' + event.data['text/plain']);
	} );

} );

client.on( 'error', function(event) {
	// console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
	ZeroClipboard.destroy();
} );
