let res = await sellingPartner.callAPI({
    operation: "getOrderItems",
    endpoint: "orders",
    options: {
      version: "v0",
    },
    path: {
      orderId: "304-7128587-5653160"
    },
  });

const response = 
{
    "OrderItems": [
        {
            "ProductInfo": {
                "NumberOfItems": "1"
            },
            "BuyerInfo": {},
            "ItemTax": {
                "CurrencyCode": "EUR",
                "Amount": "4.15"
            },
            "QuantityShipped": 1,
            "ItemPrice": {
                "CurrencyCode": "EUR",
                "Amount": "25.99"
            },
            "ASIN": "B08SCFX42D",
            "SellerSKU": "SS-AOGO-KFY6",
            "Title": "INNONEXXT® Premium Unterlegplatten | 60 x 40 mm, 1,5 mm weiß - 250 Stk. | Abstandshalter, Plättchen aus Kunststoff, Distanzplatten, Klötze, Unterl",
            "IsGift": "false",
            "IsTransparency": false,
            "QuantityOrdered": 1,
            "PromotionDiscountTax": {
                "CurrencyCode": "EUR",
                "Amount": "0.00"
            },
            "PromotionDiscount": {
                "CurrencyCode": "EUR",
                "Amount": "0.00"
            },
            "OrderItemId": "29531015507602"
        }
    ],
    "AmazonOrderId": "304-7128587-5653160"
}