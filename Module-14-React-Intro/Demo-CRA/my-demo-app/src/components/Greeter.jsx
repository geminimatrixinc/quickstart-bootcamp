

function Greeter(props) {

    const logger = () => {
        console.log(`hello console ${JSON.stringify(props)}`);
    }

    logger();

    return <div>
                <h1>Hello React!, { props.firstName }</h1>
            </div>
}

export default Greeter;

