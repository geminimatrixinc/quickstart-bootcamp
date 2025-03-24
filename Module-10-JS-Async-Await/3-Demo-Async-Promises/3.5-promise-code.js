const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms`)

// wrap in promise, get off the main thread, and execute as a micro task

const codeBlocker = () => {

   
    // when we wrap it in resolved promise, it will happen after the sync code
    return Promise.resolve().then(v => {
        let i = 0;
        while (i < 10000000000) { i++;
        //console.log(i);
        }
        // however, creating promise is still happening on main thread, while loop still blocks,
        // and resolve is the microtask
        return('billion loops is done');
    })

}




log('Synchronous 1')
log(codeBlocker().then(result => console.log(result)))
log('Synchronous 2')
