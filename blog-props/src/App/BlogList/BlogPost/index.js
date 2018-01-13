import React, { Component } from 'react'

function BlogPost(props){
    let {title, subtitle, author, date} = props;
        return (
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <h3>Posted by{author}on{date}</h3>
            </div>
        )
}
export default BlogPost;