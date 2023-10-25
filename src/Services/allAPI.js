import { commonAPI } from "./commonAPI";
import { serverURL } from "./severURL";

export const uploadAllBooks = async (body) =>{
    return await commonAPI("POST",`${serverURL}/Books`,body)
}
export const getAllBooks = async () =>{
    return await  commonAPI("GET",`${serverURL}/Books`,"")
}
