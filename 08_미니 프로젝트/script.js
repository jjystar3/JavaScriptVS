let listArr = [];
const todoList = document.getElementById('addedList');

let savedList = JSON.parse(localStorage.getItem("saved-list"));

if (savedList != null) {
  for (let i = 0; i < savedList.length; i++) {
    listArr.push(savedList[i]);
    addList(savedList[i]);
  }
}

function addList(preList) {
  let listText = document.getElementById("listTxt");
  let listTextValue = null;

  if (preList === undefined) {
    listTextValue = { checked: false, value: listText.value };
    if(listText.value != ""){
      listArr.push(listTextValue);
    }
    localStorage.setItem('saved-list', JSON.stringify(listArr));
  } else {
    listTextValue = { checked: preList.checked, value: preList.value };
  }

  if (listTextValue.value != "") {

    let list = document.createElement('div');
    list.classList.add("list");
    todoList.appendChild(list);

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add("chkBox");
    checkbox.setAttribute("onclick", "toggleFinished(this.parentElement)");
    checkbox.checked = listTextValue.checked;
    list.appendChild(checkbox);

    let textlist = document.createElement('input');
    textlist.type = "text";
    textlist.classList.add("txtList");
    textlist.classList.add("txtReadOnly");
    textlist.value = listTextValue.value;
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

    if(listTextValue.checked){
      list.classList.add("crossline");
    }

  }

  listText.value = "";
  countStatus();
};

function toggleFinished(obj) {
  let checkBox = obj.querySelector('.chkBox');
  let text1 = obj.querySelector('.txtList');

  if (checkBox.checked) {
    obj.classList.add("crossline");
  } else {
    obj.classList.remove("crossline");
  }
  
  objIndex = listArr.findIndex(obj => obj.value == text1.value);
  if (objIndex > -1) {
    listArr[objIndex].checked = checkBox.checked;
  }
  localStorage.setItem('saved-list', JSON.stringify(listArr));
  countStatus();
};

let editText = "";

function editList(obj) {
  let text1 = obj.querySelector('.txtList');
  let btn = obj.querySelectorAll('.btnList');

  if (btn[0].value == "수정") {
    text1.classList.remove("txtReadOnly", "crossline");
    text1.readOnly = false;
    editText = text1.value;
    btn[0].value = "저장";
  } else if (btn[0].value == "저장") {
    objIndex = listArr.findIndex(obj => obj.value == editText);
    if (objIndex > -1) {
      listArr[objIndex].value = text1.value;
      if(listArr[objIndex].checked){
        text1.classList.add("txtReadOnly", "crossline");
      }else{
        text1.classList.add("txtReadOnly");
      }
    }
    localStorage.setItem('saved-list', JSON.stringify(listArr));  
    text1.readOnly = true;
    btn[0].value = "수정";
    editText = "";
  }
}

function deleteList(obj) {
  let text1 = obj.querySelector('.txtList');
  obj.remove();
  objIndex = listArr.findIndex(obj => obj.value == text1.value);
  if (objIndex > -1) {
    listArr.splice(objIndex, 1);
  }
  localStorage.setItem('saved-list', JSON.stringify(listArr));
  countStatus();
}

function deleteAllList() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  listArr = [];
  localStorage.setItem('saved-list', JSON.stringify(listArr));
  countStatus();
}

function countStatus() {
  let todoCounts =  document.getElementById('status');

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