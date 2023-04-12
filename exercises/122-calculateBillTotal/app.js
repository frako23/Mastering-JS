function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let amountPlusTip = preTaxAndTipAmount * 1.15
    
    let tax = preTaxAndTipAmount *0.095
    
    let postTaxAndTipAmount = amountPlusTip + tax

    return postTaxAndTipAmount
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9