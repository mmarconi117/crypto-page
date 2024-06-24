CryptoChecker App

The CryptoChecker App is a web application built with React that provides information about various cryptocurrencies. It allows users to explore cryptocurrency details and track their market performance.

Features

Home Page -

Cryptocurrency List: Displays a list of cryptocurrencies fetched from the CoinGecko API.
Search: Allows users to search for specific coins by name.
Refresh: Updates cryptocurrency data with a refresh button.


CoinPage -

Detailed View: Shows comprehensive information about a selected cryptocurrency.
Information: Includes the coin's name, symbol, current price, market cap, total volume, 24-hour high and low prices.
Navigation: Provides a button to return to the Home page.


Components -

Coin Component
Description: Renders individual cryptocurrency data in a list format.
Details: Displays coin icon, name, symbol, price, market cap, and price change percentage.
Navigation: Includes a "More Info" button to navigate to the detailed CoinPage.


CoinPage Component -


Details: Renders detailed information about a selected cryptocurrency.
Content: Displays the coin's name, symbol, icon, current price, market cap, total volume, and price fluctuations.
Navigation: Provides a button to return to the Home page.


Technologies Used -
React: JavaScript library for building user interfaces.
React Router: Library for handling navigation within the application.
Axios: Promise-based HTTP client for fetching data from external APIs.
CSS: Styling language for customizing the appearance of components.
Usage


To run the CryptoChecker App locally: -

Clone the repository.
Install dependencies (npm install).
Start the application (npm start).

Contributions -

Contributions to the CryptoChecker App are welcome! Feel free to fork the repository, make improvements, and submit pull requests.

Credits -

This project uses data from the CoinGecko API for fetching cryptocurrency information.

License -

This project is licensed under the MIT License. See the LICENSE file for more details.
