export default function UserPost({value}){



    return(
        <div>
            {value.id} - {value.title}<br/>
            {value.body}
        </div>
    )
}