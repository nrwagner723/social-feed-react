import React, { useState } from 'react';

const Posts = (props) => {
    
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [date, setDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post,
            date: date
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
            <label>Date</label>
            <input type='date' value={date} onChange={(event) => setDate(event.target.value)} />
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default Posts;