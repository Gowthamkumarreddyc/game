let Secretnumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent= Secretnumber;

document.querySelector('.check').addEventListener 
('click', function(){
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess ,typeof guess);

    if(!guess){
        document.querySelector('.message').textContent='⛔ no number!';
}
else if(guess===Secretnumber){
    document.querySelector('.message').textContent='✌ correct number';
    document.querySelector('body').style.backgroundColor='#60b347';
}
else if (guess>Secretnumber){
    document.querySelector('.message').textContent=' higher number';
    document.querySelector('body').style.backgroundColor='red';

}
else if(guess<Secretnumber){
    document.querySelector('.message').textContent='lower number';
    document.querySelector('body').style.backgroundColor='red';
}
});

document.querySelector('.again').addEventListener 
('click', function(){
    Secretnumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.guess').value='';

})