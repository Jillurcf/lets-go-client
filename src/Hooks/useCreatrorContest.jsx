import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCratorContests = () =>{
    const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
   
      const {data: contests= [], isPending: loading, refetch} = useQuery({
      queryKey: ['contests'],
      queryFn: async ()=>{
        const res = await axiosSecure.get(`/Contests/creator/${user?.email}`)
        return res.data;
      }
  
    })
    return [contests, loading, refetch]

}
export default useCratorContests;