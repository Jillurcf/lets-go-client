
import axiosSecure from ".";

// save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "guest",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};

// get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post(`/jwt`, email);
  console.log("token received from server", data);
  return data;
};

// clear token from browser
export const clearCookie = async (email) => {
  const { data } = await axiosSecure.get(`/logout`);
  return data;
};

// Get usr role
export const getRole = async (email)=>{
  const {data} = await axiosSecure(`/user/${email}`)
  return data.role;
}

// get allusers
export const getAllUsers = async ()=>{
  const {data} = await axiosSecure('/users')
  return data;
}

// save user data in database
export const updateRole = async ({email, role}) => {
  const currentUser = {
   email, 
   role, 
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser);
  return data;
};

// Become a host
export const becomeHost = async (email)=>{
const currentUser = {
  email,
  status: "requested"
}
const {data} = await axiosSecure.put(`/users/${email}`, currentUser)
return data;
}