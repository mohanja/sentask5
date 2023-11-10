const form=document.getElementById("form");
const email=document.getElementById("email")
const password=document.getElementById("password")

const button=document.getElementById("btn")



String.prototype.isEmail = function() {
    return !!this.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}


function cheking(inputs){
   inputs.forEach(input=>{
    if(input.value.trim()===""){
        errormsg(input,`${getid(input)} is requried`)
    }else{
        successmsg(input) 
    }
   }) 
}

function getid(inputs){
    return inputs.id;
}

function errormsg(input,message){
    const formgroup=input.parentElement;
    formgroup.className="form-group error";
    const p=formgroup.querySelector("p")
    p.innerHTML=message
}

function successmsg(input){
    const formgroup=input.parentElement;
    formgroup.className="form-group success";
    const p=formgroup.querySelector("p")
    p.innerHTML=""
}
form.addEventListener('submit',function(event){
    event.preventDefault()
  cheking([email,password])
    chekemail(email)
    chekuser(username,3,15)

})

function chekuser(data,min,max){
    const value=data.value.trim().length;

    if(value<min){
        errormsg(data,`${getid(data)} must be greater than ${min} chareaters`)
    }else if(value>max){
        errormsg(data,`${getid(data)}must be smallar than ${max} chareaters`)
    }else{
        successmsg(data)
    }
}

function chekemail(input){
    
    if(!input.value.trim().isEmail()){
        errormsg(input ,`it is not email`)
    }else{
        successmsg()
    }
}