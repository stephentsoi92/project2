var http = require('http');
var fs = require('fs');//Library for call files
http.createServer(function (req, res) {
  fs.readFile('calendar.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);




$(document).ready(function() {
  $.ajax({
      url: "/api/positions",
      method: "GET"
  }).then(function(response) {
      $("#calendar").empty();

      for (let i = 0; i < response.length; i++)
      {
          $("#calendar").append('<option value=' + String(response[i].PositionId) + '>' + String(response[i].PositionName) + '</options>');
      }
  });
});