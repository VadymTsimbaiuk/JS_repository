function showData(data, isDisplayed){
    if(isDisplayed){
        console.log(data)
    }
}

class auto  {
    constructor(brandName, model,productionYear){
        this.brandName = brandName;
        this.model = model;
        this.productionYear = productionYear;
    }
}
var autoValue = _.create(auto.prototype,{brandName:'Hyundai', model:'Creta', productionYear:'2018'});
showData(autoValue, true);

var secondAuto = _.invert(autoValue);
showData(secondAuto, true);

var pickAuto = _.pick(autoValue, 'brandName', 'productionYear');
showData(pickAuto, true);

var omitAuto = _.omit(autoValue, 'model');
showData(omitAuto, true)
