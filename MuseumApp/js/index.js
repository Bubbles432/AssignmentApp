var notification_count=0;

$(document).on('pageinit', function() {

	$('#notificationButton').on('click', function() {
		createNotification();
	});


});
   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.schedule({ 
    	id: 		1,
        title: 		"Welcome",
        message: 	"This app using gps location, you can opt out of this.",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
 

}

function initMap() {
	var myLatLng = {lat: 52.195723, lng: -2.226128};
	var myLatLngSecond = {lat: 52.189944, lng: -2.218847};
	
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.195771, lng: -2.225783},
          zoom: 15
        });
		
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
		});
		
			var marker = new google.maps.Marker({
			position: myLatLngSecond,
			map: map,
		});
      }
    