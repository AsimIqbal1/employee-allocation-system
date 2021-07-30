import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import useStyles from './styles';

const MaterialSelector = ({ onChangeEvent, value, label, options }) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="simple-select-label">{label}</InputLabel>
            <Select
                labelId="simple-select-label"
                id="simple-select"
                value={value}
                onChange={onChangeEvent}
            >
                {options.map((item) => (
                    <MenuItem key={item} className={classes.menuItem} value={item}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default MaterialSelector;
