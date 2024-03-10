if($(".nav-current-zone").data("nav-type") === "list"){
    if(key === "down"){
       var currentItem = $(currentZone).find("nav-current-item");
       var nextItem =  $(currentItem).next();
       $(currentItem).removeClass("nav-current-item");
       $(nextItem).addClass("nav-current-item");
    } else if(key === "up"){
    ...
}