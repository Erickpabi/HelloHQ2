function changeIcon() {
    let element = document.getElementById("expandIcon")
    console.log(element.innerText)
    if(element.innerText === 'expand_less'){
        element.innerText = 'expand_more'
    } else {
        element.innerText = 'expand_less'
    }
    
  }