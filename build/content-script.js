var hostName = window.location.hostname,
    hostStats = {
        hostName: hostName,
        date: new Date(),
        clicks: 0
    },
    storageObject = null;


chrome.storage.local.get('statistic', function(stat){
    storageObject = stat;
    if (storageObject.statistic[hostName]) {
        hostStats = storageObject.statistic[hostName];
    } else {
        storageObject.statistic[hostName] = hostStats;
        setStatsToStorage(hostStats);
    }
});


function setStatsToStorage(stats){
    storageObject.statistic[hostName] = stats;
    chrome.storage.local.set(storageObject, function(){
        console.log('set: ', storageObject);
    });
}


window.addEventListener('click', onClick);
function onClick() {
    var newDate = new Date();
    hostStats.clicks++;
    hostStats.date = newDate.getHours() + ":" + newDate.getMinutes();
    if (storageObject) {
        setStatsToStorage(hostStats);
    }
}