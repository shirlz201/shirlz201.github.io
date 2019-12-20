function validate() {

    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var phone= document.getElementById("phone").value;

    console.log(name);
    console.log(email);
}

if (name== " " || !(isNan(name)) ) {
    alert ("Please enter a valid name.")
    return false;
}

    else if (name == "" || !(isNaN(name)) ) {
    alert("Please enter a valid email.")
    return false;
    }
