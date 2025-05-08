import { useState } from 'react';

const Post = ({message}) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if(!newComment) return;
        
        const timestamp = new Date().toLocaleTimeString();
        setComments([...comments, { text: newComment, time: timestamp }]);
        setNewComment('');
    };

    return (
        <div className="post">
            <p>{message}</p>
            <p>{`${likes} Likes`}</p>
            <button onClick={handleLike} className="like-button">
               Like
            </button>

            <h4>Comments:</h4>

            {
                comments.map((c, index) => (
                    <div key={c.timestamp + index}>
                        <strong>{c.timestamp}: </strong>{c.text}
                    </div>
                ))
            }

            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Add a comment"
                    className="comment-input"
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Post;
