'use strict'

var onSuccess = async function (token) {
  var subButton = document.getElementById('contactSubmit')
  var xhr = new XMLHttpRequest();
  var url = "https://openlocation.codes/api/verify";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  var data = JSON.stringify({"token": token});
  var success;
  var promise = await new Promise((resolve, reject) => { 
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          resolve( success = json.success )
      }
    };
    xhr.send(data);
  });
  if ( success ) {
    window.ga('send', 'event', 'captcha', 'success')
    subButton.disabled = false
  } else {
    window.ga('send', 'event', 'captcha', 'failed')
  }
  return success
}
