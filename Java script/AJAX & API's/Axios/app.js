/*axios.get("https://swapi.dev/api/people/1/").then((res) => {
    console.log("RESPONSE: ", res);
})
.catch((e) => {
    console.log("ERROR!",e);
});*/



//doubt  ->

/*const getStarWarsPerson =async(id) => {
  try{ 
       const res= await axois.get(`https://swapi.dev/api/people/${id}/`);
       console.log(res.data);
    } catch(e) {
         console.log("ERROR",e);
    }
  
};



getStarWarsPerson(5);
getStarWarsPerson(10);*/



const fetchBitcionPrice =  async () => {
    try{
        const res= await axios.get('https://api.cryptonator.com/')
        console.log(res.data.ticker.price)
    }catch (e) {
        console.log("ERROR!",e)
    }
}



const getDadJoke = async() => {
    const config = {headers: {Accept:1}}
}