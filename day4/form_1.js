function validate(val) {
    v1 = document.getElementById("fname");
    v2 = document.getElementById("lname");
    v3 = document.getElementById("email");
    v4 = document.getElementById("mob");
    v5 = document.getElementById("job");
    v6 = document.getElementById("quali");
    v7 = document.getElementById("add");
    flag1 = true;
    flag2 = true;
    flag3 = true;
    flag4 = true;
    flag5 = true;
    flag6 = true;
    flag7 = true;

    if(val>=1 || val==0) {
        if(v1.value == "") {
            v1.style.borderColor = "red";
            flag1 = false;
        }
        else {
            v1.style.borderColor = "green";
            flag1 = true;
        }
    }

    if(val>=2 || val==0) {
        if(v2.value == "") {
            v2.style.borderColor = "red";
            flag2 = false;
        }
        else {
            v2.style.borderColor = "green";
            flag2 = true;
        }
    }
    if(val>=3 || val==0) {
        if(v3.value == "") {
            v3.style.borderColor = "red";
            flag3 = false;
        }
        else {
            v3.style.borderColor = "green";
            flag3 = true;
        }
    }
    if(val>=4 || val==0) {
        if(v4.value == "") {
            v4.style.borderColor = "red";
            flag4 = false;
        }
        else {
            v4.style.borderColor = "green";
            flag4 = true;
        }
    }
    if(val>=5 || val==0) {
        if(v5.value == "") {
            v5.style.borderColor = "red";
            flag5 = false;
        }
        else {
            v5.style.borderColor = "green";
            flag5 = true;
        }
    }
    if(val>=6 || val==0) {
        if(v6.value == " ") {
            v6.style.borderColor = "red";
            flag6 = false;
        }
        else {
            v6.style.borderColor = "green";
            flag6 = true;
        }
    }
    if(val>=7 || val==0) {
        if(v7.value == "") {
            v7.style.borderColor = "red";
            flag7 = false;
        }
        else {
            v7.style.borderColor = "green";
            flag7 = true;
        }
    }
    flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6 &&flag7;

    return flag;
}

//form

const first=document.getElementById("fname");
const last=document.getElementById("lname");
const email=document.getElementById("email");
const mobile=document.getElementById("mob");
const job=document.getElementById("job");
const quali=document.getElementById("qualif");
const add=document.getElementById("add");
const save=document.getElementById("submit");
const display_form=document.getElementById("display_form");
const saveInd1 = document.getElementById("saveIndex");
const saveInd = document.getElementsByClassName("abc");

const saveTaskButton = document.getElementById("save-todo-btn");


// console.log(first);
let formArray=[];

save.addEventListener("click",(event)=>{
    event.preventDefault();
     var forms=localStorage.getItem("form");
    if(forms===null){
        formArray=[];
    }
    else{
        formArray=JSON.parse(forms);
    }
    formArray.push({
        firstName:first.value,
        lastName:last.value,
        e_mail:email.value,
        mobile_no:mobile.value,
        role:job.value,
        qualification:quali.value,
        address:add.value,

    });
    first.value=" ";
    last.value=" ";
    email.value=" ";
    mobile.value=" ";
    job.value=" ";
    quali.value=" ";
    add.value=" ";
    

    localStorage.setItem("form",JSON.stringify(formArray));    
    forms=localStorage.getItem("form");
    location.reload();

    // display();
})
// console.log(formArray);

// function display(){
    let forms=JSON.parse( localStorage.getItem("form"));
    //console.log("up",forms);

    //console.log(forms);
    // if(forms===null){
    //     formArray=[];
    // }
    // else{
    //     formArray=JSON.stringify(forms);
    //     //console.log("ss",typeof(formArray));
    // }
    // console.log(forms);
    
    let form_list=" ";
    
    forms.forEach((list,ind)=>{
        //console.log("list",list);
        form_list +=`
       
          <tr>
            
            <td>${list.firstName}</td>
            <td>${list.lastName}</td>
            <td>${list.e_mail}</td>
            <td>${list.mobile_no}</td>
            <td>${list.role}</td>
            <td>${list.qualification}</td>
            <td>${list.address}</td>
            <td><input type='button' value='edit' onclick='edit(${ind})'/></td>
            <td><input type='button' value='delete' onclick='deleteli(${ind})'/></td>
          </tr>
        `;
    });
    displays.innerHTML=form_list;

// }

function deleteli(ind){
    //alert(ind)
    let forms= localStorage.getItem("form");
    //console.log(forms)
    formArray=JSON.parse(forms);

    //console.log(formArray);

    formArray.splice(ind, 1);
    localStorage.setItem("form",JSON.stringify(formArray));
    location.reload();
    
}


function edit(ind){
    alert(ind)
    saveInd.value=ind;
    // quali.value="kkk";
    //console.log(saveInd.value);
    // let forms=localStorage.getItem("form");
    //console.log("edit",forms[ind])
    // formArray=JSON.parse(forms);
    // console.log(formArray);
    //console.log("ss",typeof(formArray));

    first.value=forms[ind].firstName;
    last.value=forms[ind].lastName;
    email.value=forms[ind].e_mail;
    mobile.value=forms[ind].mobile_no;
    job.value=forms[ind].role;
    quali.value=forms[ind].qualification;
    add.value=forms[ind].address;
    //quali.value=forms[ind].qualification;
    //console.log(first.value);
    save.style.display="none";
    saveTaskButton.style.display = "block";
    //location.reload();

}

saveTaskButton.addEventListener("click", () => {

    //alert('edit change')
    let forms = localStorage.getItem("form");
    formArray = JSON.parse(forms);
    console.log(formArray);
    let saveid = saveInd.value;
    console.log(saveid)
    console.log(formArray[saveid]);
    formArray[saveid].firstName=first.value;

    formArray[saveid].lastName=last.value;
    formArray[saveid].e_mail=email.value;
    formArray[saveid].mobile_no=mobile.value;
    formArray[saveid].role=job.value;
    formArray[saveid].qualification=quali.value;
    formArray[saveid].address=add.value;
    
    localStorage.setItem("form", JSON.stringify(formArray));


    //console.log(formArray);
    save.style.display = "block";
    saveTaskButton.style.display = "none";
    // first.value=" ";
    // last.value=" ";
    // email.value=" ";
    // mobile.value=" ";
    // job.value=" ";
    // quali.value=" ";
    // add.value=" ";

    
   location.reload();
});