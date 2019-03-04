function peticioAjax(url) {
    var jqxhr = $.get(url,{
        nom: document.getElementById("nom").value,
        cognom: document.getElementById("cognom").value
    })
            .done(function (data) {
                alert(data);
            })
            .fail(function () {
                alert("Error");
            })
            .always(function () {
                alert("Fí");
            });
}