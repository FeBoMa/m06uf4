function peticioAjax(url) {
    http_request = false;
    if (window.XMLHttpRequest) {
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
        }
    } else if (window.ActiveXObject) {
        try {
            http_request = new ActiveXObject("Msxm12.XMLHTTP");

        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
            }
        }
    }
    if (!http_request) {
        alert('Error :( No és posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = respostaAjax;
    http_request.open('GET', url, true);
    http_request.send(null);
}

function respostaAjax() {
    if (http_request.readyState == 1) {
        console.log("LOADING")
    } else if (http_request.readyState == 2) {
        console.log("LOADED")
    } else if (http_request.readyState == 3) {
        console.log("INTERACTIVE")
    } else if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            console.log("COMPLETED");
            alert(http_request.responseText);
        } else {
            alert('Problemes en la petició. 4');
        }
    }
}