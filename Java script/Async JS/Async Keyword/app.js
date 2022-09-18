//async function hello() {

//}

/*const sing = async () => {
    return 'LA LA LA LA'
}

sing()
     .then((data) => {
      console.log("PROMISE RESOLVED WITH:", data)
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!")
         console.log(err)
    }) */
    
    

    /*const login = async(username, password) => {
        if(!username || !password) throw  'Missing Credentials'
        if(password === 'hello.world@*&&') return 'WELCOME!'
        throw 'Invaild Password'
    }


login('askljfv' ,'hello.world@*&&')  
     .then(msg => {
         console.log("LOGGED IN!")
         console.log(msg)
     }) 
     .catch(err => {
         console.log("ERROR!")
         console.log(err)
     }) */

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