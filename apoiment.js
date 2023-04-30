var form=document.getElementById('form');
form.addEventListener('submit',addItems);
function addItems(e){
    e.preventDefault();
    var newItem=document.getElementById('username').value;
    var newItem2=document.getElementById('username2').value;
    var newItem3=document.getElementById('phone-no').value;
   localStorage.setItem(newItem2,' Name '+newItem+','+' Email : '+newItem2+','+' phon no '+newItem3);
    var li=document.createElement('li');
li.className='list';
li.appendChild(document.createTextNode('Name '+newItem+','+' Email : '+newItem2+','+' phone No '+newItem3));
form.appendChild(li);

}
