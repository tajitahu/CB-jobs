// resources/js/HelloWorld.js
import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>This is a React component rendered using Laravel Blade and Material-UI.</p>
        </div>
    );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
