var stat = {'statistic': {}};
chrome.storage.local.set(stat, function(){
    console.log('Set in background: ', stat);
});