
import { Provider } from 'react-redux';
import './App.css';

import Child from './Child';
import Form from './Form';
import Todo from './Todo';
import store from './Redux/store';
import Red from './Red';


function App() {


  // function hangleLogin(){
  //   setData()
  // }
  return (

    <Provider store={store}>
    <div className="App">
     {/* <Child/> */}
<Red/>
   {/* <Form/> */}
   {/* <Todo/> */}
    </div>
    </Provider>
  );
}

export default App;
