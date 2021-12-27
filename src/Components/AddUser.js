import {FormGroup,FormControl,Typography,InputLabel,Input,Button,makeStyles} from '@material-ui/core';
import {useState} from 'react';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

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

const AddUser =() => {
    const [user, setUser] = useState(initialvalues);
    const {name,username,mail,phone} = user;
    const classes=useStyle();
    const navigate=useNavigate();

    const onValueChange =(e) =>{    
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
       
    }

        const addUserDetails = async() =>{    
            await addUser(user);
            navigate('/all');
        }

    return (
       <FormGroup className={classes.container}>  
       <Typography variant='h5' >Add User Details</Typography>
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
           <Button variant="contained" onClick={()=> addUserDetails()} color="primary">Add User</Button>
       </FormGroup>
    )
}

export default AddUser
