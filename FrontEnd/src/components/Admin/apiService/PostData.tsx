import axios from "axios"
// import Data from "../../../utils/AdminDataInterface";
// interface apiResponse {
//     status: string;
//     data: any;
//     message: string;
//     response: apiResponse;
// }
const PostData = async (data:FormData)=>{
    try{
const response = await axios.post("https://staybnb-server.onrender.com/property",data)
console.log(response.data)
console.log(response);
return response.data;
}catch(err){
    console.log(err);
}
}

export default PostData;