import { connectBD } from "@/lib/connectBD";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
    session:{
        strategy:"jwt",
        maxAge:30*24*60*60
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials){
                const {email,password} = credentials
                if(!email || !password){
                    throw new Error('user not found');
                }

                const db = await connectBD()
                const currentUser = await db.collection("users").findOne({email})
                if(!currentUser){
                    throw new Error("User not found")
                }

                const passwordMatch = await bcrypt.compareSync(password, currentUser.password)

                if(!passwordMatch){
                    throw new Error("password not match")
                }

                return currentUser

                
            }
        })
    ],
    callbacks:{

    }
    ,
    pages:{
        signIn:'/login'
    }
})

export { handler as GET, handler as POST }