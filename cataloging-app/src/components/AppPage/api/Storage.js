import { Barcode, Currency, UserGroup } from "../../../types/";

import { getLabel } from "../../../utils/";

const APP_KEY = process.env.APP_KEY;

export default {
  development: () => {
    const {
      collections,
      libraries,
      librarian,
      prefixes,
      suffixes,
      cutters,
      subjects
    } = require("../../../utils/Mocks");
    return {
      indexcard: [],
      collection: collections,
      collectionTitles: [],
      library: libraries,
      title: [
        {
          _id: "b85a5cbea47c-4df6-a757-f77dc60dac05",
          title: "Harry Potter",
          subTitle: "And the Prisoner of Azkaban",
          statementOfResponsibility: "J.K. Rowling",
          edition: "1st Edition",
          seriesTitle: "",
          author: [
            {
              author: "J.K. Rowling"
            }
          ],
          isbn: "08909912",
          lccn: "E873 .C36 2001",
          placeOfPublication: "New York",
          publisher: "The Book Foundation",
          publishedDate: "1999",
          numberOfPages: "485p: ill ; 25cm",
          subjects: [
            {
              subjects_entry: "Fantasy",
              subjects_type: "topical",
              subjects_subdivision_0: "",
              subjects_subdivision_1: "",
              subjects_subdivision_2: "",
              subjects_subdivision_type_0: "general",
              subjects_subdivision_type_1: "general",
              subjects_subdivision_type_2: "general"
            }
          ],
          generalNote: "The book is about magic",
          callNumber: {
            prefix: "0001",
            main: "093",
            cutter: "0001",
            suffix: "22"
          },
          location: "0002",
          copies: 1,
          accessions: [
            {
              accessions: "102809"
            }
          ],
          barcode: [
            {
              barcode: "102809"
            }
          ]
        }
      ],
      loantype: [
        {
          _id: '40a98507d59e-4620-a4d5-70095fff4b6d',
          name: 'Books',
          loadPeriod: 15,
          gracePeriod: 1,
          fineCycle: 1,
          maxLoanAmount: 5,
          fineAmount: '0.00',
          feeAmount: '0.00',
          perHour: 'yes'
        }
      ],
      librarian,
      app: appStore,
      user: [],
      currency,
      vendor: [],
      fund: [],
      barcode: [],
      prefix: prefixes,
      suffix: suffixes,
      cutter: cutters,
      parameter: [...barcode],
      subject: subjects,
      resourcetype: []
    };
  }
};

const barcode = [
  {
    ...Barcode.new({}, APP_KEY)
  }
];

const appStore = {
  userGroup: [
    {
      field: UserGroup.LIBRARIAN,
      label: getLabel("LABEL_LIBRARIAN")
    },
    {
      field: UserGroup.ADMIN,
      label: getLabel("LABEL_ADMIN")
    },
    {
      field: UserGroup.PATRON,
      label: getLabel("LABEL_PATRON")
    }
  ]
};

const currency = [
  {
    _id: "000",
    ...Currency.new("Philippine Peso", "Php", "₱"),
    isRemovable: false
  }
];
