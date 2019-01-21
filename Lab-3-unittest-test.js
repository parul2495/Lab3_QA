//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.

function checkHumberId(student_id){
	"use strict";

   const id_check = /(n|N)\d{8}$/;
   let valid_id = false;
	if(id_check.test(student_id)){
		valid_id = true;
	}else{
		valid_id = false;
	}
	return valid_id;
}


function test_checkHumberId(id_In, expected){
	"use strict";
	
	let result = checkHumberId(id_In);
	
	let printmsg = "Value Tested : " + id_In + " Expected Result : " + expected + " Result : " + result + "<br>" ;
	
	let databox = document.getElementById("data");
	databox.innerHTML += printmsg;
}

test_checkHumberId("", false);
test_checkHumberId("N01297218", true);
test_checkHumberId("n01297218", true);
test_checkHumberId(0123678, false);
test_checkHumberId("N012345", false);
test_checkHumberId("N012367570", false);



