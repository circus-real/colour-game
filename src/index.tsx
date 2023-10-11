/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import { changeColours } from './utils';

const root = document.getElementById('root');

changeColours();

render(() => <App />, root!);
