
import { Button } from '@material-ui/core';
import useStyles from './styles';

const MaterialButton = ({onClickEvent}) => {
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.root} color="primary" onClick={onClickEvent}>
                LOGIN
            </Button>
        </div>
    )
}

export default MaterialButton;