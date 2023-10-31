let res = await sellingPartner.callAPI({
  operation:'getReportDocument',
  endpoint:'reports',
  path: {
    reportDocumentId: "amzn1.spdoc.1.4.eu.46e350c8-1e6f-4cc4-8721-3165f5bd4744.T2ISMRNPULE4S7.107"
  },
  options: {
    version: "2021-06-30"
  }
});


const response = {
  reportDocumentId: 'amzn1.spdoc.1.4.eu.46e350c8-1e6f-4cc4-8721-3165f5bd4744.T2ISMRNPULE4S7.107',
  url: 'https://tortuga-prod-eu.s3-eu-west-1.amazonaws.com/%2FNinetyDays/amzn1.tortuga.4.eu.2569bbda-76d1-4628-9d7d-ee6de26bbc73.T3DLC2UAW3MUK6?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230329T132513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=AKIAX2ZVOZFBFTYVFZPW%2F20230329%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=01328cd7a4f582c6e32763ed15a71faab269e0f902cfb1f91187c7710777e6ef'
}