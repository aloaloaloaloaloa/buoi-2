

// // for (let i = 1; i < 101 ; i++) {
// //     if (i % 2 ==0){
// //         console.log(i);
// //     }


// // }


// const customer = document.querySelector(".customer-list")

// let customerList = [
//     {
//         name: "son",
//         age: "19",
//         email: "kajdsfhkjsdfh"
//     },
//     {
//         name: "son2",
//         age: "192",
//         email: "kajdsfsdfhkjsdfh"
//     },
//     {
//         name: "son3",
//         age: "193",
//         email: "kajdsfhsdfkjsdfh"
//     }
// ]

// function renderCustomer() {
//     let htms = ""
//     for (let i = 0; i < customerList.length; i++) {
//         let htmls += `
//         <div class="customer-item"
//         <h2> ${customerList[i].name}</h2>
//         <h2> ${customerList[i].name}</h2>
//         <h2> ${customerList[i].name}</h2>
//         </div>`
    
//         // "<h1>" + customerList[i].name + "</h1>" + "<h1>" + customerList[i].name + "</h1>" + "<h1>" + customerList[i].name + "</h1>"


//     }
//     console.log(htmls);
//     customer.innerHTML = htmls;

// }

// renderCustomer()


let numberList = [1, 2, 3, 6, 99, 62]
function myFunction(number) {
    return number + 1
}
let newArray = numberList.map(myFunction)
console.log(newArray);



function myFunction2(number) {
    return number > 50
}

let Filter = numberList.filter((number) => {
     return number > 50
})

console.log(Filter);



