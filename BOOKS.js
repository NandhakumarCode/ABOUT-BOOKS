//toggle between with and without CSS style

function fun9(){
    let butt1= document.getElementById("butt1").firstElementChild;
   butt1.classList.toggle("style0")
  }
  function fun1(){
    
    let name=prompt("Enter your name: ");
    console.log(name);

  }
  function fun2(){
      let nan1=document.getElementById("input1").value;
      //console.log(nan1);
      let nan2=document.getElementById("para3");
      let name=prompt("Enter your name: ");
    console.log(name);
      //console.log(nan2);
      nan2.innerHTML=nan2.innerHTML+"<br>"+"name: "+name+"<br>"+"Comment: "+nan1;

  }
  function fun4()
  { 
    let str1= document.getElementById("name");
  let str2=document.getElementById("password");
  let password="nandhu1236";
  let email= /^[a-z0-9_]+@[a-z0-9_]+\.[a-z]{2,6}$/;
  console.log(email.test(str1.value))
  let name='nandhu111199@gmail.com';
  if(email.test(str1.value)){
  
  if(name===str1.value && password===str2.value){
      alert("your login is successfull");
  document.getElementById("lab2").style.visibility="hidden";
  document.getElementById("lab1").style.visibility="hidden";
  str2.style.border="2px solid green"; 
  str1.style.border="2px solid green ";
 // window.open("file:///D:/visualstudio/Webdev/books%20project/BOOKS.html") ;
 window.open("file:///D:/visualstudio/Webdev/books%20project/BOOKS.html");
  return true;
  }
  
  else if (name!=str1.value){
    str1.style.border="2px solid red";
    str2.style.border="0px solid red"; 
  document.getElementById("lab1").style.visibility="visible";
  document.getElementById("lab2").style.visibility="hidden";
  return false;
  }
  
  else{
    str2.style.border="2px solid red"; 
    str1.style.border="0px solid ";
    document.getElementById("lab1").style.visibility="hidden";
  document.getElementById("lab2").style.visibility="visible";
  return false;
  }
  }
  
  else{ alert("USING REGEX Invalid Email Type ");
  document.getElementById("lab1").style.visibility="visible";
  str1.style.border="2px solid red";
  }
  }
function funn1(){
  window.open("file:///D:/visualstudio/Webdev/books%20project/BOOKS.html");
}
 