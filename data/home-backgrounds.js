
var data = [

  /* load images below */

  ["abbot1",""],
  ["ciscolive7",""],
  ["elagua_walk",""],
  ["elagua9",""],
  ["elagua11",""],
  ["employee1",""],
  ["employee2",""],
  ["employee3",""],
  ["employee5",""],
  ["gearthing2",""],
  ["globe-draw",""],
  ["neil4",""],
  ["pig-on-board",""],
  ["ploycom3",""],
  ["ploycom5",""],
  ["ploycom7",""],
  ["polycity",""],
  ["polycom14",""],
  ["roz1",""],
  ["ruckus7",""],
  ["salix8",""],
  ["sharks8",""],
  ["sharks11",""],
  ["sharks14",""],
  ["sharks31",""],
  ["sharks43",""],
  ["spgroup",""],
  ["vmwarefusion1",""],
  ["vmwarefusion3",""],
  ["vmwarews3",""],
  ["wave5",""],
  ["world-map",""],

["",""]];

exports.load = function() {
  var rtrn = []; for (var i = 0; i < (data.length-1); i++) { rtrn[i] = data[i]; }
  return rtrn;
}