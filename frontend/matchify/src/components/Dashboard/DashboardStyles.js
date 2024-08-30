import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: '2rem',
    },
    refreshButton: {
        marginLeft: 'auto',
    },
    sectionDivider: {
        margin: '20px 0',
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        textAlign: 'center',
    },
    sectionDividerText: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    profileCardDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
    },
    sliderDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
    },
    finalDiv: {
        marginBottom: '20px',
    },
}));

export default useStyles;
