//XMLHttpRequest----------------------------------------------------------------
function x(){
  var xhr = createCORSRequest('OPTIONS', url);
  if (!xhr) {
    throw new Error('CORS not supported');
  }
  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
        console.log(JSON.stringify(this.response))
    }
  };
  xhr.onload = function() {
  var responseText = xhr.responseText;
   console.log(responseText);
   // process the response.
  };

  xhr.onerror = function() {
    console.log('There was an error!');
  };
  xhr.send(JSON.stringify(requestBody));
}

function createCORSRequest(method, url) {
   var xhr = new XMLHttpRequest();

   if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
   } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
   } else {
      // CORS not supported.
      xhr = null;
   }
   return xhr;
}

//FETCH-------------------------------------------------------------------------
function fetchPOST(request){
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
    // you can access your data here
        console.log(data.body)
        window.alert('Successfully hosted'+"\n"+data.body)
    })
}

//AJAX----------------------------------------------------------------------------
function PostCode(data) {

         $.ajax({
           type: "POST",
           method : "POST",
           url : url,
           dataType: "jsonp",
           crossDomain: true,
           contentType: "application/json",
           data: JSON.stringify(data),
           success: function (response) {
             // clear form and show a success message
             alert("Successfull"+response);
             location.reload();
           },
           error: function(xhr, ajaxOptions, thrownError) {
             alert("UnSuccessfull");
            }
           });
       }
