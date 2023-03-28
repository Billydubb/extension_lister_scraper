let res = await sellingPartner.callAPI({
  operation: "listCatalogCategories",
  endpoint: "catalogItems",
  options: {
    version: "v0",
  },
  query: {
    MarketplaceId: "A1PA6795UKMFR9",
    ASIN: "B07NZJJHDG", // Unterlegplatten
    // SellerSKU: ""
  },
});

const response = [
  {
    ProductCategoryId: "2077050031",
    ProductCategoryName: "Fliesenkeile",
    parent: {
      ProductCategoryId: "2077033031",
      ProductCategoryName: "Maurer- & Verlegewerkzeug",
      parent: {
        ProductCategoryId: "2076948031",
        ProductCategoryName: "Handwerkzeuge",
        parent: {
          ProductCategoryId: "2076939031",
          ProductCategoryName: "Elektro- & Handwerkzeuge",
          parent: {
            ProductCategoryId: "80085031",
            ProductCategoryName: "Produkte",
            parent: {
              ProductCategoryId: "80084031",
              ProductCategoryName: "Baumarkt",
            },
          },
        },
      },
    },
  },
  {
    ProductCategoryId: "2077049031",
    ProductCategoryName: "Fugenkreuze",
    parent: {
      ProductCategoryId: "2077033031",
      ProductCategoryName: "Maurer- & Verlegewerkzeug",
      parent: {
        ProductCategoryId: "2076948031",
        ProductCategoryName: "Handwerkzeuge",
        parent: {
          ProductCategoryId: "2076939031",
          ProductCategoryName: "Elektro- & Handwerkzeuge",
          parent: {
            ProductCategoryId: "80085031",
            ProductCategoryName: "Produkte",
            parent: {
              ProductCategoryId: "80084031",
              ProductCategoryName: "Baumarkt",
            },
          },
        },
      },
    },
  },
];
