import {useState} from "react";

export const CreateTodoForm = ({ item }) => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title || !description) return;
        try{
            setLoading(true)
            await item(title, description)
            setTitle('')
            setDescription('')
        }catch (e){
            console.log(e)
        }finally {
            setLoading(false)

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="title"
                   value={title}
                   onChange={({target:{value}}) =>setTitle(value)}/><br/>
            <input type="text"
                   placeholder="description"
                   value={description}
                   onChange={({target:{value}})=>setDescription(value)} /><br/>
            <button type="submit" disabled={!title || !description || loading}>create todo</button>
        </form>
    )
}