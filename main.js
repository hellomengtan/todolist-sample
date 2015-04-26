// Code goes here
$(document).ready(function(){

var App = {};
var todoinput = $('input[name=todotxt]');
var addbtn = $('#addbtn');
var deletebtn = $('button#deletebtn');



//init todo list data structure
App.init = function(){
  this.data = [];
};


//Add function to add list
App.add = function(str){
  this.data.push(str); 
};

//remove 
App.remove = function(index){
  this.data.splice(index, 1);
};
//update
App.update = function(index, value){
  this.data.splice(index, 1, value);
  
};
//render
App.render = function(){
  data = this.data;
  html = "";
  for(var i=0; i<data.length; i++){
    html += '<li><div><input class="edit" value='+ data[i] +' /></div><span>' + data[i] + '</sapn></li>';
  }
  $('ul').html(html);
  $('li').append('<button id="editbtn" value="edit">EDIT</button>');
  $('li').append('<button id="deletebtn">DELETE</button>');
};





function addList(){  
  
  addbtn.click( function(){
    var str = todoinput.val();    
    var value = todoinput.val();
    //點addbtn後,取消input的值
    todoinput.val("");
    if(value == ""){
    }else{
      App.add(str);    
      App.render();     
    }
    
    
   });
}



function removed(){
  $('#todo-list').on('click','button#deletebtn', function(e){
    var index = $(this).parent('li').index();
    //alert(index);
    App.remove(index);
    //$(this).parent().remove();
      
    App.render();  
  });
}
  
  
function edit(){
  $('#todo-list').on('click','button#editbtn', function(e){
      var index = $(this).parent('li').index();
      var value = $('input.edit').val();
      var btnText = $(this).text();

    
    if(btnText == 'EDIT'){
      $(this).parent().addClass('editing');
      //$(this).parent().append('<input class="edit" value='+ data[index] +'>');
      //$(this).val('save').text('SAVE');
    }else if(btnText == 'SAVE'){
      App.update(index, value);
      //$(this).prev('span').text(value);
      //$('input.edit').remove();     
      //$(this).val('edit').text('EDIT');
      //alert(value);
      
      App.render();  
    }
    
      
  });
}
  


App.init();
addList();
removed();
edit();

});

