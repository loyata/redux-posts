import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reactionAdd} from "./postsSlice";


const ReactionButtons = ({id}) => {

    const dispatch = useDispatch();
    const reactions = useSelector(state => state.posts.find(post => post.id === id)).reactions


    const reactionMap = {
        thumbsUp: '👍🏻',
        wow: '🔇',
        heart: '❤️',
        rocket: '🚀',
        coffee: '☕️'
    }

    const reactionButtons = Object.entries(reactionMap).map(([name, emoji]) => {
        return(
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => {
                    dispatch(reactionAdd({postId:id, reaction:name}));
                }}
            >
                {emoji} {reactions[name]}
            </button>
        )
    })

    return (
        <div>
            {reactionButtons}
        </div>
    );
};

export default ReactionButtons;