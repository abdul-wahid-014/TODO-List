let a = document.getElementById('main');
let inputext = document.getElementById('inputext');
function empty(){
    a.innerHTML = '';
}
function additem(){
    let li=document.createElement('li');
    let text = document.createTextNode(inputext.value);
    li.appendChild(text);
    a.append(li);
    inputext.value='';
    let btn = document.createElement('Button');
    let del = document.createTextNode('Delete');
    btn.append(del);
    li.appendChild(btn);
    li.setAttribute('class','list-group-item');
    btn.setAttribute('class','btn btn-danger ms-5');
    btn.setAttribute('onclick','deltheprt(this)');


    let btnedit = document.createElement('Button');
    let edit = document.createTextNode('Edit');
    btnedit.append(edit);
    li.appendChild(btnedit);
    btnedit.setAttribute('class','btn btn-primary ms-2');
    btnedit.setAttribute('onclick','edithevalue(this)');
}
function deltheprt(e){
    e.parentElement.remove();
}
function edithevalue(e){
    var a = prompt('enter updated value '+e.parentElement.firstChild.nodeValue);
    e.parentElement.firstChild.nodeValue=a;
}