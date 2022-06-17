// Task 1
// find string items in an array

const t1Arr1 = [ 'typescript', -1, 'python' , 'java', 2 , 09 , 'c++' ];

function findStr(arr) {
  let strArr = [];
  for (let i of arr ) {
    if (typeof i === "string") {
      strArr.push(i);
    }
  }
  return strArr;
}

/////////////////////////////////////////////////////////////////////////
// task2
// add two Arrays
const t2Arr1 = [ 'typescript', 'python' , 'java' ];

const t2Arr2  = [ 'javascript', 'c', 'javascript', 'c#'];

//#1 solution
const joinedArr = arr1.concat(arr2);


//#2 solution
function addArrays(arr1, arr2) {
  for(let i of arr2) {
    arr1.push(i);
  }
  return arr1;
}

////////////////////////////////////////////////////////////////////////
//task 3
// find the common items in two arrays

const t3Arr1 = [ 'typescript', 'python' , 'javascript', 'typescript' ];

const t3Arr2  = [ 'javascript', 'c', 'typescript', 'c#'];

function commonItems(arrA, arrB) {
  let newArr =[];
  for(let i of arrA) {
    if(arrB.includes(i) && (newArr.includes(i)=== false)){
      newArr.push(i);
    }
  }
  return newArr;
}

////////////////////////////////////////////////////////////////////////
//task 4 
// create a new array like this:
// [
//   { name:'AT&T', download: 24, upload: 3 },
//   { name:'AT&T', download: 24, upload: 3 }
//   { name:'AT&T', download: 24, upload: 3 }
// ]

const data = [
  {
    company: {
      id: 1,
      name: "AT&T",
    }, 
    metrics: [
      {
        type: "download",
        value: 40,
        rank: 3,
      },
      {
        type: "upload",
        value: 12,
        rank: 3,
      },
    ],
  },
  {   company: {
    id: 2,
    name: "Verizon",
  },
  metrics: [
    {
      type: "download",
      value: 42,
      rank: 2,
    },
    {
      type: "upload",
      value: 19.5,
      rank: 1,
    },
  ],
},
{ company: {
  id: 3,
  name: "T-Mobile",
},
metrics: [
  {
    type: "download",
    value: 45,
    rank: 1,
  },
  {
    type: "upload",
    value: 18,
    rank: 2,
  },
],
},
];



function subArr(arr) {
  let newArr = [];
  let objName = {};
  let objDownload ={};
  let objUpload ={};
  for(let obj of arr) {
    for (const [key, value] of Object.entries(obj)) {
      if(key == "company") {
        objName = value["name"];
      }
      if(key == "metrics"){
        for(let el of value){
          if(el["type"] == "download"){
            objDownload = el["value"];
          }
          if(el["type"] == "upload"){
            objUpload = el["value"];
          }
        }
      }
    }
    newArr.push({"name": objName, "download": objDownload, "upload": objUpload})
  }  
  return newArr; 
}

