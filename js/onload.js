document.getElementById('content').focus();
var height = document.getElementById('head').offsetHeight + 32; //magic number for 4 - 8px margins
document.getElementById('content').style.height = Math.max( document.documentElement.clientHeight, document.documentElement.innerHeight || height ) - height + 'px';
