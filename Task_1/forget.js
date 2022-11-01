function submit(){
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;
    var city=document.getElementById("city").value;
    
    fetch("http://localhost:3000/users",{
        method:"GET",
        headers:{
        'Content-Type':'application/json'
      }
    }).then(response=>response.json())
     .then(response=>
     {
        // console.log(response)

        for(let d of response){
            if(d.Email == email && d.Phone-No == number && d.City == city){
                alert("User Verifed!!");
                // alert("This is your Password: "+ d.Password);
                return

            }
            alert("User Not Verified!!")
            return
            
        }
    });
}