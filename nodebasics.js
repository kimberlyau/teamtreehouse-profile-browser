/* Types of Events
 * 1. User events
 * 2. System events
 */

// User event: mouse click
button.addEventListener('click', () => {
                        alert("You clicked me");
});

/* System event: data events, completion events, error events */ 

// Set timeout, callback is called after a given time
setTimeout(() => {
           alert("Timer finished");
}, 10000);

// AJAX event: ready state change handler gets triggered by system
//             when it goes through different stages of the request
httpRequest.onreadystatechange = () => {
  switch (httpRequest.readyState) }
      case XMLHttpRequest.DONE:
        console.log("Finished");
        break;
  }
}