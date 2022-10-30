let input = '[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]';

function solve(area, vol, input) {
    let objects = JSON.parse(input);
    function calc(object) {
        let areaObject = area.call(object);
        let volumeObject = vol.call(object);
        return {
            area: areaObject,
            volume: volumeObject
        };
    }
    return objects.map(calc);
}
console.log(solve(area, vol, input));
function area() {
    return Math.abs(this.x * this.y);
  }
  
  function vol() {
    return Math.abs(this.x * this.y * this.z);
  }
