/* doubt/
/*async function rainbow() {
    
    await  delayedColorChange('orange', 1000);
    await  delayedColorChange('yellow', 1000);
    await  delayedColorChange('green', 1000)
    await  delayedColorChange('blue', 1000)
    await  delayedColorChange('indigo', 1000)
    await  delayedColorChange('violet', 1000)
    return "ALLL DONEE!!"

}

rainbow().then (( )=> console.log("END OF RAINBOW!"))*/



const fakeRequest =(url) => {
    return new promise((resolve,reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        },delay)
    })
}

async function helloworld() {
    let data1 = await fakeRequest('/page1');
    console.log(data1);
}

