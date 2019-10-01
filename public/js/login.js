function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "password"){
    alert ("Login successfully");
    window.location.href = "file:///Users/andreia/coding_bootcamp/projects/project2/project2/public/calendar.html";

      }
      else{
        alert("Invalid username or password");
        }
      return false;
      }