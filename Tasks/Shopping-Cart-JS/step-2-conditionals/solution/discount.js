let totalAmount = 100;
let discountCode = "SAVE10";

switch (discountCode) {
    case 'SAVE10':
        totalAmount -= totalAmount * 0.1;
        break;
    case 'SAVE20':
        totalAmount -= totalAmount * 0.2;
        break;
}

console.log(`Total after discount: ${totalAmount}`);
