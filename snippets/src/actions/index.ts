'use server'
 
import  {db } from '@/db';
import { error } from 'console';
import { redirect } from 'next/navigation';

export async function editSnippet(id:number , code:string) {
    console.log(id,code)

    const snippet =  await db.snippet.update({
         where : {id},
         data: {code}
    })

    
    redirect(`/snippets/${id}`)
 }


 export async function deleteSnippet(id:number) {
    await db.snippet.delete({
        where :{id}
    })
    redirect(`/`)

 }

 export async function createSnippet(formState:{message:string},formData : FormData) {
    // 'use server'
  
   try {
      //throw new Error('sds');
    const title = formData.get('title')  
    const code = formData.get('code')  
if(typeof title !== 'string' || title.length <3 )
{
    return {
        message: ' Title must be longer'
    }
}
if(typeof code !== 'string' || code.length <3 )
{
    return {
        message: ' code must be longer'
    }
}
  const snippet =  await db.snippet.create({
        data:{
            title ,
            code 
        }
    });

    console.log(snippet)
   
   } catch (err:unknown){
        if(err instanceof Error){
            return {
                message : err.message
            }
        }else{
            return {
                message : 'Failde to save to database'
            }
        }
   }    
   redirect('/')
}