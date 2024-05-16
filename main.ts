import inquirer from "inquirer"
let currency:any = {
    US: 1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
}

let user_currency = await inquirer.prompt([
    {message: "enter from currency",name: "from", type: "list", choices: ["US","EUR","GBP","INR","PKR"]},
    {message: "enter to currency",name: "to", type: "list", choices: ["US","EUR","GBP","INR","PKR"]},
    {message: "enter your amount", name: "amount", type: "number"}
])

let fromCurrency = currency[user_currency.from]
let toCurrency = currency[user_currency.to]
let amount = user_currency.amount
let baseAmount = amount / fromCurrency
let crtAmount = baseAmount * toCurrency
console.log(crtAmount);


// console.log (fromCurrency)
// console.log(toCurrency)
// console.log(amount)
