const loadBooks = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displaybook(data));
}
console.log('test');

const displaybook = data =>{
    console.log(data);
    const qouteElement = document.getElementById('qoute');
    let calls = data.results;
    for(const buddy of calls){
        console.log(buddy.email);
    }
    // qouteElement.innerText = 
}