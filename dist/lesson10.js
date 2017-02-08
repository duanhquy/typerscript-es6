var getBonus = function (valule, tax, salary) {
    if (valule === void 0) { valule = 1; }
    if (tax === void 0) { tax = valule * 0.1; }
    console.log(valule + tax);
    console.log(arguments.length);
};
getBonus(undefined, 40, 100);
//# sourceMappingURL=lesson10.js.map