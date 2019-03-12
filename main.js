

const pies = [
    {
    name: 'Dutch Apple Pie',
    ingredients: 'apples,sugar,butter,nutmeg,dutch people',
    bakeTemp: 5000,
    drinkPairing: 'Earl Grey Tea',
    imageUrl: 'https://www.google.com/search?q=dutch+apple+pie&source=lnms&tbm=isch&sa=X&ved=0ahUKEwigkezHovvgAhVGxoMKHUAiCtYQ_AUIDigB&biw=1366&bih=576#imgrc=ow-Uf0ReP_NN3M:',
    instructor: 'Zoe',
    iceCream: 'Vanilla'
    },

    {
        name: 'Berry Pie',
        ingredients: 'berries'
    },

    {
        name: 'Super Pie'
    },

    {
        name: 'Chcolate Pie'
    },

    {
        name: 'Wu Tang Pie'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
    console.log(selectedDiv);
};

const AppleBuilder = () => {
    let pieString = '';

    for(i = 0; i < pies.length; i++) {
    pieString += `<div id = "pies">`
    pieString += `<h3>${pies[i].name}</h3>`;
    // pieString =+ `<p>${pies[i].ingredients}</p>`;
    // pieString =+ `<p>${pies[i].bakeTemp}</p>`;
    // pieString =+ `<p>${pies[i].drinkPairing}</p>`;
    // pieString =+ `<p>${pies[i].instructor}</p>`;
    // pieString =+ `<p>${pies[i].iceCream}</p>`;
    pieString += `</div>`
    };

    printToDom('pies', pieString);
};

const init =() => {

    AppleBuilder();
};

init ();