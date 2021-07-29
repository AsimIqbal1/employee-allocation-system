
import { TextField } from '@material-ui/core';
import useStyles from './styles';

const MaterialTextField = ({ onChangeEvent, type, label }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField
                className={classes.textInputs}
                id='outlined-basic'
                type={type}
                label={label}
                variant='outlined'
                onChange={onChangeEvent} />
        </div>
    )
}

export default MaterialTextField;