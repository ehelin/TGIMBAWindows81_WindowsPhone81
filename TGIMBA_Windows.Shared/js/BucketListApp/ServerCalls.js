function CallService(url, type, contentType, data) {
    var resultVal = null;
    var errorCtr = 0;
    var svcUrl = REST_SVC_HTTPS + url

    while (errorCtr <= 1) {
        try
        {
            $.ajax({
                url: svcUrl,
                type: type,
                contentType: contentType,
                data: data,
                async: false,
                success: function (result) {
                    resultVal = result.d;
                    errorCtr++;
                },
                error: function (error) {
                    if (error.statusText === 'NetworkError') {
                        svcUrl = REST_SVC + url;
                        errorCtr++;

                        throw new Error('NetworkError');
                    } else {
                        Alert("Error: " + error);
                    }
                }
            });
        } catch (err) {
            if (errorCtr > 1) {
                throw new Error('connection failed - Error: ' + err);
            }
        }
    }

    return resultVal;
}