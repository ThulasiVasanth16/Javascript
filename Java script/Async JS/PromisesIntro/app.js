/*const fakeRequestCallback =(url,success,failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000) {
            failure('Connection Timeout :(')
        }else {
            success(`Here is your fake data from ${url}`)
        }
    },delay)
}*/


const fakeRequestPromise = (url) => {
    return new Promise((resolve,reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection Timeout : (')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        },delay)
    })
}



/*fakeRequestCallback('books.com/page1',
  function(response){
    console.log("IT WORKED!!!!!!")
    console.log(response)
    fakeRequestCallback('books.com/page2',
         function (response) {
            console.log("IT WORKED!!!!!!")
            console.log(response)
        fakeRequestCallback('books.com/page3',
           function (response) {
               console.log("IT WORKED!!!!!!")
               console.log(response)
           },function(err){
                 console.log("ERROR (3rd req)!!!", err)
           })  
        }, function (err){
            console.log("ERROR (2nd req)!!!", err)
        })   
},function (err) {
    console.log("ERROR!!",err)
})   */

/*makeRequest(() => {
    makeRequest(() => {
        makeRequest(() => {

        },
            () => {
                
            })
    },
        () => {
            
        })
},
    () => {

    })*/

/*const request = fakeRequestPromise('yelp.com/api/coffee');
request
   .then(() => {
       console.log("PROMISE RESOLVED")
    console.log("IT WORKED!!!!!!")
    })
    .catch(() => {
        console.log("OH No, ERROR!!!")
        console.log("PROMISE REJECTED")
    })*/



    fakeRequestPromise('yelp.com/api/coffee/page1')
         .then((data) =>{
                console.log("IT WORKED!!!!!!!(page1)")
                console.log(data)
                return fakeRequestPromise('yelp.com/api/coffee/page2')
         })
         .then((data) => {
            console.log("IT WORKED!!!!!!!(page2)")
            console.log(data)
            return fakeRequestPromise('yelp.com/api/coffee/page3')     
        })
        .then((data) => {
            console.log("IT WORKED!!!!!!!(page3)")
            console.log(data)
        })    
        .catch(() => {
            console.log("OH NO, A REQUEST FAILED!!!!")
        })





 







