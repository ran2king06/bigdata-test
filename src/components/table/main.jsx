import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useEffect } from 'react';

const columns = [
  { id: 'no', label: '#', minWidth: 50 },
  { id: 'reply_time', label: '日期回報', minWidth: 100 },
  {
    id: 'record_time',
    label: '受理日期',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'main_category',
    label: '主分類',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'petition_subject',
    label: '問題主旨',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'satisfaction',
    label: '滿意度',
    minWidth: 170,
    align: 'center',
  },
];

export default function StickyHeadTable(props) {
  const [totalCount, setTotalCount] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [chunk, setChunk] = React.useState(1);

  const [page, setPage] = React.useState(1);
  const handleChange = (_event, value) => {
    setPage(value);

    if (value > totalCount) {
      props.getChunk(chunk + 1);
    }
  };

  useEffect(() => {
    setRowsPerPage(100);
    setPage(1);
    setChunk(1);
  }, [])

  useEffect(() => {
    if (props.data.data_size) {
      setTotalCount(Math.ceil(props.data.data_size / 100));
    }
  }, [props.data.data_size]);

  return (
    <Paper sx={{ width: '95%', overflow: 'hidden', margin: '0 auto 35px auto' }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: 'rgb(255 242 242)', borderBottom: '1px solid #E95076' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rowsPerPage > 0
                ? props.data.table_data.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell key={columns[0].id} align={columns[0].align} style={{ border: '1px solid #fff', background: '#F5F5F5' }}>
                        {(index + 1) + (page - 1) * rowsPerPage}
                      </TableCell>
                      {columns.slice(1).map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} style={{ border: '1px solid #fff', background: '#F5F5F5' }}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
                : <TableRow>
                  <TableCell colSpan={6} align="center">No data</TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2} style={{ display: 'flex', justifyContent: 'center', padding: '20px', margin: '0 auto' }}>
        {/* <Typography>Page: {page}</Typography> */}
        <Pagination count={totalCount + 1} page={page} onChange={handleChange} style={{ display: 'flex', justifyContent: 'center' }} />
      </Stack>
    </Paper >
  );
}
