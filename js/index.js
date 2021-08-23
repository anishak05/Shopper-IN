//for timer mins
const startingMins=50
let time=startingMins*60//600

const countDown = document.getElementById('minutes')
const secondscount=document.getElementById('seconds')
setInterval(updateCountDown,1000)
function updateCountDown(){

  const minutes = Math.floor(time/60)
  let seconds=time%60
  second=seconds<10? '0'+seconds:seconds
  countDown.innerHTML = `${minutes}`
  secondscount.innerHTML = `${second}`
  time--;

}