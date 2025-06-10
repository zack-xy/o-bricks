Array.prototype.myForEach = function(callback) {
    var len = this.length
    if(typeof callback !== 'function') {
        throw new Error('must be function')
    }
    for(var i=0;i<len;i++) {
        callback.call(this, this[i], i)
    }
}
