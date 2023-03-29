{
  

    catalogItems: {
      __versions: [ 'v0', '2022-04-01' ],
      __operations: [ 'getCatalogItem', 'listCatalogCategories', 'searchCatalogItems' ],
      v0: { listCatalogCategories: [Function: listCatalogCategories] },
      '2022-04-01': {
        searchCatalogItems: [Function: searchCatalogItems],
        getCatalogItem: [Function: getCatalogItem]
      }
    },

    fbaInventory: {
      __versions: [ 'v1' ],
      __operations: [ 'getInventorySummaries' ],
      v1: { getInventorySummaries: [Function: getInventorySummaries] }
    },
    fbaSmallAndLight: {
      __versions: [ 'v1' ],
      __operations: [
        'getSmallAndLightEnrollmentBySellerSKU',
        'getSmallAndLightEligibilityBySellerSKU',
        'getSmallAndLightFeePreview'
      ],
    },
    finances: {
      __versions: [ 'v0' ],
      __operations: [
        'listFinancialEvents'
      ],
      v0: {
        listFinancialEvents: [Function: listFinancialEvents]
      }
    },

    fulfillmentOutbound: {
      __versions: [ '2020-07-01' ],
      __operations: [
        'getFulfillmentPreview',
        'listAllFulfillmentOrders',
        'getPackageTrackingDetails',
        'listReturnReasonCodes',
        'getFulfillmentOrder', 
        'getFeatures',
        'getFeatureInventory',
        'getFeatureSKU'
      ],
    },
    listingsItems: {
      __versions: [  '2021-08-01' ],
      __operations: [
        'getListingsItem',
     
      ],
    },
  
    orders: {
      __versions: [ 'v0' ],
      __operations: [
        'getOrders',
        'getOrder',
        'getOrderItems',
      ],
    },
    productFees: {
      __versions: [ 'v0' ],
      __operations: [
        'getMyFeesEstimateForSKU',
        'getMyFeesEstimateForASIN',
        'getMyFeesEstimates'
      ],

    },
    productPricing: {
      __versions: [ 'v0' ],
      __operations: [
        'getPricing',
        'getCompetitivePricing',
        'getListingOffers',
        'getItemOffers',
        'getItemOffersBatch',
        'getListingOffersBatch'
      ],
  
    },
    reports: {
      __versions: [  '2021-06-30' ],
      __operations: [
        'getReports',
        'createReport',
        'getReport',
        'cancelReport',
        'getReportSchedules',
        'createReportSchedule',
        'getReportSchedule',
        'cancelReportSchedule',
        'getReportDocument'
      ],
    },
    sales: {
      __versions: [ 'v1' ],
      __operations: [ 'getOrderMetrics' ],
    },
    sellers: {
      __versions: [ 'v1' ],
      __operations: [ 'getMarketplaceParticipations' ],
      v1: {
        getMarketplaceParticipations: [Function: getMarketplaceParticipations]
      }
    },

  }