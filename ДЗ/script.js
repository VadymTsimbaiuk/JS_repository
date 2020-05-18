function showData(data, isDisplayed){
    
    if(isDisplayed){
       console.log(data)
}
}

var rangeValues = _.range(-50,34,4);
showData(rangeValues, true);

var shuffleRange = _.shuffle(rangeValues);
showData(shuffleRange, true);
var minRange = _.indexOf(shuffleRange,-50);
showData(minRange, true);

var maxRange = _.indexOf(shuffleRange,30);
showData(maxRange, true);