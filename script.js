
let container = document.querySelector('.container')
 let seat = document.querySelectorAll('.row .seat:not(occupied)');
 //will grab the seats that are not occupied
 let count= document.getElementById('count');
 let amount= document.getElementById('total');
 let movie = document.getElementById('moviesel');
 let ticketprice = +movie.value;
 
 //plus is used to change the data type into number.
 //functions

function updateSelectedCount(){
    let selectedSeats = document.querySelectorAll('.row .seat.selected');
    let selectedSeatCount= selectedSeats.length;
    
    count.innerText=selectedSeatCount;
     amount.innerText= selectedSeatCount *ticketprice;

}






 //event listners
 container.addEventListener('click', e =>{
if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied'))
{
e.target.classList.toggle('selected');
updateSelectedCount();
}

 });

 movie.addEventListener('change', e=>{
     ticketprice = +e.target.value;
     updateSelectedCount();

 });

 







