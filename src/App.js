import './App.css';
import React, {Component} from 'react';
import Greet from './components/Greet';
import MyComponent from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import HelloJSX from './components/HelloJSX';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

// import { Greet } from './components/Greet';

// function App() {
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<EventBind />*/}
        {/*<ClassClick />*/}
        {/*<FunctionClick />*/}
        {/*<Counter />*/}
        {/*<Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
          <p>Second Children</p>
        </Greet>*/}
        {/*<Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>*/}
        {/*<Greet name="Diana" heroName="Wonder Woman"/>*/}
        {/*<Welcome name="Bruce" heroName="Batman"/>*/}

        {/*<MyComponent name="Dragan" />*/}
        {/*<Welcome name="Bruce" heroName="Batman"/>*/}
        {/*<Hello />*/}
        {/*<HelloJSX />*/}
      </div>
    );
  }
}

export default App;
