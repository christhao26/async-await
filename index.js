function getRandomNumber(){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let randomNumber = Math.random()*100; 
            randomNumber = Math.floor(randomNumber);
            resolve(randomNumber);
        },500);
    });

}

async function myfunction(){
    let result = await getRandomNumber();
    console.log(result); 
}

myfunction();

async function myfunction2(city){
    let response = await fetch('https://geocode.xyz/' + city + '?json=1').then(response => response.json());
    console.log(response.latt);
    console.log(response.longt);
    console.log(response.standard.city)
   

}

myfunction2("Las Vegas");