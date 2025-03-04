var values = [1, 60, 34, 30, 20, 5]

function lessThan20(val) {
    return val < 20
}

var filterLessThan20 = values.filter(lessThan20)

//var values = [1, 60, 34, 30, 20, 5]
// Code...
console.log(filterLessThan20)
// Output
// [1, 5]

