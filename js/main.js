function changemenu(){
    var isDisplay = document.getElementById("adaptive-navigation-bar-list");
    if(isDisplay.style.display='block'){
        isDisplay.style.display='none';
    }
    if(isDisplay.style.display='none'){
        isDisplay.style.display='block';
    }
}