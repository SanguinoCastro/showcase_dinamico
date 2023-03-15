function removeItem(li) {
    const name = li.dataset.name;
    const price = Number(li.dataset.price);
    if (name === 'CocaCola') {
        if (colaCount > 0) {
            colaCount--;
            const drink = document.querySelector('.CocaCola1');
            colaTotal = price * colaCount;
            drink.innerText = `x${colaCount+1} ${name}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);
            total();
        } else {
            colaTotal = 0;
            drinkTotal = drinkTotal - price;
            const drink = document.querySelector('.CocaCola1');
            drink.parentNode.removeChild(drink);
            total();
        }
    } else if (name === 'Fanta') {
        if (fantaCount > 0) {
            fantaCount--;
            const drink = document.querySelector('.Fanta1');
            fantaTotal = price * fantaCount;
            drink.innerText = `x${fantaCount+1} ${name}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);
            total();
        } else {
            fantaTotal = 0;
            drinkTotal = drinkTotal - price;
            const drink = document.querySelector('.Fanta1');
            drink.parentNode.removeChild(drink);
            total();
        }
    } else if (name === 'SevenUp') {        
        if (sevenUpCount > 0) {
            sevenUpCount--;
            const drink = document.querySelector('.SevenUp1');
            sevenUpTotal = price * sevenUpCount;
            drink.innerText = `x${sevenUpCount+1} ${name}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);
            total();
        } else {
            sevenUpTotal = 0;
            drinkTotal = drinkTotal - price;
            const drink = document.querySelector('.SevenUp1');
            drink.parentNode.removeChild(drink);
            total();
        }
    } else if (name === 'Monster') {        
        if (monsterCount > 0) {
            monsterCount--;
            const drink = document.querySelector('.Monster1');
            monsterTotal = price * monsterCount;
            drink.innerText = `x${monsterCount+1} ${name}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);
            total();
        } else {
            monsterTotal = 0;
            drinkTotal = drinkTotal - price;
            const drink = document.querySelector('.Monster1');
            drink.parentNode.removeChild(drink);
            total();
        }
    } else if (name === 'Agua') {        
        if (waterCount > 0) {
            waterCount--;
            const drink = document.querySelector('.Agua1');
            waterTotal = price * waterCount;
            drink.innerText = `x${waterCount+1} ${name}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);
            total();
        } else {
            waterTotal = 0;
            drinkTotal = drinkTotal - price;
            const drink = document.querySelector('.Agua1');
            drink.parentNode.removeChild(drink);
            total();
        }
    } else if (name === 'Schweppes') {        
        if (schweppesCount > 0) {
            schweppesCount--;
            const drink = document.querySelector('.Schweppes1');
            schweppesTotal = price * schweppesCount;
            drink.innerText = `x${schweppesCount+1} ${name}: ${price.toFixed(2)} €/u`;
            const btn = document.createElement('button');
            btn.innerText = '-';
            btn.onclick = function () {
                removeItem(drink);
            };
            drink.appendChild(btn);
            total();
        } else {
            schweppesTotal = 0;
            drinkTotal = drinkTotal - price;
            const drink = document.querySelector('.Schweppes1');
            drink.parentNode.removeChild(drink);
            total();
        }
    }    
};


    
