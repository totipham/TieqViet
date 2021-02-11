
(function() {
  'use strict';

  function tiengviet(str) {
    str = str.toLowerCase();

    str = str.replace(/ch/g, 'x');


    return str;
  }

  function modelcode(str) {
    str = str.toLowerCase();
    
    str = str.replace(/co/g, 'ko');
    str = str.replace(/ce/g, 'ke');
    str = str.replace(/ca/g, 'ka');
    str = str.replace(/cu/g, 'ku');
    str = str.replace(/\bc\b/g, 'k');
    str = str.replace(/q/g, 'k');
    str = str.replace(/ch|tr/g, 'c');
    str = str.replace(/gi/g, 'z');


    str = str.replace(/d/g, 'z');
    str = str.replace(/đ/g, 'd');

    str = str.replace(/ng/g, 'q');

    str = str.replace(/nh/g, "n'");

    str = str.replace(/ph/g, 'f');
    str = str.replace(/th/g, 'w');


    str = str.replace(/kh/g, 'x');
    return str;
  }


  function trans() {
    var val = input.value;

    if (model.checked) val = modelcode(val);

    output.textContent = val || '';
  }


  function timereset() {
    copytimeout = setTimeout(function() {
      textreset();
    }, 3000);
  }


  var input = document.getElementById('input'),
    output = document.getElementById('output'),
    model = document.getElementById('modelcode'),
    btn = document.getElementById('copybtn'),
    clipboard = new Clipboard('#copybtn'),
    copytimeout;

  input.oninput = trans;
  model.onchange = trans;


  btn.onmouseout = function() {
    textreset();
    clearTimeout(copytimeout);
  };



$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#top-image").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});

})();
