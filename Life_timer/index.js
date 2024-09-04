const setting_cog = document.getElementById("cog-icon");
const settingContent = document.getElementById("setting-content");
let isDobopen = false;


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

setting_cog.addEventListener("click",toggleDobSelector);