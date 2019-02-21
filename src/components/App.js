import React from 'react';
import UserList from '../container/user-list';
import UserDetail from '../container/user-detail';
require('../../src/App.css');

const App = () => (
    <div>
        <h2>
            Username List:
        </h2>
        <UserList/>
        <hr/>
        <h2>User Details:</h2>
        <UserDetail/>
    </div>
)

export default App;