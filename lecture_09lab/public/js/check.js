(function ($) {

  var myNewTaskForm = $("#new-item-form"),
    newNameInput = $("#new-task-name"),
    //newDecriptionArea = $("#new-task-description"),
    todoArea = $("#attempts");

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
    var newName = newNameInput.val();

    if (newName.replace(/\W/g, "") == "") {
      //throw 'input some data';
      var element = $('<div class="alert alert-danger" role="alert">you should input some letter</div>');
      $('#danger').append(element);
      $('div[role="alert"]').fadeOut(1500);
      return false;
    } else {
      var check = checkInput(newName);
    }

    useJson = false;
    if (useJson) {
      var requestConfig = {
        method: "POST",
        url: "/calculator/addto",
        contentType: "application/json",
        data: JSON.stringify({
          name: newName,
          check: check
        })
      };

      $.ajax(requestConfig).then(function (responseMessage) {
        console.log(responseMessage);
        // newContent.html(responseMessage.message);

      });
    } else {
      var requestConfig = {
        method: "POST",
        url: "/check/addto.html",
        contentType: "application/json",
        data: JSON.stringify({
          name: newName,
          check: check
        })
      };

      $.ajax(requestConfig).then(function (responseMessage) {
        console.log(responseMessage);
        var newElement = $(responseMessage);
        //bindEventsToTodoItem(newElement);

        todoArea.append(newElement);
      });
    }
  })
})(window.jQuery);
