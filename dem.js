// var form = document.getElementById('addForm');
// var itemList=document.getElementById('items');
// form.addEventListener('submit',addItem);

// function addItem(e){
   
//     e.preventDefault();
//     var newItem=document.getElementById('item').value;
//     var li=document.createElement('li');
//     li.className='list-group-item';
//     li.appendChild(document.createTextNode(newItem));
//     itemList.appendChild(li);
// }
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);
// deletEvent list
itemList.addEventListener('click',removeItem);
function addItem(e){
    
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    // creat li Eliment
    var li=document.createElement('li');
    // creat li class
    li.className='list-group-item';
    // Addtextnode
    li.appendChild(document.createTextNode(newItem));
    // creat deletbtn
    var deletbtn=document.createElement('button');
    // add btnclass
    deletbtn.className='btn btn-danger btn-sm float-right delete';
    // appendtext
    deletbtn.appendChild(document.createTextNode('x'));
    li.appendChild(deletbtn);
    // addlitem
    itemList.appendChild(li);   
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('are u shur')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}



