import {FormGroup,FormControl,InputLabel,Input,Button,makeStyles, Typography} from '@material-ui/core';
import {useState, useEffect} from 'react';
import {  getUsers } from '../Service/api';
import { useParams,useNavigate } from 'react-router-dom';
import { editUser } from '../Service/api';

const useStyle = makeStyles({   
    container:{ 
        width:'40%',
        margin:'12% 0 0 25%'
    }
})
 const initialvalues = {
     name:'',
     username:'',
     mail:'',
     phone:''
 }

const EditUser =() => {
    const [user, setUser] = useState(initialvalues);
    const {name,username,mail,phone} = user;
    const classes=useStyle();
    const {id} = useParams();
    const navigate=useNavigate();

    useEffect(() => {
      loadUserData();
    },[]);

    const loadUserData = async () => {    
        const response = await getUsers(id);
        setUser(response.data);

    }

    const onValueChange =(e) =>{    
        setUser({...user,[e.target.name]:e.target.value})
       
    }

        const editUserDetails = async() =>{    
            await editUser(id,user);
            navigate('/all');
            
        }

    return (
       <FormGroup className={classes.container}>  
       <Typography variant='h5' >Edit User Details</Typography>
           <FormControl>
               <InputLabel> Name </InputLabel> 
               <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
           </FormControl>
           <FormControl>
               <InputLabel> UserName </InputLabel> 
               <Input onChange={(e) => onValueChange(e)} name='username' value={username} />
           </FormControl>
           <FormControl>
               <InputLabel> E-Mail </InputLabel> 
               <Input onChange={(e) => onValueChange(e)} name='mail' value={mail} />
           </FormControl>
           <FormControl>
               <InputLabel> Phone </InputLabel> 
               <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
           </FormControl>
           <Button variant="contained" onClick={()=> editUserDetails()} color="primary">Edit User</Button>
       </FormGroup>
    )
}

export default EditUser
