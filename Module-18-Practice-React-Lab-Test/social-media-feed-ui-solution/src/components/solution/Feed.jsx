import  { useEffect } from 'react';
import Post from './Post';

const Feed = () => {

    useEffect(() => {
        console.log('Feed component mounted');

        return () => {
            console.log('Feed component unmounted');
        };
    }, []);


    return (
        <>
            <h1>Social Feed</h1>
            <div className="feed">
                <Post message={"React is the best front end library"} />
                <Post message={"Blockchain technology with change the financial system"} />
                <Post message={"Crypto Bull run in 2024!"} />
            </div>
        </>
    );
};

export default Feed;
