module.exports = function(source) {
  source = source.replace(/(console.)/g, '// $1');
  return source;
};
