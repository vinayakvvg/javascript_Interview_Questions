function myModule() {
  let _data = [1, 2];
  let _render = function (num) {
    if (num) {
      _add(num);
      console.log(_data)
    } else {
      _remove();
      console.log(_data)
    }
    console.log('inside render')
  };
  let _add = function (val) {
    _data.push(val)
  };
  let _remove = function () {
    _data.pop();
  };

  Object.defineProperties(this, {
    data: {
      get: function () {
        return _data
      }
    },
    render: {
      value: _render
    },
  })
}

const obj = new myModule();

console.log(obj.data);
obj.render(7);
console.log(obj.data);
obj.render();
console.log(obj.data);
obj.data = [3, 5, 6]
console.log(obj.data);
console.log(obj._data); // undefined
// console.log(obj._render()); throws error