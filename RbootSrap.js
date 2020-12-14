import React from 'react';
import {Button, Alert} from 'react-bootstrap';
const RbootSrap = () => {
    return ( 
        <>  
            <div className='container'>
              <button>test button</button>
              <Alert variant="secondary">this is a Button</Alert>
            </div>
            <div className="jumbotron container">
                <h1>hello dear</h1>
                <p>i am dipankar maity</p>
            </div>
            <alert className="secondary">this is a button</alert>
            <Button variant="secondary">Secondary</Button>{' '}

        </>
     );
}
 
export default RbootSrap;