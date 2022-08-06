let id = 0;

document.getElementById('ad').addEventListener('click', () =>{
    let createdDate= new Date();
    let table=document.getElementById('list')
    let row=table.insertRow(1);
    row.setAttribute('id',`item-${id}`)
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
   
    row.insertCell(1).innerHTML = document.getElementById('new-start-date').value;
    let actions = row.insertCell(3)
    document.getElementById('new-task').value = '';
});