

function helloOutput() {
    console.log(`Hello from Module`)
}

const goodbyeWorld = () => {
    console.log(`Goodbye`)
}


module.exports = {
    helloOutput: helloOutput,
    goodbyeWorld: goodbyeWorld
}
