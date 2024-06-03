chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {

    const element = document.getElementById("video_0");
    if (element && element.childElementCount > 0) {
        const child = element.children[0];
        if (child instanceof HTMLSourceElement) {
            const downloader = document.createElement('a');
            downloader.href = child.src;
            const dlArr = child.src.split('/');
            downloader.download = dlArr[dlArr.length-1];
            downloader.hidden = true;
            document.body.appendChild(downloader);
            downloader.click();
            document.body.removeChild(downloader);
        } else {
            console.log("no source element");
        }
    }
});