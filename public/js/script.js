$(window).on("load", function() {
	$(".loader-container").fadeOut("fade");
});

$(document).ready(function() {
	$(".js--about-section").waypoint(function(direction) {
		$(".js--about-section").addClass('animate__animated animate__fadeIn');
	}, {
		offset: '70%'
	});
});