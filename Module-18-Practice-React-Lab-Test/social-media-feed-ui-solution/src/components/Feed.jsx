import { Post } from "./Post";

export const Feed = (props) => {

    return (
    <div className="app">
            <div className="feed">
                <h1>{ props.title }</h1>
    
                <Post message={"Sopronas is the best" }/>
                <Post message={"Breaking Bad is the best" }/>
                <Post message={"Lost wasn't so good.."}/>
            </div>
        </div>

    )
}   
