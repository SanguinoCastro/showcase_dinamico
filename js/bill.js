let colaCount = 0;
let colaTotal = 0;
let fantaCount = 0;
let fantaTotal = 0;
let sevenUpCount = 0;
let sevenUpTotal = 0;
let monsterCount = 0;
let monsterTotal = 0;
let waterCount = 0;
let waterTotal = 0;
let schweppesCount = 0;
let schweppesTotal = 0;
let drinkTotal = 0;
let totalFunct = 0;
let totalBill = 0;

function bill(e) {
    
    const bill = document.getElementById('bill');
    const dataName = Array.from(bill.children).some(li => li.dataset.name === e.dataset.name);
    const element = e.dataset.name
    const price = Number(e.dataset.price);

    if (!dataName) {
        const elementBill = document.createTextNode(`${e.dataset.name}: ${e.dataset.price} €`);
        const newLi = createNewLi(elementBill);
        newLi.setAttribute('data-price', e.dataset.price);
        newLi.setAttribute('data-name', e.dataset.name);
        newLi.setAttribute('class', `${e.dataset.name}1`)
        bill.appendChild(newLi);
        drinkTotal = drinkTotal + price;
    } else {
        
        if(element === 'CocaCola'){
            const drink = document.querySelector('.CocaCola1')
            colaCount ++
            colaTotal = price * colaCount;
            drink.innerText=`x${colaCount + 1} ${element}: ${price} €/u`

        }else if (element === 'Fanta'){
            
            const drink = document.querySelector('.Fanta1');
            fantaCount ++;
            fantaTotal = price * fantaCount;
            drink.innerText=`x${fantaCount + 1} ${e.dataset.name}: ${e.dataset.price} €/u`;
     

        }else if (element === 'SevenUp'){

            const drink = document.querySelector('.SevenUp1')
            sevenUpCount ++
            sevenUpTotal = price * sevenUpCount;
            drink.innerText=`x${sevenUpCount + 1} ${e.dataset.name}: ${e.dataset.price} €/u`

        }else if (element === 'Monster'){
            const drink = document.querySelector('.Monster1')
            monsterCount ++
            monsterTotal = price * monsterCount;
            drink.innerText=`x${monsterCount + 1} ${e.dataset.name}: ${e.dataset.price} €/u`
        }else if (element === 'Agua'){
            const drink = document.querySelector('.Agua1')
            waterCount ++
            waterTotal = price * waterCount;
            drink.innerText=`x${waterCount + 1} ${e.dataset.name}: ${e.dataset.price} €/u`
        }else if (element === 'Schweppes'){
            const drink = document.querySelector('.Schweppes1')
            schweppesCount ++
            schweppesTotal = price * schweppesCount;
            drink.innerText=`x${schweppesCount + 1} ${e.dataset.name}: ${e.dataset.price} €/u`
        }

    }
}

function total() {
    const billContainer = document.querySelector('.billContainer');
    const totalUl = document.getElementById('total');
    const liInBill = document.querySelectorAll('#bill > li');
    let total = 0;
    liInBill.forEach(li => {
        total += +li.getAttribute('data-price');
    });

    total = Number((total).toFixed(2));
    totalFunct = total ;
    totalFunct = Number((totalFunct).toFixed(2));

    const allLi = document.querySelector('#total > h3');
    if (!allLi) {
        billContainer.style.visibility = "visible"
        const element = createLi(undefined, totalFunct);
        const totalElement = createTotalElement(element);
        totalUl.appendChild(totalElement);
    } else {
        totalBill = Number((drinkTotal + colaTotal + fantaTotal + sevenUpTotal + monsterTotal + waterTotal + schweppesTotal).toFixed(2));
        allLi.textContent = updateTotal(totalBill);
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

