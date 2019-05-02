function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
    });
	return vars;
}

var qrBool = getUrlVars()["qr"];

if(qrBool === "1") {
	document.getElementById("qrCode").style.display = "flex";
}