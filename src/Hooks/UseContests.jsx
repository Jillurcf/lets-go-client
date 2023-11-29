import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useContests = () =>{
  const axiosPublic = useAxiosPublic()
   
  
    const {data: contests= [], isPending: loading, refetch} = useQuery({
      queryKey: ['contests'],
      queryFn: async ()=>{
        const res = await axiosPublic.get('/Contests')
        return res.data;
      }
  
    })
    return [contests, loading, refetch]

}

export default useContests;