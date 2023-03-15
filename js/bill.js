
function bill(e) {

    const bill = document.getElementById('bill');
    const dataName = Array.from(bill.children).some(tr => tr.dataset.name === e.dataset.name);
    const element = e.dataset.name;
    const price = Number(e.dataset.price);

    if (!dataName) {
        const elementBill = document.createTextNode(`x1 ${element}: ${price} €/u`);
        const newTr = createNewTr(elementBill);
        newTr.setAttribute('data-price', price);
        newTr.setAttribute('data-name', element);
        newTr.setAttribute('class', `${element}1 elementTiket`);
        bill.appendChild(newTr);
        drinkTotal = drinkTotal + price;
    } else {

        if (element === 'CocaCola') {
            const drink = document.querySelector('.CocaCola1');
            colaCount++;
            colaTotal = price * colaCount;
            drink.innerText = `x${colaCount + 1} ${element}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);

        } else if (element === 'Fanta') {

            const drink = document.querySelector('.Fanta1');
            fantaCount++;
            fantaTotal = price * fantaCount;
            drink.innerText = `x${fantaCount + 1} ${element}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);


        } else if (element === 'SevenUp') {

            const drink = document.querySelector('.SevenUp1');
            sevenUpCount++;
            sevenUpTotal = price * sevenUpCount;
            drink.innerText = `x${sevenUpCount + 1} ${element}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);

        } else if (element === 'Monster') {
            const drink = document.querySelector('.Monster1');
            monsterCount++;
            monsterTotal = price * monsterCount;
            drink.innerText = `x${monsterCount + 1} ${element}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);
        } else if (element === 'Agua') {
            const drink = document.querySelector('.Agua1');
            waterCount++;
            waterTotal = price * waterCount;
            drink.innerText = `x${waterCount + 1} ${element}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);
        } else if (element === 'Schweppes') {
            const drink = document.querySelector('.Schweppes1');
            schweppesCount++;
            schweppesTotal = price * schweppesCount;
            drink.innerText = `x${schweppesCount + 1} ${element}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);
        }

    }
}

function total() {
    const billContainer = document.querySelector('.billContainer');
    const totalUl = document.getElementById('total');
    const trInBill = document.querySelectorAll('#bill > tr');
    let total = 0;
    trInBill.forEach(tr => {
        total += +tr.getAttribute('data-price');
    });

    total = Number((total).toFixed(2));
    totalFunct = total;
    totalFunct = Number((totalFunct).toFixed(2));

    const allTr = document.querySelector('#total > h3');
    if (!allTr) {
        billContainer.style.visibility = "visible";
        const element = createTr(undefined, totalFunct);
        const totalElement = createTotalElement(element);
        totalUl.appendChild(totalElement);
    } else {
        totalBill = Number((drinkTotal + colaTotal + fantaTotal + sevenUpTotal + monsterTotal + waterTotal + schweppesTotal).toFixed(2));
        allTr.textContent = updateTotal(totalBill);
    }
};

function createNewTr(text) {
    const newTr = document.createElement('tr');
    newTr.appendChild(text);
    const btn = document.createElement('button');
    btn.innerText = '-';
    btn.onclick = function () {
        removeItem(newTr);
    };
    newTr.appendChild(btn);
    return newTr
};

function createTotalElement(element) {
    const newH3 = document.createElement('h3');
    newH3.appendChild(element);
    return newH3
}

function updateTotal(total) {
    return `Total: ${total.toFixed(2)} €`
}

function createTr(element, total) {
    return total
        ? document.createTextNode(updateTotal(total))
        : document.createTextNode(`${element.dataset.name}: ${element.dataset.price} €`);
}


        
    
      
        