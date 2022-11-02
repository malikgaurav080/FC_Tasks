function save(){
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    var flag = 0;
    
    fetch("http://localhost:3000/users",{
        method:"GET",
        headers:{
        'Content-Type':'application/json'
      }
    }).then(response=>response.json())
    .then(json=>{
        json.map(data=>{

            if(data.Email==email && data.Password==pass){
                alert("User verified")
                window.open("./index.html")
                flag = 1
                return
            }})
        if(flag==0)
        alert("User not Verified")
    })
}