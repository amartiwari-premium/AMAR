let cart=JSON.parse(localStorage.getItem("cart")||"[]")
let orders=JSON.parse(localStorage.getItem("orders")||"[]")

function register(){

let name=document.getElementById("name").value
let phone=document.getElementById("phone").value
let pass=document.getElementById("pass").value

localStorage.setItem("user",JSON.stringify({name,phone,pass}))

alert("OTP Sent: 1234")

location="otp.html"

}

function verifyOTP(){

let otp=document.getElementById("otp").value

if(otp=="1234"){

alert("OTP Verified")

location="login.html"

}else{

alert("Wrong OTP")

}

}

function login(){

let phone=document.getElementById("phone").value
let pass=document.getElementById("pass").value

let user=JSON.parse(localStorage.getItem("user"))

if(user && phone==user.phone && pass==user.pass){

location="index.html"

}else{

alert("Login Failed")

}

}

function addCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added To Cart")

}

function buyNow(name,price){

let id="ORD"+Math.floor(Math.random()*100000)

orders.push({id,name,price,status:"Order Placed"})

localStorage.setItem("orders",JSON.stringify(orders))

alert("Order Placed. ID:"+id)

}

function showOrders(){

let list=document.getElementById("orders")

list.innerHTML=""

orders.forEach(o=>{

list.innerHTML+=`<div class='card'>
<b>${o.name}</b><br>
Price ₹${o.price}<br>
Order ID ${o.id}<br>
Status ${o.status}

</div>`})

}

function track(){

let id=document.getElementById("oid").value

let order=orders.find(o=>o.id==id)

if(order){

let steps=["Order Placed","Packed","Shipped","Out for Delivery","Delivered"]

let i=steps.indexOf(order.status)

document.getElementById("bar").style.width=(i+1)*20+"%"

document.getElementById("status").innerText=order.status

}else{

alert("Order Not Found")

}

}
