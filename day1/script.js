
/* const products=[
    { name:"Shirt",price:1600},
    { name:"Trousers",price:1800},
    { name:"Jeans",price:1200},
    { name:"Jacket",price:3000},
    { name:"Tshirt",price:600}
];

const discountProducts=products.filter(prod=>{
    return prod.price>1500;
}).map(prod=>{
    return {name:prod.name,price:prod.price,discountPrice:prod.price-prod.price*0.5};
});

console.log(discountProducts);

const now= new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getMilliseconds());
console.log(now.getDate());

console.log(1);

setTimeout(()=> {
    console.log("where")
},4000)
console.log("-----") */

const getTodos=  (callback)=> {
const request= new XMLHttpRequest();
request.addEventListener("ready state",(e)=> {
  if(request.readyState==4 && request.status==200){
    const data= JSON.parse(request.responseText);
   callback(undefined,data);
  }
  else if(request.readyState==4){
    callback("cpild not",undefined);
  }
});

request.open("GET","https://jsonplaceholder.typicode.com/todos/");
request.send();
};
getTodos((err,data)=>{
 if(err){
    console.log(err);
 }
 else {
    console.log(data);
 }

});

