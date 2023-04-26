

var itemList=document.querySelector("#items");
// parentElement
console.log(itemList.parentElement);
// lastchild
console.log(itemList.lastElementChild);
// parentElement
console.log(itemList.lastChild);

// creat div
var newDiv=document.createElement('div');
// creatChild
console.log(newDiv);

// setAttribute

newDiv.setAttribute('title','hello div');

// creatTextNode
var newDivTex=document.createTextNode('hello world');
// appendChild
newDiv.appendChild(newDivTex);
// firstElementChild
console.log(itemList.firstElementChild);
// firstChild
console.log(itemList.firstChild);
// nextSibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);
// previousSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);
// createElement
console.log(newDiv.createElement);




