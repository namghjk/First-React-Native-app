/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Welcome,Login, Register} from './Screens/index';
import Login2 from './Screens/Login2';

let fakedProducts = [
  {
    productName: 'samsungS7',
    year: 2010,
  },
  {
    productName: 'iphone 8',
    year: 2008,
  },
  {
    productName: 'oppo 7s',
    year: 2014,
  },
];

// AppRegistry.registerComponent(appName,() =>
//                             () => <Welcome
//                             x={1} y={2}
//                             person={{
//                                 name:"Pham Dinh Phuong Nam",
//                                 age:"22"
//                             }}
//                             product={fakedProducts}
//                                 />);
// AppRegistry.registerComponent(appName, () => () => <Login />);
AppRegistry.registerComponent(appName, () => () => <Register />);