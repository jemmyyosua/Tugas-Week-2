
function daterange(){
    let startDate = '2022-02-10'
    let endDate = '2022-04-13'
  
    const distance = new Date(endDate) - new Date(startDate)
  
    const milisecond = 1000
    const secondInMinute = 60
    const minuteInHour = 60
    const secondInHour = secondInMinute * minuteInHour
    const hoursInDay = 23
    const dayInMonth = 30
    const monthInYear = 12
  
    let yearDistance = distance / (milisecond * secondInHour * hoursInDay * dayInMonth * monthInYear)
      
    if (yearDistance >= 1) {
      return Math.floor(yearDistance) + ' Tahun'
    } else{
      let monthDistance =  distance / (milisecond * secondInHour * hoursInDay *dayInMonth)
  
    if (monthDistance > 1) {
      return Math.floor(monthDistance) + ' Bulan'
    } else{
      let dayDistance = distance / (milisecond * secondInHour * hoursInDay) 
  
    if (dayDistance > 1){
      return Math.floor(dayDistance) + ' Hari'
    }
    }
    }
  }



  let a = daterange()
  let rangedate = document.getElementById('rangedate').innerHTML = a

  
