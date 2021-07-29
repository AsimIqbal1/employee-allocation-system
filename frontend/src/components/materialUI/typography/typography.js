
import { Typography } from '@material-ui/core';
import useStyles from './styles'

const MaterialTypography = ({ text, varient }) => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant={varient} className={classes.text} color="red">
                {text}
            </Typography>
        </div>
    )
}

export default MaterialTypography;