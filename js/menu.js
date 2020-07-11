function myFunction() {
	var x = document.getElementById("mobile");
	if (x.style.display === "grid") {
		x.style.display = "none";
	}
	else {
		x.style.display = "grid";
	}
}