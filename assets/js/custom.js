(function($){


	/* ---------------------------------------------- /*
	 * Google Map API
	/* ---------------------------------------------- */

	// function initialize() {
	// 	var myLatlng = new google.maps.LatLng(24.965296,121.256163,17),
	// 	mapOptions = {
	// 		zoom: 17,
	// 		center: myLatlng,
	//     scrollwheel: false,
	//     center: myLatlng,
	// 		mapTypeId: google.maps.MapTypeId.ROADMAP
	// 		}
	// var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	// map.set('styles', [
	//   {
	//     "featureType": "water",
	//     "elementType": "geometry",
	//     "stylers": [
	//       { "color": "#5fa8dd" }
	//     ]
	//   },{
	//     "featureType": "landscape.natural",
	//     "elementType": "geometry",
	//     "stylers": [
	//       { "color": "#AEC6CF" }
	//     ]
	//   },{
	//     "elementType": "labels.icon",
	//     "stylers": [
	//       { "invert_lightness": true },
	//       { "visibility": "on" },
	//       { "gamma": 2.15 },
	//       { "lightness": 42 }
	//     ]
	//   },{
	//   featureType: 'poi',
	//   elementType: 'geometry',
	//   stylers: [
	//     { visibility: 'off' }
	//   ]
	// }, {
	//   featureType: 'poi.school',
	//   elementType: 'geometry',
	//   stylers: [
	//     { visibility: 'on' },
	//     { hue: '#fff700' },
	//     { lightness: -15 },
	//     { saturation: 99 }
	//   ]
	// }

	// ]);


	//   function CenterControl(controlDiv, map) {

	//   // Set CSS for the control border.
	//   var controlUI = document.createElement('div');
	//   controlUI.style.backgroundColor = '#f5f5f5';
	//   controlUI.style.border = '2px solid #fff';
	//   controlUI.style.borderRadius = '3px';
	//   controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
	//   controlUI.style.cursor = 'pointer';
	//   controlUI.style.marginBottom = '22px';
	//   controlUI.style.textAlign = 'center';
	//   controlUI.title = 'Click to recenter the map';
	//   controlDiv.appendChild(controlUI);

	//   // Set CSS for the control interior.
	//   var controlText = document.createElement('div');
	//   controlText.style.color = 'rgb(25,25,25)';
	//   controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	//   controlText.style.fontSize = '16px';
	//   controlText.style.lineHeight = '38px';
	//   controlText.style.paddingLeft = '5px';
	//   controlText.style.paddingRight = '5px';
	//   controlText.innerHTML = 'Center Map';
	//   controlUI.appendChild(controlText);

	//   // Setup the click event listeners: simply set the map to Chicago.
	//   controlUI.addEventListener('click', function() {
	//     map.setCenter(myLatlng);
	//   });

	// }
	// var centerControlDiv = document.createElement('div');
	//   var centerControl = new CenterControl(centerControlDiv, map);

	//   centerControlDiv.index = 1;
	//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

	// var contentString = '敝人住處';
	// var infowindow = new google.maps.InfoWindow({
	// 	content: contentString,
	// 	maxWidth: 500,

	// });

	// var marker = new google.maps.Marker({
	// 	position: myLatlng,
	//   icon: 'http://maps.google.com/mapfiles/ms/icons/homegardenbusiness.png',
	// 	map: map
	// });

	// google.maps.event.addListener(marker, 'click', function() {
	// 	infowindow.open(map,marker);
	// });

	// google.maps.event.addDomListener(window, "resize", function() {
	// 	var center = map.getCenter();
	// 	google.maps.event.trigger(map, "resize");
	// 	map.setCenter(center);
	// 	});
	// infowindow.open(map, marker);
	// }

	// google.maps.event.addDomListener(window, 'load', initialize);


	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){

			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})


        /* ---------------------------------------------- /*
		 * Skills
        /* ---------------------------------------------- */
        //var color = $('#home').css('backgroundColor');

        $('.skills').waypoint(function(){
            $('.chart').each(function(){
            $(this).easyPieChart({
                    size:140,
                    animate: 2000,
                    lineCap:'butt',
                    scaleColor: false,
                    barColor: '#FF5252',
                    trackColor: 'transparent',
                    lineWidth: 10
                });
            });
        },{offset:'80%'});



		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();


		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').submit(function(e) {

			e.preventDefault();

			var c_name = $('#c_name').val();
			var c_email = $('#c_email').val();
			var c_message = $('#c_message ').val();
			var response = $('#contact-form .ajax-response');

			var formData = {
				'name'       : c_name,
				'email'      : c_email,
				'message'    : c_message
			};

			if (( c_name== '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email) )) {
				response.fadeIn(500);
				response.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
			}

			else {
					 $.ajax({
							type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
							url         : 'assets/php/contact.php', // the url where we want to POST
							data        : formData, // our data object
							dataType    : 'json', // what type of data do we expect back from the server
							encode      : true,
							success		: function(res){
											var ret = $.parseJSON(JSON.stringify(res));
											response.html(ret.message).fadeIn(500);
							}
						});
				}
            	return false;
			});

	});

})(jQuery);