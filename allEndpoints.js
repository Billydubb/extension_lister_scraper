{
    aplusContent: {
      __versions: [ '2020-11-01' ],
      __operations: [
        'searchContentDocuments',
        'createContentDocument',
        'getContentDocument',
        'updateContentDocument',
        'listContentDocumentAsinRelations',
        'postContentDocumentAsinRelations',
        'validateContentDocumentAsinRelations',
        'searchContentPublishRecords',
        'postContentDocumentApprovalSubmission',
        'postContentDocumentSuspendSubmission'
      ],
      '2020-11-01': {
        searchContentDocuments: [Function: searchContentDocuments],
        createContentDocument: [Function: createContentDocument],
        getContentDocument: [Function: getContentDocument],
        updateContentDocument: [Function: updateContentDocument],
        listContentDocumentAsinRelations: [Function: listContentDocumentAsinRelations],
        postContentDocumentAsinRelations: [Function: postContentDocumentAsinRelations],
        validateContentDocumentAsinRelations: [Function: validateContentDocumentAsinRelations],
        searchContentPublishRecords: [Function: searchContentPublishRecords],
        postContentDocumentApprovalSubmission: [Function: postContentDocumentApprovalSubmission],
        postContentDocumentSuspendSubmission: [Function: postContentDocumentSuspendSubmission]
      }
    },
    authorization: {
      __versions: [ 'v1' ],
      __operations: [ 'getAuthorizationCode' ],
      v1: { getAuthorizationCode: [Function: getAuthorizationCode] }
    },
    catalogItems: {
      __versions: [ 'v0', '2020-12-01', '2022-04-01' ],
      __operations: [ 'getCatalogItem', 'listCatalogCategories', 'searchCatalogItems' ],
      v0: { listCatalogCategories: [Function: listCatalogCategories] },
      '2020-12-01': {
        searchCatalogItems: [Function: searchCatalogItems],
        getCatalogItem: [Function: getCatalogItem]
      },
      '2022-04-01': {
        searchCatalogItems: [Function: searchCatalogItems],
        getCatalogItem: [Function: getCatalogItem]
      }
    },
    easyShip: {
      __versions: [ '2022-03-23' ],
      __operations: [
        'listHandoverSlots',
        'getScheduledPackage',
        'createScheduledPackage',
        'updateScheduledPackages'
      ],
      '2022-03-23': {
        listHandoverSlots: [Function: listHandoverSlots],
        getScheduledPackage: [Function: getScheduledPackage],
        createScheduledPackage: [Function: createScheduledPackage],
        updateScheduledPackages: [Function: updateScheduledPackages]
      }
    },
    fbaInboundEligibility: {
      __versions: [ 'v1' ],
      __operations: [ 'getItemEligibilityPreview' ],
      v1: {
        getItemEligibilityPreview: [Function: getItemEligibilityPreview]
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
        'putSmallAndLightEnrollmentBySellerSKU',
        'deleteSmallAndLightEnrollmentBySellerSKU',
        'getSmallAndLightEligibilityBySellerSKU',
        'getSmallAndLightFeePreview'
      ],
      v1: {
        getSmallAndLightEnrollmentBySellerSKU: [Function: getSmallAndLightEnrollmentBySellerSKU],
        putSmallAndLightEnrollmentBySellerSKU: [Function: putSmallAndLightEnrollmentBySellerSKU],
        deleteSmallAndLightEnrollmentBySellerSKU: [Function: deleteSmallAndLightEnrollmentBySellerSKU],
        getSmallAndLightEligibilityBySellerSKU: [Function: getSmallAndLightEligibilityBySellerSKU],
        getSmallAndLightFeePreview: [Function: getSmallAndLightFeePreview]
      }
    },
    feeds: {
      __versions: [ '2020-09-04', '2021-06-30' ],
      __operations: [
        'getFeeds',
        'createFeed',
        'getFeed',
        'cancelFeed',
        'createFeedDocument',
        'getFeedDocument'
      ],
      '2020-09-04': {
        getFeeds: [Function: getFeeds],
        createFeed: [Function: createFeed],
        getFeed: [Function: getFeed],
        cancelFeed: [Function: cancelFeed],
        createFeedDocument: [Function: createFeedDocument],
        getFeedDocument: [Function: getFeedDocument]
      },
      '2021-06-30': {
        getFeeds: [Function: getFeeds],
        createFeed: [Function: createFeed],
        getFeed: [Function: getFeed],
        cancelFeed: [Function: cancelFeed],
        createFeedDocument: [Function: createFeedDocument],
        getFeedDocument: [Function: getFeedDocument]
      }
    },
    finances: {
      __versions: [ 'v0' ],
      __operations: [
        'listFinancialEventGroups',
        'listFinancialEventsByGroupId',
        'listFinancialEventsByOrderId',
        'listFinancialEvents'
      ],
      v0: {
        listFinancialEventGroups: [Function: listFinancialEventGroups],
        listFinancialEventsByGroupId: [Function: listFinancialEventsByGroupId],
        listFinancialEventsByOrderId: [Function: listFinancialEventsByOrderId],
        listFinancialEvents: [Function: listFinancialEvents]
      }
    },
    fulfillmentInbound: {
      __versions: [ 'v0' ],
      __operations: [
        'getInboundGuidance',
        'createInboundShipmentPlan',
        'updateInboundShipment',
        'createInboundShipment',
        'getPreorderInfo',
        'confirmPreorder',
        'getPrepInstructions',
        'getTransportDetails',
        'putTransportDetails',
        'voidTransport',
        'estimateTransport',
        'confirmTransport',
        'getLabels',
        'getBillOfLading',
        'getShipments',
        'getShipmentItemsByShipmentId',
        'getShipmentItems'
      ],
      v0: {
        getInboundGuidance: [Function: getInboundGuidance],
        createInboundShipmentPlan: [Function: createInboundShipmentPlan],
        updateInboundShipment: [Function: updateInboundShipment],
        createInboundShipment: [Function: createInboundShipment],
        getPreorderInfo: [Function: getPreorderInfo],
        confirmPreorder: [Function: confirmPreorder],
        getPrepInstructions: [Function: getPrepInstructions],
        getTransportDetails: [Function: getTransportDetails],
        putTransportDetails: [Function: putTransportDetails],
        voidTransport: [Function: voidTransport],
        estimateTransport: [Function: estimateTransport],
        confirmTransport: [Function: confirmTransport],
        getLabels: [Function: getLabels],
        getBillOfLading: [Function: getBillOfLading],
        getShipments: [Function: getShipments],
        getShipmentItemsByShipmentId: [Function: getShipmentItemsByShipmentId],
        getShipmentItems: [Function: getShipmentItems]
      }
    },
    fulfillmentOutbound: {
      __versions: [ '2020-07-01' ],
      __operations: [
        'getFulfillmentPreview',
        'listAllFulfillmentOrders',
        'createFulfillmentOrder',
        'getPackageTrackingDetails',
        'listReturnReasonCodes',
        'createFulfillmentReturn',
        'getFulfillmentOrder',
        'updateFulfillmentOrder',
        'cancelFulfillmentOrder',
        'getFeatures',
        'getFeatureInventory',
        'getFeatureSKU'
      ],
      '2020-07-01': {
        getFulfillmentPreview: [Function: getFulfillmentPreview],
        listAllFulfillmentOrders: [Function: listAllFulfillmentOrders],
        createFulfillmentOrder: [Function: createFulfillmentOrder],
        getPackageTrackingDetails: [Function: getPackageTrackingDetails],
        listReturnReasonCodes: [Function: listReturnReasonCodes],
        createFulfillmentReturn: [Function: createFulfillmentReturn],
        getFulfillmentOrder: [Function: getFulfillmentOrder],
        updateFulfillmentOrder: [Function: updateFulfillmentOrder],
        cancelFulfillmentOrder: [Function: cancelFulfillmentOrder],
        getFeatures: [Function: getFeatures],
        getFeatureInventory: [Function: getFeatureInventory],
        getFeatureSKU: [Function: getFeatureSKU]
      }
    },
    listingsItems: {
      __versions: [ '2020-09-01', '2021-08-01' ],
      __operations: [
        'getListingsItem',
        'putListingsItem',
        'deleteListingsItem',
        'patchListingsItem'
      ],
      '2020-09-01': {
        putListingsItem: [Function: putListingsItem],
        deleteListingsItem: [Function: deleteListingsItem],
        patchListingsItem: [Function: patchListingsItem]
      },
      '2021-08-01': {
        getListingsItem: [Function: getListingsItem],
        putListingsItem: [Function: putListingsItem],
        deleteListingsItem: [Function: deleteListingsItem],
        patchListingsItem: [Function: patchListingsItem]
      }
    },
    listingsRestrictions: {
      __versions: [ '2021-08-01' ],
      __operations: [ 'getListingsRestrictions' ],
      '2021-08-01': { getListingsRestrictions: [Function: getListingsRestrictions] }
    },
    merchantFulfillment: {
      __versions: [ 'v0' ],
      __operations: [
        'getEligibleShipmentServicesOld',
        'getEligibleShipmentServices',
        'getShipment',
        'cancelShipment',
        'cancelShipmentOld',
        'createShipment',
        'getAdditionalSellerInputsOld',
        'getAdditionalSellerInputs'
      ],
      v0: {
        getEligibleShipmentServicesOld: [Function: getEligibleShipmentServicesOld],
        getEligibleShipmentServices: [Function: getEligibleShipmentServices],
        getShipment: [Function: getShipment],
        cancelShipment: [Function: cancelShipment],
        cancelShipmentOld: [Function: cancelShipmentOld],
        createShipment: [Function: createShipment],
        getAdditionalSellerInputsOld: [Function: getAdditionalSellerInputsOld],
        getAdditionalSellerInputs: [Function: getAdditionalSellerInputs]
      }
    },
    messaging: {
      __versions: [ 'v1' ],
      __operations: [
        'getMessagingActionsForOrder',
        'confirmCustomizationDetails',
        'createConfirmDeliveryDetails',
        'createLegalDisclosure',
        'createNegativeFeedbackRemoval',
        'createConfirmOrderDetails',
        'createConfirmServiceDetails',
        'CreateAmazonMotors',
        'CreateWarranty',
        'GetAttributes',
        'createDigitalAccessKey',
        'createUnexpectedProblem'
      ],
      v1: {
        getMessagingActionsForOrder: [Function: getMessagingActionsForOrder],
        confirmCustomizationDetails: [Function: confirmCustomizationDetails],
        createConfirmDeliveryDetails: [Function: createConfirmDeliveryDetails],
        createLegalDisclosure: [Function: createLegalDisclosure],
        createNegativeFeedbackRemoval: [Function: createNegativeFeedbackRemoval],
        createConfirmOrderDetails: [Function: createConfirmOrderDetails],
        createConfirmServiceDetails: [Function: createConfirmServiceDetails],
        CreateAmazonMotors: [Function: CreateAmazonMotors],
        CreateWarranty: [Function: CreateWarranty],
        GetAttributes: [Function: GetAttributes],
        createDigitalAccessKey: [Function: createDigitalAccessKey],
        createUnexpectedProblem: [Function: createUnexpectedProblem]
      }
    },
    notifications: {
      __versions: [ 'v1' ],
      __operations: [
        'getSubscription',
        'createSubscription',
        'getSubscriptionById',
        'deleteSubscriptionById',
        'getDestinations',
        'createDestination',
        'getDestination',
        'deleteDestination'
      ],
      v1: {
        getSubscription: [Function: getSubscription],
        createSubscription: [Function: createSubscription],
        getSubscriptionById: [Function: getSubscriptionById],
        deleteSubscriptionById: [Function: deleteSubscriptionById],
        getDestinations: [Function: getDestinations],
        createDestination: [Function: createDestination],
        getDestination: [Function: getDestination],
        deleteDestination: [Function: deleteDestination]
      }
    },
    orders: {
      __versions: [ 'v0' ],
      __operations: [
        'getOrders',
        'getOrder',
        'getOrderBuyerInfo',
        'getOrderAddress',
        'getOrderItems',
        'getOrderItemsBuyerInfo',
        'updateShipmentStatus'
      ],
      v0: {
        getOrders: [Function: getOrders],
        getOrder: [Function: getOrder],
        getOrderBuyerInfo: [Function: getOrderBuyerInfo],
        getOrderAddress: [Function: getOrderAddress],
        getOrderItems: [Function: getOrderItems],
        getOrderItemsBuyerInfo: [Function: getOrderItemsBuyerInfo],
        updateShipmentStatus: [Function: updateShipmentStatus]
      }
    },
    productFees: {
      __versions: [ 'v0' ],
      __operations: [
        'getMyFeesEstimateForSKU',
        'getMyFeesEstimateForASIN',
        'getMyFeesEstimates'
      ],
      v0: {
        getMyFeesEstimateForSKU: [Function: getMyFeesEstimateForSKU],
        getMyFeesEstimateForASIN: [Function: getMyFeesEstimateForASIN],
        getMyFeesEstimates: [Function: getMyFeesEstimates]
      }
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
      v0: {
        getPricing: [Function: getPricing],
        getCompetitivePricing: [Function: getCompetitivePricing],
        getListingOffers: [Function: getListingOffers],
        getItemOffers: [Function: getItemOffers],
        getItemOffersBatch: [Function: getItemOffersBatch],
        getListingOffersBatch: [Function: getListingOffersBatch]
      }
    },
    productTypeDefinitions: {
      __versions: [ '2020-09-01' ],
      __operations: [ 'searchDefinitionsProductTypes', 'getDefinitionsProductType' ],
      '2020-09-01': {
        searchDefinitionsProductTypes: [Function: searchDefinitionsProductTypes],
        getDefinitionsProductType: [Function: getDefinitionsProductType]
      }
    },
    reports: {
      __versions: [ '2020-09-04', '2021-06-30' ],
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
      '2020-09-04': {
        getReports: [Function: getReports],
        createReport: [Function: createReport],
        getReport: [Function: getReport],
        cancelReport: [Function: cancelReport],
        getReportSchedules: [Function: getReportSchedules],
        createReportSchedule: [Function: createReportSchedule],
        getReportSchedule: [Function: getReportSchedule],
        cancelReportSchedule: [Function: cancelReportSchedule],
        getReportDocument: [Function: getReportDocument]
      },
      '2021-06-30': {
        getReports: [Function: getReports],
        createReport: [Function: createReport],
        getReport: [Function: getReport],
        cancelReport: [Function: cancelReport],
        getReportSchedules: [Function: getReportSchedules],
        createReportSchedule: [Function: createReportSchedule],
        getReportSchedule: [Function: getReportSchedule],
        cancelReportSchedule: [Function: cancelReportSchedule],
        getReportDocument: [Function: getReportDocument]
      }
    },
    sales: {
      __versions: [ 'v1' ],
      __operations: [ 'getOrderMetrics' ],
      v1: { getOrderMetrics: [Function: getOrderMetrics] }
    },
    sellers: {
      __versions: [ 'v1' ],
      __operations: [ 'getMarketplaceParticipations' ],
      v1: {
        getMarketplaceParticipations: [Function: getMarketplaceParticipations]
      }
    },
    services: {
      __versions: [ 'v1' ],
      __operations: [
        'getServiceJobByServiceJobId',
        'cancelServiceJobByServiceJobId',
        'completeServiceJobByServiceJobId',
        'getServiceJobs',
        'addAppointmentForServiceJobByServiceJobId',
        'rescheduleAppointmentForServiceJobByServiceJobId',
        'assignAppointmentResources',
        'setAppointmentFulfillmentData',
        'getRangeSlotCapacity',
        'getFixedSlotCapacity',
        'updateSchedule',
        'createReservation',
        'updateReservation',
        'cancelReservation',
        'getAppointmentSlotsByJobId',
        'getAppointmentSlots',
        'createServiceDocumentUploadDestination'
      ],
      v1: {
        getServiceJobByServiceJobId: [Function: getServiceJobByServiceJobId],
        cancelServiceJobByServiceJobId: [Function: cancelServiceJobByServiceJobId],
        completeServiceJobByServiceJobId: [Function: completeServiceJobByServiceJobId],
        getServiceJobs: [Function: getServiceJobs],
        addAppointmentForServiceJobByServiceJobId: [Function: addAppointmentForServiceJobByServiceJobId],
        rescheduleAppointmentForServiceJobByServiceJobId: [Function: rescheduleAppointmentForServiceJobByServiceJobId],
        assignAppointmentResources: [Function: assignAppointmentResources],
        setAppointmentFulfillmentData: [Function: setAppointmentFulfillmentData],
        getRangeSlotCapacity: [Function: getRangeSlotCapacity],
        getFixedSlotCapacity: [Function: getFixedSlotCapacity],
        updateSchedule: [Function: updateSchedule],
        createReservation: [Function: createReservation],
        updateReservation: [Function: updateReservation],
        cancelReservation: [Function: cancelReservation],
        getAppointmentSlotsByJobId: [Function: getAppointmentSlotsByJobId],
        getAppointmmentSlots: [Function: getAppointmmentSlots],
        createServiceDocumentUploadDestination: [Function: createServiceDocumentUploadDestination]
      }
    },
    shipmentInvoicing: {
      __versions: [ 'v0' ],
      __operations: [ 'getShipmentDetails', 'submitInvoice', 'getInvoiceStatus' ],
      v0: {
        getShipmentDetails: [Function: getShipmentDetails],
        submitInvoice: [Function: submitInvoice],
        getInvoiceStatus: [Function: getInvoiceStatus]
      }
    },
    shipping: {
      __versions: [ 'v1' ],
      __operations: [
        'createShipment',
        'getShipment',
        'cancelShipment',
        'purchaseLabels',
        'retrieveShippingLabel',
        'purchaseShipment',
        'getRates',
        'getAccount',
        'getTrackingInformation'
      ],
      v1: {
        createShipment: [Function: createShipment],
        getShipment: [Function: getShipment],
        cancelShipment: [Function: cancelShipment],
        purchaseLabels: [Function: purchaseLabels],
        retrieveShippingLabel: [Function: retrieveShippingLabel],
        purchaseShipment: [Function: purchaseShipment],
        getRates: [Function: getRates],
        getAccount: [Function: getAccount],
        getTrackingInformation: [Function: getTrackingInformation]
      }
    },
    solicitations: {
      __versions: [ 'v1' ],
      __operations: [
        'getSolicitationActionsForOrder',
        'createProductReviewAndSellerFeedbackSolicitation'
      ],
      v1: {
        getSolicitationActionsForOrder: [Function: getSolicitationActionsForOrder],
        createProductReviewAndSellerFeedbackSolicitation: [Function: createProductReviewAndSellerFeedbackSolicitation]
      }
    },
    tokens: {
      __versions: [ '2021-03-01' ],
      __operations: [ 'createRestrictedDataToken' ],
      '2021-03-01': {
        createRestrictedDataToken: [Function: createRestrictedDataToken]
      }
    },
    uploads: {
      __versions: [ '2020-11-01' ],
      __operations: [ 'createUploadDestinationForResource' ],
      '2020-11-01': {
        createUploadDestinationForResource: [Function: createUploadDestinationForResource]
      }
    },
    vendorDirectFulfillmentInventory: {
      __versions: [ 'v1' ],
      __operations: [ 'submitInventoryUpdate' ],
      v1: { submitInventoryUpdate: [Function: submitInventoryUpdate] }
    },
    vendorDirectFulfillmentOrders: {
      __versions: [ 'v1', '2021-12-28' ],
      __operations: [ 'getOrders', 'getOrder', 'submitAcknowledgement' ],
      v1: {
        getOrders: [Function: getOrders],
        getOrder: [Function: getOrder],
        submitAcknowledgement: [Function: submitAcknowledgement]
      },
      '2021-12-28': {
        getOrders: [Function: getOrders],
        getOrder: [Function: getOrder],
        submitAcknowledgement: [Function: submitAcknowledgement]
      }
    },
    vendorDirectFulfillmentPayments: {
      __versions: [ 'v1' ],
      __operations: [ 'submitInvoice' ],
      v1: { submitInvoice: [Function: submitInvoice] }
    },
    vendorDirectFulfillmentSandboxTestData: {
      __versions: [ '2021-10-28' ],
      __operations: [ 'generateOrderScenarios', 'getOrderScenarios' ],
      '2021-10-28': {
        generateOrderScenarios: [Function: generateOrderScenarios],
        getOrderScenarios: [Function: getOrderScenarios]
      }
    },
    vendorDirectFulfillmentShipping: {
      __versions: [ 'v1', '2021-12-28' ],
      __operations: [
        'getShippingLabels',
        'submitShippingLabelRequest',
        'getShippingLabel',
        'createShippingLabels',
        'submitShipmentConfirmations',
        'submitShipmentStatusUpdates',
        'getCustomerInvoices',
        'getCustomerInvoice',
        'getPackingSlips',
        'getPackingSlip'
      ],
      v1: {
        getShippingLabels: [Function: getShippingLabels],
        submitShippingLabelRequest: [Function: submitShippingLabelRequest],
        getShippingLabel: [Function: getShippingLabel],
        submitShipmentConfirmations: [Function: submitShipmentConfirmations],
        submitShipmentStatusUpdates: [Function: submitShipmentStatusUpdates],
        getCustomerInvoices: [Function: getCustomerInvoices],
        getCustomerInvoice: [Function: getCustomerInvoice],
        getPackingSlips: [Function: getPackingSlips],
        getPackingSlip: [Function: getPackingSlip]
      },
      '2021-12-28': {
        getShippingLabels: [Function: getShippingLabels],
        submitShippingLabelRequest: [Function: submitShippingLabelRequest],
        getShippingLabel: [Function: getShippingLabel],
        createShippingLabels: [Function: createShippingLabels],
        submitShipmentConfirmations: [Function: submitShipmentConfirmations],
        submitShipmentStatusUpdates: [Function: submitShipmentStatusUpdates],
        getCustomerInvoices: [Function: getCustomerInvoices],
        getCustomerInvoice: [Function: getCustomerInvoice],
        getPackingSlips: [Function: getPackingSlips],
        getPackingSlip: [Function: getPackingSlip]
      }
    },
    vendorDirectFulfillmentTransactions: {
      __versions: [ 'v1', '2021-12-28' ],
      __operations: [ 'getTransactionStatus' ],
      v1: { getTransactionStatus: [Function: getTransactionStatus] },
      '2021-12-28': { getTransactionStatus: [Function: getTransactionStatus] }
    },
    vendorInvoices: {
      __versions: [ 'v1' ],
      __operations: [ 'submitInvoices' ],
      v1: { submitInvoices: [Function: submitInvoices] }
    },
    vendorOrders: {
      __versions: [ 'v1' ],
      __operations: [
        'getPurchaseOrders',
        'getPurchaseOrder',
        'submitAcknowledgement',
        'getPurchaseOrdersStatus'
      ],
      v1: {
        getPurchaseOrders: [Function: getPurchaseOrders],
        getPurchaseOrder: [Function: getPurchaseOrder],
        submitAcknowledgement: [Function: submitAcknowledgement],
        getPurchaseOrdersStatus: [Function: getPurchaseOrdersStatus]
      }
    },
    vendorShipments: {
      __versions: [ 'v1' ],
      __operations: [ 'SubmitShipmentConfirmations' ],
      v1: {
        SubmitShipmentConfirmations: [Function: SubmitShipmentConfirmations]
      }
    },
    vendorTransactionStatus: {
      __versions: [ 'v1' ],
      __operations: [ 'getTransaction' ],
      v1: { getTransaction: [Function: getTransaction] }
    }
  }