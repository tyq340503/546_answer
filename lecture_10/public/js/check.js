
(function ($) {

  var myNewTaskForm = $("#login-form"),
    newusernameInput = $("#username"),
    newpasswordInput = $("#password"),
    remove = $("#login-form");
  //newDecriptionArea = $("#new-task-description"),
  todoArea = $("#container");

  //   $("#new-item-form").on('click',function(){
  //       alert('1');
  //   })
  var checkInput = function (num1) {
    if (typeof num1 != 'string') {
      throw 'input data must be a string';
    }

    num1 = num1.replace(/\W/g, "").toLocaleLowerCase();
    for (var i = 0, halfLen = num1.length / 2; i < halfLen; i++) {
      if (num1[i] !== num1[num1.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  myNewTaskForm.submit(function (event) {
    debugger;
    event.preventDefault();
    var username = newusernameInput.val();
    var password = newpasswordInput.val();

    if (username.replace(/\W/g, "") == "" || password.replace(/\W/g, "") == "") {
      //throw 'input some data';
      var element = $('<div class="alert alert-danger" role="alert">username and password should not be empty</div>');
      $('#danger').append(element);
      $('div[role="alert"]').fadeOut(1500);
      return false;
    }

    useJson = false;
    if (useJson) {
      var requestConfig = {
        method: "POST",
        url: "/login",
        contentType: "application/json",
        data: JSON.stringify({
          name: username,
          password: password
        })
      };

      $.ajax(requestConfig).then(function (responseMessage) {
        console.log(responseMessage);
        // newContent.html(responseMessage.message);

      });
    } else {
      var requestConfig = {
        method: "POST",
        url: "/login",
        contentType: "application/json",
        data: JSON.stringify({
          name: username,
          password: password
        })
      };

      $.ajax(requestConfig).then(function (responseMessage) {
        //console.log(responseMessage);
        if (responseMessage.error) {
          //console.log('1');
          var html = `<div class="alert alert-danger" role="alert">${responseMessage.error}</div>`
          var element = $(html);
          $('#danger').append(element);
          $('div[role="alert"]').fadeOut(1500);
          return false;
        }
        if (responseMessage.success) {
          var html = `<div class="alert alert-success" role="alert">${responseMessage.success}</div>`
          var element = $(html);
          $('#danger').append(element);
          $('div[role="alert"]').fadeOut(1500);

          setTimeout(function () {
            window.location.href = "/private";
          }, 2000);
        }
        var newElement = $(responseMessage);
        //bindEventsToTodoItem(newElement);
        //$("body").children().remove();
        $("body").append(newElement);
      }), function (error) {
        console.log(error);
      };
    }
  })
})(window.jQuery);
