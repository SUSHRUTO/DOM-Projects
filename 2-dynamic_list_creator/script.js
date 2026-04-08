const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
let editItem = null;


addBtn.addEventListener("click", ()=> {
    if(input.value===""){
        alert("Please enter items");
        return;
    }
    if(editItem !== null){
    editItem.textContent = input.value;
    editItem = null;
    return;
    }

    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    const span = document.createElement("span");

    
    delBtn.textContent = "DELETE";
    delBtn.classList.add("delete");

    const edtBtn = document.createElement("button");
    edtBtn.textContent = "EDIT";
    edtBtn.classList.add("edit");

    span.textContent = input.value;
    
    // li.textContent = input.value;

    delBtn.addEventListener("click", ()=>{
        li.remove();
    })

    edtBtn.addEventListener("click", ()=>{
        editItem = span;
        input.value = span.textContent;
    })

    list.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(edtBtn);
    li.appendChild(span);

    input.value = "";
})