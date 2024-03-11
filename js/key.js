document.addEventListener('keydown', function(e) {
    const activeElement = document.activeElement;
    const menuItems = document.querySelectorAll('.menu-item');
    let newIndex;
    switch(e.keyCode) {
      case 37: // Seta para cima
        newIndex = Array.from(menuItems).indexOf(activeElement) - 1;
        if(newIndex >= 0) {
          menuItems[newIndex].focus();
        }
        break;
      case 38: // Seta para cima
        newIndex = Array.from(menuItems).indexOf(activeElement) - 1;
        if(newIndex >= 0) {
          menuItems[newIndex].focus();
        }
        break;
      case 39: // Seta para cima
        newIndex = Array.from(menuItems).indexOf(activeElement) -1;
        if(newIndex >= 0) {
          menuItems[newIndex].focus();
        }
        break;
      case 40: // Seta para baixo
        newIndex = Array.from(menuItems).indexOf(activeElement) +1;
        if(newIndex < menuItems.length) {
          menuItems[newIndex].focus();
        }
        break;
    }
  });