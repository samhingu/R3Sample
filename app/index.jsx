require('bundle!./app.css');

import React from 'react'
import ReactDOM from 'react-dom'

var img1 = document.createElement("img");
img1.src = require("./small.png");
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.src = require("./big.png");
document.body.appendChild(img2);

ReactDOM.render(
    <h1>Hello World</h1>,
    document.querySelector('#root')
)