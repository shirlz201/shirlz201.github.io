var name;
var email;
var phone;
var info;

function validate() {
  
  name= document.getElementById("firstName").value;
  email= document.getElementById("email").value;
  phone= document.getElementById("phone").value;
  info= document.getElementById("info").value;

  if (name == "") {
    alert("Please enter a valid Name*")
  } else if (email == ""){
    alert("Please enter a valid email address*")
  } else if (phone == "" || phone == isNaN()){
    alert("Please enter a valid phone number*")
  } else if (info == "" ) {
    alert("Please enter additional informaiton")
  } else {
    alert("Thank you, we will contact you soon!")
  }
}