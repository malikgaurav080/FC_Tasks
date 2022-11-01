function save(){
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    
    fetch("http://localhost:3000/users",{
        method:"GET",
        headers:{
        'Content-Type':'application/json'
      }
    }).then(response=>response.json())
     .then(response=>
     {
        // console.log(response)
        // save response in a local variable/array and compare creditionals outside the fetch 
        for(let d of response){
            if(d.Email == email && d.Password == pass){
                alert("login successfully");
                window.open("./index.html")
                return

            }
            alert("wrong Details!!")
            return
            
        }
    });
}