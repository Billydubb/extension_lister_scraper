let res = await sellingPartner.callAPI({
    operation: "getOrderMetrics",
    endpoint: "sales",
    options: {
      version: "v1",
    },
    query: {
      marketplaceIds: ["A1PA6795UKMFR9"],
      interval: "2023-05-01T12:39:00+00:00--2023-05-23T12:39:00+00:00",
      granularity: "Hour"
    },
  });

const response = [
    {
        "interval": "2023-05-01T12:00Z--2023-05-01T13:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 32.47,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 64.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T13:00Z--2023-05-01T14:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 24.74,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 247.35,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T14:00Z--2023-05-01T15:00Z",
        "unitCount": 10,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 21.87,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 218.71,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T15:00Z--2023-05-01T16:00Z",
        "unitCount": 11,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 22.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 252.73,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T16:00Z--2023-05-01T17:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 25.72,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 308.64,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T17:00Z--2023-05-01T18:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 20.05,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 120.32,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T18:00Z--2023-05-01T19:00Z",
        "unitCount": 12,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 27.04,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 324.47,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T19:00Z--2023-05-01T20:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 17.75,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 141.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T20:00Z--2023-05-01T21:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 28.19,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 169.13,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T21:00Z--2023-05-01T22:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 27.1,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 135.5,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T22:00Z--2023-05-01T23:00Z",
        "unitCount": 9,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 35.43,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 318.89,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-01T23:00Z--2023-05-02T00:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T00:00Z--2023-05-02T01:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 12.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 12.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T01:00Z--2023-05-02T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T02:00Z--2023-05-02T03:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T03:00Z--2023-05-02T04:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 28.63,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 85.88,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T04:00Z--2023-05-02T05:00Z",
        "unitCount": 5,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 29.76,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 148.8,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T05:00Z--2023-05-02T06:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 23.95,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 191.63,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T06:00Z--2023-05-02T07:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 20.53,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 184.78,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T07:00Z--2023-05-02T08:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 22.39,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 223.91,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T08:00Z--2023-05-02T09:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 22.7,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 158.92,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T09:00Z--2023-05-02T10:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 21.9,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 219.04,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T10:00Z--2023-05-02T11:00Z",
        "unitCount": 13,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 16.59,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 215.62,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T11:00Z--2023-05-02T12:00Z",
        "unitCount": 11,
        "orderItemCount": 11,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 16.62,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 182.78,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T12:00Z--2023-05-02T13:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 26.3,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 262.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T13:00Z--2023-05-02T14:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 19.22,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 76.86,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T14:00Z--2023-05-02T15:00Z",
        "unitCount": 9,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 22.6,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 203.37,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T15:00Z--2023-05-02T16:00Z",
        "unitCount": 13,
        "orderItemCount": 13,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 25.1,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 326.34,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T16:00Z--2023-05-02T17:00Z",
        "unitCount": 12,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 21.48,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 257.71,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T17:00Z--2023-05-02T18:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 19.01,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 171.13,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T18:00Z--2023-05-02T19:00Z",
        "unitCount": 21,
        "orderItemCount": 20,
        "orderCount": 20,
        "averageUnitPrice": {
            "amount": 23.53,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 494.16,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T19:00Z--2023-05-02T20:00Z",
        "unitCount": 9,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 24.73,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 222.6,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T20:00Z--2023-05-02T21:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 27.4,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 328.82,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T21:00Z--2023-05-02T22:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 16.55,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 99.31,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T22:00Z--2023-05-02T23:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 19.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 19.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-02T23:00Z--2023-05-03T00:00Z",
        "unitCount": 8,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 25.36,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 202.91,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T00:00Z--2023-05-03T01:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 41.96,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 41.96,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T01:00Z--2023-05-03T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T02:00Z--2023-05-03T03:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T03:00Z--2023-05-03T04:00Z",
        "unitCount": 2,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 24.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 49.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T04:00Z--2023-05-03T05:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 28.62,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 143.1,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T05:00Z--2023-05-03T06:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 12.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 12.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T06:00Z--2023-05-03T07:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 18.46,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 147.67,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T07:00Z--2023-05-03T08:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 20.64,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 247.66,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T08:00Z--2023-05-03T09:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 22.34,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 201.1,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T09:00Z--2023-05-03T10:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 20.79,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 83.15,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T10:00Z--2023-05-03T11:00Z",
        "unitCount": 10,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 18.26,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 182.56,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T11:00Z--2023-05-03T12:00Z",
        "unitCount": 8,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 20.22,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 161.74,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T12:00Z--2023-05-03T13:00Z",
        "unitCount": 9,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 24.35,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 219.15,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T13:00Z--2023-05-03T14:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 19.53,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 117.16,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T14:00Z--2023-05-03T15:00Z",
        "unitCount": 7,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 23.66,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 165.63,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T15:00Z--2023-05-03T16:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 25.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 152.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T16:00Z--2023-05-03T17:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 21.29,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 255.46,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T17:00Z--2023-05-03T18:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 25.85,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 155.11,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T18:00Z--2023-05-03T19:00Z",
        "unitCount": 12,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 21.53,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 258.37,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T19:00Z--2023-05-03T20:00Z",
        "unitCount": 22,
        "orderItemCount": 20,
        "orderCount": 15,
        "averageUnitPrice": {
            "amount": 24.4,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 536.84,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T20:00Z--2023-05-03T21:00Z",
        "unitCount": 15,
        "orderItemCount": 12,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 23.6,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 353.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T21:00Z--2023-05-03T22:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 15.51,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 108.58,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T22:00Z--2023-05-03T23:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 14.2,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 28.39,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-03T23:00Z--2023-05-04T00:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T00:00Z--2023-05-04T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T01:00Z--2023-05-04T02:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 25.94,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 51.88,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T02:00Z--2023-05-04T03:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 21.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 42.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T03:00Z--2023-05-04T04:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 24.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 24.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T04:00Z--2023-05-04T05:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 26.64,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 79.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T05:00Z--2023-05-04T06:00Z",
        "unitCount": 11,
        "orderItemCount": 7,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 25.27,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 277.95,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T06:00Z--2023-05-04T07:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 26.72,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 240.52,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T07:00Z--2023-05-04T08:00Z",
        "unitCount": 8,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 31.6,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 252.8,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T08:00Z--2023-05-04T09:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 19.19,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 76.76,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T09:00Z--2023-05-04T10:00Z",
        "unitCount": 19,
        "orderItemCount": 19,
        "orderCount": 19,
        "averageUnitPrice": {
            "amount": 24.31,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 461.95,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T10:00Z--2023-05-04T11:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 33.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 67.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T11:00Z--2023-05-04T12:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 27.63,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 165.75,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T12:00Z--2023-05-04T13:00Z",
        "unitCount": 14,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 24.8,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 347.26,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T13:00Z--2023-05-04T14:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 21.38,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 171.07,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T14:00Z--2023-05-04T15:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 10.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 21.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T15:00Z--2023-05-04T16:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 26.18,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 130.89,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T16:00Z--2023-05-04T17:00Z",
        "unitCount": 13,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 24.63,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 320.14,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T17:00Z--2023-05-04T18:00Z",
        "unitCount": 11,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 26.8,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 294.78,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T18:00Z--2023-05-04T19:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 22.13,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 132.77,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T19:00Z--2023-05-04T20:00Z",
        "unitCount": 17,
        "orderItemCount": 15,
        "orderCount": 15,
        "averageUnitPrice": {
            "amount": 22.87,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 388.81,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T20:00Z--2023-05-04T21:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 19.07,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 152.53,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T21:00Z--2023-05-04T22:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 26.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 134.89,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T22:00Z--2023-05-04T23:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 27.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 111.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-04T23:00Z--2023-05-05T00:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 29.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 29.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T00:00Z--2023-05-05T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T01:00Z--2023-05-05T02:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 21.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 21.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T02:00Z--2023-05-05T03:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 29.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 29.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T03:00Z--2023-05-05T04:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 24.95,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 124.76,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T04:00Z--2023-05-05T05:00Z",
        "unitCount": 9,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 27.23,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 245.04,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T05:00Z--2023-05-05T06:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 23.93,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 119.66,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T06:00Z--2023-05-05T07:00Z",
        "unitCount": 9,
        "orderItemCount": 8,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 22.8,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 205.18,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T07:00Z--2023-05-05T08:00Z",
        "unitCount": 14,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 19.91,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 278.76,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T08:00Z--2023-05-05T09:00Z",
        "unitCount": 15,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 24.37,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 365.48,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T09:00Z--2023-05-05T10:00Z",
        "unitCount": 10,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 22.71,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 227.09,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T10:00Z--2023-05-05T11:00Z",
        "unitCount": 12,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 26.55,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 318.64,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T11:00Z--2023-05-05T12:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 23.92,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 119.59,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T12:00Z--2023-05-05T13:00Z",
        "unitCount": 11,
        "orderItemCount": 11,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 27.28,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 300.13,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T13:00Z--2023-05-05T14:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 26.91,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 215.28,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T14:00Z--2023-05-05T15:00Z",
        "unitCount": 6,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 16.58,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 99.47,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T15:00Z--2023-05-05T16:00Z",
        "unitCount": 18,
        "orderItemCount": 17,
        "orderCount": 15,
        "averageUnitPrice": {
            "amount": 20.91,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 376.39,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T16:00Z--2023-05-05T17:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 22.09,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 198.81,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T17:00Z--2023-05-05T18:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 20.42,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 142.95,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T18:00Z--2023-05-05T19:00Z",
        "unitCount": 13,
        "orderItemCount": 13,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 18,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 233.96,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T19:00Z--2023-05-05T20:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 25.89,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 155.31,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T20:00Z--2023-05-05T21:00Z",
        "unitCount": 6,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 26.12,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 156.7,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T21:00Z--2023-05-05T22:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 21.14,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 84.57,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T22:00Z--2023-05-05T23:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 29.15,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 58.29,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-05T23:00Z--2023-05-06T00:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 17.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 17.49,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T00:00Z--2023-05-06T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T01:00Z--2023-05-06T02:00Z",
        "unitCount": 4,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 21.62,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 86.46,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T02:00Z--2023-05-06T03:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 29.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 29.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T03:00Z--2023-05-06T04:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 17.64,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 17.64,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T04:00Z--2023-05-06T05:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T05:00Z--2023-05-06T06:00Z",
        "unitCount": 2,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 16.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 32.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T06:00Z--2023-05-06T07:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 19.21,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 153.65,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T07:00Z--2023-05-06T08:00Z",
        "unitCount": 6,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 23.26,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 139.54,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T08:00Z--2023-05-06T09:00Z",
        "unitCount": 9,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 22.57,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 203.11,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T09:00Z--2023-05-06T10:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 22.96,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 183.67,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T10:00Z--2023-05-06T11:00Z",
        "unitCount": 15,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 27.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 419.88,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T11:00Z--2023-05-06T12:00Z",
        "unitCount": 6,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 24.23,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 145.4,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T12:00Z--2023-05-06T13:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 19.85,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 158.8,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T13:00Z--2023-05-06T14:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 20.88,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 83.5,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T14:00Z--2023-05-06T15:00Z",
        "unitCount": 7,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 20.46,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 143.2,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T15:00Z--2023-05-06T16:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 19.87,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 198.72,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T16:00Z--2023-05-06T17:00Z",
        "unitCount": 11,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 23.32,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 256.47,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T17:00Z--2023-05-06T18:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 17.04,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 51.12,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T18:00Z--2023-05-06T19:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 18.83,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 188.26,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T19:00Z--2023-05-06T20:00Z",
        "unitCount": 15,
        "orderItemCount": 14,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 24.36,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 365.43,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T20:00Z--2023-05-06T21:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 22.36,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 223.57,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T21:00Z--2023-05-06T22:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 16.28,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 48.85,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T22:00Z--2023-05-06T23:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-06T23:00Z--2023-05-07T00:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 15.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 15.49,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T00:00Z--2023-05-07T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T01:00Z--2023-05-07T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T02:00Z--2023-05-07T03:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T03:00Z--2023-05-07T04:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T04:00Z--2023-05-07T05:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 6.84,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 6.84,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T05:00Z--2023-05-07T06:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 20.44,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 102.18,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T06:00Z--2023-05-07T07:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 26.04,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 104.16,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T07:00Z--2023-05-07T08:00Z",
        "unitCount": 12,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 23.48,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 281.74,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T08:00Z--2023-05-07T09:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 20.5,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 163.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T09:00Z--2023-05-07T10:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 27.53,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 275.28,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T10:00Z--2023-05-07T11:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 25.77,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 231.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T11:00Z--2023-05-07T12:00Z",
        "unitCount": 15,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 19.38,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 290.75,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T12:00Z--2023-05-07T13:00Z",
        "unitCount": 13,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 19.22,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 249.87,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T13:00Z--2023-05-07T14:00Z",
        "unitCount": 19,
        "orderItemCount": 15,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 23.24,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 441.52,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T14:00Z--2023-05-07T15:00Z",
        "unitCount": 20,
        "orderItemCount": 20,
        "orderCount": 19,
        "averageUnitPrice": {
            "amount": 23.91,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 478.18,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T15:00Z--2023-05-07T16:00Z",
        "unitCount": 18,
        "orderItemCount": 17,
        "orderCount": 15,
        "averageUnitPrice": {
            "amount": 24.33,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 437.9,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T16:00Z--2023-05-07T17:00Z",
        "unitCount": 14,
        "orderItemCount": 13,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 21.54,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 301.52,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T17:00Z--2023-05-07T18:00Z",
        "unitCount": 18,
        "orderItemCount": 17,
        "orderCount": 16,
        "averageUnitPrice": {
            "amount": 24.76,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 445.72,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T18:00Z--2023-05-07T19:00Z",
        "unitCount": 11,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 27.19,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 299.08,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T19:00Z--2023-05-07T20:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 23.14,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 185.12,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T20:00Z--2023-05-07T21:00Z",
        "unitCount": 9,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 20.52,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 184.68,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T21:00Z--2023-05-07T22:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 22.02,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 110.08,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T22:00Z--2023-05-07T23:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 25.07,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 100.29,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-07T23:00Z--2023-05-08T00:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 22.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 22.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T00:00Z--2023-05-08T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T01:00Z--2023-05-08T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T02:00Z--2023-05-08T03:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 22.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 22.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T03:00Z--2023-05-08T04:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 24.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 24.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T04:00Z--2023-05-08T05:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 23.78,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 71.35,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T05:00Z--2023-05-08T06:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 25.26,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 126.31,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T06:00Z--2023-05-08T07:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 22.57,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 67.7,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T07:00Z--2023-05-08T08:00Z",
        "unitCount": 13,
        "orderItemCount": 12,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 23.8,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 309.43,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T08:00Z--2023-05-08T09:00Z",
        "unitCount": 13,
        "orderItemCount": 13,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 26.13,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 339.63,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T09:00Z--2023-05-08T10:00Z",
        "unitCount": 10,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 17.8,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 178.03,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T10:00Z--2023-05-08T11:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 25.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 233.87,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T11:00Z--2023-05-08T12:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 21.09,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 189.78,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T12:00Z--2023-05-08T13:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 17.93,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 89.63,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T13:00Z--2023-05-08T14:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 22.44,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 89.77,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T14:00Z--2023-05-08T15:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 24.17,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 193.36,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T15:00Z--2023-05-08T16:00Z",
        "unitCount": 9,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 22.26,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 200.38,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T16:00Z--2023-05-08T17:00Z",
        "unitCount": 21,
        "orderItemCount": 16,
        "orderCount": 16,
        "averageUnitPrice": {
            "amount": 22.53,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 473.07,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T17:00Z--2023-05-08T18:00Z",
        "unitCount": 17,
        "orderItemCount": 16,
        "orderCount": 15,
        "averageUnitPrice": {
            "amount": 21.44,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 364.47,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T18:00Z--2023-05-08T19:00Z",
        "unitCount": 24,
        "orderItemCount": 20,
        "orderCount": 19,
        "averageUnitPrice": {
            "amount": 25.85,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 620.48,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T19:00Z--2023-05-08T20:00Z",
        "unitCount": 15,
        "orderItemCount": 13,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 22.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 344.73,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T20:00Z--2023-05-08T21:00Z",
        "unitCount": 13,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 22.79,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 296.29,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T21:00Z--2023-05-08T22:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 26.22,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 262.21,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T22:00Z--2023-05-08T23:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 23.28,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 46.55,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-08T23:00Z--2023-05-09T00:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 26.74,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 80.22,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T00:00Z--2023-05-09T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T01:00Z--2023-05-09T02:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 17.15,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 17.15,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T02:00Z--2023-05-09T03:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T03:00Z--2023-05-09T04:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T04:00Z--2023-05-09T05:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 23.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 47.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T05:00Z--2023-05-09T06:00Z",
        "unitCount": 14,
        "orderItemCount": 13,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 27.23,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 381.24,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T06:00Z--2023-05-09T07:00Z",
        "unitCount": 9,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 25.12,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 226.12,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T07:00Z--2023-05-09T08:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 26.27,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 262.68,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T08:00Z--2023-05-09T09:00Z",
        "unitCount": 21,
        "orderItemCount": 10,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 27.2,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 571.12,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T09:00Z--2023-05-09T10:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 22.58,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 225.81,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T10:00Z--2023-05-09T11:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 23.86,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 214.75,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T11:00Z--2023-05-09T12:00Z",
        "unitCount": 15,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 24.11,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 361.59,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T12:00Z--2023-05-09T13:00Z",
        "unitCount": 13,
        "orderItemCount": 13,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 20.03,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 260.38,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T13:00Z--2023-05-09T14:00Z",
        "unitCount": 13,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 25.64,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 333.26,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T14:00Z--2023-05-09T15:00Z",
        "unitCount": 11,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 19.36,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 212.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T15:00Z--2023-05-09T16:00Z",
        "unitCount": 19,
        "orderItemCount": 15,
        "orderCount": 15,
        "averageUnitPrice": {
            "amount": 26.58,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 505,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T16:00Z--2023-05-09T17:00Z",
        "unitCount": 12,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 24.38,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 292.56,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T17:00Z--2023-05-09T18:00Z",
        "unitCount": 20,
        "orderItemCount": 17,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 21.14,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 422.71,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T18:00Z--2023-05-09T19:00Z",
        "unitCount": 19,
        "orderItemCount": 19,
        "orderCount": 19,
        "averageUnitPrice": {
            "amount": 26.74,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 508,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T19:00Z--2023-05-09T20:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 19,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 151.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T20:00Z--2023-05-09T21:00Z",
        "unitCount": 14,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 26.39,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 369.49,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T21:00Z--2023-05-09T22:00Z",
        "unitCount": 7,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 26.85,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 187.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T22:00Z--2023-05-09T23:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 19.18,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 38.36,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-09T23:00Z--2023-05-10T00:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T00:00Z--2023-05-10T01:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 29.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 29.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T01:00Z--2023-05-10T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T02:00Z--2023-05-10T03:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 31.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 31.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T03:00Z--2023-05-10T04:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 18.14,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 18.14,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T04:00Z--2023-05-10T05:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 21.08,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 42.16,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T05:00Z--2023-05-10T06:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 21,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 104.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T06:00Z--2023-05-10T07:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 25.02,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 200.13,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T07:00Z--2023-05-10T08:00Z",
        "unitCount": 13,
        "orderItemCount": 13,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 25.58,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 332.48,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T08:00Z--2023-05-10T09:00Z",
        "unitCount": 9,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 34.17,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 307.52,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T09:00Z--2023-05-10T10:00Z",
        "unitCount": 11,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 20.48,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 225.26,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T10:00Z--2023-05-10T11:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 31.4,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 313.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T11:00Z--2023-05-10T12:00Z",
        "unitCount": 16,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 22.85,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 365.64,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T12:00Z--2023-05-10T13:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 26.03,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 312.37,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T13:00Z--2023-05-10T14:00Z",
        "unitCount": 17,
        "orderItemCount": 16,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 20.4,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 346.81,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T14:00Z--2023-05-10T15:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 27.77,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 138.83,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T15:00Z--2023-05-10T16:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 27.36,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 273.58,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T16:00Z--2023-05-10T17:00Z",
        "unitCount": 12,
        "orderItemCount": 12,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 22.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 275.67,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T17:00Z--2023-05-10T18:00Z",
        "unitCount": 15,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 27.31,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 409.65,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T18:00Z--2023-05-10T19:00Z",
        "unitCount": 22,
        "orderItemCount": 20,
        "orderCount": 20,
        "averageUnitPrice": {
            "amount": 25.06,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 551.36,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T19:00Z--2023-05-10T20:00Z",
        "unitCount": 19,
        "orderItemCount": 17,
        "orderCount": 15,
        "averageUnitPrice": {
            "amount": 25.51,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 484.69,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T20:00Z--2023-05-10T21:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 25.42,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 203.36,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T21:00Z--2023-05-10T22:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 23.26,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 279.08,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T22:00Z--2023-05-10T23:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 21.69,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 86.74,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-10T23:00Z--2023-05-11T00:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T00:00Z--2023-05-11T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T01:00Z--2023-05-11T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T02:00Z--2023-05-11T03:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 15.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 15.49,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T03:00Z--2023-05-11T04:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 21.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 21.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T04:00Z--2023-05-11T05:00Z",
        "unitCount": 9,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 28.29,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 254.6,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T05:00Z--2023-05-11T06:00Z",
        "unitCount": 12,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 23.39,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 280.62,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T06:00Z--2023-05-11T07:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 21.85,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 131.1,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T07:00Z--2023-05-11T08:00Z",
        "unitCount": 13,
        "orderItemCount": 13,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 21.7,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 282.05,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T08:00Z--2023-05-11T09:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 20.79,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 103.95,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T09:00Z--2023-05-11T10:00Z",
        "unitCount": 17,
        "orderItemCount": 13,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 29.35,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 499.03,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T10:00Z--2023-05-11T11:00Z",
        "unitCount": 12,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 23.28,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 279.32,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T11:00Z--2023-05-11T12:00Z",
        "unitCount": 14,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 24.77,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 346.75,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T12:00Z--2023-05-11T13:00Z",
        "unitCount": 7,
        "orderItemCount": 6,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 28.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 199.46,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T13:00Z--2023-05-11T14:00Z",
        "unitCount": 16,
        "orderItemCount": 13,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 19,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 304.04,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T14:00Z--2023-05-11T15:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 26.12,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 208.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T15:00Z--2023-05-11T16:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 19.55,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 195.51,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T16:00Z--2023-05-11T17:00Z",
        "unitCount": 14,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 26.68,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 373.45,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T17:00Z--2023-05-11T18:00Z",
        "unitCount": 11,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 21.58,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 237.35,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T18:00Z--2023-05-11T19:00Z",
        "unitCount": 14,
        "orderItemCount": 13,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 25.42,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 355.83,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T19:00Z--2023-05-11T20:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 23.13,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 208.15,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T20:00Z--2023-05-11T21:00Z",
        "unitCount": 11,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 25.4,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 279.42,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T21:00Z--2023-05-11T22:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 27.68,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 221.42,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T22:00Z--2023-05-11T23:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 25.41,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 50.82,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-11T23:00Z--2023-05-12T00:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 29.09,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 58.17,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T00:00Z--2023-05-12T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T01:00Z--2023-05-12T02:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 29.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 29.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T02:00Z--2023-05-12T03:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 15.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 30.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T03:00Z--2023-05-12T04:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 26.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 26.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T04:00Z--2023-05-12T05:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 28.04,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 224.32,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T05:00Z--2023-05-12T06:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 23.05,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 69.16,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T06:00Z--2023-05-12T07:00Z",
        "unitCount": 4,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 32.84,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 131.34,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T07:00Z--2023-05-12T08:00Z",
        "unitCount": 11,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 27.58,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 303.4,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T08:00Z--2023-05-12T09:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 21.27,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 85.06,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T09:00Z--2023-05-12T10:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 20.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 188.79,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T10:00Z--2023-05-12T11:00Z",
        "unitCount": 12,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 18.7,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 224.34,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T11:00Z--2023-05-12T12:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 20.34,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 203.37,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T12:00Z--2023-05-12T13:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 27.73,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 110.92,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T13:00Z--2023-05-12T14:00Z",
        "unitCount": 7,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 22.27,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 155.87,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T14:00Z--2023-05-12T15:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 25,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 249.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T15:00Z--2023-05-12T16:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 22.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 179.94,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T16:00Z--2023-05-12T17:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 22.18,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 133.08,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T17:00Z--2023-05-12T18:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 20.6,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 123.62,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T18:00Z--2023-05-12T19:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 29.22,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 233.78,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T19:00Z--2023-05-12T20:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 29.06,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 87.17,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T20:00Z--2023-05-12T21:00Z",
        "unitCount": 15,
        "orderItemCount": 13,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 22.85,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 342.73,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T21:00Z--2023-05-12T22:00Z",
        "unitCount": 7,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 18.81,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 131.66,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T22:00Z--2023-05-12T23:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 24.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 99.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-12T23:00Z--2023-05-13T00:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 14.11,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 14.11,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T00:00Z--2023-05-13T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T01:00Z--2023-05-13T02:00Z",
        "unitCount": 2,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 32.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 64.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T02:00Z--2023-05-13T03:00Z",
        "unitCount": 2,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 15.37,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 30.74,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T03:00Z--2023-05-13T04:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 27.96,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 55.92,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T04:00Z--2023-05-13T05:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 22.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 45.96,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T05:00Z--2023-05-13T06:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 26.51,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 159.03,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T06:00Z--2023-05-13T07:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 25.93,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 311.14,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T07:00Z--2023-05-13T08:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 27.73,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 166.39,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T08:00Z--2023-05-13T09:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 30.26,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 121.05,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T09:00Z--2023-05-13T10:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 22.84,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 182.72,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T10:00Z--2023-05-13T11:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 23.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 143.87,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T11:00Z--2023-05-13T12:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 25.24,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 201.89,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T12:00Z--2023-05-13T13:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 30.65,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 91.94,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T13:00Z--2023-05-13T14:00Z",
        "unitCount": 14,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 25.81,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 361.31,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T14:00Z--2023-05-13T15:00Z",
        "unitCount": 13,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 28.52,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 370.79,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T15:00Z--2023-05-13T16:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 17.31,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 121.16,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T16:00Z--2023-05-13T17:00Z",
        "unitCount": 8,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 18.3,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 146.43,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T17:00Z--2023-05-13T18:00Z",
        "unitCount": 11,
        "orderItemCount": 9,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 17.31,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 190.36,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T18:00Z--2023-05-13T19:00Z",
        "unitCount": 9,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 19.37,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 174.35,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T19:00Z--2023-05-13T20:00Z",
        "unitCount": 10,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 19.03,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 190.27,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T20:00Z--2023-05-13T21:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 23.71,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 165.96,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T21:00Z--2023-05-13T22:00Z",
        "unitCount": 3,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 19.32,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 57.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T22:00Z--2023-05-13T23:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 29.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 58.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-13T23:00Z--2023-05-14T00:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 27.82,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 83.45,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T00:00Z--2023-05-14T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T01:00Z--2023-05-14T02:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 19.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 19.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T02:00Z--2023-05-14T03:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T03:00Z--2023-05-14T04:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T04:00Z--2023-05-14T05:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T05:00Z--2023-05-14T06:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 31.91,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 63.81,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T06:00Z--2023-05-14T07:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 29.13,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 233,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T07:00Z--2023-05-14T08:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 23.85,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 238.48,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T08:00Z--2023-05-14T09:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 20.1,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 160.78,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T09:00Z--2023-05-14T10:00Z",
        "unitCount": 12,
        "orderItemCount": 10,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 27.06,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 324.74,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T10:00Z--2023-05-14T11:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 17.24,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 103.43,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T11:00Z--2023-05-14T12:00Z",
        "unitCount": 10,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 18.45,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 184.53,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T12:00Z--2023-05-14T13:00Z",
        "unitCount": 14,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 22.23,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 311.27,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T13:00Z--2023-05-14T14:00Z",
        "unitCount": 17,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 27.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 475.71,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T14:00Z--2023-05-14T15:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 21.06,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 147.41,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T15:00Z--2023-05-14T16:00Z",
        "unitCount": 12,
        "orderItemCount": 10,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 24.82,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 297.8,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T16:00Z--2023-05-14T17:00Z",
        "unitCount": 14,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 23.11,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 323.49,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T17:00Z--2023-05-14T18:00Z",
        "unitCount": 17,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 18.6,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 316.2,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T18:00Z--2023-05-14T19:00Z",
        "unitCount": 20,
        "orderItemCount": 18,
        "orderCount": 18,
        "averageUnitPrice": {
            "amount": 20.66,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 413.28,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T19:00Z--2023-05-14T20:00Z",
        "unitCount": 16,
        "orderItemCount": 13,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 22.73,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 363.66,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T20:00Z--2023-05-14T21:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 26.39,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 237.49,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T21:00Z--2023-05-14T22:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 27.58,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 165.5,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T22:00Z--2023-05-14T23:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 37.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 37.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-14T23:00Z--2023-05-15T00:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 25.62,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 128.11,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T00:00Z--2023-05-15T01:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 17.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 17.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T01:00Z--2023-05-15T02:00Z",
        "unitCount": 3,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 14.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 43.47,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T02:00Z--2023-05-15T03:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 17.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 35.96,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T03:00Z--2023-05-15T04:00Z",
        "unitCount": 4,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 30.42,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 121.69,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T04:00Z--2023-05-15T05:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 32.53,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 130.13,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T05:00Z--2023-05-15T06:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 31.31,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 187.83,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T06:00Z--2023-05-15T07:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 20.95,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 62.85,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T07:00Z--2023-05-15T08:00Z",
        "unitCount": 22,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 18.53,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 407.59,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T08:00Z--2023-05-15T09:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 25.03,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 200.2,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T09:00Z--2023-05-15T10:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 18.76,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 150.07,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T10:00Z--2023-05-15T11:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 23.05,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 184.38,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T11:00Z--2023-05-15T12:00Z",
        "unitCount": 16,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 15.96,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 255.32,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T12:00Z--2023-05-15T13:00Z",
        "unitCount": 13,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 18,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 233.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T13:00Z--2023-05-15T14:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 26.26,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 105.03,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T14:00Z--2023-05-15T15:00Z",
        "unitCount": 13,
        "orderItemCount": 12,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 23.23,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 302.02,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T15:00Z--2023-05-15T16:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 27,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 324.03,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T16:00Z--2023-05-15T17:00Z",
        "unitCount": 16,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 25.54,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 408.6,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T17:00Z--2023-05-15T18:00Z",
        "unitCount": 15,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 20.02,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 300.33,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T18:00Z--2023-05-15T19:00Z",
        "unitCount": 19,
        "orderItemCount": 19,
        "orderCount": 18,
        "averageUnitPrice": {
            "amount": 24.12,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 458.2,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T19:00Z--2023-05-15T20:00Z",
        "unitCount": 16,
        "orderItemCount": 13,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 21.8,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 348.73,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T20:00Z--2023-05-15T21:00Z",
        "unitCount": 11,
        "orderItemCount": 11,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 25.56,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 281.2,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T21:00Z--2023-05-15T22:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 25.18,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 125.9,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T22:00Z--2023-05-15T23:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-15T23:00Z--2023-05-16T00:00Z",
        "unitCount": 3,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 24.55,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 73.65,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T00:00Z--2023-05-16T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T01:00Z--2023-05-16T02:00Z",
        "unitCount": 2,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 12.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 25.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T02:00Z--2023-05-16T03:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 27.96,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 27.96,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T03:00Z--2023-05-16T04:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 17.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 17.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T04:00Z--2023-05-16T05:00Z",
        "unitCount": 4,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 25.2,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 100.78,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T05:00Z--2023-05-16T06:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 24.71,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 197.64,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T06:00Z--2023-05-16T07:00Z",
        "unitCount": 8,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 30.41,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 243.27,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T07:00Z--2023-05-16T08:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 25.27,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 176.86,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T08:00Z--2023-05-16T09:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 20.91,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 125.44,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T09:00Z--2023-05-16T10:00Z",
        "unitCount": 10,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 19.51,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 195.09,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T10:00Z--2023-05-16T11:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 22.64,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 135.81,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T11:00Z--2023-05-16T12:00Z",
        "unitCount": 7,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 27.83,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 194.82,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T12:00Z--2023-05-16T13:00Z",
        "unitCount": 21,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 25.6,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 537.57,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T13:00Z--2023-05-16T14:00Z",
        "unitCount": 16,
        "orderItemCount": 14,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 23.53,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 376.47,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T14:00Z--2023-05-16T15:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 24.82,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 124.12,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T15:00Z--2023-05-16T16:00Z",
        "unitCount": 11,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 23.29,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 256.14,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T16:00Z--2023-05-16T17:00Z",
        "unitCount": 12,
        "orderItemCount": 12,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 31.83,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 381.9,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T17:00Z--2023-05-16T18:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 23.24,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 162.67,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T18:00Z--2023-05-16T19:00Z",
        "unitCount": 15,
        "orderItemCount": 15,
        "orderCount": 15,
        "averageUnitPrice": {
            "amount": 22.84,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 342.66,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T19:00Z--2023-05-16T20:00Z",
        "unitCount": 20,
        "orderItemCount": 13,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 22.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 449.82,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T20:00Z--2023-05-16T21:00Z",
        "unitCount": 6,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 21.65,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 129.9,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T21:00Z--2023-05-16T22:00Z",
        "unitCount": 6,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 20.14,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 120.85,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T22:00Z--2023-05-16T23:00Z",
        "unitCount": 3,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 40.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 122.94,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-16T23:00Z--2023-05-17T00:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 30.48,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 121.91,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T00:00Z--2023-05-17T01:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 24.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 24.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T01:00Z--2023-05-17T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T02:00Z--2023-05-17T03:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T03:00Z--2023-05-17T04:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 22.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 22.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T04:00Z--2023-05-17T05:00Z",
        "unitCount": 5,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 28.03,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 140.13,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T05:00Z--2023-05-17T06:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 24.14,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 168.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T06:00Z--2023-05-17T07:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 21.11,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 168.85,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T07:00Z--2023-05-17T08:00Z",
        "unitCount": 10,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 28.47,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 284.71,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T08:00Z--2023-05-17T09:00Z",
        "unitCount": 10,
        "orderItemCount": 7,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 19.29,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 192.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T09:00Z--2023-05-17T10:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 20.75,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 165.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T10:00Z--2023-05-17T11:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 16.01,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 80.04,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T11:00Z--2023-05-17T12:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 19.66,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 117.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T12:00Z--2023-05-17T13:00Z",
        "unitCount": 6,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 37.41,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 224.44,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T13:00Z--2023-05-17T14:00Z",
        "unitCount": 8,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 27.07,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 216.59,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T14:00Z--2023-05-17T15:00Z",
        "unitCount": 15,
        "orderItemCount": 6,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 15.46,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 231.94,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T15:00Z--2023-05-17T16:00Z",
        "unitCount": 16,
        "orderItemCount": 11,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 23.4,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 374.37,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T16:00Z--2023-05-17T17:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 19.08,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 152.65,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T17:00Z--2023-05-17T18:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 21.26,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 85.04,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T18:00Z--2023-05-17T19:00Z",
        "unitCount": 6,
        "orderItemCount": 5,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 21.71,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 130.26,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T19:00Z--2023-05-17T20:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 26.37,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 237.32,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T20:00Z--2023-05-17T21:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 31.1,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 248.77,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T21:00Z--2023-05-17T22:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 19.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 39.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T22:00Z--2023-05-17T23:00Z",
        "unitCount": 3,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 25.94,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 77.82,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-17T23:00Z--2023-05-18T00:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 25.47,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 50.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T00:00Z--2023-05-18T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T01:00Z--2023-05-18T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T02:00Z--2023-05-18T03:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T03:00Z--2023-05-18T04:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T04:00Z--2023-05-18T05:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 29.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 29.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T05:00Z--2023-05-18T06:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 22.31,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 66.93,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T06:00Z--2023-05-18T07:00Z",
        "unitCount": 6,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 26.21,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 157.26,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T07:00Z--2023-05-18T08:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 15.09,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 45.28,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T08:00Z--2023-05-18T09:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 22.9,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 91.6,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T09:00Z--2023-05-18T10:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 20.32,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 60.95,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T10:00Z--2023-05-18T11:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 18.02,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 54.05,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T11:00Z--2023-05-18T12:00Z",
        "unitCount": 7,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 19.82,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 138.74,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T12:00Z--2023-05-18T13:00Z",
        "unitCount": 11,
        "orderItemCount": 11,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 20.95,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 230.44,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T13:00Z--2023-05-18T14:00Z",
        "unitCount": 9,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 20.95,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 188.51,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T14:00Z--2023-05-18T15:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 24.31,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 170.18,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T15:00Z--2023-05-18T16:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 27.29,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 218.34,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T16:00Z--2023-05-18T17:00Z",
        "unitCount": 8,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 17.86,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 142.87,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T17:00Z--2023-05-18T18:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 27.59,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 137.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T18:00Z--2023-05-18T19:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 31.23,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 124.92,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T19:00Z--2023-05-18T20:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 22.46,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 224.64,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T20:00Z--2023-05-18T21:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 33.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 33.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T21:00Z--2023-05-18T22:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 22.19,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 133.13,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T22:00Z--2023-05-18T23:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 24.33,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 72.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-18T23:00Z--2023-05-19T00:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 23.02,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 46.03,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T00:00Z--2023-05-19T01:00Z",
        "unitCount": 2,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 10.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 21.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T01:00Z--2023-05-19T02:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 24.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 24.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T02:00Z--2023-05-19T03:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T03:00Z--2023-05-19T04:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 24.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 24.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T04:00Z--2023-05-19T05:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T05:00Z--2023-05-19T06:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 26.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 26.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T06:00Z--2023-05-19T07:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 20.53,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 205.31,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T07:00Z--2023-05-19T08:00Z",
        "unitCount": 12,
        "orderItemCount": 9,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 29.12,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 349.47,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T08:00Z--2023-05-19T09:00Z",
        "unitCount": 7,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 22.02,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 154.17,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T09:00Z--2023-05-19T10:00Z",
        "unitCount": 4,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 32.6,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 130.38,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T10:00Z--2023-05-19T11:00Z",
        "unitCount": 10,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 27.77,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 277.67,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T11:00Z--2023-05-19T12:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 25.55,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 178.83,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T12:00Z--2023-05-19T13:00Z",
        "unitCount": 10,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 20.21,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 202.12,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T13:00Z--2023-05-19T14:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 22.31,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 111.55,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T14:00Z--2023-05-19T15:00Z",
        "unitCount": 14,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 26.15,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 366.11,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T15:00Z--2023-05-19T16:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 25.74,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 308.83,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T16:00Z--2023-05-19T17:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 22.25,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 178.03,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T17:00Z--2023-05-19T18:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 20.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 61.47,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T18:00Z--2023-05-19T19:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 28.24,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 338.92,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T19:00Z--2023-05-19T20:00Z",
        "unitCount": 7,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 26.7,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 186.9,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T20:00Z--2023-05-19T21:00Z",
        "unitCount": 8,
        "orderItemCount": 6,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 28.13,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 225.06,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T21:00Z--2023-05-19T22:00Z",
        "unitCount": 6,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 31.86,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 191.13,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T22:00Z--2023-05-19T23:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 17.95,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 53.85,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-19T23:00Z--2023-05-20T00:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 39.32,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 39.32,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T00:00Z--2023-05-20T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T01:00Z--2023-05-20T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T02:00Z--2023-05-20T03:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 29.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 29.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T03:00Z--2023-05-20T04:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T04:00Z--2023-05-20T05:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T05:00Z--2023-05-20T06:00Z",
        "unitCount": 6,
        "orderItemCount": 4,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 38.95,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 233.68,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T06:00Z--2023-05-20T07:00Z",
        "unitCount": 8,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 29.17,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 233.32,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T07:00Z--2023-05-20T08:00Z",
        "unitCount": 7,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 28.19,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 197.34,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T08:00Z--2023-05-20T09:00Z",
        "unitCount": 13,
        "orderItemCount": 11,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 28.78,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 374.2,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T09:00Z--2023-05-20T10:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 27.98,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 139.88,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T10:00Z--2023-05-20T11:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 20.6,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 164.78,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T11:00Z--2023-05-20T12:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 21.51,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 107.56,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T12:00Z--2023-05-20T13:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 18.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 56.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T13:00Z--2023-05-20T14:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 26.74,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 53.47,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T14:00Z--2023-05-20T15:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 21.48,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 64.45,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T15:00Z--2023-05-20T16:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 21.84,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 218.38,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T16:00Z--2023-05-20T17:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 22.27,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 133.6,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T17:00Z--2023-05-20T18:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 27.22,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 27.22,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T18:00Z--2023-05-20T19:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 23.47,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 93.86,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T19:00Z--2023-05-20T20:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 22.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 275.89,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T20:00Z--2023-05-20T21:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 23.02,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 46.04,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T21:00Z--2023-05-20T22:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 23.71,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 213.35,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T22:00Z--2023-05-20T23:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 10.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 10.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-20T23:00Z--2023-05-21T00:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 18.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 37.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T00:00Z--2023-05-21T01:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 13.43,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 13.43,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T01:00Z--2023-05-21T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T02:00Z--2023-05-21T03:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T03:00Z--2023-05-21T04:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T04:00Z--2023-05-21T05:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T05:00Z--2023-05-21T06:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 6.89,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 6.89,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T06:00Z--2023-05-21T07:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 5,
        "averageUnitPrice": {
            "amount": 23.74,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 118.68,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T07:00Z--2023-05-21T08:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 24.88,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 149.28,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T08:00Z--2023-05-21T09:00Z",
        "unitCount": 17,
        "orderItemCount": 16,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 24.92,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 423.65,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T09:00Z--2023-05-21T10:00Z",
        "unitCount": 10,
        "orderItemCount": 8,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 20.51,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 205.11,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T10:00Z--2023-05-21T11:00Z",
        "unitCount": 16,
        "orderItemCount": 16,
        "orderCount": 14,
        "averageUnitPrice": {
            "amount": 25.02,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 400.25,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T11:00Z--2023-05-21T12:00Z",
        "unitCount": 17,
        "orderItemCount": 16,
        "orderCount": 16,
        "averageUnitPrice": {
            "amount": 20.74,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 352.58,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T12:00Z--2023-05-21T13:00Z",
        "unitCount": 8,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 22.04,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 176.29,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T13:00Z--2023-05-21T14:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 22.52,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 225.24,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T14:00Z--2023-05-21T15:00Z",
        "unitCount": 5,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 25.57,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 127.83,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T15:00Z--2023-05-21T16:00Z",
        "unitCount": 10,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 22.48,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 224.8,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T16:00Z--2023-05-21T17:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 24.38,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 219.45,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T17:00Z--2023-05-21T18:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 16.84,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 134.72,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T18:00Z--2023-05-21T19:00Z",
        "unitCount": 12,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 27.63,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 331.59,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T19:00Z--2023-05-21T20:00Z",
        "unitCount": 12,
        "orderItemCount": 12,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 29.84,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 358.11,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T20:00Z--2023-05-21T21:00Z",
        "unitCount": 9,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 27.72,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 249.49,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T21:00Z--2023-05-21T22:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 21.04,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 42.07,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T22:00Z--2023-05-21T23:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 27.68,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 110.71,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-21T23:00Z--2023-05-22T00:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 23.32,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 69.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T00:00Z--2023-05-22T01:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T01:00Z--2023-05-22T02:00Z",
        "unitCount": 2,
        "orderItemCount": 2,
        "orderCount": 2,
        "averageUnitPrice": {
            "amount": 26.74,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 53.48,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T02:00Z--2023-05-22T03:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T03:00Z--2023-05-22T04:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 16.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 16.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T04:00Z--2023-05-22T05:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 26.7,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 80.1,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T05:00Z--2023-05-22T06:00Z",
        "unitCount": 29,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 25.96,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 752.88,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T06:00Z--2023-05-22T07:00Z",
        "unitCount": 11,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 27.4,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 301.36,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T07:00Z--2023-05-22T08:00Z",
        "unitCount": 9,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 19.1,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 171.91,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T08:00Z--2023-05-22T09:00Z",
        "unitCount": 12,
        "orderItemCount": 10,
        "orderCount": 10,
        "averageUnitPrice": {
            "amount": 20.2,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 242.44,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T09:00Z--2023-05-22T10:00Z",
        "unitCount": 6,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 28.57,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 171.41,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T10:00Z--2023-05-22T11:00Z",
        "unitCount": 10,
        "orderItemCount": 9,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 22.49,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 224.87,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T11:00Z--2023-05-22T12:00Z",
        "unitCount": 9,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 21.37,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 192.29,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T12:00Z--2023-05-22T13:00Z",
        "unitCount": 14,
        "orderItemCount": 13,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 21.74,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 304.34,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T13:00Z--2023-05-22T14:00Z",
        "unitCount": 7,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 22.38,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 156.65,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T14:00Z--2023-05-22T15:00Z",
        "unitCount": 7,
        "orderItemCount": 6,
        "orderCount": 6,
        "averageUnitPrice": {
            "amount": 34.83,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 243.83,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T15:00Z--2023-05-22T16:00Z",
        "unitCount": 15,
        "orderItemCount": 15,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 26.2,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 392.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T16:00Z--2023-05-22T17:00Z",
        "unitCount": 8,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 20.93,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 167.45,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T17:00Z--2023-05-22T18:00Z",
        "unitCount": 12,
        "orderItemCount": 12,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 25.92,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 310.98,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T18:00Z--2023-05-22T19:00Z",
        "unitCount": 13,
        "orderItemCount": 12,
        "orderCount": 12,
        "averageUnitPrice": {
            "amount": 25.61,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 332.95,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T19:00Z--2023-05-22T20:00Z",
        "unitCount": 12,
        "orderItemCount": 11,
        "orderCount": 11,
        "averageUnitPrice": {
            "amount": 25.45,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 305.4,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T20:00Z--2023-05-22T21:00Z",
        "unitCount": 22,
        "orderItemCount": 21,
        "orderCount": 19,
        "averageUnitPrice": {
            "amount": 25.18,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 553.94,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T21:00Z--2023-05-22T22:00Z",
        "unitCount": 3,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 23.05,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 69.14,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T22:00Z--2023-05-22T23:00Z",
        "unitCount": 8,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 23.16,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 185.3,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-22T23:00Z--2023-05-23T00:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T00:00Z--2023-05-23T01:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 29.97,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 29.97,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T01:00Z--2023-05-23T02:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T02:00Z--2023-05-23T03:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 27.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 27.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T03:00Z--2023-05-23T04:00Z",
        "unitCount": 0,
        "orderItemCount": 0,
        "orderCount": 0,
        "averageUnitPrice": {
            "amount": 0,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 0,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T04:00Z--2023-05-23T05:00Z",
        "unitCount": 1,
        "orderItemCount": 1,
        "orderCount": 1,
        "averageUnitPrice": {
            "amount": 12.99,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 12.99,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T05:00Z--2023-05-23T06:00Z",
        "unitCount": 5,
        "orderItemCount": 5,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 26.38,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 131.89,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T06:00Z--2023-05-23T07:00Z",
        "unitCount": 12,
        "orderItemCount": 7,
        "orderCount": 7,
        "averageUnitPrice": {
            "amount": 21.95,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 263.35,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T07:00Z--2023-05-23T08:00Z",
        "unitCount": 4,
        "orderItemCount": 4,
        "orderCount": 4,
        "averageUnitPrice": {
            "amount": 28.65,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 114.59,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T08:00Z--2023-05-23T09:00Z",
        "unitCount": 17,
        "orderItemCount": 13,
        "orderCount": 13,
        "averageUnitPrice": {
            "amount": 23.5,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 399.53,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T09:00Z--2023-05-23T10:00Z",
        "unitCount": 10,
        "orderItemCount": 8,
        "orderCount": 8,
        "averageUnitPrice": {
            "amount": 22.19,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 221.88,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T10:00Z--2023-05-23T11:00Z",
        "unitCount": 21,
        "orderItemCount": 17,
        "orderCount": 16,
        "averageUnitPrice": {
            "amount": 29.17,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 612.54,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T11:00Z--2023-05-23T12:00Z",
        "unitCount": 4,
        "orderItemCount": 3,
        "orderCount": 3,
        "averageUnitPrice": {
            "amount": 23.46,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 93.82,
            "currencyCode": "EUR"
        }
    },
    {
        "interval": "2023-05-23T12:00Z--2023-05-23T13:00Z",
        "unitCount": 12,
        "orderItemCount": 9,
        "orderCount": 9,
        "averageUnitPrice": {
            "amount": 23.86,
            "currencyCode": "EUR"
        },
        "totalSales": {
            "amount": 286.36,
            "currencyCode": "EUR"
        }
    }
]