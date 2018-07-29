import React from 'react';
import { render } from 'react-dom';
import LinkActive from '../../lib';
import './styles.css';

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <LinkActive>{({ active }) => <div>Test</div>}</LinkActive>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));
