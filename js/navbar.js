let navbar = String('<div class="menu"><img src="images/logo-50px.gif" class="icon"><a href="index.html" class="top bordered">Home</a><a href="about.html" class="top bordered">About</a><a href="community.html" class="top bordered">Community</a><a href="creations.html" class="top bordered">Creations</a><a href="credits.html" class="top bordered">Credits</a></div>');
document.body.innerHTML = navbar + document.body.outerHTML;