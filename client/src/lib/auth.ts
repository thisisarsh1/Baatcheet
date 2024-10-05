import {NextAuthOptions} from "next-auth"
// npm i @next-auth/upstash-redis-adapter 
import {UpstashRedisAdapter} from '@next-auth/upstash-redis-adapter'
import { db } from "./db"

import Googleproviders from 'next-auth/providers/google'
function GetGoogleCredentials(){
    const clientId=process.env.GOOGLE_CLIENT_ID;
    const clientSecret=process.env.GOOGLE_CLIENT_SECRET;
    if(!clientId || clientId.length===0){
        throw new Error('Google clientId not found');
    }
    if(!clientSecret || clientSecret.length===0){
        throw new Error('Google clientSecret not found');
        
    }
    return {clientId,clientSecret};
}
export const authOptions:NextAuthOptions={
    adapter:UpstashRedisAdapter(db),
    session:{strategy:'jwt'},
    pages:{
        signIn:'/Login'
    },
    providers:[
        Googleproviders({
            clientId:GetGoogleCredentials().clientId,
            clientSecret:GetGoogleCredentials().clientSecret
        })
    ],
    callbacks:{
        async jwt({token,user}){
            const dbUser=(await db.get(`user:${token.id}`))as User|null
        if (!dbUser){
            token.id=user.id;
            return token;
        }
        return{
            id:dbUser.id,
            name:dbUser.name,
            email:dbUser.email,
            image:dbUser.image
        }
    },
    async session({session,token}){
        if (token){
            session.user.id=token.id;
            session.user.name=token.name;
            session.user.email=token.email;
            session.user.image=token.picture;
        }
        return session;
    },
    redirect(){
        return'/Dashboard'
    }
    
}

}
