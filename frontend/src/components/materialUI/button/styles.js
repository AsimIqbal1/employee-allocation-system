import { makeStyles } from '@material-ui/core/styles';
import colors from '../../../constants/colors';

const useStyles = makeStyles({
    root: {
        background: `linear-gradient(45deg, ${colors.primary} 30%, ${colors.secondary} 90%)`,
        border: 0,
        borderRadius: 4,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        marginTop: 20,
        padding: '0 50px',
    },
});

export default useStyles;