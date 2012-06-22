function init() {    
    var links = document.getElementsByTagName("a");
    for(k = 0; k < links.length; k++) {
        links[k].addEventListener("mouseover",  showLinkPreview, false);
        links[k].addEventListener("mouseout",   hideLinkPreview, false);
    }
}

function showLinkPreview(event) {
    // Dispatch to the Server for the background image
    //loadPreviewImageForUrl(event.srcElement.href);
    
    // Add the Preview Div to the Page with Loading Status
    var previewDiv = document.createElement("div");
    previewDiv.setAttribute("id", "link_preview");
    if(event.clientX <= 640)
        previewDiv.setAttribute("class", "preview_right");
    else 
        previewDiv.setAttribute("class", "preview_left");
        
    var spinnerImage = document.createElement("img");
    spinnerImage.setAttribute("class", "spinnerImage");
    spinnerImage.setAttribute("src", safari.extension.baseURI + "spinner.gif");
    spinnerImage.setAttribute("style", "border: 0px;");
    
    var previewImage = document.createElement("img");
    previewImage.setAttribute('src', 'http://motingo.com/linkpreviewengine/link_previews/image_for_url?url=' + event.srcElement.href);
    previewImage.setAttribute("style", "border: 0px;");
    
    previewDiv.appendChild(spinnerImage);
    previewDiv.appendChild(previewImage);
    document.body.appendChild(previewDiv);
}

function hideLinkPreview(event) {
    var previewDiv = document.getElementById("link_preview");
    previewDiv.parentNode.removeChild(previewDiv);
}

/* Won't work until we can get around the same-origin policy
function loadPreviewImageForUrl(theUrl) {
    if(window.XMLHttpRequest) {
        var req = new XMLHttpRequest();
        req.open('POST', 'http://localhost:3030/link_previews.json');
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.onload = function(response) {
            data = eval(response.responseText);
            var previewImage = document.createElement("img");
            previewImage.setAttribute('src', data.link_preview.image_file);
            
            var previewDiv = document.getElementById('link_preview');
            previewDiv.appendChild(previewImage);
        };
        req.send('url=' + theUrl);
    } else {
        console.log("Sorry. No XMLHttpRequest's here.");
    }
}
*/

init();