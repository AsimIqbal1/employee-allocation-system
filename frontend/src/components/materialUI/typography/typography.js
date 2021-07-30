
import { Typography } from '@material-ui/core';
import useStyles from './styles'

const MaterialTypography = ({ text, varient , color}) => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant={varient} className={classes.text} style={{color: color}}>
                {text}
            </Typography>
        </div>
    )
}

export default MaterialTypography;