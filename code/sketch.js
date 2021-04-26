function setup() {

	musicLabel = createSpan('Choose a song');
	musicLabel.position(windowWidth / 2 - 20, windowHeight / 2 - 30);

	music = createSelect();
	music.position(windowWidth / 2 - 100, windowHeight / 2);
	music.option("Select a Song")
	music.option("Earth, Wind & Fire - September");
	music.option("Jamiroquai - Virtual Insanity");
	music.option("Queen – Bohemian Rhapsody");
	music.option("Electric Light Orchestra - Mr. Blue Sky");
	music.changed(musicPlayer);





}


function musicPlayer() {
	//This removes the pick audio and label. I did this because I couldn't get the audio element to update the song after it had been picked.
	music.remove();
	musicLabel.remove();
	document.getElementById("title").style.visibility = "hidden";
	document.getElementById("credits").style.visibility = "hidden";

	// Almost exactly the same from here  https://stackoverflow.com/questions/37735208/create-audio-element-dynamically-in-javascript/37735359
	
	
	var videoPlayer = document.createElement('video');
	videoPlayer.setAttribute("id", "input");
	var videoSource = document.createElement('source');
	videoSource.id = 'videosrc';
	videoSource.src = ("mp4/" + music.value() + ".mp4");
	videoSource.type = 'video/mp4';
	document.getElementById('input').appendChild(videoSource);

	// Type of Visualizer
		volumespan = createSpan('Type');
	volumespan.position(25,10);
	wave_type = createSelect();
	wave_type.position(25, 40);
		wave_type.option("Choose one!");
	wave_type.option("bars");
	wave_type.option("bars blocks");
	wave_type.option("big bars");
	wave_type.option("cubes");
	wave_type.option("dualbars");
	wave_type.option("dualbars blocks");
	wave_type.option("fireworks");
	wave_type.option("flower");
	wave_type.option("flower blocks");
	wave_type.option("orbs");
	wave_type.option("ring");
	wave_type.option("rings");
	wave_type.option("round wave");
	wave_type.option("shine");
	wave_type.option("shine rings");
	wave_type.option("shockwave");
	wave_type.option("star");
	wave_type.option("static");
	wave_type.option("stitches");
	wave_type.option("web");
	wave_type.option("wave");
	wave_type.changed(wave_visual);

	// Colors of Visualizer
	wave_color1 = createColorPicker("#d86464");
	wave_color1.position(25, 80);
	wave_color1.changed(wave_visual);
	wave_color2 = createColorPicker("#cb90d5");
	wave_color2.position(90, 80);
	wave_color2.changed(wave_visual);
	wave_color3 = createColorPicker("#75a2d9");
	wave_color3.position(155, 80);
	wave_color3.changed(wave_visual);
	wave_color4 = createColorPicker("#84d975");
	wave_color4.position(220, 80);
	wave_color4.changed(wave_visual);
	wave_color5 = createColorPicker("#d6cc7e");
	wave_color5.position(285, 80);
	wave_color5.changed(wave_visual);


	// Weight of Visualizer 
		volumespan = createSpan('Stroke');
	volumespan.position(180,10);
	
	stroke = createSlider(0, 40, 5);
	stroke.position(180, 45);
	stroke.changed(wave_visual);
	
	//Volume slider
	volumespan = createSpan('Volume');
	volumespan.position(180,120);
	
	sliderVolume = createSlider(0,100,50);
	sliderVolume.position(180, 160);
    sliderVolume.changed(setVolume);
	
		volumespan = createSpan('Play/Pause');
	volumespan.position(25,120);
	document.getElementById("playVid").style.visibility = "visible";
	document.getElementById("pauseVid").style.visibility = "visible";
  

}

function wave_visual() {


	var wave = new Wave();
	options = {
		type: wave_type.value(),
		colors: [wave_color1.value(), wave_color2.value(), wave_color3.value(), wave_color4.value(), wave_color5.value()],
		stroke: stroke.value()
	};
	wave.fromElement("input", "output", options);



}

var vid = document.getElementById("input"); 

// W3 Schools helped getting these to work
function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 

function setVolume() { 
  vid.volume = (sliderVolume.value() / 100);
} 
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
