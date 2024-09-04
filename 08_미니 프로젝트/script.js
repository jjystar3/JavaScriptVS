let listArr = [];

let savedList = JSON.parse(localStorage.getItem("saved-list"));

if (savedList != null) {
  for (let i = 0; i < savedList.length; i++) {
    listArr.push(savedList[i]);
    addList(savedList[i]);
  }
}

function addList(preList) {
  let addedListDiv = document.getElementById("addedList");
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
    addedListDiv.appendChild(list);

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
      textlist.classList.add("crossline");
      btn1.classList.add("crossline");
      btn2.classList.add("crossline");
    }

  }

  listText.value = "";
  countStatus();
};

function toggleFinished(obj) {
  let checkBox = obj.querySelector('.chkBox');
  let text1 = obj.querySelector('.txtList');
  let btn = obj.querySelectorAll('.btnList');

  if (checkBox.checked) {
    text1.classList.add("crossline");
    btn[0].classList.add("crossline");
    btn[1].classList.add("crossline");
  } else {
    text1.classList.remove("crossline");
    btn[0].classList.remove("crossline");
    btn[1].classList.remove("crossline");
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
  let addedListDiv = document.getElementById("addedList");
  while (addedListDiv.firstChild) {
    addedListDiv.removeChild(addedListDiv.firstChild);
  }
  listArr = [];
  localStorage.setItem('saved-list', JSON.stringify(listArr));
  countStatus();
}


function countStatus() {
  let totalCount = listArr.length;
  let checkedCount = 0;
  for (let i = 0; i < listArr.length; i++) {
    if(listArr[i].checked == true){
      checkedCount++;
    }
  }

  document.getElementById("totalList").textContent = totalCount;
  document.getElementById("compList").textContent = checkedCount;
}