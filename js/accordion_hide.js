function defaultshow(id) {
    
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") != -1) {
        x.className = x.className.replace("w3-show", " ");
        x.className+=" w3-hide";      
    }
    else
    {
        x.className+=" w3-show";
    }
}