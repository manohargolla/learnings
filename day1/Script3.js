/* setInterval(()=> {
    document.getElementById("time").innerText=new Date()
},1000) */

const getTodos=  (resource,callback)=> {
    const request= new XMLHttpRequest();
    request.addEventListener("readystatechange",(e)=> {
      if(request.readyState==4 && request.status==200){
        const data= JSON.parse(request.responseText);
       callback(undefined,data);
      }
      else if(request.readyState==4){
        callback("cpild not",undefined);
      }
    });
    
    request.open("GET",resource);
    request.send();
    };
    getTodos("books.json",(err,data)=>{
    
        console.log(data)
        getTodos("journals.json",(err,data)=>{
    
            console.log(data)
        });
    });

    const getSomething=()=>{
        return new Promise((resolve,reject)=>{
            resolve("data fetched");
            reject("not fetched")
        });
    };

    getSomething().then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });