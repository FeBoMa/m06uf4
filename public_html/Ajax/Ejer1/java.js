function peticioAjax(url) {
    var jqxhr = $.ajax(url)
            .done(function (data) {
                alert("Ok " + data);
            })
            .fail(function () {
                alert("Error");
            })
            .always(function () {
                alert("Fí");
            });
}