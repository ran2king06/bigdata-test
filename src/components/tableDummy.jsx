import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getDummyData } from './../js//api';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function TableDummy() {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            const data = {
                "start_time": "",
                "end_time": "",
                "category": [],
                "chunk": 1
            }
            const response = await getDummyData(data);

            if(response.message === 'success') {
                // res.data 
                // categories: [器電種類]
                // data_size: 800
                // petition_count: {
                    // current_period: 
                    // current_period_total_count:
                    // previous_period:
                    // previous_period_total_count:
                // }
                // table_data: [
                //     record_time: string
                //     reply_time: string
                //     main_category: string
                //     petition_subject: string
                //     satisfaction: string
                // ]
                // total_chunk: 1

                console.log(response.data);

                setRows(response.data);
                // setColumns(response.columns);
            }

            // setRows(response.data);
            // setColumns(response.columns);
        }
        fetchData();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <></>
        // <Paper sx={{ width: '100%' }}>
        //     <TableContainer sx={{ maxHeight: 440 }}>
        //         <Table stickyHeader aria-label="sticky table">
        //             <TableHead>
        //                 <TableRow>
        //                     <TableCell align="center" colSpan={2}>
        //                         Country
        //                     </TableCell>
        //                     <TableCell align="center" colSpan={3}>
        //                         Details
        //                     </TableCell>
        //                 </TableRow>
        //                 <TableRow>
        //                     {columns.map((column) => (
        //                         <TableCell
        //                             key={column.id}
        //                             align={column.align}
        //                             style={{ top: 57, minWidth: column.minWidth }}
        //                         >
        //                             {column.label}
        //                         </TableCell>
        //                     ))}
        //                 </TableRow>
        //             </TableHead>
        //             <TableBody>
        //                 {rows
        //                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        //                     .map((row) => {
        //                         return (
        //                             <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
        //                                 {columns.map((column) => {
        //                                     const value = row[column.id];
        //                                     return (
        //                                         <TableCell key={column.id} align={column.align}>
        //                                             {column.format && typeof value === 'number'
        //                                                 ? column.format(value)
        //                                                 : value}
        //                                         </TableCell>
        //                                     );
        //                                 })}
        //                             </TableRow>
        //                         );
        //                     })}
        //             </TableBody>
        //         </Table>
        //     </TableContainer>
        //     <TablePagination
        //         rowsPerPageOptions={[5, 10, 25, 100]}
        //         component="div"
        //         count={rows.length}
        //         rowsPerPage={rowsPerPage}
        //         page={page}
        //         onPageChange={handleChangePage}
        //         onRowsPerPageChange={handleChangeRowsPerPage}
        //     />
        // </Paper>
    )
}
