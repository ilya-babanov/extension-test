var hostName = window.location.hostname,
    currentTime = new Date(),
    hostStats = {
        hostName: hostName,
        lastTime: currentTime.valueOf(),
        clicks: 0
    };

/**
 * Send message with statistic to background-script
 * @param stats
 */
function sendStats(stats) {
    chrome.runtime.sendMessage({type: 'setStats', data: stats}, function(response) {
        console.log('content set callback: ',response);
    });
}


window.addEventListener('click', onClick);
function onClick() {
    hostStats.clicks++;
    hostStats.lastTime = currentTime.valueOf();
    sendStats(hostStats);
}
