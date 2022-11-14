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
    .then(json=>{
        json.map(data=>{
            if(data.Email==email && data.PhoneNO==number && data.City==city){
                pass+= data.Password
                alert("your password: ",data.Password);
                flag = 1
                return
            }})
        if(flag==0)
        alert("Wrong Details");
    });
}
