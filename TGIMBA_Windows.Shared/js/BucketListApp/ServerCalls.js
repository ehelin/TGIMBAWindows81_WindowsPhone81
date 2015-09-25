function CallService(url, type, contentType, data) {
    var resultVal = null;

    var svcUrl = REST_SVC + url;

    $.ajax({
        url: svcUrl,
        type: type,
        contentType: contentType,
        data: data,
        async: false,
        success: function (result) {
            resultVal = result.d;
        },
        error: function (error) {
            Alert("Error: " + error);
        }
    });

    return resultVal;
}