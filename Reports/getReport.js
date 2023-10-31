let res = await sellingPartner.callAPI({
  operation:'getReport',
  endpoint:'reports',
  path: {
    reportId: "904198019432"
  },
  options: {
    version: "2021-06-30"
  }
});


const reponse = {
  reportType: 'GET_FLAT_FILE_OPEN_LISTINGS_DATA',
  processingEndTime: '2023-03-16T12:39:15+00:00',
  processingStatus: 'DONE',
  marketplaceIds: [ 'A1PA6795UKMFR9' ],
  reportDocumentId: 'amzn1.spdoc.1.4.eu.46e350c8-1e6f-4cc4-8721-3165f5bd4744.T2ISMRNPULE4S7.107',
  reportId: '904198019432',
  dataEndTime: '2023-03-16T12:39:00+00:00',
  createdTime: '2023-03-16T12:39:00+00:00',
  processingStartTime: '2023-03-16T12:39:04+00:00',
  dataStartTime: '2023-03-16T12:39:00+00:00'
};


const respTwo = {
  "reportType": "GET_FLAT_FILE_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL",
  "processingEndTime": "2023-08-23T08:48:48+00:00",
  "processingStatus": "DONE",
  "marketplaceIds": [
      "A38D8NSA03LJTC"
  ],
  "reportDocumentId": "amzn1.spdoc.1.4.eu.0dd75d9e-451f-43e1-be45-271aebcecca9.T3I6M3CGJL6MXJ.2409",
  "reportId": "1101585019592",
  "dataEndTime": "2023-08-23T08:48:28+00:00",
  "createdTime": "2023-08-23T08:48:28+00:00",
  "processingStartTime": "2023-08-23T08:48:34+00:00",
  "dataStartTime": "2023-08-22T08:48:26+00:00"
}

const resp3 = {
  "reportType": "GET_FLAT_FILE_ARCHIVED_ORDERS_DATA_BY_ORDER_DATE",
  "processingEndTime": "2023-08-23T18:51:11+00:00",
  "processingStatus": "CANCELLED",
  "marketplaceIds": [
      "A38D8NSA03LJTC"
  ],
  "reportId": "1102161019592",
  "dataEndTime": "2023-08-23T18:50:59+00:00",
  "createdTime": "2023-08-23T18:50:59+00:00",
  "processingStartTime": "2023-08-23T18:51:03+00:00",
  "dataStartTime": "2023-08-22T18:50:57+00:00"
}