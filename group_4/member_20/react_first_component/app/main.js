// var greeter = require('./Geeter.js');
// document.getElementById('root').appendChild(greeter());

import React from 'react'
import { render } from 'react-dom'
import List from './compontents/list.js'

import './main.css'; //使用require导入css

render(<List />,document.getElementById('root'));
