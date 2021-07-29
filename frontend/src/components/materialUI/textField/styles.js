import { makeStyles } from '@material-ui/core/styles';
import colors from '../../../constants/colors';

const useStyles = makeStyles({
    root: {
        padding: '20px 30px',
    },
    textInputs: {
        width: '70%',
        borderColor: `${colors.primary} !important`
    }
});

export default useStyles;