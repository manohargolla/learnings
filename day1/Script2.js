 function getDifferenceBetweenDates(date1,date2){
    const startDate = new Date(date1.getFullYear(),date1.getMonth(),date1.getDate());
    const endDate = new Date(date2.getFullYear(),date2.getMonth(),date2.getDate());
    const diffrenceInTime = endDate.getTime()-startDate.getTime();
    const diffrenceInDays  = Math.floor(diffrenceInTime /(1000*60*60*24));

    return diffrenceInDays;
}

console.log(getDifferenceBetweenDates(new Date(2022,7,7),new Date(2022,8,10)));



