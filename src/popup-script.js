var storage = chrome.storage.local,
    statContainer = document.querySelector('#stat');

storage.get('statistic', function(stat){
    if(stat && stat.statistic) {
        var table = document.createElement('table'),
            index = 0;
        for (var host in stat.statistic){
            if (stat.statistic.hasOwnProperty(host)) {
                var hostStat = stat.statistic[host],
                    row = table.insertRow(index++),
                    hostCell = row.insertCell(0),
                    dateCell = row.insertCell(1),
                    clicksCell = row.insertCell(2);
                hostCell.innerHTML = hostStat.hostName;
                dateCell.innerHTML  = hostStat.date;
                clicksCell.innerHTML = hostStat.clicks;
            }
        }
    }
    statContainer.appendChild(table);
});