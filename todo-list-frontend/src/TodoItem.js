import React, {Component} from 'react';

const TodoItem = ({name, completed}) => (
    <li
    style={{textDecoration: completed? 'line-through': 'none'}}
    >
        {name}
    </li>
);

export default TodoItem;