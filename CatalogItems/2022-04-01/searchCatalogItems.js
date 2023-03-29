let res = await sellingPartner.callAPI({
  operation: "searchCatalogItems",
  endpoint: "catalogItems",
  options: {
    version: "2022-04-01",
  },
  query: {
    marketplaceIds: ["A1PA6795UKMFR9"],
    identifiers: ["B07NZJJHDG"],
    identifiersType: ["ASIN"],
  },
});

const response = [
  {
    numberOfResults: 1,
    items: [
      {
        asin: "B07NZJJHDG",
        summaries: [
          {
            marketplaceId: "A1PA6795UKMFR9",
            adultProduct: false,
            autographed: false,
            brand: "INNONEXXT",
            browseClassification: {
              displayName: "Fugenkreuze",
              classificationId: "2077049031",
            },
            itemClassification: "BASE_PRODUCT",
            itemName:
              "INNONEXXT® Premium Unterlegplatten | 60 x 40 mm 160 Stück Mix | Abstandshalter, Plättchen aus Kunststoff | Tragfähigkeit bis 16 t | Set: 1.5, 2, 3, 4, 5, 10, 15, 20 mm",
            manufacturer: "Nexxt Commerce GmbH",
            memorabilia: false,
            modelNumber: "ZY-EJ-XHZD-08",
            partNumber: "ZY-EJ-XHZD-08",
            size: "160er Set",
            tradeInEligible: false,
            websiteDisplayGroup: "home_improvement_display_on_website",
            websiteDisplayGroupName: "Home Improvement",
          },
        ],
      },
    ],
  },
];

const responseByKeyword = {
  numberOfResults: 1000,
  pagination: {
    nextToken:
      "9HkIVcuuPmX_bm51o3-igBfN45pxW4Ru7ElIM6GCECYCuXJKzT26f6mEt-4bHSAS3rlu5fkNtQFwt_JvE7qiRn7s2w_4Z15tTz1rLNN-QjNBGxQ1egh-7sCPIOCnsvLonBaTiQdaBuKldn8GcyFs-R1l1vj7KQoFIa7pWiOPHyaYWP7sBE9Fg7cGN2wE0an5ePw96h6ZL7ljK_pn8N8XWsmMXzvaLiUnzAARBlifESkSlp3rqJOVVsxeyCi9t6TcWT7Gowi9CB5e6SRKRrBevg==",
  },
  refinements: {
    brands: [
      { numberOfResults: 643, brandName: "SC-Normteile" },
      { numberOfResults: 434, brandName: "DERING" },
      { numberOfResults: 178, brandName: "YJZG" },
      { numberOfResults: 134, brandName: "POWER" },
      { numberOfResults: 98, brandName: "My Plast" },
      { numberOfResults: 84, brandName: "ZAALFC" },
      { numberOfResults: 75, brandName: "JAP768" },
      { numberOfResults: 61, brandName: "MOMOJIA" },
      { numberOfResults: 60, brandName: "BJINAPY778" },
      { numberOfResults: 49, brandName: "EisenRon" },
    ],
    classifications: [
      {
        numberOfResults: 2991,
        displayName: "Baumarkt",
        classificationId: "80085031",
      },
      {
        numberOfResults: 2653,
        displayName: "Gewerbe, Industrie & Wissenschaft",
        classificationId: "5866099031",
      },
      {
        numberOfResults: 1101,
        displayName: "Garten",
        classificationId: "10925241",
      },
      {
        numberOfResults: 89,
        displayName: "Sonstiges",
        classificationId: "72968031",
      },
      {
        numberOfResults: 81,
        displayName: "Haustier",
        classificationId: "340853031",
      },
      {
        numberOfResults: 21,
        displayName: "Küche, Haushalt & Wohnen",
        classificationId: "3169011",
      },
      {
        numberOfResults: 14,
        displayName: "Sport & Freizeit",
        classificationId: "16435121",
      },
      {
        numberOfResults: 13,
        displayName: "Elektronik & Foto",
        classificationId: "569604",
      },
      {
        numberOfResults: 10,
        displayName: "Spielzeug",
        classificationId: "12950661",
      },
      {
        numberOfResults: 9,
        displayName: "Auto & Motorrad",
        classificationId: "79899031",
      },
    ],
  },
  items: [
    {
      asin: "B01448WISU",
      summaries: [
        {
          marketplaceId: "A1PA6795UKMFR9",
          adultProduct: false,
          autographed: false,
          brand: "SPAX",
          browseClassification: {
            displayName: "Terrassenschrauben",
            classificationId: "2076708031",
          },
          itemClassification: "VARIATION_PARENT",
          itemName:
            "SPAX - Terrassenschraube, Zylinderkopf, T-STAR plus, CUT, Fixiergewinde, Edelstahl rostfrei A2, antik, 1.4567-0537900500503",
          manufacturer: "SPAX",
          memorabilia: false,
          packageQuantity: 1,
          partNumber: "1334641718681",
          tradeInEligible: false,
          websiteDisplayGroup: "home_improvement_display_on_website",
          websiteDisplayGroupName: "Home Improvement",
        },
      ],
    },
    {
      asin: "B01GHYCVBI",
      summaries: [
        {
          marketplaceId: "A1PA6795UKMFR9",
          adultProduct: false,
          autographed: false,
          brand: "SPAX",
          browseClassification: {
            displayName: "Terrassenschrauben",
            classificationId: "2076708031",
          },
          color: "Silber",
          itemClassification: "BASE_PRODUCT",
          itemName:
            "SPAX 0567000500563 Bold Terrassenschraube für Holzterrassen, T-STAR plus, 100 Stück",
          manufacturer: "SPAX International GmbH & Co. KG",
          memorabilia: false,
          modelNumber: "0567000500563",
          packageQuantity: 1,
          partNumber: "0567000500563",
          releaseDate: "2016-05-23",
          tradeInEligible: false,
          websiteDisplayGroup: "home_improvement_display_on_website",
          websiteDisplayGroupName: "Home Improvement",
        },
      ],
    },
    {
      asin: "B001THHWM2",
      summaries: [
        {
          marketplaceId: "A1PA6795UKMFR9",
          adultProduct: false,
          autographed: false,
          brand: "SPAX",
          browseClassification: {
            displayName: "Terrassenschrauben",
            classificationId: "2076708031",
          },
          color: "Edelstahl Rostfrei A2",
          itemClassification: "BASE_PRODUCT",
          itemName:
            "SPAX Terrassenschraube aus Edelstahl rostfrei A2, 5,0 x 50 mm, 200 Stück, T-STAR plus, Zylinderkopf, Fxiergewinde, CUT-Spitze, 0537000500503",
          manufacturer: "SPAX International GmbH & Co. KG",
          memorabilia: false,
          modelNumber: "537000500503",
          packageQuantity: 1,
          partNumber: "537000500503",
          size: "5,0 x 50 mm",
          style: "200 Stück",
          tradeInEligible: false,
          websiteDisplayGroup: "home_improvement_display_on_website",
          websiteDisplayGroupName: "Home Improvement",
        },
      ],
    },
    {
      asin: "B001THAKBM",
      summaries: [
        {
          marketplaceId: "A1PA6795UKMFR9",
          adultProduct: false,
          autographed: false,
          brand: "SPAX",
          browseClassification: {
            displayName: "Terrassenschrauben",
            classificationId: "2076708031",
          },
          color: "Edelstahl Rostfrei A2",
          itemClassification: "BASE_PRODUCT",
          itemName:
            "SPAX Terrassenschraube aus Edelstahl rostfrei A2, 5,0 x 70 mm, 100 Stück, T-STAR plus, Zylinderkopf, Fxiergewinde, CUT-Spitze, 0537000500703",
          manufacturer: "SPAX International GmbH & Co. KG",
          memorabilia: false,
          modelNumber: "537000500703",
          packageQuantity: 1,
          partNumber: "537000500703",
          size: "5,0 x 70 mm",
          style: "100 Stück",
          tradeInEligible: false,
          websiteDisplayGroup: "home_improvement_display_on_website",
          websiteDisplayGroupName: "Home Improvement",
        },
      ],
    },
    {
      asin: "B004TBVJ4M",
      summaries: [
        {
          marketplaceId: "A1PA6795UKMFR9",
          adultProduct: false,
          autographed: false,
          brand: "SPAX",
          browseClassification: {
            displayName: "Terrassenschrauben",
            classificationId: "2076708031",
          },
          color: "Edelstahl Rostfrei A2",
          itemClassification: "BASE_PRODUCT",
          itemName:
            "SPAX Terrassenschraube aus Edelstahl rostfrei A2, 5,0 x 40 mm, 200 Stück, T-STAR plus, Zylinderkopf, Fxiergewinde, CUT-Spitze, 0537000500403",
          manufacturer: "SPAX International GmbH & Co. KG",
          memorabilia: false,
          modelNumber: "537000500403",
          packageQuantity: 1,
          partNumber: "537000500403",
          size: "5,0 x 40 mm",
          style: "200 Stück",
          tradeInEligible: false,
          websiteDisplayGroup: "home_improvement_display_on_website",
          websiteDisplayGroupName: "Home Improvement",
        },
      ],
    },
    {
      asin: "B01ICUHYOE",
      summaries: [
        {
          marketplaceId: "A1PA6795UKMFR9",
          adultProduct: false,
          autographed: false,
          brand: "SPAX",
          browseClassification: {
            displayName: "Produkte",
            classificationId: "80085031",
          },
          itemClassification: "VARIATION_PARENT",
          itemName:
            "Holzterrassenschraube Spax-D Zylinderkopf T-STAR plus - Edelstahl A2",
          manufacturer: "SPAX",
          memorabilia: false,
          tradeInEligible: false,
          websiteDisplayGroup: "home_improvement_display_on_website",
          websiteDisplayGroupName: "Home Improvement",
        },
      ],
    },
    {
      asin: "B01FAVG692",
      summaries: [
        {
          marketplaceId: "A1PA6795UKMFR9",
          adultProduct: false,
          autographed: false,
          brand: "mgn-store",
          browseClassification: {
            displayName: "Terrassenschrauben",
            classificationId: "2076708031",
          },
          itemClassification: "VARIATION_PARENT",
          itemName:
            "RE-SCHRAUB 5,5 x 60 mm Edelstahl A4 Torx TX 25 Terrassenschrauben rostfrei V4A von 100 - 1000 Stück wählbar",
          manufacturer: "RE-SCHRAUB",
          memorabilia: false,
          tradeInEligible: false,
          websiteDisplayGroup: "home_improvement_display_on_website",
          websiteDisplayGroupName: "Home Improvement",
        },
      ],
    },
    {
      asin: "B01F94ZKNS",
      summaries: [
        {
          marketplaceId: "A1PA6795UKMFR9",
          adultProduct: false,
          autographed: false,
          brand: "mgn-store",
          browseClassification: {
            displayName: "Terrassenschrauben",
            classificationId: "2076708031",
          },
          itemClassification: "VARIATION_PARENT",
          itemName:
            "RE-SCHRAUB 5,5 x 60 mm Edelstahl A2 Torx TX 25 Terrassenschrauben rostfrei V2A von 100 - 1000 Stück wählbar",
          manufacturer: "RE-SCHRAUB",
          memorabilia: false,
          tradeInEligible: false,
          websiteDisplayGroup: "biss_basic_display_on_website",
          websiteDisplayGroupName: "BISS Basic",
        },
      ],
    },
    {
      asin: "B06XKLH9RD",
      summaries: [
        {
          marketplaceId: "A1PA6795UKMFR9",
          adultProduct: false,
          autographed: false,
          brand: "SCREW REBEL",
          browseClassification: {
            displayName: "Terrassenschrauben",
            classificationId: "2076708031",
          },
          itemClassification: "VARIATION_PARENT",
          itemName:
            "T-INOX 5 x 80 Terrassenschrauben C1 Edelstahl gehärtet Torx, inkl. TX 25 Edelstahl Bit, Terassenschrauben, Terrassenschraube AISI 410 martensitisch",
          manufacturer: "schrauben-hammer",
          memorabilia: false,
          tradeInEligible: false,
          websiteDisplayGroup: "home_improvement_display_on_website",
          websiteDisplayGroupName: "Home Improvement",
        },
      ],
    },
    {
      asin: "B001THE1PI",
      summaries: [
        {
          marketplaceId: "A1PA6795UKMFR9",
          adultProduct: false,
          autographed: false,
          brand: "SPAX",
          browseClassification: {
            displayName: "Terrassenschrauben",
            classificationId: "2076708031",
          },
          color: "Edelstahl Rostfrei A2",
          itemClassification: "BASE_PRODUCT",
          itemName:
            "SPAX Terrassenschraube aus Edelstahl rostfrei A2, 5,0 x 80 mm, 100 Stück, T-STAR plus, Zylinderkopf, Fxiergewinde, CUT-Spitze, 0537000500803",
          manufacturer: "SPAX International GmbH & Co. KG",
          memorabilia: false,
          modelNumber: "537000500803",
          packageQuantity: 1,
          partNumber: "537000500803",
          size: "5,0 x 80 mm",
          style: "100 Stück",
          tradeInEligible: false,
          websiteDisplayGroup: "home_improvement_display_on_website",
          websiteDisplayGroupName: "Home Improvement",
        },
      ],
    },
  ],
};
