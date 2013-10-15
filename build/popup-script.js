var table = document.querySelector('.statTable tbody');

chrome.runtime.sendMessage({type: 'getStats'}, function(storageObject) {
    console.log("Get: ", storageObject);
    var index = 0;
    for (var host in storageObject){
        if (storageObject.hasOwnProperty(host)) {
            var hostStat = storageObject[host],
                row = table.insertRow(index++),
                hostCell = row.insertCell(0),
                dateCell = row.insertCell(1),
                clicksCell = row.insertCell(2);
            hostCell.innerText = hostStat.hostName;
            dateCell.innerText  = getPrettyTime(hostStat.lastTime);
            clicksCell.innerText = hostStat.clicks;
        }
    }
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
}

/**
 * Add leading zero if number < 10
 * @param {number} number
 * @returns {string}
 */
function addZero(number) {
    return number < 10 ? '0'+number : ''+number
}
