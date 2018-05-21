export const Currency = {
    ID: "_id",
    NOTE: "note",
    PREFIX: "prefix",
    SYMBOL: "symbol",
    new: function (note, prefix, symbol) {
        const newCurrency = {};
        newCurrency[this.NOTE] = note;
        newCurrency[this.PREFIX] = prefix;
        newCurrency[this.SYMBOL] = symbol;
        return newCurrency;
    }
};