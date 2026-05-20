function openInvitation(){
  document.getElementById('opening').style.display='none';
  document.getElementById('music').play();
}

const targetDate = new Date("July 25, 2026 08:00:00").getTime();

setInterval(function(){
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
},1000);

const params = new URLSearchParams(window.location.search);
const guest = params.get('to');

if(guest){
  document.getElementById('guestName').innerHTML = 'Kepada Yth. <br>' + guest;
}