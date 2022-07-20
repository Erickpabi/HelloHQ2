function changeIcon(anchor) {
    var icon = anchor.querySelector("span");
    icon.classList.toggle('expand-less');
    icon.classList.toggle('expand-more');
  
 
  }

  function changeIcon2() {
    let element = document.getElementById("expandIcon")
    console.log(element.innerText)
    if(element.innerText === 'expand_less'){
        element.innerText = 'expand_more'
    } else {
        element.innerText = 'expand_less'
    }
    
  }