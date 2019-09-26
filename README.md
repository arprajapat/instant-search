# instant-search

Assumptions
---
### General

- implementation is based on trie data structure
- default minimum characters to search by text is 3 character
- minimum character to search is configurable with env variable MIN_CHAR_TO_SEARCH 
- Search results are order by score (wrritten modular code to ease experimentation);
- added very few test cases for reference purpose
- No exeternal db or caching used. For now data are read from csv file named `data.csv`
- default running port `localhost:3000`
- UI is just to support API
- For Any more clarification leave comments
 
### DashBoard
- endpoint `http://localhost:3000`
- added refresh button
___

# How Run Application
- Install dependecies cmd `npm install`
- Run Cmd: `npm start`

# API Endpoints
- DashBoard UI Url 
```
{
 URL: /
 Method: GET
}
```
- text search URL 
```
{
 URL: v1/search/text/:text
 Method: GET
}
```

