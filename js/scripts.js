var pingPong = function(number) {
  var num = parseInt(number);
  // console.log(num);
  if (num % 15 === 0) {
    num = 'pingpong';
    return num;
  } else {
    return num;
  }
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
