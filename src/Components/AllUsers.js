import { getUsers, deleteUser } from "../Service/api";
import { useEffect,useState } from "react";
import {Table,TableHead,TableRow,TableCell,TableBody, Button} from "@material-ui/core";
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";


const useStyle = makeStyles({   
    table:{ 
        width:'90%',
        margin:'5% 0 0 5%',
        '&>*':{
            marginTop:20
        }
    },
    thread:{    
        '&>*':{
            background:'lightgray',
            fontsize:16
            },
    
    },

    row:{    
        '&>*':{
            fontsize:20
            }
        }
})

function AllUsers() {
    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllusers();
    }, []);

    const getAllusers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    }

    const deleteUserData = async (id) =>{ 
        await deleteUser(id);
        getAllusers();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thread}>
                    <TableCell> Id </TableCell>
                    <TableCell> Name </TableCell>
                    <TableCell> User Name </TableCell>
                    <TableCell> E-Mail </TableCell>
                    <TableCell> Phone no. </TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody> 
                {   
                    users.map(user => (
                        <TableRow className={classes.row}>  
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.mail}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                            <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`} >Edit</Button>
                          <Button variant="contained" color="secondary" onClick={()=> deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                </TableRow> 
                    ))
                }
                
            </TableBody>
        </Table>
    )
}

export default AllUsers
