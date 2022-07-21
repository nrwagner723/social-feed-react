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
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Post</label>
                <textarea className='form-control' rows='4' value={post} onChange={(event) => setPost(event.target.value)}></textarea>
            </div>
            <div className='form-group'>
                <label>Date</label>
                <input type='date' className='form-control' value={date} onChange={(event) => setDate(event.target.value)} />
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
        </form>
     );
}
 
export default Posts;