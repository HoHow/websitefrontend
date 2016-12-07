var API = {
  getUrl: function(apimethod,type,data){
    method(apimethod,type,data);
  }
}

function method(apimethod,type,data){
  $.ajax({
    url:'https://backen.herokuapp.com/api/'+apimethod,
    type: type,
    data: data,

  });
}