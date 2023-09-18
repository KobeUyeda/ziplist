function zipList (data1, data2) {
  let returnData = []
  for (let i = 0; i < data1.length; i++) {
    if (i < data1.length) {
      returnData.push(data1[i])
    }
    if (i < data2.length) {
      returnData.push(data2[i])
    }
  }
  return returnData;
}

function zipListTheSimpleWay (data1, data2) {
  let returnData = []
  _.each(data1, (data, index) => {
      if (index < data1.length) {
      returnData.push(data1[index])
    }
    if (index < data2.length) {
      returnData.push(data2[index])
    }
  });
  return returnData;
}

const array1 =  ['a', 'b', 'c'];
const array2 =  [1, 2, 3];
console.log(zipList(array1, array2))
console.log(zipListTheSimpleWay(array1, array2))