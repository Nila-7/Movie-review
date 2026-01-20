let isToggled = false;

function toggleBackground() {
    if(!isToggled){
        document.body.style.backgroundColor="#50c7c7";
    } else{
        document.body.style.backgroundColor="#bd50c7";
    }
    isToggled= !isToggled;
}
