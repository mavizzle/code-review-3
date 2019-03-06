var pingPong = function(number) {
  var num = parseInt(number);
  // console.log(num);
  return num;
}

$(document).ready(function(){
  // debugger;
  $('form#pingform').submit(function(event){
    event.preventDefault();
    var userNum = $('input#usernum').val();
    // console.log(userNum);
    var pingNum = pingPong(userNum);
    // console.log(typeof pingNum);
    alert(pingNum);

  });


});
