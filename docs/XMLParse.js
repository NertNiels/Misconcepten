
parseDataToPage = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.xml", false);
    xhttp.send();
    var xmlDoc = xhttp.responseXML;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xhttp.responseText, "text/xml");
    console.log(xhttp.responseText);

    themes = document.getElementById('themes-container');

    elements = xmlDoc.getElementsByTagName("ELEMENT");
    for(i = 0; i < elements.length; i++) {
        naam = "";
        id = "";
        uitleg = "";
        for(j = 0; j < elements[i].childNodes.length; j++) {
            if(elements[i].childNodes[j].nodeName == "NAAM") {
                naam = elements[i].childNodes[j].innerHTML;
            } else if (elements[i].childNodes[j].nodeName == "ID") {
                id = elements[i].childNodes[j].innerHTML;
            } else if (elements[i].childNodes[j].nodeName == "UITLEG") {
                uitleg = elements[i].childNodes[j].innerHTML;
            }
        }
        
        newChild = document.createElement("div");
        newChild.setAttribute('class', "theme-container");
        newChild.setAttribute('id', id);
        newChild.innerHTML = '<div class="theme-header"><h3>'+naam+'</h3></div><div class="theme-paragraph"><p>'+uitleg+'</p></div>';
        themes.appendChild(newChild);
    }
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
