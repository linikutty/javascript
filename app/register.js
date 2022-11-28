const names=document.getElementById("name");
const email=document.getElementById("email");
const passwd=document.getElementById("passwd");
const confirmpass=document.getElementById("confirmpass");
const register=document.getElementById("register")
//alert("alert");

function validate(){

    if(names.value.length<=0){
        alert("Name is Required");
        names.focus();
        return false;
    }
    if(email.value.length<=0){
        alert("Mail is Required");
        email.focus();
        return false;
    }
    if(passwd.value.length<=0){
        alert("Password is Required");
        passwd.focus();
        return false;
    }
    if(confirmpass.value.length<=0){
        alert("confirm your Password");
        confirmpass.focus();
        return false;
    }
}

let register_details={};

function addDetails(key,value){
    register_details[key]=value;
}


register.addEventListener('click',(e)=>{
    e.preventDefault();
    validate();
    if(!localStorage.getItem("register_details")){
    localStorage.setItem("register_details",JSON.stringify([]))
    console.log(register_details);
}

let list_1=JSON.parse(localStorage.getItem("register_details"));
list_1.push(register_details);

localStorage.setItem("register_details",JSON.stringify(list_1));

window.location.href="login.html";

});


//login

// function login(){
//     alert("login");
    // let email=document.getElementById("mail").value;
    // let pass=document.getElementById("pass").value;
    // let user_records=JSON.parse(localStorage.getItem("register_details"))?JSON.parse(localStorage.getItem("register_details")):[];
    // if(user_records.some((v)=>{return v.email==email && v.pass==pass}))
    // {
    //   let current_user=user_records.filter((v)=>{return v.email==mail && v.pass==pass})[0];
    //   localStorage.setItem("name",current_user.name);
    //   localStorage.setItem("email",current_user.email);
    //   alert("welcome"+" "+localStorage.getItem('name'));
    //   window.location.href="profile.html";

    // }
    // else{
    //   alert('login fail');
    // }
//   };
