
let container = document.querySelector('.container')
 let seat = document.querySelectorAll('.row .seat:not(occupied)');
 //will grab the seats that are not occupied
 let count= document.getElementById('count');
 let amount= document.getElementById('total');
 let movie = document.getElementById('moviesel');
 saveUI();
 let ticketprice = +movie.value;

 
 //plus is used to change the data type into number.
 //functions



function updateSelectedCount(){
    let selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    let seatIndex =[...selectedSeats].map((seats)=> [...seat].indexOf(seats) 
 );
 localStorage.setItem('selectSeats', JSON.stringify(seatIndex));
 //localstorage.setItem is used to set value of string or array too in our local storage function
//JSON stringify convert the array into string so that it can be stored into the local storage.
 
   
    // ... is spread fxn used to copt exact elements in an array for variable or object
    // map fxn is like foreach func just the diffrence is it returns array.
    let selectedSeatCount= selectedSeats.length;
    
    count.innerText=selectedSeatCount;
     amount.innerText= selectedSeatCount *ticketprice;

}

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedmovieindex', movieIndex);
    localStorage.setItem('selectedmovieprice', moviePrice);
    
}
//saveUI function will get data from our local storage
function saveUI(){
   
  const selectSeats = JSON.parse(localStorage.getItem('selectSeats'));
    //JSON parse convert the string into array again.its opposite of json stringify.

    if(selectSeats!==null && selectSeats.length>0){
        seat.forEach((seats, index)=>{
            if(selectSeats.indexOf(index)>-1){
             seats.classList.add('selected');
            }
        });
    }     
}

const selectedmovieindex= localStorage.getItem('selectedmovieindex');{
    if(selectedmovieindex!==null){
    movie.selectedIndex= selectedmovieindex;
    }
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
      setMovieData(e.target.selectedIndex, e.target.value);
     updateSelectedCount();

 });

 





updateSelectedCount();

