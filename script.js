
var btnOpenAddDocument = document.getElementById("openAddDocument");
var addDocumentContent = document.getElementById("addDocumentContent");


btnOpenAddDocument.onclick = function() {
  addDocumentContent.style.display = "block";
}


var cancelButton = document.querySelector(".cancel_btn_repo");
var confirmButton = document.querySelector(".confirm_btn_repo");


cancelButton.onclick = function() {
    var addDocumentContent = document.getElementById("addDocumentContent");
    addDocumentContent.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
    const filterButton = document.getElementById("filterButton");
    const filterContent = document.getElementById("filterContent");

    
    filterContent.style.display = "none";

   
    filterButton.addEventListener("click", function() {
        if (filterContent.style.display === "none" || filterContent.style.display === "") {
            filterContent.style.display = "grid"; 
        } else {
            filterContent.style.display = "none"; 
        }
    });

    
    const cancelFilterButton = document.querySelector("cancel_btn_filter");
    cancelFilterButton.addEventListener("click", function() {
        filterContent.style.display = "none"; 
    });

    const confirmFilterButton = document.querySelector("confirm_btn_filter");
    confirmFilterButton.addEventListener("click", function() {
       
    });
});


function showConfirm() {
    var result = confirm("Do you want to proceed?");
    if (result) {
    alert("You clicked Yes");
    } else {
     alert("You clicked No");
    }
}


function showContent() {
    var content = document.getElementById("content_in_preview");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const editBtn = document.getElementById('editBtn');
    const revEditContent = document.getElementById('revEditContent');

    editBtn.addEventListener('click', function(event) {
        revEditContent.style.display = 'block';
        event.stopPropagation(); 
    });

    document.addEventListener('click', function(event) {
        if (!revEditContent.contains(event.target) && event.target !== editBtn) {
            revEditContent.style.display = 'none';
        }
    });

    revEditContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});