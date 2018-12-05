function toggleDropDown() {
  let navbarToggle = document.getElementById('navbar-toggle');
  if (navbarToggle.className === 'top-nav'){
    navbarToggle.className += ' responsive';
  } else {
    navbarToggle.className = 'top-nav';
}
  
}
window.onscroll = function (){
	let navbar = document.getElementById("nav-fix");
	let sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
    	navbar.classList.add("sticky")
  	} else{
    	navbar.classList.remove("sticky");
	}
};