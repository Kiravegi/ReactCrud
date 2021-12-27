import axios from "axios";

const baseURL='http://localhost:3001/profiles';

export const getUsers = async (id) =>{   
    id = id || '';
    return await axios.get(`${baseURL}/${id}`);
}

export const addUser = async(user) =>{  
    return await axios.post(baseURL,user);
}

export const editUser = async (id,user)=>{  
    return await axios.put(`${baseURL}/${id}`,user);
}

export const deleteUser = async (id)=>{ 
    return await axios.delete(`${baseURL}/${id}`);
}