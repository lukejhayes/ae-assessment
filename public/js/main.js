// FOOTER ACCORDIAN FUNCTIONALITY
var acc = document.getElementsByClassName("expander__toggle");
var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      /* Toggle between hiding and showing the active panel */
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}