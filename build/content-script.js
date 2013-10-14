var hostName = window.location.hostname,
    currentTime = new Date(),
    hostStats = {
        hostName: hostName,
        lastTime: getPrettyTime(currentTime),
        clicks: 0
    };

chrome.storage.local.get(hostName, function(storageHostStats){
    console.log("Get: ", storageHostStats);
    if (storageHostStats[hostName] === hostName) {
        hostStats = storageHostStats;
    } else {
        setStatsToStorage(hostName, hostStats);
    }
});


function setStatsToStorage(hostName, stats){
    var objectToSave = {};
    objectToSave[hostName] = stats;
    chrome.storage.local.set(objectToSave, function(){
        console.log('Set: ', objectToSave);
    });
}

function getPrettyTime(date) {
    if (!date || !(date instanceof Date)) {
        date = new Date();
    }
    return date.toTimeString().split(' ')[0]
}


window.addEventListener('click', onClick);
function onClick() {
    hostStats.clicks++;
    hostStats.lastTime = getPrettyTime(currentTime);
    setStatsToStorage(hostName, hostStats);
}
