import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderBottom: `1px solid ${theme.palette.divider}`,
        transition: 'background-color 0.3s ease',
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: '2rem',
        color: theme.palette.text.primary,
    },
    refreshButton: {
        marginLeft: 'auto',
        padding: '10px 20px',
        borderRadius: '8px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        transition: 'background-color 0.3s ease',
    },
    sectionDivider: {
        margin: '20px 0',
        borderBottom: `3px solid ${theme.palette.primary.main}`,
        textAlign: 'center',
        padding: '10px 0',
        background: theme.palette.background.default,
        borderRadius: '4px',
        transition: 'background-color 0.3s ease',
    },
    sectionDividerText: {
        fontWeight: 'bold',
        fontSize: '1.75rem',
        color: theme.palette.text.secondary,
    },
    profileCardDiv: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
        padding: '10px',
    },
    sliderDiv: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
        padding: '10px',
        transition: 'all 0.3s ease',
    },
    card: {
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        },
    },
    cardImage: {
        borderRadius: '12px 12px 0 0',
        height: '150px',
        objectFit: 'cover',
    },
    cardBody: {
        padding: '16px',
    },
    cardTitle: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '8px',
    },
    cardButton: {
        marginTop: '12px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    finalDiv: {
        marginBottom: '20px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
    },
    profilePreview: {
        padding: '20px',
        margin: '20px 0',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme.palette.background.paper,
    },
    searchForm: {
        margin: '20px 0',
        '& .MuiFormControl-root': {
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
        },
    },
}));

export default useStyles;
