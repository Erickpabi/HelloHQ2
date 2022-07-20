function changeIcon(anchor) {
    var icon = anchor.querySelector("span");
    icon.classList.toggle('expand-less');
    icon.classList.toggle('expand-more');
  
 
  }

  function changeIcon2() {
    let element = document.getElementById("expand")
    console.log(element)
    element.nodeValue = 'expand_more'
  }