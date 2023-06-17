var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
var myUL = document.querySelector(".myUL");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

//Search function
function searchListToggle(){
    myUL.classList.toggle("myUL-height");
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}



const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
  if(btn.style.color  != 'blue') {
    btn.style.color = 'blue';
  }
  else {
    btn.style.color = '#9a9a9a';
  }

});
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function onClick() {
  if(btn1.style.color  != 'blue') {
    btn1.style.color = 'blue';
  }
  else {
    btn1.style.color = '#9a9a9a';
  }

});
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function onClick() {
  if(btn2.style.color  != 'blue') {
    btn2.style.color = 'blue';
  }
  else {
    btn2.style.color = '#9a9a9a';
  }

});



if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}

//CRUD operations


// function productsAdd() {
//   if ($("#productTable tbody").length == 0) {
//     $("#productTable").append("<tbody></tbody>");
//   }

//   $("#productTable tbody").append("<tr>" + 
//     "<td>#Task_1_Submission. Sample Text. Sample Image 1 ⬇️.</td>" +
//     "<td>images/feed-image-1.png</td>" +
//     "</tr>");

//   $("#productTable tbody").append("<tr>" + 
//     "<td>#Task_1_Submission. Sample Text 2. More Text. And Some more Text.</td>" +
//     "<td></td>" +
//     "</tr>");

//   $("#productTable tbody").append("<tr>" + 
//     "<td>#Task_1_Submission. Sample Text 3. Sample Image 2 ⬇️.</td>" +
//     "<td>images/feed-image-2.png</td>" +
//     "</tr>");
// }

// $(document).ready(function () {
//   productsAdd();
// });






// //ADD NEW
// function productAddToTable() {
//   // First check if a <tbody> tag exists, add one if not
//   if ($("#productTable tbody").length == 0) {
//       $("#productTable").append("<tbody></tbody>");
//   }

//   // Append product to the table
//   $("#productTable tbody").append("<tr>" +
//       "<td>" + $("#productname").val() + "</td>" +
//       "<td>" + $("#introdate").val() + "</td>" +
//       "<td>" + $("#url").val() + "</td>" +
//       "</tr>");
// }

// function formClear() {
//   $("#productname").val("");
//   $("#introdate").val("");
//   $("#url").val("");
// }


// function productUpdate() {
//   if ($("#productname").val() != null && $("#productname").val() != '') {
//       // Add product to Table
//       productAddToTable();

//       // Clear form fields
//       formClear();

//       // Focus to product name field
//       $("#productname").focus();
//   }
// }

// //DELETE PRODUCT




