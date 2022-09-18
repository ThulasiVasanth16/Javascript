const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {
       const rand =Math.random();
        setTimeout(() => {
            if(rand < 0.7){
                resolve('YOUR FAKE DATA HERE');
            }
           reject('REQUEST ERROR!');
        },1000)
    })
}


fakeRequest('/dogs/1')
   .then((data) => {
       console.log("DONE WITH REQUEST!")
         console.log('data is:',data)
    })
    .catch((err) => {
        console.log("OH NO!",err)
    })

/*const delayedColorChange = (newColor,delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    },delay)
}*/


/*delayedColorChange('red',1000, () => {
    delayedColorChange('orange',1000, () => {
        delayedColorChange('yellow',1000, () => {
            delayedColorChange('green',1000, () => {
                delayedColorChange('blue',1000, () => {
                    delayedColorChange('indigo',1000, () => {
                        delayedColorChange('violet',1000, () => {
        
                        })
                    })
                })
            })
        })
    })
})*/
/*new Promise((resolve,reject) => {
    resolve();
})*/

const delayedColorChange =(color,delay) => {
    return new Promise((resolve,reject) => {
          setTimeout(() => {
              document.body.style.backgroundColor =color;
              resolve();
          },delay)
    })
}
        
delayedColorChange('pink',1000)
    .then(() => delayedColorChange('darkblue', 1000))
    .then(() => delayedColorChange('darkred ', 1000))
    .then(() => delayedColorChange('darkgreen', 1000))
    .then(() => delayedColorChange('brown', 1000))
    .then(() => delayedColorChange('grey', 1000))
    .then(() => delayedColorChange('white', 1000))



