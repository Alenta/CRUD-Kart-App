
var state = false;
var index = 0;
window.ToggleSideOverlay = ToggleSideOverlay;
window.DeleteParentElement = DeleteParentElement;
CreateCard();

function CreateCard(){
    index++;
    const current_element = document.getElementById("mastercardcontainer");
    const clonearea = document.getElementById("cardholder");
    const clone = current_element.cloneNode(true);
    clone.id = "removeCard_"+index;
    clone.querySelector("#cardAddress_0").id = "cardAddress_"+index;
    clone.querySelector("#cardDD_0").id = "cardDD_"+index;
    clone.querySelector("#cardCoord_0").id = "cardCoord_"+index;
    clone.querySelector("#cardupdate1_0").id = "cardupdate1_"+index;
    clone.querySelector("#cardupdate2_0").id = "cardupdate2_"+index;
    clone.querySelector("#cardupdate3_0").id = "cardupdate3_"+index;
    clonearea.appendChild(clone);
}

function ToggleSideOverlay() {
    if(state===false) {
        document.getElementById("overlay").style.display = "block";
        state = true;
    }
    else {
        document.getElementById("overlay").style.display = "none";
        state = false;
    }
}

function DeleteParentElement(obj) {
    
    string = "removeCard_"+obj.id;
    document.getElementById(parentID).remove()
}