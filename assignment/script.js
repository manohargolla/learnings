document.getElementById("btn").addEventListener("click",addTodo);
document.getElementById("display").addEventListener("click",toggle);
document.getElementById('toggle').style.display="block"
document.getElementById("type").addEventListener("keyup",ignore);
function addTodo(){
    const task=document.getElementById('task').value
    const description=document.getElementById('description').value
    const ele=document.getElementById('list')
    const li=document.createElement('li')
    li.innerHTML='<p>Task name: '+task+' </p><p> Taskdescription: '+description+'</p><hr/>'
    ele.append(li)
    document.getElementById('task').value=''
    document.getElementById('description').value=''  
}
function toggle(){
    const ele=document.getElementById('toggle')
    if(ele.style.display==='block'){
        ele.style.display='none'
    }
    else{
        ele.style.display="block"
    }
}
function ignore(){
    const str=document.getElementById('type').value
    let ans=""
    for (let i=0;i<str.length;i++){
        let n = str.charCodeAt(i);
        let strStartsWithALetter = (n >= 65 && n < 91) || (n >= 97 && n < 123);
        if(strStartsWithALetter) ans+=str[i]
    }
    document.getElementById('output').innerHTML=ans;

}
