import { AppBar, Toolbar,makeStyles} from '@material-ui/core'
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({   
    
    header:{    
        background:'#111111'
    },
    tabs:{  
        color:'#ffffff',
        textDecoration:'none',
        marginRight:20,
        fontSize:19
    },
    
})
function NavBar() {
    const classes = useStyle();
    return (
        
        <AppBar className={classes.header} position="static"  >
            <Toolbar >
                <NavLink className={classes.tabs} to="./" > Crud Operations</NavLink>
                <NavLink className={classes.tabs} to="./add" > Add User</NavLink>
                <NavLink className={classes.tabs} to="./all" > All Users</NavLink>
            </Toolbar>
        </AppBar>

    )
}

export default NavBar
