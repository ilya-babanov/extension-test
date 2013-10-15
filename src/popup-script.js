
(chrome.runtime.sendMessage || chrome.extension.sendMessage)({type: 'getStats'}, function(storageObject) {
    console.log("Get: ", storageObject);
    var table = document.querySelector('.statContainer');

    table.innerHTML = window["JST"]["src/table"]({'rows': storageObject, 'getPrettyTime': getPrettyTime});
});


/**
 * Create pretty formatted date from milliseconds
 * @param {number|string} ms
 * @returns {string}
 */
function getPrettyTime(ms) {
    if (ms != null) {
        var date = new Date(ms);
        return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
    } else {
        return '';
    }
    /**
     * Add leading zero if number < 10
     * @param {number} number
     * @returns {string}
     */
    function addZero(number) {
        return number < 10 ? '0'+number : ''+number
    }
}

