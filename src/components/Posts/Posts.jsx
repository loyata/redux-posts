import React from 'react';
import {useSelector} from "react-redux";
import {selectAllPosts} from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

function Posts() {

    const posts = useSelector(selectAllPosts)
    const sortedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))


    const renderedPosts = sortedPosts.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timeStamp={post.date}/>
            </p>
            <ReactionButtons id={post.id}/>
        </article>
    ))


    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
}

export default Posts;