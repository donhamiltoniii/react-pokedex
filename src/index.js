import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { getPokemonCollection } from './utils/http'

ReactDOM.render(<App />, document.getElementById('root'));

getPokemonCollection({ limit: 9, offset: 494 }).then(console.log)
