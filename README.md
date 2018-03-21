# _API stats_

##### Web app that uses APIs to get data then generates statistical charts based on that data. 03/21/2018

## By Emily Watkins and Sara Hamilton

# Description
This is the Epicodus weekly project for week 2 of the JavaScript course. It uses API calls to gather data and generate statistical charts using JavaScript, testing with Jasmine and Karma, and includes Node.js, esLint, and Babel.

## Behavior

| Spec | Input | Output |
| :---------------| :---------------| :---------------|
| Makes an API call. | http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=3 | [["Platyceratops","Proplanicoxa","Inosaurus"],["Styracosaurus","Histriasaurus","Shidaisaurus"]] |
| Count number of occurrences of words starting with each letter | [["Platyceratops","Proplanicoxa","Inosaurus"],["Styracosaurus","Histriasaurus","Shidaisaurus"]] | "P": 2, "I": 1, "H": 1, "S": 2 |
| Make an API call to labstack | https://api.labstack.com/chart/bar?values=2,2,1,2&labels=P,I,H,S&titles=First_Letter&colors=lightseagreen&title=Dino%20Stats&x_title=First_Letter | a barchart showing the occurances of each first letter|


## Technologies Used
------------

```
Application: JavaScript, jQuery, Bootstrap, HTML
Testing: Jasmine, Karma
Environment: npm, webpack, babel, esLint
```

Installation
------------

```
$ git clone https://github.com/...
```

_Requires node.js; instructions to install:_ https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js

Install required npm packages and dependencies:

```
$ npm install
$ npm run build
```

Start the webserver:
```
$ npm run start
```

## Known Bugs

  * _No known bugs at this time._

## Support and contact details

  _To suggest changes, submit a pull request in the GitHub repository._

### License

  _Licensed under MIT license_
-------

GNU GPL v2. Copyright 2018 **Emily Watkins and Sara Hamilton**
