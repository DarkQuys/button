// import logo from './logo.svg';
// import './App.css';

import { Select } from 'antd';
import ListTodu from './ListTodu/ListTodu';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import { useState } from 'react';
import Button from './Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/action';
import { v4 as uuidv4 } from 'uuid';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
const cx = classNames.bind(styles);
function App() {

     



    const dispatch = useDispatch();
    const [input, setInput] = useState(' ');
    const [callvalue, setCallValue] = useState('');
    const todoList = useSelector((state) => state.toduList);

    const upload = () => {
        dispatch(addTodo({ id: uuidv4(), name: input, priority: callvalue }));
    };
    const handle = (value) => {
        
        setCallValue(value);
    };
    const handleInputValue = (e) => {
        setInput(e.target.value);
    };
    return (
        <div>
            <div>
                <input onChange={handleInputValue} />
                <Select onChange={handle}>
                    <Select.Option value="medium" label="medium"></Select.Option>
                    <Select.Option value="high" label="high"></Select.Option>
                    <Select.Option value="low" label="low"></Select.Option>
                </Select>
            </div>
            <button onClick={upload}>Add</button>
            <span>ListTodu</span>
            <div className={cx('listtodu')}>
                {todoList.map((list) => {
                    return <ListTodu key={list.id} name={list.name} content={list.priority} />;
                })}
            </div>
        </div>
    );
}

export default App;
