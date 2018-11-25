
function setBeer(){
  var ranNum = Math.floor(Math.random() * 10);
  console.log(ranNum)
  var elem = document.getElementById(`${ranNum}`);
  someFunc(elem);
}


function someFunc(elem){
  // console.log(`${elem} from someFunc`)
  if(elem.classList.contains('selectedBeer')){
    elem.classList.remove('selectedBeer');
    console.log("removed poopy class")
  }else{
    elem.classList.add('selectedBeer')
    console.log('no poopy class')
  }
}


// setBeer();

// setInterval(setBeer, 1000);
