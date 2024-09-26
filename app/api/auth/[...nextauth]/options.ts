import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import dbConnect from "@/app/lib/dbConnect";
import UserModel from "@/app/model/User";
import bcrypt from "bcrypt"
// import { promises } from "dns";
import { promises } from "dns";
import Email from "next-auth/providers/email";


export const authOptions:NextAuthOptions={
    providers:[
        CredentialsProvider({
            id: "Credentials",
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", },
                password: { label: "Password", type: "password" }
              },
              async authorize(credentials:any):Promise<any> {
                await dbConnect()
                try {
                  const user = await UserModel.findOne({
                    $or:[
                        {email:credentials.identifire},
                        {username:credentials.identifire}
                    ]
                   }) 
                   if(!user){
                    throw new Error('NO user found with this email')
                   }
                   if (!user.isVerified){
                    throw new Error('please verified your account before login')
                   }
                  const isPasswordCorrect= await bcrypt.compare(credentials.password,user.password)
                  if(isPasswordCorrect){
                    return user
                  }
                  else{
                    throw new Error("Incorrect Password")
                  }
                } catch (error:any) {
                    throw new Error(error)
                }
              }
        })
    ],
    // remamber me 
    // callbacks:{
    //     async jwt({token,user}) {
    //         if(user){
    //            token._id=user._id?.toString();
    //            token.isVerified=user.isisVerified;
    //            token.isAcceptingMessages=user.isAcceptingMessages;
    //            token.Username=user.Username
    //         }
    //         return token
    //     },
    //     async session({ session, token }) {
    //         if(token){
    //             session.user._id=token._id
    //             session.user.isVerified=token.isVerified
    //             session.user.isAcceptingMessages=token.isAcceptingMessages
    //             session. user.username=token.Username
    //         }
    //         return session
    //       },
    // },
    pages: {
        signIn: '/sign-in'
    },
    session:{
        strategy:"jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
}