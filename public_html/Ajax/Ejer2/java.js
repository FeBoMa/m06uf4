var areatexto = document.getElementById("areatexto");
var tiempoinicio;
var inicio;
var fin;
var tiempofin;
var resul = 0;

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
        inicio = new Date();
        document.getElementById("inicio").textContent = inicio;

        console.log("inicio " + inicio.getMinutes() + ":" + inicio.getSeconds());
        tiempoinicio = inicio.getMinutes() * 3600 + inicio.getSeconds();


    } else if (http_request.readyState == 2) {
        console.log("LOADED")

    } else if (http_request.readyState == 3) {
        console.log("INTERACTIVE")


    } else if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            console.log("COMPLETED");
            fin = new Date();
            document.getElementById("fin").textContent = fin;
            console.log("Fin " + fin.getSeconds());

            tiempofin = fin.getMinutes() * 3600 + fin.getSeconds();

            if (tiempoinicio < tiempofin) {
                resul = tiempofin - tiempoinicio;

            } else {
                resul = ":)";
            }

            document.getElementById("resul").textContent = resul + " Segundos";
            alert(http_request.responseText);
        } else {
            alert('Problemes en la petició. 4');
        }
    }
}