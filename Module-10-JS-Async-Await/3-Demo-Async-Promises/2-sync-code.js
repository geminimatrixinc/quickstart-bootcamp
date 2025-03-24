
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms`)

// running on main thread, will block all code

const codeBlocker = () => {

    let i = 0;
    while (i < 100000000) { 
        i++;
        //console.log(i)
    }

    return 'billion loops is done';
}

//console.log(`pid : ${process.pid}`)

log('Synchronous 1')
log(codeBlocker())
log('Synchronous 2')

