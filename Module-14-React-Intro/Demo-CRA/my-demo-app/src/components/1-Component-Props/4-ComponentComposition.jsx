import WelcomeFunc from "./1-FunctionalComponent";
import WelcomeClass from "./2-ClassComponent";
import Greeting from "./3-ComponentProps";

function App() {
    return (
        <div>
            <WelcomeFunc name="Mike" />
            <WelcomeClass name="Jane" />
            <Greeting timeOfDay="Morning" name="Sultan" />
        </div>
    );
}

export default App;