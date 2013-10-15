var hostName = window.location.hostname,
    currentTime = new Date(),
    hostStats = {
        hostName: hostName,
        lastTime: currentTime.valueOf(),
        clicks: 0
    };

function sendStats(stats) {
    chrome.runtime.sendMessage({type: 'setStats', stats: stats}, function(response) {
        console.log('content set callback: ',response);
    });
}


window.addEventListener('click', onClick);
function onClick() {
    hostStats.clicks++;
    hostStats.lastTime = currentTime.valueOf();
    sendStats(hostStats);
}
