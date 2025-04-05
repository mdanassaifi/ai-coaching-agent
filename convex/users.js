import { v } from "convex/values";
import { mutation} from "./_generated/server";  
// import { CreateUser } from './users';

export const CreateUser=mutation({
    args:{
        name:v.string (),
        email:v.string  ()

    },
    handler:async (ctx,args )=>{
        // is user already exit 
         const userData=await ctx.db.query('users')
         .filter(q=>q.eq(q.field('email'),args.email))
         .collect();

        // if user not then add new user
         if(userData.length==0)
            {
              const data={
                name:args.name,
                email:args.email,
                credits:50000
              }

              const result=await ctx.db.insert('users',{
                ...data
                });
                console.log(result);
                return data;
              }

              return userData[0]
         }
    })

 
