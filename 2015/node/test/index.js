function showBlog() {
	var blog = document.getElementById("Blog");
	var active = document.getElementsByClassName("active")[0];
	
	if (blog.className.indexOf("active") !== -1) {
		return;
	}

	active.classList.remove("active");
	document.getElementsByClassName("active-link")[0].classList.remove("active-link");
	document.getElementsByClassName("blog")[0].classList.add("active-link");
	setTimeout(function () {
		active.classList.add("none");
		blog.classList.remove("none");
		setTimeout(function () {
			blog.classList.add("active");
			toggleMenu();
		}, 5);
	}, 500);
}

function showProjects() {
	var projects = document.getElementById("Projects");
	var active = document.getElementsByClassName("active")[0];
	
	if (projects.className.indexOf("active") !== -1) {
		return;
	}

	active.classList.remove("active");
	document.getElementsByClassName("active-link")[0].classList.remove("active-link");
	document.getElementsByClassName("projects")[0].classList.add("active-link");
	setTimeout(function () {
		active.classList.add("none")
		projects.classList.remove("none");
		setTimeout(function () {
			projects.classList.add("active");
			toggleMenu();
		}, 5);
	}, 500);
}

function toggleMenu() {
	var nav = document.getElementById("column-1");
	var navButton = document.getElementById("menu-button");
	var content = document.getElementById("column-2");
	if(nav.classList.contains("show")) {
		nav.classList.remove("show");
		navButton.classList.remove("show");
		content.classList.remove("defocus");
		setTimeout(function () {
			navButton.onClick = toggleMenu;
			navButton.innerHTML = " Menu";
			content.onclick = function () {};
		}, 0);
	} else {
		nav.classList.add("show");
		navButton.classList.add("show");
		content.classList.add("defocus");
		setTimeout(function () {
			navButton.onClick = function () {};
			navButton.innerHTML = "";
			content.onclick = toggleMenu;
		}, 0);
	}
}
