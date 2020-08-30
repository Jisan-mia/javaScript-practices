//Challenge-1: Your Age in Days

var flexBoxResult =  document.getElementById("flex-box-result") 

var ageInDayResult = document.getElementById('result')

var onlyAge = document.getElementById("age");

document.getElementById("click-me").addEventListener('click', function(){
    console.log("click me button clicked")
    
    // input user's birth year, month, date
    var birthDayYear = parseFloat(prompt("Enter your birthday year: "));
    
    var birthdayMonths = parseFloat(prompt("Enter Your birthday month: "));
    
    var birthday = parseFloat(prompt("Enter your birthday date: "))
    
    //Get current date and year
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var todayDate = parseFloat(dd);
    var yyyy = today.getFullYear();
    
    var age = (yyyy - birthDayYear) 
    var birthdayYearInMonth = age * 12;
    
   
    // conveting user month in date
    var birthdayMonthInDay = Math.ceil(birthdayYearInMonth * 30.417) + todayDate;
    
    console.log(birthdayYearInMonth, birthdayMonthInDay, yyyy)
    
    // showing result
    onlyAge.innerHTML = "Your Age is: " + age
    ageInDayResult.innerHTML = "Your age in Days = " + birthdayMonthInDay + " days";
    
})

//reset button funtion
document.getElementById("reset").addEventListener('click', function(){
    onlyAge.innerHTML = "";
    ageInDayResult.innerHTML = "";
    
})


//var today = new Date();
//var dd = String(today.getDate()).padStart(2, '0');
//var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//var yyyy = today.getFullYear();
//
//today = dd + '/' + mm + '/' + yyyy;
//document.write(dd);


















































