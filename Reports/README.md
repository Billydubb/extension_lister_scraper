# Reports

1. Create Report
    createReport: Starts the process of creating a report. Returns a `reportId`

2. Verify that the report processing is done
    getReport: gets a report by reportId. Among others it returns the `processingStatus`, which can be DONE, FATAL or CANCELLED and `reportDocumentId` which is needed to actually download the report.

3. Retrieve a report
    getReportDocument: returns `url` and `compressionAlgorithm` in case the report has been compressed.

TODO: 
## Brand analytics reports
    Need to get the brand analytics role first. Already requested.
## Seller retail analytics reports
     Need to get the brand analytics role first. Already requested.

DONE: 
    
## Inventory reports
 * GET_FLAT_FILE_OPEN_LISTINGS_DATA: 
    Inventory report for a SELLER's open listings. Says SELLERS here rather than merchant.
    reportId: 918934019445

 * GET_MERCHANT_LISTINGS_ALL_DATA: All of a MERCHANT's open listings
    { reportId: '918988019445' }

* GET_MERCHANT_LISTINGS_DATA:
    Active listings of a MERCHANT
    { reportId: '918991019445' }

There are more inventory reports than this!...





