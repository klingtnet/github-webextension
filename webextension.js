var header = document.getElementById("repository-container-header");
var labels = Array.from(header.getElementsByClassName("Label"));
var has_public_label = labels.filter(label => label.innerText.includes("Public")).length > 0;
if (has_public_label) {
    header.style.boxShadow = "0 0 5em darkred";
}