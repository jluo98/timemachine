let testBool = true;
let showBool = false;

let showEx = true;
let stopEx = false;

var deviceDate;
var deviceSeconds;

var videoNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
var chosenVideo = "01";

var video;

function HEEEEY () {
	for (var i = 0; i < 100; i++) {
		alert('hey!')
	}
}

HEEEEY()

function chooseVideo() {
	chosenVideo = random(videoNumber);
	video = document.getElementById("vid" + chosenVideo);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	deviceDate = new Date();
	deviceSeconds = deviceDate.getSeconds();

	if(deviceSeconds === 0 || deviceSeconds === 30) {
		testBool = true;
		showBool = false;
	}

	if(deviceSeconds === 10 || deviceSeconds === 40) {
		testBool = false;
		showBool = true;
	}

	if(testBool == true) {
		stopPlaying();
		testScreen();
	}

	if(showBool == true) {
		show();
	}
}

function show() {
	if(showEx == true) {
		chooseVideo();
		background(0);
		video.load();
		video.style.display = "block";

		var playPromise = video.play();

		if (playPromise !== undefined) {
			playPromise.then(_ => {
			})
			.catch(error => {
			});
		}

		showEx = false;
		stopEx = true;
	}
}

function stopPlaying() {
	if(stopEx == true) {
		video.style.display = "none";
		video.pause();
		stopEx = false;
		showEx = true;
	}
}

function windowResized() {
	draw();
}
