function blankReceipt() {

    function printReceiptHeader() {
        console.log('CASH RECEIPT');
        console.log('------------------------------');
    }

    function printReceiptBody() {
        console.log('Charged to____________________');
        console.log('Received by___________________');
    }

    function printReceiptFooter() {
        console.log('------------------------------');
        console.log('(c) SoftUni');
    }

    function printReceipt() {
        printReceiptHeader();
        printReceiptBody();
        printReceiptFooter();
    }

    printReceipt();
}