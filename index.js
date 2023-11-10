
var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","item");

container.append(row);


var res=fetch("https://jsonplaceholder.typicode.com/comments");
res.then((data)=>data.json()).then((data1)=>foo(data1));

 
function foo(data1){
for(var i=0;i<data1.length;i++){
   row.innerHTML+=`
   <div class="box">
   <div class="post">${data1[i].postId}</div>
   <div class="id">${data1[i].id}</div>
   <div class="name">${data1[i].name}</div>
   <div class="email">Email:${data1[i].email}</div>
   <div class="para">${data1[i].body}</div>
  </div> `;
document.body.append(container); 
}
}


 

