const endDate = " 12 September 2024 10:40 PM";
document.getElementById("datetime").innerText = endDate;

const inputs= document.querySelectorAll("input");

function count() {
    const end = new Date(endDate); //final date
    const now = new Date(); //current date and time
    const diff = (end - now)/1000;

    if (diff < 0){
        return;
    }

   inputs[0].value = Math.floor(diff/3600/24); //converted to days
   inputs[1].value = Math.floor((diff/3600)%24); //converted to hours
   inputs[2].value = Math.floor((diff/60)%60); //converted to minutes
   inputs[3].value = Math.floor(diff%60); //converted to seconds
   
}

count();

setInterval(   //continue the process of refreshing in every 1 second
    () => {
        count();
    }, 1000
)