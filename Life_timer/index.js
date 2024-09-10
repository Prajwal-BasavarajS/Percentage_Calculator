const setting_cog = document.getElementById("cog-icon");
const settingContent = document.getElementById("setting-content");
let isDobopen = false;
const initaltext = document.querySelector("#initialText");
const afterDobButton = document.querySelector("#afterDobButtonText");
const dobButton = document.querySelector("#dobButton");
let datebirth ; 

const dobInput = document.querySelector("#dobInput");

const yearel = document.getElementById("year");
const monthel = document.getElementById("month");
const dayel = document.getElementById("day");
 
const hourel = document.getElementById("hour");
const minuteel = document.getElementById("minute");

const secondel = document.getElementById("second");

const maketwoDigitno =(number)=>{
    return number>9 ? number : `0${number}`
}


const toggleDobSelector =  ()  => {

    if(isDobopen)
    {
        settingContent.classList.add("hide");
    }
    else{
        settingContent.classList.remove("hide")
    }
    isDobopen = !isDobopen ;
        console.log("toggle",isDobopen);
};
const updateAge = () =>{
    const currentDate  = new Date();
    console.log(currentDate);
    const datediff = currentDate -datebirth;
    console.log(datediff);
    const year = Math.floor(datediff / (1000 * 60 * 60 *24*365));
    const month = Math.floor(datediff / (1000 * 60 * 60 *24*365)%12);
    const day = Math.floor(datediff / (1000 * 60 * 60 * 24)%30);
    const hour = Math.floor(datediff / (1000 * 60 * 60 )%24);
    const minute = Math.floor(datediff / (1000 * 60 )%60);
    const second = Math.floor(datediff / (1000 )%60);
    console.log(year,month,day,hour,minute,second);
    // console.log(year);

    yearel.innerHTML = maketwoDigitno(year) ;
    monthel.innerHTML =  maketwoDigitno(month) ;
    dayel.innerHTML =  maketwoDigitno(day) ;
    hourel.innerHTML = maketwoDigitno(hour) ;
    minuteel.innerHTML = maketwoDigitno(minute) ;
    secondel.innerHTML = maketwoDigitno(second) ;

    
    


};


const setDobHandler = () =>{
    const dateString =dobInput.value ;

    datebirth = dateString ? new Date(dateString) : null ; 

    const year = localStorage.getItem("year");
    const month = localStorage.getItem("month");
    const day = localStorage.getItem("day");
    const hour = localStorage.getItem("hour");
    const minute = localStorage.getItem("minute");
    const second = localStorage.getItem("second");
    if(year && month && day && hour && minute && second){
        datebirth = new Date(year,month-1,day,hour,minute,second);
        }
        updateAge();





    // console.log(datebirth,"dateof birth");
    if(datebirth){

        localStorage.setItem("year".datebirth.getFullYear());
        localStorage.setItem("month".datebirth.getMonth());
        localStorage.setItem("day".datebirth.getFullday());
        localStorage.setItem("minute".datebirth.getFullminute());
        localStorage.setItem("second".datebirth.getFullsecond());
        
        initaltext.classList.add("hide");
        afterDobButton.classList.remove("hide");
        // updateAge();
        setInterval(()=>updateAge(),1000);
    }
    else{
        afterDobButton.classList.add("hide");
        initaltext.classList.remove("hide");
    }
};

setDobHandler();




// updateAge();


setting_cog.addEventListener("click",toggleDobSelector);
dobButton.addEventListener("click",setDobHandler);
