import {createSlice, nanoid} from "@reduxjs/toolkit";
import {sub} from "date-fns";

export const postsSlice = createSlice({
    name:'posts',
    initialState: [
        {
            id:'1',
            title:'Learn Redux Toolkit',
            content: "I've heard great things.",
            userId:'',
            date:sub(new Date(), {minutes: 10}).toISOString(),
            reactions:{
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            }
        },
        {
            id:'2',
            title:'Slice...',
            content: "The more I say slice, the more I want pizza.",
            userId:'1',
            date:sub(new Date(), {minutes: 5}).toISOString(),
            reactions:{
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            }
        }
    ],
    reducers:{
        addPostForm:{
            reducer:(state, action) => {
            state.push(action.payload);
            },
            prepare:(input) => {
                return {payload: {id: nanoid(), title:input.title, content: input.content, userId: input.userId, date:new Date().toISOString(),
                        reactions:{
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
                }
            }
        },
        reactionAdd:(state, action) => {
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post => post.id === postId)
            if(existingPost) existingPost.reactions[reaction]++;
        }
    }
})

export const {addPostForm, reactionAdd} = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;