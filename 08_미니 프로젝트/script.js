const todoList = document.getElementById('addedList');
const todoCounts =  document.getElementById('status');

document.addEventListener('DOMContentLoaded', loadTodos());

function addList() {
  let listText = document.getElementById("listTxt");
  
  if(listText.value != "") {
    createTodoElement(listText.value, false);    
    saveTodos();
    listText.value = "";
  }
};

function createTodoElement(text, isChecked){

  let list = document.createElement('div');
  list.classList.add("list");
  todoList.appendChild(list);

  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.classList.add("chkBox");
  checkbox.setAttribute("onclick", "toggleFinished(this.parentElement)");
  checkbox.checked = isChecked;
  list.appendChild(checkbox);

  let textlist = document.createElement('input');
  textlist.type = "text";
  textlist.classList.add("txtList");
  textlist.classList.add("txtReadOnly");
  textlist.value = text;
  textlist.readOnly = true;
  list.appendChild(textlist);

  let btn1 = document.createElement('input');
  btn1.type = "button";
  btn1.classList.add("btnList");
  btn1.value = "수정";
  btn1.setAttribute("onclick", "editList(this.parentElement)");
  list.appendChild(btn1);

  let btn2 = document.createElement('input');
  btn2.type = "button";
  btn2.classList.add("btnList");
  btn2.value = "삭제";
  btn2.setAttribute("onclick", "deleteList(this.parentElement)");
  list.appendChild(btn2);

  if(isChecked){
    list.classList.add("crossline");
  }
};

function toggleFinished(obj) {
  let checkBox = obj.querySelector('.chkBox');

  if (checkBox.checked) {
    obj.classList.add("crossline");
  } else {
    obj.classList.remove("crossline");
  }
  
  saveTodos();
};

function editList(obj) {
  let text1 = obj.querySelector('.txtList');
  let btn = obj.querySelectorAll('.btnList')[0];

  if (btn.value == "수정") {
    text1.classList.remove("txtReadOnly");
    text1.readOnly = false;
    btn.value = "저장";
  } else if (btn.value == "저장") {    
    saveTodos();
    text1.classList.add("txtReadOnly");
    text1.readOnly = true;
    btn.value = "수정";
  }
}

function deleteList(obj) {
  obj.remove();
  saveTodos();
}

function deleteAllList() {
  todoList.innerHTML = '';
  saveTodos();
}

function saveTodos() {
  const todos = [];  
  todoList.querySelectorAll('div').forEach(listItem => {    
    const todoText = listItem.querySelector('input[type="text"]').value;
    const isCompleted = listItem.querySelector('input[type="checkbox"]').checked;
    
    todos.push({ checked: isCompleted, value: todoText });
  });
  
  localStorage.setItem('saved-list', JSON.stringify(todos));

  countStatus();
}

function loadTodos() {
  let savedList = JSON.parse(localStorage.getItem("saved-list"));

  savedList.forEach(todo => {
      createTodoElement(todo.value, todo.checked);
  });

  countStatus();
}

function countStatus() {
  let totalCount = todoList.children.length;
  let checkedCount =  todoList.querySelectorAll('input[type="checkbox"]:checked').length;
  todoCounts.textContent = `총 ${totalCount}개 완료 ${checkedCount}개`;
}

function searchList(){
  let searchText = document.getElementById("searchTxt");
  let filter = searchText.value.toUpperCase();
  let li = todoList.getElementsByTagName('div');

  for (i = 0; i < li.length; i++) {
    let a = li[i].querySelector('input[type="text"]');
    let txtValue = a.value;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
