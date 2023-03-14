let colaCount = 1;
let fantaCount = 1;
let sevenUpCount = 1;
let monsterCount = 1;
let waterCount = 1;
let schweppesCount = 1;
let totalBill = 0;

function bill(e) {
    const bill = document.getElementById('bill');
    const dataName = Array.from(bill.children).some(li => li.dataset.name === e.dataset.name);
    console.log(dataName);
    if (!dataName) {
        const elementBill = document.createTextNode(`${e.dataset.name}: ${e.dataset.price} €`);
        console.log(elementBill);
        const newLi = createNewLi(elementBill);
        newLi.setAttribute('data-price', e.dataset.price);
        newLi.setAttribute('data-name', e.dataset.name);
        newLi.setAttribute('class', `${e.dataset.name}1`)
        bill.appendChild(newLi);
    } else {
        const element = e.dataset.name
        const price = Number(e.dataset.price);
        console.log(element);
        if(element === 'CocaCola'){
            const drink = document.querySelector('.CocaCola1')
            colaCount ++
            drink.innerText=`x${colaCount} ${e.dataset.name}: ${e.dataset.price}/u €`

        }else if (element === 'Fanta'){
            const drink = document.querySelector('.Fanta1');
            fantaCount ++;
            drink.innerText=`x${fantaCount} ${e.dataset.name}: ${e.dataset.price}/u €`;
            console.log(totalBill)
        }else if (element === 'SevenUp'){
            const drink = document.querySelector('.SevenUp1')
            sevenUpCount ++
            drink.innerText=`x${sevenUpCount} ${e.dataset.name}: ${e.dataset.price}/u €`
        }else if (element === 'Monster'){
            const drink = document.querySelector('.Monster1')
            monsterCount ++
            drink.innerText=`x${monsterCount} ${e.dataset.name}: ${e.dataset.price}/u €`
        }else if (element === 'Agua'){
            const drink = document.querySelector('.Agua1')
            waterCount ++
            drink.innerText=`x${waterCount} ${e.dataset.name}: ${e.dataset.price}/u €`
        }else if (element === 'Schweppes'){
            const drink = document.querySelector('.Schweppes1')
            schweppesCount ++
            drink.innerText=`x${schweppesCount} ${e.dataset.name}: ${e.dataset.price}/u €`
        }

    }
}

function total() {
    const billContainer = document.querySelector('.billContainer')
    const bill = document.getElementById('bill');
    const totalUl = document.getElementById('total')
    const liInBill = document.querySelectorAll('#bill > li');
    liInBill.forEach(li => {
        totalBill += +li.getAttribute('data-price');
    })

    totalBill = Number((totalBill).toFixed(2));

    const allLi = document.querySelector('#total > h3');
    if (!allLi) {
        billContainer.style.visibility = "visible"
        const element = createLi(undefined, totalBill);
        const totalElement = createTotalElement(element);
        totalUl.appendChild(totalElement);
    } else {
        allLi.textContent = updateTotal(totalBill)
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

