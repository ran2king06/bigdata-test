import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useEffect, useState } from 'react';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function TableFilterComponents(props) {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    let temp = [];
    props.options.forEach((element) => {
      temp.push({ title: element });
    });
    setData(temp);
  }, [props.options]);

  const filterSelect = () => {
    props.filterSelect(selected);
  }

  return (
    <div className="checker-container">
      <h2>案件分析</h2>
      <Autocomplete
        style={{ width: '100%' }}
        multiple
        id="checkboxes-tags-demo"
        options={data}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        onChange={(e, value) => setSelected(value)}
        onInputChange={(e, value) => setSelected(value)}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label="選擇主題分類" placeholder="選擇主題分類" />
        )}
      />
      <button onClick={() => filterSelect()} className="search-btn">
        查詢
      </button>
    </div>
  );
}
