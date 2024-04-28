import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';

import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import React, { useState } from 'react';

import OffIcon from '../assets/img/off.svg';


export default function HeaderComponents(props) {
    const [value, setValue] = useState(['', '']);

    const onChange = (value) => {
        setValue(value);
        props.onChange(value);
    }

    const fullWidth = () => {
        // hide .sidebar
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('hide');

        const content = document.querySelector('.content');
        content.classList.toggle('full-width');

    }

    return (
        <header>
            <div>
                <img src={OffIcon} alt="off" className="off-icon" onClick={fullWidth} />
            </div>

            <div className="date-filter-box">
                <span>日期區間</span>
                <DateRangePicker onChange={onChange} value={value} />
            </div>
        </header>
    );
}
