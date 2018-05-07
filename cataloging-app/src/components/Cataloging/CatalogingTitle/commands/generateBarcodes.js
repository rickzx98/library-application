import { Title, FluidForm, getLabel } from "../imports";
import { PAGE_NAME } from "../constants";

export default ({ props: { pageForm, actions } }) => {
  const accessions = FluidForm.getValue(pageForm, Title.ACCESSIONS);
  if (accessions && accessions.length > 0) {
    const barCodes = accessions
      .filter(accession => accession[Title.ACCESSIONS])
      .map(accession => ({
        barcode: accession[Title.ACCESSIONS]
      }));
    FluidForm.set(PAGE_NAME, Title.BARCODE, barCodes);
  } else {
    actions.alertDanger(getLabel("LABEL_REQUIRED_ACCESSIONS"));
  }
};
