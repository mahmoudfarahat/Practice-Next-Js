import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/app/components/snippet-edit-form";
import { Snippet } from "next/font/google";
interface SnippetEditPageProps{
    params:{
        id:string
    }
}

export default async function SnippetEditPage(props:SnippetEditPageProps){
const id = parseInt(props.params.id);
const snippet = await db.snippet.findFirst({
    where: {id }
})
if(!snippet)
{
return notFound();
}

return <div>
 <SnippetEditForm snippet={snippet} /> 
</div>
}