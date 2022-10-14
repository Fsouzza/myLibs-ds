import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MlBotao } from './../src/components/MlBotao/index';

const App = () => {
  return (
    <div>
      <MlBotao />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
