/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Welcome,Login, Register,FoodIndex,ProductGrid} from './Screens/index';


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
AppRegistry.registerComponent(appName, () => () => <ProductGrid />);