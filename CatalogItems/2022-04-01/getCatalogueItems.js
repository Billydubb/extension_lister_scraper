let res = await sellingPartner.callAPI({
  operation: "getCatalogItem",
  endpoint: "catalogItems",
  options: {
    version: "2022-04-01",
  },
  path: { asin: "B09BNM6MDT" },
  query: {
    marketplaceIds: ["A1PA6795UKMFR9"],
    includedData: [
      "attributes",
      "dimensions",
      "images",
      "relationships",
      "salesRanks",
    ],
  },
});

const response = {
  asin: "B09BNM6MDT",
  attributes: {
    variation_theme: [{ name: "SIZE_NAME", marketplace_id: "A1PA6795UKMFR9" }],
    item_name: [
      {
        language_tag: "de_DE",
        value:
          "INNONEXXT® Premium Turbo Diamanttrennscheibe | heißgepresste Turbodiamantsegmente | longlife, gehärteten Stahl | Trennscheibe für Trockenschnitt und Nassschnitt | Granit,Stein,Ziegelstein,Marmor",
        marketplace_id: "A1PA6795UKMFR9",
      },
    ],
    manufacturer: [
      {
        language_tag: "de_DE",
        value: "Nexxt Commerce GmbH",
        marketplace_id: "A1PA6795UKMFR9",
      },
    ],
    product_site_launch_date: [
      { value: "2021-08-02T10:46:07.835Z", marketplace_id: "A1PA6795UKMFR9" },
    ],
    recommended_browse_nodes: [
      { value: "2077260031", marketplace_id: "A1PA6795UKMFR9" },
    ],
    brand: [
      {
        language_tag: "de_DE",
        value: "INNONEXXT",
        marketplace_id: "A1PA6795UKMFR9",
      },
    ],
    generic_keyword: [
      {
        language_tag: "de_DE",
        value:
          "Turbo-Diamanttrennscheiben,Industrie Diamantsegmente,Trennscheibe,Trockenschnitt,Nassschnitt,Universaltrennscheibe,universaldiamanttrennscheibe,Betontrennscheibe,Ziegeltrennscheibe,Trennschleifer,Diamant trennscheibe,Diamantscheibe,Diamant scheibe",
        marketplace_id: "A1PA6795UKMFR9",
      },
    ],
  },
  dimensions: [{ marketplaceId: "A1PA6795UKMFR9" }],
  images: [
    {
      marketplaceId: "A1PA6795UKMFR9",
      images: [
        {
          variant: "MAIN",
          link: "https://m.media-amazon.com/images/I/91GfiP6yG2L.jpg",
          height: 2560,
          width: 2248,
        },
        {
          variant: "MAIN",
          link: "https://m.media-amazon.com/images/I/51jscusB-mL.jpg",
          height: 500,
          width: 439,
        },
        {
          variant: "MAIN",
          link: "https://m.media-amazon.com/images/I/51jscusB-mL._SL75_.jpg",
          height: 75,
          width: 66,
        },
        {
          variant: "PT01",
          link: "https://m.media-amazon.com/images/I/915aDEGRchL.jpg",
          height: 2560,
          width: 2560,
        },
        {
          variant: "PT01",
          link: "https://m.media-amazon.com/images/I/51ZQGrioVhL.jpg",
          height: 500,
          width: 500,
        },
        {
          variant: "PT01",
          link: "https://m.media-amazon.com/images/I/51ZQGrioVhL._SL75_.jpg",
          height: 75,
          width: 75,
        },
        {
          variant: "PT02",
          link: "https://m.media-amazon.com/images/I/91mwAszfADL.jpg",
          height: 2560,
          width: 2560,
        },
        {
          variant: "PT02",
          link: "https://m.media-amazon.com/images/I/51n99T-Ux4L.jpg",
          height: 500,
          width: 500,
        },
        {
          variant: "PT02",
          link: "https://m.media-amazon.com/images/I/51n99T-Ux4L._SL75_.jpg",
          height: 75,
          width: 75,
        },
        {
          variant: "PT03",
          link: "https://m.media-amazon.com/images/I/91LJ+bMHivL.jpg",
          height: 2560,
          width: 2560,
        },
        {
          variant: "PT03",
          link: "https://m.media-amazon.com/images/I/51AYGIkLJGL.jpg",
          height: 500,
          width: 500,
        },
        {
          variant: "PT03",
          link: "https://m.media-amazon.com/images/I/51AYGIkLJGL._SL75_.jpg",
          height: 75,
          width: 75,
        },
        {
          variant: "PT04",
          link: "https://m.media-amazon.com/images/I/91eGpcB5c6L.jpg",
          height: 2560,
          width: 2560,
        },
        {
          variant: "PT04",
          link: "https://m.media-amazon.com/images/I/61EOVe8IApL.jpg",
          height: 500,
          width: 500,
        },
        {
          variant: "PT04",
          link: "https://m.media-amazon.com/images/I/61EOVe8IApL._SL75_.jpg",
          height: 75,
          width: 75,
        },
        {
          variant: "PT05",
          link: "https://m.media-amazon.com/images/I/91YukzzNiCL.jpg",
          height: 2560,
          width: 2560,
        },
        {
          variant: "PT05",
          link: "https://m.media-amazon.com/images/I/51ROcJ8WevL.jpg",
          height: 500,
          width: 500,
        },
        {
          variant: "PT05",
          link: "https://m.media-amazon.com/images/I/51ROcJ8WevL._SL75_.jpg",
          height: 75,
          width: 75,
        },
        {
          variant: "PT06",
          link: "https://m.media-amazon.com/images/I/819gz-K94gL.jpg",
          height: 2560,
          width: 2560,
        },
        {
          variant: "PT06",
          link: "https://m.media-amazon.com/images/I/51YIkzgXXIL.jpg",
          height: 500,
          width: 500,
        },
        {
          variant: "PT06",
          link: "https://m.media-amazon.com/images/I/51YIkzgXXIL._SL75_.jpg",
          height: 75,
          width: 75,
        },
        {
          variant: "PT07",
          link: "https://m.media-amazon.com/images/I/91bfL9ldMOL.jpg",
          height: 2560,
          width: 2560,
        },
        {
          variant: "PT07",
          link: "https://m.media-amazon.com/images/I/51hbLsWTC1L.jpg",
          height: 500,
          width: 500,
        },
        {
          variant: "PT07",
          link: "https://m.media-amazon.com/images/I/51hbLsWTC1L._SL75_.jpg",
          height: 75,
          width: 75,
        },
        {
          variant: "PT08",
          link: "https://m.media-amazon.com/images/I/51YuTpiPUvL.jpg",
          height: 679,
          width: 679,
        },
        {
          variant: "PT08",
          link: "https://m.media-amazon.com/images/I/51YuTpiPUvL._SL75_.jpg",
          height: 75,
          width: 75,
        },
      ],
    },
  ],
  relationships: [
    {
      marketplaceId: "A1PA6795UKMFR9",
      relationships: [
        {
          childAsins: [
            "B09BNHL7WG",
            "B09BNGBCD3",
            "B09BNG1QG5",
            "B09BNHCYCG",
            "B09BNGNKD5",
            "B09BNG9D11",
            "B09BNGBGTK",
            "B09BNJDJB7",
          ],
          type: "VARIATION",
          variationTheme: { attributes: ["size"], theme: "SIZE_NAME" },
        },
      ],
    },
  ],
  salesRanks: [
    {
      marketplaceId: "A1PA6795UKMFR9",
      classificationRanks: [
        {
          classificationId: "2077260031",
          title: "Diamant-Trennscheiben",
          link: "https://www.amazon.de/gp/bestsellers/diy/2077260031",
          rank: 31,
        },
      ],
      displayGroupRanks: [
        {
          websiteDisplayGroup: "home_improvement_display_on_website",
          title: "Baumarkt",
          link: "https://www.amazon.de/gp/bestsellers/diy",
          rank: 9602,
        },
      ],
    },
  ],
};
