function showData(data, isDisplayed) {
    if (isDisplayed) {
        console.log(data);
    }
}


var arrayOfCars = [
    {
        brandName: 'Honda',
        model: 'Civic',
        productionYear: ''
    },
    {
        brandName: 'Mitsubishi',
        model: 'Lancer',
        productionYear: ''
    },
    {
        brandName: 'Toyota',
        model: 'Prado',
        productionYear: ''
    },
    {
        brandName: 'ZAZ',
        model: 'Lanos',
        productionYear: ''
    },
    {
        brandName: 'Hyundai',
        model: 'Creta',
       productionYear: ''
    },
    {
        brandName: 'Renault',
        model: 'Daster',
        productionYear: ''
    },
    {
        brandName: 'Lada',
        model: '4*4',
       productionYear: ''
    },
    {
        brandName: 'Renault',
        model: 'Logan',
        productionYear: ''
    },
    {
        brandName: 'Honda',
        model: 'Accord',
        productionYear: ''
    },
    {
        brandName: 'Toyota',
        model: 'Sequoia',
        productionYear: ''
    },
    {
        brandName: 'ZAZ',
        model: 'Sens',
        productionYear: ''
    }
  ];



var text = '';
_.each(arrayOfCars, function (data) {
    data.productionYear = prompt('Вкажіть рік випуску авто ' + data.brandName + ', ' + data.model,data.productionYear);
    text += ' виробник :  ' + data.brandName + '  модель :' + data.model + '  рік випуску : ' + data.productionYear + '<br>'

});

document.getElementById("collection").innerHTML = text;


var groupByName = _.groupBy(arrayOfCars, function (value) {
    return value.brandName;
})
showData(groupByName, true);

var groupByModel = _.groupBy(arrayOfCars, function (value) {
    return value.model;
})
showData(groupByModel, true);

var groupByProductionYearMax = _.max(arrayOfCars, function (value) {
    return value.productionYear;
})
showData(groupByProductionYearMax, true);

var groupByProductionYearMin = _.min(arrayOfCars, function (value) {
    return value.productionYear;
})
showData(groupByProductionYearMin,true);






