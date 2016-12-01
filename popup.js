function plus() {
  chrome.tabs.executeScript(
    null,
    {code: "document.getElementsByTagName('video')[0].playbackRate = document.getElementsByTagName('video')[0].playbackRate + 0.1"}
  )
}

function reset() {
  chrome.tabs.executeScript(
    null,
    {code: "document.getElementsByTagName('video')[0].playbackRate = 1.0"}
  )
}

function minus() {
  chrome.tabs.executeScript(
    null,
    {code: "document.getElementsByTagName('video')[0].playbackRate = document.getElementsByTagName('video')[0].playbackRate - 0.1"}
  )
}

document.getElementById('minus').addEventListener('click', minus);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('plus').addEventListener('click', plus);
