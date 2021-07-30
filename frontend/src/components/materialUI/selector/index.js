import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import useStyles from './styles';

const MaterialSelector = ({ onChangeEvent, value, label, options }) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={onChangeEvent}
            >
                {options.map((item) => (
                    <MenuItem style={{ width: 100 }} value={item}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default MaterialSelector;
