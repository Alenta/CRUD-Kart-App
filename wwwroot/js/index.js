
var state = false;
window.ToggleSideOverlay = ToggleSideOverlay;
window.DeleteParentElement = DeleteParentElement;

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

function DeleteParentElement(ID) {
    console.log("fishy");
    let parentID = this.parent.parent.ID;
    document.getElementById(parentID).remove()
}