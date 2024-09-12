import { useQuery } from "react-query";
import { FetchPost } from "./api";


export function AppQuery(){
   const {isLoading,data,error}= useQuery({
        queryKey:['posts'],
        queryFn:FetchPost,
    });
    console.log(data, isLoading,error);
    return(
        <div>Im subsribed</div>
    );
}