
function bill(e) {
    const bill = document.getElementById('bill')
    console.log(e)
    const elementBill = document.createTextNode(`${e.dataset.name}: ${e.dataset.price} €`)
    console.log(elementBill)
    const newLi = createNewLi(elementBill);
    newLi.setAttribute('data-price', e.dataset.price)
    bill.appendChild(newLi);
}

function total() {
    const billContainer = document.querySelector('.billContainer')
    const bill = document.getElementById('bill');
    const totalUl = document.getElementById('total')
    const liInBill = document.querySelectorAll('#bill > li');
    let total = 0;
    liInBill.forEach(li => {
        total += +li.getAttribute('data-price');
    })

    total= Number((total).toFixed(2));

    const allLi = document.querySelector('#total > h3');
    if (!allLi){
        billContainer.style.visibility = "visible"
        const element = createLi(undefined, total);
        const totalElement = createTotalElement(element);
        totalUl.appendChild(totalElement);
    } else {
        allLi.textContent = updateTotal(total)
    }
};

function createNewLi(text) {
    const newLi = document.createElement('li');
    newLi.appendChild(text);
    return newLi
};

function createTotalElement(element) {
    const newH3 = document.createElement('h3');
    newH3.appendChild(element);
    return newH3
}

function updateTotal(total) {
    return `Total: ${total} €`
}

function createLi(element, total) {
    return total
        ? document.createTextNode(updateTotal(total))
        : document.createTextNode(`${element.dataset.name}: ${element.dataset.price} €`)
}

