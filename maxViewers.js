//Simple function to log the maximum viewers in a YouTube live event! 
//While the event is live, copy the code below, open up your console (option+command+j in Chrome), paste this code in and press enter.
//Will run automatically, updating you on the current max number of viewers as needed as long as you don't navigate away from the page. 

function tracking() {

maxViewers = ["0"]

  myTimer()

  var myVar = setInterval(myTimer, 5000);

  function myTimer() {

    var currentViewers = document.getElementsByClassName("view-count style-scope yt-view-count-renderer")[0].innerHTML
    var viewerNumber = currentViewers.split(' ')
    
    if (viewerNumber[0] > maxViewers[0]){
      maxViewers[0] = viewerNumber[0]
      console.log("Max viewers = " + maxViewers[0] + " at " + new Date())
    } else {
      maxViewers[0] = maxViewers[0]
    }
  }
}

tracking()
