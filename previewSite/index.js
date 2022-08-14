/**
 * Author: DrowsyFlesh
 * Create: 2022/8/14
 * Description:
 */
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Main from './main';

const root = document.createElement('div');
root.id = 'root';
document.body.append(root);
const main = ReactDOM.createRoot(root);
main.render(<Main/>);
