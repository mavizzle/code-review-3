var pingPong = function(number) {
  var num = parseInt(number);
  // console.log(num);
  if (num % 15 === 0) {
    num = 'pingpong';
  } else if (num % 5 === 0) {
    num = 'pong';
  } else if (num % 3 === 0) {
    num = 'ping';
  }
  return num;
};

var numLength = function(num) {
  var numberList = [];

  for (index = 0; index < parseInt(num); index +=1) {
    var newNum = pingPong(index+1);
    numberList.push(newNum);
  }
  return numberList;
};




$(document).ready(function(){
  // debugger;
  // $('#in-result').hide();

  $('form#pingform').submit(function(event){
    event.preventDefault();
    $('#resultlist').empty();
    var userNum = $('input#usernum').val();
    // console.log(userNum);
    var pingNum = pingPong(userNum);
    // console.log(typeof pingNum);
    var numList = numLength(userNum);
    // alert(numList);

    // $('#resultsdiv').show();

    var indexer = 1;

    numList.forEach(function(num) {
      // console.log(num);
      // $('#resultlist').append('<li>').append(num);
      // $('#resultlist').append("<li>" + num + "</li>")

      $('#resultlist').append(`<li id="resultitem${indexer}">${num}</li>`);



      // $(`#resultitem${indexer}`).hide();
      // indexer += 1;
      // console.log(indexer);
    });



  });


});
