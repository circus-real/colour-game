/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import { changeColours, randomiseIdx } from './utils';

const root = document.getElementById('root')! as HTMLDivElement;

randomiseIdx();
changeColours();

render(() => <App />, root);
