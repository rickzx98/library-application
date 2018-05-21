import { Parameter } from "./Parameter";

export const Barcode = {
  ID: "_id",
  ITEM_LEFT_ALPHA_SYMBOL: "itemLeftAlphaSymbol",
  ITEM_RIGHT_ALPHA_SYMBOL: "itemRightAlphaSymbol",
  ITEM_BARCODE_LENGTH: "itemBarcodeLength",
  PATRON_LEFT_ALPHA_SYMBOL: "patronLeftAlphaSymbol",
  PATRON_RIGHT_ALPHA_SYMBOL: "patronRightAlphaSymbol",
  PATRON_BARCODE_LENGTH: "patronBarcodeLength",
  PATRON_BARCODE_TYPE: "patronBarcodeType",
  new: function (barcode, id) {
    const newBarcode = { ...barcode };
    newBarcode[this.ID] = id;
    newBarcode[Parameter.TYPE] = "barcode";
    return newBarcode;
  }
};