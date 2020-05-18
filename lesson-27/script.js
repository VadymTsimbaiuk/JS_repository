//comment comit 1
//comment comit 2
//comment comit 3

var arrayOfObjects = [
    {name:'Vadym',age:20},
    {name:'Andrew',age:18},
    {name:'Oleg',age:22},
    {name:'Panteliy',age:21},
    {name:'Olga',age:22},
]

var arrayOfData = [1,2,3,4,5,6,7,8,9,10];



function showData(data, isDisplayed){
    if(isDisplayed){
        console.log(data)
    }
}
var test = {name:'John', age:22}
//1. keys
var keysObject = _.keys(test);
showData(keysObject, false);

//2. values

var valuesObject = _.values(test);
showData(valuesObject, false);

//3.mapObject

var mapObjectValues = _.mapObject(test, function(value,key){
   return value +1 ; 
});
showData(mapObjectValues, false);

//4. pairs

var pairsValues =_.pairs(test)
showData(pairsValues,false);

//5. invert

var invertedValues = _.invert(test);
showData(invertedValues, false);

//6. create

function person(name){
    this.name = name;
}
var createValues = _.create(person.prototype, {name:'Oleg', age:20});
showData(createValues,false);

//7. functions

showData(_.functions(_), false);

//8. extend

var extendedValue = _.extend({name:'Joye'}, {age:45});
showData(extendedValue, false);

//9.pick

var pickObject = _.pick(test, 'name');
showData(pickObject, false);

//10. omit

var omitedObject = _.omit(test, 'name')
showData(omitedObject, false);

//defaults

var defaultsObject = _.defaults({isPeron:true}, test);
showData(defaultsObject,false);

//12. has

var hasObject = _.has(test, 'name');
showData(hasObject, false);

//13.isEqual
var isEqualObject = _.isEqual(test,{});
showData(isEqualObject, false);

//14.isMatch
var isMatch = _.isMatch(test,{age:21})
showData(isMatch, false);

//15. isEmpty

var isEmptyObject = _.isEmpty({});
showData(isEmptyObject, false);

//16.isElement

var isElementDOM = _.isElement(document.createElement('div'));
showData(isElementDOM, false);

//17.isArray

var isArrayOBJ = _.isArray([]);
showData(isArrayOBJ,false);


//18. isObject
showData(_.isObject([]),false);

//19.isFunction

showData(_.isFunction(new Function()),false);

//20. isFinite

showData(_.isFinite(Infinity),false);

//21. isBoolean

showData(_.isBoolean(2>3), false);
//22.isDate

showData(_.isDate(new Date()),false);

//23. isNaN
showData(_.isNaN(2/0), false);

//24.isNull

showData(_.isNull(2),false);

//25.isUndefined

showData(_.isUndefined(undefined), true);













































































