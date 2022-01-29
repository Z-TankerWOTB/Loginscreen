function login(){
    var userid=document.getElementById("typeusername").value;
    var userpswrd=document.getElementById("typepassword").value;
    if(userid=="Zafar99"&&userpswrd=="Zafar"){
        window.alert("CORRECT ID & PASSWORD");
    }
    else{
        alert("INCORRECT ID / PASSWORD");
    }
}