let myModule = (function () {
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
  return {
    render: _render
  }
})();

myModule.render(3); // [1, 2, 3]
myModule.render(); // [1, 2]
// myModule._add(4); throws error
// console.log(myModule._data) undefined

