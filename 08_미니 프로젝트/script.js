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
    if(listTextValue.checked){
      addedListDiv.insertAdjacentHTML(
        "beforeend",
        '<div class="list"><input type="checkbox" class="chkBox" onclick="toggleFinished(this.parentElement)" checked><input type="text" class="txtList" value="' + listTextValue.value + '" style="text-decoration: line-through; background-color: #eee;" readonly><input type="button" class="btnList" value="수정" onclick="editList(this.parentElement)" style="text-decoration: line-through; text-decoration-color: #333;"><input type="button" class="btnList" value="삭제" onclick="deleteList(this.parentElement)" style="text-decoration: line-through; text-decoration-color: #333;"></div>'
      );
    }else{
      addedListDiv.insertAdjacentHTML(
        "beforeend",
        '<div class="list"><input type="checkbox" class="chkBox" onclick="toggleFinished(this.parentElement)"><input type="text" class="txtList" value="' + listTextValue.value + '" style="background-color: #eee;" readonly><input type="button" class="btnList" value="수정" onclick="editList(this.parentElement)"><input type="button" class="btnList" value="삭제" onclick="deleteList(this.parentElement)"></div>'
      );
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
    text1.setAttribute("style", "text-decoration: line-through; background-color: #eee;");
    btn[0].setAttribute("style", "text-decoration: line-through; text-decoration-color: #333;");
    btn[1].setAttribute("style", "text-decoration: line-through; text-decoration-color: #333;");
  } else {
    text1.setAttribute("style", "");
    btn[0].setAttribute("style", "");
    btn[1].setAttribute("style", "");
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
    text1.setAttribute("style", "");
    text1.readOnly = false;
    editText = text1.value;
    btn[0].value = "저장";
  } else if (btn[0].value == "저장") {
    objIndex = listArr.findIndex(obj => obj.value == editText);
    if (objIndex > -1) {
      listArr[objIndex].value = text1.value;
      if(listArr[objIndex].checked){
        text1.setAttribute("style", "text-decoration: line-through; background-color: #eee;");
      }else{
        text1.setAttribute("style", "background-color: #eee;");
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