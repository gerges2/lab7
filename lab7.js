let numOfError=0 ,spans=[],collection,index ,check =false// for redios
let count =0// for select box
const x = document.getElementById("1");//for submit button
function showError(path,massage,classname ){
    let newRow =document.createElement("span");
        newRow.innerHTML=`${massage}`;
        newRow.setAttribute("class",`spanjava`)
        path.insertAdjacentElement("afterend", newRow);
}
function valusername(username){
let value1 = username.value
let value2= parseInt(value1)
if (!isNaN(value2)){showError(username,"number value");numOfError++}
else if (value1==""){showError(username,"empty value");numOfError++}
else{console.log(value1)}// end validation username
}
function valpassword(password){
    let value1 = password.value
    if (value1==""){showError(password,"empty value");numOfError++}
    else if(value1.length<8){showError(password,"password is less than 8 character");numOfError++}
    else{console.log(value1)}//end validation of password
}
function valredios(){
    let radios =document.querySelectorAll("[name='gender']")
for (let index = 0; index < radios.length; index++) {
if (radios[index].checked )check=true 
}
if (check){}
else{
let path =document.querySelectorAll("[for='famale']")
    showError(path[0],"empty value")
    numOfError++
    }
}
function checkbox(){
    let select =document.querySelectorAll("[type='checkbox']")
    for (let index = 0; index < select.length; index++) {
    if (select[index].checked )count++
    }
    if (count>1){}
    else{
    let path =document.querySelectorAll( '[for="hoppies3"]')
    showError(path[0],"plz select at lesst two faild")
    numOfError++
}
}
function clearerror(){
    spans =document.querySelectorAll("[class='spanjava']")
    for (let index = 0; index < spans.length; index++) {
        spans[index].remove();
    }
    numOfError=0;
}


x.addEventListener('click',function(e){
clearerror();
collection = document.getElementsByTagName("input");
valusername(collection[0]);
valpassword(collection[1]);
valredios();
checkbox();


let countery =document.querySelectorAll("option")
for (let index = 0; index < countery.length; index++) {
if (countery[index].selected )console.log(countery[index].value)
}

console.log(numOfError)
if (numOfError==0) {}
else{
    e.preventDefault()//علشان اوقف عمل الزرار
}
spans=document.querySelectorAll("[class='spanjava']")

})

  





collection=document.getElementsByTagName("input");
  collection[0].addEventListener('click',function(e){
    if (spans.length>0) { spans[0].remove();}})
collection[1].addEventListener('click',function(e){
    if (spans.length>0) { spans[1].remove();}
})
  
document.querySelectorAll("[name='gender']")[0].addEventListener('click',function(e){
    if (spans.length>0) {spans[2].remove();} } )

document.querySelectorAll("[name='gender']")[1].addEventListener('click',function(e){
    if (spans.length>0) {spans[2].remove();} } )


let select =document.querySelectorAll("[type='checkbox']")
for (let index = 0; index < select.length; index++) {
    select[index].addEventListener('click',function(e){
        if (spans.length>0) {spans[3].remove();} } )
    
}
