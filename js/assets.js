// Cloak Handler
Poop.cloak = function(url, redirect) {
  window.open('about:blank').document.write(`<head><title>New Tab</title></head><body><style>body {margin: 0;}</style><iframe style="border: none;" src="${url}" width="100%" height="100%"></body>`);
  if (redirect) {
    window.location.href = redirect;
  }
};

// iFrame (fullscren) handler
Poop.frame = function(url) {
  document.documentElement.remove();
  let iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = window.innerWidth;
  iframe.height = window.innerHeight;
  document.appendChild(iframe);
};

// Proxy Opener
Poop.openProxy = function(urlToProxy) {
  localStorage.setItem("url", urlToProxy);
  location.href = "/load";
};

// Custom console.log
Poop.log = function(data) {
  return eval(console_log("%c[Poop]%c", "color: purple; font-weight: bold", "", data));
};
// console.log override
console_log = console.log;
console.log = Poop.log;

// Custom console.error
Poop.error = function(data) {
  return eval(console_error("%c[Poop]%c", "color: orange; font-weight: bold", "", data));
};
// console.error override
console_error = console.error;
console.error = Poop.error;
