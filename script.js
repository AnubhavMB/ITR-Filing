function calculateTax() {
    let income = parseFloat(document.getElementById("income").value);
    let oldStandardDeduction = 50000;
    let newStandardDeduction = 75000;
    let oldTax = 0, newTax = 0;

    let taxableIncomeOld = Math.max(0, income - oldStandardDeduction);
    let taxableIncomeNew = Math.max(0, income - newStandardDeduction);

    // Old Tax Regime
    if (taxableIncomeOld <= 250000) {
        oldTax = 0;
    } else if (taxableIncomeOld <= 500000) {
        oldTax = (taxableIncomeOld - 250000) * 0.05;
    } else if (taxableIncomeOld <= 1000000) {
        oldTax = 12500 + (taxableIncomeOld - 500000) * 0.2;
    } else {
        oldTax = 112500 + (taxableIncomeOld - 1000000) * 0.3;
    }

    // New Tax Regime (FY25-26)
    if (taxableIncomeNew <= 1200000) {
        newTax = 0;
    } else if (taxableIncomeNew <= 1500000) {
        newTax = (taxableIncomeNew - 1200000) * 0.1;
    } else if (taxableIncomeNew <= 2000000) {
        newTax = 30000 + (taxableIncomeNew - 1500000) * 0.15;
    } else if (taxableIncomeNew <= 2400000) {
        newTax = 105000 + (taxableIncomeNew - 2000000) * 0.2;
    } else {
        newTax = 185000 + (taxableIncomeNew - 2400000) * 0.3;
    }

    document.getElementById("oldTax").innerText = oldTax.toFixed(2);
    document.getElementById("newTax").innerText = newTax.toFixed(2);
}
