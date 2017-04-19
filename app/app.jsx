import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from 'Main';

$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <Main/>
  </div>,
  document.getElementById('app')
);
