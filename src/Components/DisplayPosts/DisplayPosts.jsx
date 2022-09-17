import React, { useState, useEffect } from 'react';

const DisplayPosts = (props) => {

    useEffect(() => {
        let tempPostData = props.posts.map(entry => {
            return [entry.name, entry.post];
        });
        setPostData(tempPostData);
    }, [props.post])
}

export default DisplayPosts