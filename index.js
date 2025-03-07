function receivesAFunction(callback) {
  
  callback();
}

function returnsANamedFunction() {
  
  function namedFunction() {
    
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  // 
  const anon = function() {
    
  };
  
  Object.defineProperty(anon, 'name', { value: '' });
  return anon;
}

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
