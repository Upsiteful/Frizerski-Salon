
import { getDatabase, ref, get } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js';


let spisakElement = document.querySelector('.spisak');
let musterije = [];
let n = [];
 function rez() {
        let musterije = [];
        let frizeri = [];
    const db = getDatabase();

    // Reference to the reservations node
    const reservationsRef = ref(db, 'reservations');
    
    // Fetch the data from Firebase
    get(reservationsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val(); // Get the data
          console.log("Data received:", data);
    
          // Access the arrays
          if(data.musterije){
           musterije = data.musterije;
          }
           frizeri = data.frizeri;
    
          // Call the function to display the data
          console.log('da li ovde moze');
  console.log(frizeri);
  console.log(musterije);
   spisakElement.innerHTML = `<p class = "d">ДАНАС</p>`;
   const n = frizeri;
  
   let slobe = [];
   let sloba = {
    ime: 'a',
    slobodan : []
   }

   const bf = n.length;
   for(let i = 0; i < bf; i++){
    sloba = {
      ime:n[i].ime,
      slobodan: n[i].dani
    }
    slobe.push(sloba);
   }

   let svi = [];
   let jedan = {
    ime: 'a',
    mus: []
   }

   for(let i = 0; i < bf;i++){
    jedan = {
      ime: n[i].ime,
      mus:[]
    }
    svi.push(jedan);
   }
// musterije = JSON.parse(localStorage.getItem('rezerv')); console.log(musterije);
if(musterije){

musterije.forEach(musterija => {
  if(musterija.dan === 0){
 svi[musterija.fri].mus.push(`<p class = "appointment">  <span class = "reserved">${musterija.vreme/100}:00</span>     Име: ${musterija.ime} Контакт телефон: ${musterija.brojt}</p>`); 
}});}


for(let i = 0; i < bf; i++){
spisakElement.innerHTML += `<p class ="barber-name">${n[i].ime} : </p>`
svi[i].mus.forEach(musterijaa => {
  spisakElement.innerHTML += musterijaa;
});
spisakElement.innerHTML += `<p class = "sloba">Слободни термини:  `;
  for(let j = 0; j < slobe[i].slobodan.length; j++){
    spisakElement.innerHTML += `<p class = "nreserv">${slobe[i].slobodan[j]/100}:00 </p>`;
  }
  spisakElement.innerHTML += `<p>____________________________________________________________________________________________________________________________________________________________________________________________</p>`
}
slobe = [];
spisakElement.innerHTML += `<p class = "d"> СУТРА:</p>`;
for(let i = 0; i < bf; i++){
  sloba = {
    ime:n[i].ime,
    slobodan: n[i].sutra
  }
  slobe.push(sloba);
   }
   svi = [];
   jedan = {
    ime: 'a',
    mus: []
   }

   for(let i = 0; i < bf;i++){
    jedan = {
      ime: n[i].ime,
      mus:[]
    }
    svi.push(jedan);
   }
if(musterije){

  musterije.forEach(musterija => {
    if(musterija.dan === 1){
   svi[musterija.fri].mus.push(`<p class = "appointment">  <span class = "reserved">${musterija.vreme/100}:00</span>     Име: ${musterija.ime} Контакт телефон: ${musterija.brojt}</p>`); 
  }});}
        
  for(let i = 0; i < bf; i++){
    spisakElement.innerHTML += `<p class ="barber-name">${n[i].ime} : </p>`
    svi[i].mus.forEach(musterijaa => {
      spisakElement.innerHTML += musterijaa;
    });
    spisakElement.innerHTML += `<p class = "sloba">Слободни термини:  `;
      for(let j = 0; j < slobe[i].slobodan.length; j++){
        spisakElement.innerHTML += `<p class = "nreserv">${slobe[i].slobodan[j]/100}:00 </p>`;
      }
      
 spisakElement.innerHTML += `<p>____________________________________________________________________________________________________________________________________________________________________________________________</p>`
    }


        } else {
          console.log("No data available.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    

            
        
  
       
    }

 
window.onload = rez();

