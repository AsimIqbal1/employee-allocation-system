
import { Button } from '@material-ui/core';
import useStyles from './styles';

const MaterialButton = ({onClickEvent, text}) => {
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.root} color="primary" onClick={onClickEvent}>
                {text}
            </Button>
        </div>
    )
}

export default MaterialButton;