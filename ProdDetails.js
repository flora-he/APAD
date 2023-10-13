// In this example, the Welcome component takes a name prop and displays a greeting with the name.
// The App component uses the Welcome component multiple times, passing a different name prop each time.
// Props can be of any type, such as numbers, strings, arrays, or objects. 
// You can also use React's PropTypes library to define the type of props that a component should receive.

import React from 'react';
import './ProdDetails.css';
//import { useState } from 'react';
/*
<Router>
    <Routes>
        
        <Route path="/proddetails" Component={ProdDetails} />
    </Routes>
</Router>
*/
const ProdDetails = () => {
  //const [inputValue, useInputValue] = useState(0);


  //const handleInputChange = (event) => {
    //setInputValue(event.target.value);
  //}

  return(
    <div className='box'>
    <div>
    <p>
        <h1>Project ID :</h1>
        <table style = {{width: '100%'}}

>

    <tr>
        <th> </th>
        <th> Capacity </th>
        <th> Availability </th>
        <th> Amount </th>

    </tr>
    <tr>
        <th>Head Phones</th>
        <td>  100</td>
        <td>   100</td>
        <td><input type = "int" id = "numb" name = "numb" /> </td>
    </tr>

    <tr>
        <th>Web cams</th>
        <td>100</td>
        <td>100</td>
        <td><input type = "int" id = "numb" name = "numb" />  </td>
    </tr>
    <br/>

    </table>  

    </p>

    </div>
    </div>
    )
}


export default ProdDetails;

  