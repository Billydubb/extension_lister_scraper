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
}