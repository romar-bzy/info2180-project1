function sprinkle(){
    var emadd = document.getElementsByName("email");
    document.getElementsByClassName("btn")[1].onclick=function(e){

        var input = emadd.value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (input == "") {
            document.getElementsByClassName("message").innerHTML = "Please provide a valid email address";
        }

        else if (!input.match(mailformat)) {
            document.getElementsByClassName("message").innerHTML = "Please provide a valid email address";
        }

        else if (input.includes("@") && input.includes(".")) {
            document.getElementsByClassName("message").innerHTML = "Thank You! Your email address" + " " + eaddress + " " + "has been added to our mailing list";    
        }

        
    } 
    e.preventDefault();
    
}

window.onload = sprinkle;