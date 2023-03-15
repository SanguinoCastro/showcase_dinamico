const cart = document.getElementById('cart')
const liquids = document.querySelectorAll('.liquid')
const plc = document.getElementById('price')

liquids.forEach(liquid => {
    liquid.setAttribute('draggable' , 'true')
    liquid.setAttribute('ondragstart' , 'drag(event)')
    liquid.addEventListener('mouseover', function(e){
        const price = e.target.dataset.price;
        elementPrice = price
        plc.innerText = `${price} €`
    })
    liquid.addEventListener('mouseout', function(e){
        plc.innerText=''
    })
    });

function drag(e) {
    let classes = e.target.className.split(' ');
    let secondClass = classes[1];
    e.dataTransfer.setData("text", secondClass)
    e.dataTransfer.effectAllowed = "move"
  }

cart.addEventListener('dragover', (e) => {
    e.preventDefault()
});

cart.addEventListener('drop', (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    const element = document.querySelector(`.${data}`);
    bill(element);
    total();
    e.dataTransfer.dropEffect = 'move';
});

function allowDrop(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  }