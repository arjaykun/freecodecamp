const closeBtn = document.getElementById("close-icon");
const openBtn = document.getElementById("nav-icon");
const navBar = document.getElementById("navbar2");
const navLinks = document.getElementsByClassName("nav-link2");


closeBtn.addEventListener("click", function() {
	navBar.style.width = "0";
})

openBtn.addEventListener("click", function() {
	navBar.style.width = "100%";
})

// navLinks.forEach( link => {
// 	link.addEventListener("click", function() {
// 		alert("clicked");
// 		navBar.style.width = "0";
// 	})
// })

for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", function() {
		navBar.style.width = "0";
	})
}

window.addEventListener("resize", function() {
	navBar.style.width = "0";
})
