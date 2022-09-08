function requestValidator(httpRequest) {
  const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const uriPattern = /^([\w\.]+|\*)$/g;
  const messagePattern = /^[^<>\\&'"]*$/g;

  if (!methods.includes(httpRequest.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!httpRequest.uri || !uriPattern.test(httpRequest.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (!versions.includes(httpRequest.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (!httpRequest.hasOwnProperty('message') || !messagePattern.test(httpRequest.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return httpRequest;
}

console.log(requestValidator({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}));
console.log(requestValidator({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
}));
console.log(requestValidator({
  method: 'POST',
  uri: 'home.bash',
  message: 'rm -rf /*'
}));