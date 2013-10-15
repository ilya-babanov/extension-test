chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.type) {
            case 'setStats':
                saveStats(request.stats, sendResponse);
                break;
            case 'getStats':
                getStats(sendResponse);
                break;
        }
        return true;
    });


function saveStats(stats, callBack) {
    var objectToSave = {};
    objectToSave[stats.hostName] = stats;
    chrome.storage.local.set(objectToSave, function(){
        console.log('Set: ', objectToSave);
        callBack({saved: true});
    });
}


function getStats(callBack) {
    chrome.storage.local.get(null, function(storageObject){
        console.log('Get: ', storageObject);
        callBack(storageObject);
    });
}