let totalAmount = 100;
//let discountCode = "SAVE10";
let discountCode = 'RANDOM'

switch (discountCode) {
    case 'SAVE10':
    case 'SAVE10DOLLARS': 
    case 'TENOFF':
        totalAmount -= totalAmount * 0.1;
        break;
    case 'SAVE20':
        totalAmount -= totalAmount * 0.2;
        break;
    default:
        totalAmount = 0;
        break;
}

console.log(`Total after discount: ${totalAmount}`);
