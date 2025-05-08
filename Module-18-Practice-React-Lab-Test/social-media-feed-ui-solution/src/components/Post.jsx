/* eslint-disable react/prop-types */

export function Post(props) {

    const { message } = props;

    return (
        <>
            <p>{ message || "Default Message" }</p>
            <p>10 Likes</p>
            <div className="post">
                <p className="post-message">Post Message</p>
                <button className="like-button">Like</button>
                <h4>Comments:</h4>
                <form id="comment-form">
                    <input
                        id="control-input"
                        type="text"
                        placeholder="Add a comment"
                        aria-label="Comment input"
                        required
                    />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        
        </>
    )
}