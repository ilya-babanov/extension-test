var storage = chrome.storage.local,
    table = document.querySelector('.statTable tbody');

storage.get(null, function(storageObject){
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
            dateCell.innerText  = hostStat.lastTime;
            clicksCell.innerText = hostStat.clicks;
        }
    }
});