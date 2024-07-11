import bcrypt from "bcrypt";
import {connectBD} from "@/lib/connectBD";

export const POST = async(req) =>{
    const newUser =await req.json()

    try {
        const db = await connectBD()
        const userCollection = await db.collection("users") 

        const userExit = await userCollection.findOne({email : newUser.email})



        if(userExit){
            return new Response(JSON.stringify({message:"user not found"}),{status:400})
        }
        const hashPass =await bcrypt.hashSync(newUser.password,14);
      

        const saveUser = await userCollection.insertOne({...newUser,password:hashPass})
        return new Response(JSON.stringify({message:"user saved"},{status:201}))

    } catch (error) {
        console.log(error);
        throw new Error(error)       
    }   
}