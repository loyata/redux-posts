import React, {useState} from 'react';
import {addPostForm} from "./postsSlice";
import {useDispatch, useSelector} from "react-redux";



const AddPostForm = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const [input, setInput] = useState({title:'', content:'', userId:''});



    const onSavePostClicked = () => {
        if(input.title && input.content){
            dispatch(addPostForm(input));
        }else{
            alert("Illegal input!");
        }
        setInput({title:'', content:'', userId:''});
    }


    const usersOptions = users.map(user => (<option key={user.id} value={user.id}>{user.name}</option>))


    return (
        <section>
            <h2>Add a post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={input.title}
                    onChange={(e)=>{setInput({...input, title:e.target.value})}}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={input.userId} onChange={(e)=>{setInput({...input, userId: e.target.value})}}>
                    {/*<option value="none" selected hidden>Please make a selection</option>  */}
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={input.content}
                    onChange={(e)=>{setInput({...input, content:e.target.value})}}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!(Boolean(input.title) && Boolean(input.content) && Boolean(input.userId))}
                >Save Post</button>
            </form>
        </section>
    );
};

export default AddPostForm;