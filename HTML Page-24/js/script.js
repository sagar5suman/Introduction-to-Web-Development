var worker;
function startWorker() {
    worker = new Worker("js/mod4_worker.js");
    worker.onmessage = function(event) {
      document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';  
    };
}
function stopWorker() {
    worker.terminate();
}