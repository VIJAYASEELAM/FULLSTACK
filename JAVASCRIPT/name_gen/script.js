let adj ={
    0:'good',
    1:'best',
    2:'GeolocationCoordinates',
    3:'marvellous'
}

let name ={
    0:'food',
    1:'engine',
    2:'shoe'
}

let endd ={
    0:'limited',
    1:'bros',
    2:'span'
}

let c0 = Math.floor(Math.random()*100);
let c1 = Math.floor(Math.random()*100);
let c2 = Math.floor(Math.random()*100);

console.log(`${adj[c0%3]} ${name[c1%3]} ${endd[c2%3]}`);