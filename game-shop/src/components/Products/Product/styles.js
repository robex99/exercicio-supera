import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        height: 465,
    },
    media: {
        height: 200,
        width: 200,
        paddinTop: '56.25%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-betweeen',
    },
    price: {
        justifySelf: 'flex-end',
        marginLeft: 50
    },
}))