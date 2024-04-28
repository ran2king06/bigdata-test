import './test.scss';

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import ChartsOverviewDemo from './../components/chart/main';
import TableFilterComponents from './../components/material/TableFilter';
import StickyHeadTable from './../components/table/main';
import { getDummyData } from './../js/api';

export default function TestPage(props) {
    const [dummyData, setDummyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterOptions, setFilterOptions] = useState([]);
    const [selected, setSelected] = useState([]);
    const [chunk, setChunk] = useState(1);

    let startDate;
    let endDate;

    if (props.dateRange && props.dateRange[0] && props.dateRange[1]) {
        startDate = props.dateRange[0].toISOString().split('T')[0];
        startDate = startDate.replace(/-/g, '/');
        endDate = props.dateRange[1].toISOString().split('T')[0];
        endDate = endDate.replace(/-/g, '/');
    } else {
        startDate = ''
        endDate = ''
    }

    let category = selected.map((item) => {
        return item.title;
    });

    useEffect(() => {
        setChunk(1);
    }, []);

    useEffect(() => {
        setLoading(true);

        const fetchDummyData = async () => {
            const data = {
                "start_time": startDate,
                "end_time": endDate,
                "category": category,
                "chunk": chunk
            };

            // let storageChunk;
            // if (localStorage.getItem('dummyCacheStorageChunk')) {
            //     storageChunk = localStorage.getItem('dummyCacheStorageChunk')
            // }

            // 如果想取得的 chunk 已經有在 dummyCacheStorageChunk 的list裡面，就直接從dummyCacheStorageData 取資料
            // if (storageChunk) {
            // const data = JSON.parse(localStorage.getItem('dummyCacheStorageData'));
            // setDummyData(data);
            // setFilterOptions(data.categories);
            // toast.success("Dummy data fetched successfully");
            // setLoading(false);
            // } else {
            try {
                const res = await getDummyData(data);

                localStorage.setItem('dummyCacheStorageChunk', JSON.stringify(res.data.total_chunk));
                localStorage.setItem('dummyCacheStorageData', JSON.stringify(res.data));

                setDummyData(res.data);
                setFilterOptions(res.data.categories);
                toast.success("Dummy data fetched successfully");

            } catch (error) {
                console.error("Error fetching dummy data:", error);
                toast.error("Error fetching dummy data");
            } finally {
                setLoading(false);
            }
            // }
        }
        fetchDummyData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.dateRange, selected, chunk]);

    return (
        <div className="test-page">
            <div>
                {/* Filters Block */}
                <div>
                    <TableFilterComponents options={filterOptions} filterSelect={setSelected} />
                </div>
                <hr />
                {/* Charts Block */}
                <div>
                    <ChartsOverviewDemo data={dummyData} />
                </div>
                {/* Table Block */}
                <div className="table-container">
                    {
                        loading ?
                            <div className="loading-container">
                                <div className="loading"></div>
                            </div> :
                            <StickyHeadTable data={dummyData} getChunk={setChunk} />
                    }
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                theme="colored"
            />
        </div >
    );
}
