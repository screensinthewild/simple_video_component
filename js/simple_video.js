
/* 
Steve North's Simple HTML5 MP4 video player -

Features - custom video controls with just a seekbar functioning as a progress bar 
(input = disabled and no event handler) +
Mute/Unmute audio button.
No play button 
Customisable from CSS

August 2014

*/

/* Set next true for testing purposes, if you need to play vid at diff points etc */
var enableSeekBarForTesting = false;

var video;
var muteButton;
var seekBar;

function playVideo (videoFileName) {


if (video == null && video == undefined)
{
console.log("Video is undefined...guessing first time...better define it!");

	// Video
video = document.getElementById("video");
    
video.addEventListener('ended',function(e) {
        if(!e) { e = window.event; }
		//console.log("Ended");
    });
	
	// Buttons
	muteButton = document.getElementById("mute");

	// Sliders
	seekBar = document.getElementById("seek-bar");

	// this prevents the bar from being user dragged, even when there is no event handler for the drag!
    document.getElementById("seek-bar").disabled = true;


	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
					// Mute the video
			video.muted = true;
			// Update the button text
			muteButton.innerHTML = "Unmute";
		
	} else {
			// Unmute the video
			video.muted = false;
			// Update the button text
			muteButton.innerHTML = "Mute";
		}
	});

	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

	
	
	/**** DEBUG ***/

if (enableSeekBarForTesting)
{

document.getElementById("seek-bar").disabled = false;

	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});


        	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});

}	
	
	/**** DEBUG ***/
	

}  // end if video is already defined	
	
document.getElementById("video").setAttribute("src",videoFileName);
video.play();
	

}

