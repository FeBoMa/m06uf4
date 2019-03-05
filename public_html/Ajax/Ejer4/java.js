function ciudades() {
    $.getJSON("ciudad.json", function (data) {
        $.each(data, function (key, val) {
            var listOP = document.createElement("option");
            listOP.setAttribute("value", key);
            var lpTextTxt = document.createTextNode(val);
            listOP.appendChild(lpTextTxt);
            document.getElementById("ciudad").appendChild(listOP);
        });
    })
            .done(function () {
                console.log("Correcto");
            })
            .fail(function () {
                console.log("Error");
            });
}

function peticioAjax(url) {
    var jqxhr = $.post(url,
            {
                ciudad: document.getElementById("ciudad").value
            }
    )
            .done(function (data) {
                $.each(jQuery.parseJSON(data), function (key, val) {
                    var listOP = document.createElement("option");
                    listOP.setAttribute("value", key);
                    var lpTextTxt = document.createTextNode(val);
                    listOP.appendChild(lpTextTxt);
                    document.getElementById("barrio").appendChild(listOP);
                })
            })
            .fail(function () {
                alert("Error");
            });
}