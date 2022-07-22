import React, { useState } from 'react';
import LikedHearts from './LikedHearts/LikedHearts';
import DislikedHearts from './DislikedHearts/DislikedHearts';

const HeartPresenter = (props) => {

    const [isDisliked, setIsDisliked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    return ( 
        <>
            <td><LikedHearts isLiked={isLiked} setIsLiked={setIsLiked} setIsDisliked={setIsDisliked} /></td>
            <td><DislikedHearts isDisliked={isDisliked} setIsDisliked={setIsDisliked} setIsLiked={setIsLiked} /></td>
        </>
     );
}
 
export default HeartPresenter;