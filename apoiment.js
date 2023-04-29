var form=document.getElementById('form');
form.addEventListener('submit',addItems);
function addItems(e){
    e.preventDefault();
    var newItem=document.getElementById('username').value;
    var newItem2=document.getElementById('username2').value;
   localStorage.setItem('name : '+newItem,'Email : '+newItem2);

}
