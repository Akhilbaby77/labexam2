
    function validate() {
        var name = document.getElementById('name1');
        var email = document.getElementById('email1');
  
        
        var reName = /^[A-Za-z ]{3,}$/;
        var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       
        
        if (name.value.trim() === "" || !reName.test(name.value)) {
            window.alert("Enter your name");
            console.log("Enter your name");
        } else if (!reEmail.test(email.value) || email.value === "") {
            window.alert("Invalid Email");
            console.log("Invalid Email");
        } 
        else {
            window.alert("Form submitted successfully");
            console.log("Form submitted successfully");
            window.location.reload();
        }
    }
    
    
 