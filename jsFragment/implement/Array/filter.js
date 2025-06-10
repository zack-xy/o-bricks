Array.prototype.myFilter = function(fn) {
    var _newArray = []
    var len = this.length
    for(var i=0;i<len;i++) {
        if(fn.call(this, this[i], i)) {
            if(typeof this[i] === 'object') {
                _newArray.push(Object.create(this[i]))
            } else {
                _newArray.push(this[i])
            }
        } 
    }
    return _newArray
}
