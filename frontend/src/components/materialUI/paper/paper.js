import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import useStyles from './styles';


const MaterialPaper = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={6}>
                <Box p={6}>
                    {props.children}
                </Box>
            </Paper>
        </div>
    )
}

export default MaterialPaper
