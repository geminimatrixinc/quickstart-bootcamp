
import { Feed } from './components/Feed';
// import './assets/darkTheme.css'

import './assets/style.css';

const App = () => {
    return (
        <div className="app">
            <Feed title={"Social Feed from Meta"}/>
            <Feed title={"Social Feed from Twitter"}/>
        </div>
    );
};

export default App;
