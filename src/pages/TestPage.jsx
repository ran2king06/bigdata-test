
import React, { useState, useEffect } from 'react';
import './test.scss';

import TableFilterComponents from './../components/material/TableFilter';
import ChartsOverviewDemo from './../components//chart/main';
import TablePaginationActions from './../components/table/main';

import { getDummyData } from './../js/api';
export default function TestPage() {
    const [dummyData , setDummyData] = useState([]);

    useEffect(() => {
        fetchDummyData();
    }, []);

    const fetchDummyData = async () => {
        const data = {
            "start_time": "",
            "end_time": "",
            "category": [],
            "chunk": 1
        }
        const response = await getDummyData(data);
        setDummyData(response.data);

        console.log(dummyData);
    }

    return (
        <div className="test-page">
            <div>
                {/* Filters Block */}
                <div>
                    <TableFilterComponents />
                </div>
                {/* Charts Block */}
                <div>
                    <ChartsOverviewDemo />
                </div>
                {/* Table Block */}
                <div>
                    <TablePaginationActions />
                </div>
            </div>

        </div>
    );
}