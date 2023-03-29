let res = await sellingPartner.callAPI({
    operation:'createReport',
    endpoint:'reports',
    body:{
      reportType:'GET_FLAT_FILE_OPEN_LISTINGS_DATA',
      marketplaceIds:['A38D8NSA03LJTC'],
    },
    options: {
      version: "2021-06-30"
    }
  });

const response = {
    reportId: { reportId: '918934019445' }
}