

(chrome.runtime.onMessage || chrome.extension.onMessage).addListener(
    function(request, sender, sendResponse) {
        switch (request.type) {
            case 'setStats':
                saveStats(request.data, sendResponse);
                break;
            case 'getStats':
                getStats(sendResponse);
                break;
            default:
                return false;
        }
        return true;
    });

/**
 * Save statistic to chrome storage
 * @param {object} stats
 * @param {function} callBack
 */
function saveStats(stats, callBack) {
    var objectToSave = {};
    objectToSave[stats.hostName] = stats;
    chrome.storage.sync.set(objectToSave, function(){
        console.log('Set: ', objectToSave);
        callBack({saved: true});
    });
}

/**
 * Get all statistic from chrome storage
 * @param {function} callBack
 */
function getStats(callBack) {
    chrome.storage.sync.get(null, function(storageObject){
        console.log('Get: ', storageObject);
        callBack(storageObject);
    });
}