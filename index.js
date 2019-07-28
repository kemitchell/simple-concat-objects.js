module.exports = function (stream, callback) {
  var objects = []
  stream
    .on('data', function (object) {
      objects.push(object)
    })
    .once('error', function (error) {
      if (callback) callback(error)
      callback = false
    })
    .once('end', function () {
      if (callback) callback(null, objects)
      callback = false
    })
}
