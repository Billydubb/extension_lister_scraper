How it should go:
    * One job to scrape all the extension ids and short information (name, rating, numberOfRatings, shortDescription) and store them in the database. This should be per extension category. (Productivity etc.)
    * One job to go through the database and scrape all the extension details and fill up the missing detailed information in the database with the scraped data.

