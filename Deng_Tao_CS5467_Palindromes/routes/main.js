
terms = [];

(function() {

	function submit() {
        console.log('submit');

        var btn = document.getElementById("submit"); 
        var input = document.getElementById("input"); 
        var str = input.value;
        if (str == "")
        	alert("please type non-null string");
        else
        {
        	var ret = checkStringIsPalidrome(str);
        	var info = document.getElementById("info");

        	if (ret == true)
        		info.innerHTML = '"' + str + '" is a valid palidrome';
        	else
        		info.innerHTML = '"' + str + '" is not a valid palidrome';

        	//alert(terms.length);
        	terms[terms.length] = {isPalidrome:ret, text:str};

        	showHistory();
        }
    }

    function showHistory()
    {
    	var history = document.getElementById("history"); 
    	history.innerHTML = "";
    	for (var i = 0; i < terms.length; i++) {
	　　　　var li = document.createElement("li");
			li.setAttribute("id", "term" + i);

			if (terms[i].isPalidrome == true)
				li.setAttribute("style", "color:blue");
			else
				li.setAttribute("style", "color:red");
	        li.innerHTML = terms[i].text;
	        history.appendChild(li);
	    };
    }

    function checkStringIsPalidrome(str) {
	    if (str == null)	
	    	throw "str must be non-null";
	    
	    console.log(str);
	    str = str.replace(',', '');
	    str = str.replace(':', '');
	    str = str.replace('.', '');
	    str = str.replace('"', '');
	    str = str.replace(/\s+/g,'');
	    str = str.replace('’','');
	    str = str.replace('?','');
	    str = str.toLowerCase();

	    var left = 0;
	    var right = str.length - 1;
	    console.log(str);
	    while(left < right)
	    {
	    	if (str[left] != str[right])
	    		return false;

	        left = left + 1;
	        right = right - 1;
	    }

	    return true;
	}

	function init() {
		//var info = document.getElementsByClassName('info');
		//info.innerText = 'please input a valid sentence';

        // Register event listeners
        var btn = document.getElementById("submit"); // 获取应按钮象
		btn.onclick = function() { submit();}
        //var btndocument.getElementsByClassName('submit').addEventListener('click', submit);
        //btn.onclick = function(){ 
		  //alert("第一个事件"); 
		//} 
    }

	init();

})();