var query_string = (function (w) {
    var parameters = {};
    var parameterKeys = [];
    var locationUrl = w.location.href;
    var index = locationUrl.indexOf('?');
    if(index > -1){
        var queryString = locationUrl.substring(index + 1);
        var qsArray = queryString.split('&');
        for (var i in qsArray) {
            var keyValue = qsArray[i].split('=');
            parameters[keyValue[0]] = decodeURIComponent(keyValue[1]);
            parameterKeys.push(keyValue[0]);
        }
    }
    return {
        getParameterValue: function (p) {
            return parameters[p]||'';
        },
        getParameters: function () {
            return parameterKeys;
        }
    };
})(window);