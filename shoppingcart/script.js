
document.getElementById("btn").addEventListener("click",addProduct);
document.getElementById("total").addEventListener("click",getTotal);
function getTotal(products){
    let sum=0;
    for(let i=0;i<products.length;i++){
        let {price,quantity}=products[i]
       sum+=parseInt(price*quantity,10)
    }
    return sum
}
const products =[
    {
        "product":"washing machine",
        "price": 10000
    },
    {
        "product":"chair",
        "price": 2000
    },
    {
        "product":"Laptop",
        "price":50000
    },
    {
        "product":"Headset",
        "price":5000
    }
]
const showProducts=[]
document.getElementById('product').addEventListener('change', function() {
    const product=this.value
    console.log('You selected: ', this.value);
    for(let i=0;i<products.length;i++){
        let ele=products[i]
        if(ele.product==product)
        document.getElementById('price').value=ele.price
    }
  });
getOptions(products);
function getOptions(products){
products.map((product)=>{
    const ele=document.createElement('option')
    ele.value=product.product
    ele.innerHTML=product.product
    document.getElementById('product').append(ele)
})
}
function addProduct(){
    const product=document.getElementById('product').value
    const price=document.getElementById('price').value 
    const quantity=document.getElementById('quantity').value 
    console.log(product,' ',price,' ',quantity)
    const obj={}
    obj.price=price
    obj.product=product
    obj.quantity=quantity
    obj.subTotal=price*quantity
    showProducts.push(obj)
    loadArray(showProducts)
    
    
}
function loadArray(products){
    document.getElementById('row').innerHTML=`<tr>
    <th>Product</th>
    <th>Quantity</th>
    <th>Unit Price</th>
    <th>Subtotal</th>
    <th>Delete</th>
  </tr>`
    for(let i=0;i<products.length;i++){
        const {price,product,quantity,subTotal}=products[i]
        const row=document.createElement('tr')
        var data=document.createElement('td')
        data.innerHTML=product
        row.append(data)
        var data=document.createElement('td')
        data.innerHTML=quantity
        row.append(data)
        var data=document.createElement('td')
        data.innerHTML=price
        row.append(data)
        var data=document.createElement('td')
        data.innerHTML=subTotal
        row.append(data)
        var data=document.createElement('td')
        data.innerHTML=`<div class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg></div>`
        row.append(data)
        document.getElementById('row').append(row)
        addEventListeners();
        
        
    }
    document.getElementById("total").innerHTML=getTotal(products)
}

function addEventListeners(){
const className=document.getElementsByClassName("delete")
for(let i=0;i<className.length;i++){
    className[i].addEventListener('click',deleteProduct)
    console.log('hi')
}
}

function deleteProduct(event){
    const cart=document.getElementsByClassName('delete')
    console.log(cart)
    const updatedProducts=[]
    console.log(event.target)
    //loadArray(updatedProducts)
} 