# cybrilla
REST API POC

URL Shortener
-Use any language / framework you are comfortable to work with
- Implement login with Google and normal sign up/ sign in
- Implement a URL shortener service.
- It should pick up any URL
- Convert the URL into a shorter form
- When the user keys in the shorter URL, service should redirect to the original URL
- User should be able to create an API key
- Expose an API to create a short URL that authenticates using the created API key
Note:
--------
- Ensure that the code is as modular as possible.
- Specs are must
  NodeJs v10.18.0
  MySQL v5.0.2
  ExPressJs framwwork and Sequlize with REST API implementation
- Implemented both front end and back end.

Postman collection URL:
https://www.getpostman.com/collections/c73e6a9decbbb52c6635

Setup Procedure:
1.Clone The repository
2.npm install
3.npx sequelize-cli db:migrate
4.open the url in Browser http://localhost:3000/home/
