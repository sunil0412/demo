function validateOnlyLetters(id, spanId, buttonId) {
	var name = document.getElementById(id).value;
	var namereg = /^[A-Za-z]+$/;
	if (name == '') {
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		document.getElementById(spanId).textContent = "*You can't leave this empty.";
	} else if (name.match(namereg)) {
		document.getElementById(buttonId).disabled = false;
		document.getElementById(spanId).textContent = "";
		document.getElementById("MDC").textContent ="";
		document.getElementById("MDCL").textContent ="";
		return true;
	} else {
		document.getElementById(spanId).textContent = "*Please enter only letters!";
		document.getElementById("MDC").textContent ="";
		document.getElementById("MDCL").textContent ="";
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		return false;
	}
}
function validateEmail(id, spanId, buttonId) {
	var email = document.getElementById(id).value;
	var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	if (email == '') {
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		document.getElementById(spanId).textContent = "*You can't leave this empty.";
	} else if (email.match(emailreg)) {
		document.getElementById(buttonId).disabled = false;
		document.getElementById(spanId).textContent = "";
		return true;
	} else {
		document.getElementById(spanId).textContent = "*Invalid Email!";
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		return false;
	}
}

function validateEmailNotMandatory(id, spanId, buttonId) {
	var email = document.getElementById(id).value;
	var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	 if (email.match(emailreg)) {
		document.getElementById(spanId).textContent = "";
		document.getElementById(buttonId).disabled = false;
		return true;
	}else if(email== ''){
		document.getElementById(spanId).textContent = "";
		document.getElementById(buttonId).disabled = false;
		return true;
	} else {
		document.getElementById(spanId).textContent = "*Invalid Email!";
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		return false;
	}
}
function validateMobileNotMandatory(id, spanId, buttonId) {
	var phone = document.getElementById(id).value;
	var phonereg = /^[1-9]{1}[0-9]{9}$/;
	if (phone.match(phonereg)) {
		document.getElementById(spanId).textContent = "";
		document.getElementById(buttonId).disabled = false;
		return true;
	}else if(phone== ''){
		document.getElementById(spanId).textContent = "";
		document.getElementById(buttonId).disabled = false;
		return true;
	}  else {
		document.getElementById(spanId).textContent = "*Invalid Mobile Number";
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		return false;
	}
}

function validateMobile(id, spanId, buttonId) {
	var phone = document.getElementById(id).value;
	var phonereg = /^[1-9]{1}[0-9]{9}$/;
	if (phone == '') {
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		document.getElementById(spanId).textContent = "*You can't leave this empty.";
	} else if (phone.match(phonereg)) {
		document.getElementById(buttonId).disabled = false;
		document.getElementById(spanId).textContent = "";
		document.getElementById("MDCL").textContent ="";
		return true;
	} else {
		document.getElementById(spanId).textContent = "*Invalid Mobile Number";
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		return false;
	}
}
function validatePassword(id, spanId, buttonId) {
	var password = document.getElementById(id).value;
	var passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
	if (password == '') {
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		document.getElementById(spanId).textContent = "*You can't leave this empty.";
	} else if (password.match(passreg)) {
		document.getElementById(buttonId).disabled = false;
		document.getElementById(spanId).textContent = "";
		//document.getElementById("MDCL").textContent ="";
		return true;
	} else {
		document.getElementById(spanId).textContent = "*Password must contain at least 6 characters, including UPPER/lowercase and numbers";
		document.getElementById(buttonId).disabled = true;
		return false;
	}
}
function validateRePassword(id, spanId, passwordId, buttonId) {
	var password = document.getElementById(passwordId).value;
	var repassword = document.getElementById(id).value;
	if (repassword == '') {
		document.getElementById(buttonId).disabled = true;
		document.getElementById(spanId).textContent = "*You can't leave this empty.";
	} else if (repassword.match(password)) {
		document.getElementById(buttonId).disabled = false;
		document.getElementById(spanId).textContent = "";
		//document.getElementById("MDCL").textContent ="";
		return true;
	} else {
		document.getElementById(spanId).textContent = "*Please enter the same Password. ";
		document.getElementById(buttonId).disabled = true;
		return false;
	}
}
function validateNotEmpty(id, SpanId, buttonId) {
	var companyname = document.getElementById(id).value;
	if (companyname == '') {
		document.getElementById(SpanId).textContent = "*You can't leave this empty.";
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		return false;
	} else {
		document.getElementById(buttonId).disabled = false;
		document.getElementById(SpanId).textContent = "";
		return true;
	}
}
function validateWebsite(id, SpanId, buttonId) {
	var website = document.getElementById(id).value;
	var websitereg = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
	if (website == '') {
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		document.getElementById(SpanId).textContent = "*You can't leave this empty.";
	} else if (website.match(websitereg)) {
		document.getElementById(buttonId).disabled = false;
		document.getElementById(SpanId).textContent = "";
		return true;
	} else {
		document.getElementById(SpanId).textContent = "*Invalid Website!";
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		return false;
	}
}
function validatePhone(id, SpanId, buttonId) {
	var phoneland = document.getElementById(id).value;
	var phonelandreg = /^[1-9]{1}[0-9]{9}$/;
	if (phoneland == '') {
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		document.getElementById(SpanId).textContent = "*You can't leave this empty.";
	} else if (phoneland.match(phonelandreg)) {
		document.getElementById(buttonId).disabled = false;
		document.getElementById(SpanId).textContent = "";
		return true;
	} else {
		document.getElementById(SpanId).textContent = "*Invalid Phone Number";
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		return false;
	}
}
function validateCorporateRegistrationForm() {
	if (document.getElementById("CompanyName").value == "") {
		document.getElementById("CompanyName").focus();
		document.getElementById("companyname").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("hiddenIndustryType").value == "") {
			document.getElementById("industrytypeSpan").textContent = "*Please Select At Least One Value.";
	}else if (document.getElementById("PhoneLand").value == "") {
		document.getElementById("PhoneLand").focus();
		document.getElementById("phone").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("WebSite").value == "") {
		document.getElementById("WebSite").focus();
		document.getElementById("webSite").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("DirectorFname").value == "") {
		document.getElementById("DirectorFname").focus();
		document.getElementById("directorfname").textContent = "*You can't leave this empty.";
		document.getElementById("MDC").textContent = "*Please fill the required fields.";
	} else if (document.getElementById("DirectorLname").value == "") {
		document.getElementById("DirectorLname").focus();
		document.getElementById("directorlname").textContent = "*You can't leave this empty.";
		document.getElementById("MDC").textContent = "*Please fill the required fields.";
	} else if (document.getElementById("AlternateEmail").value == "") {
		document.getElementById("AlternateEmail").focus();
		document.getElementById("alternateemail").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("FirstName").value == "") {
		document.getElementById("FirstName").focus();
		document.getElementById("firstname").textContent = "*You can't leave this empty.";
		document.getElementById("MDCL").textContent = "*Please fill the required fields.";
	} else if (document.getElementById("LastName").value == "") {
		document.getElementById("LastName").focus();
		document.getElementById("lastname").textContent = "*You can't leave this empty.";
		document.getElementById("MDCL").textContent = "*Please fill the required fields.";
	} else if (document.getElementById("EMail").value == "") {
		document.getElementById("EMail").focus();
		document.getElementById("email").textContent = "*You can't leave this empty.";
		document.getElementById("MDCL").textContent = "*Please fill the required fields.";
	} else if (document.getElementById("PhoneNumber").value == "") {
		document.getElementById("PhoneNumber").focus();
		document.getElementById("mobile").textContent = "*You can't leave this empty.";
		document.getElementById("MDCL").textContent = "*Please fill the required fields.";
	} else if (document.getElementById("Password").value == "") {
		document.getElementById("Password").focus();
		document.getElementById("password").textContent = "*You can't leave this empty.";
		document.getElementById("MDCL").textContent = "*Please fill the required fields.";
	} else if (document.getElementById("Repassword").value == "") {
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*You can't leave this empty.";
		document.getElementById("MDCL").textContent = "*Please fill the required fields.";
	}else if (document.getElementById("Password").value != document.getElementById("Repassword").value) {
		document.getElementById("Password").focus();
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*Please enter the same Password.";
	}else {
		ajaxPost('corporateRegistrationForm','/registerClients');
	}
}
function validateCorporateServiceRegistrationForm() {
	if (document.getElementById("CompanyName").value == "") {
		document.getElementById("CompanyName").focus();
		document.getElementById("companyname").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("hiddenIndustryType").value == "") {
			document.getElementById("industrytypeSpan").textContent = "*Please Select At Least One Value.";
	}else if (document.getElementById("PhoneLand").value == "") {
		document.getElementById("PhoneLand").focus();
		document.getElementById("phone").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("WebSite").value == "") {
		document.getElementById("WebSite").focus();
		document.getElementById("webSite").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("DirectorFname").value == "") {
		document.getElementById("DirectorFname").focus();
		document.getElementById("directorfname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("DirectorLname").value == "") {
		document.getElementById("DirectorLname").focus();
		document.getElementById("directorlname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("AlternateEmail").value == "") {
		document.getElementById("AlternateEmail").focus();
		document.getElementById("alternateemail").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("FirstName").value == "") {
		document.getElementById("FirstName").focus();
		document.getElementById("firstname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("LastName").value == "") {
		document.getElementById("LastName").focus();
		document.getElementById("lastname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("EMail").value == "") {
		document.getElementById("EMail").focus();
		document.getElementById("email").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("PhoneNumber").value == "") {
		document.getElementById("PhoneNumber").focus();
		document.getElementById("mobile").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Password").value == "") {
		document.getElementById("Password").focus();
		document.getElementById("password").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Repassword").value == "") {
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("Password").value != document.getElementById("Repassword").value) {
		document.getElementById("Password").focus();
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*Please enter the same Password.";
	}else {
		ajaxPost('corporateServiceRegistrationForm','/registerServiceClients');
	}
}
function validateAddCorporate() {
	if (document.getElementById("CompanyName").value == "") {
		document.getElementById("CompanyName").focus();
		document.getElementById("companyname").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("hiddenIndustryType").value == "") {
			document.getElementById("industrytypeSpan").textContent = "*Please Select At Least One Value.";
	}else if (document.getElementById("PhoneLand").value == "") {
		document.getElementById("PhoneLand").focus();
		document.getElementById("phone").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("WebSite").value == "") {
		document.getElementById("WebSite").focus();
		document.getElementById("webSite").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("DirectorFname").value == "") {
		document.getElementById("DirectorFname").focus();
		document.getElementById("directorfname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("DirectorLname").value == "") {
		document.getElementById("DirectorLname").focus();
		document.getElementById("directorlname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("AlternateEmail").value == "") {
		document.getElementById("AlternateEmail").focus();
		document.getElementById("alternateemail").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("FirstName").value == "") {
		document.getElementById("FirstName").focus();
		document.getElementById("firstname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("LastName").value == "") {
		document.getElementById("LastName").focus();
		document.getElementById("lastname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("EMail").value == "") {
		document.getElementById("EMail").focus();
		document.getElementById("email").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("PhoneNumber").value == "") {
		document.getElementById("PhoneNumber").focus();
		document.getElementById("mobile").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Password").value == "") {
		document.getElementById("Password").focus();
		document.getElementById("password").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Repassword").value == "") {
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("Password").value != document.getElementById("Repassword").value) {
		document.getElementById("Password").focus();
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*Please enter the same Password.";
	}else {
		ajaxPost('addCorporateForm','/addClients');
	}
}
function validateIndividualRegistrationForm() {
	if (document.getElementById("FirstName").value == "") {
		document.getElementById("FirstName").focus();
		document.getElementById("firstname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("LastName").value == "") {
		document.getElementById("LastName").focus();
		document.getElementById("lastname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("EMail").value == "") {
		document.getElementById("EMail").focus();
		document.getElementById("email").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("PhoneNumber").value == "") {
		document.getElementById("PhoneNumber").focus();
		document.getElementById("mobile").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Password").value == "") {
		document.getElementById("Password").focus();
		document.getElementById("password").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Repassword").value == "") {
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Password").value != document.getElementById("Repassword").value) {
		document.getElementById("Password").focus();
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*Please enter the same Password.";
	}else {
		ajaxPost('individualRegistrationForm','/registerClients');
	}
}

function validateIndividualServiceRegistrationForm() {
	if (document.getElementById("FirstName").value == "") {
		document.getElementById("FirstName").focus();
		document.getElementById("firstname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("LastName").value == "") {
		document.getElementById("LastName").focus();
		document.getElementById("lastname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("EMail").value == "") {
		document.getElementById("EMail").focus();
		document.getElementById("email").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("PhoneNumber").value == "") {
		document.getElementById("PhoneNumber").focus();
		document.getElementById("mobile").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Password").value == "") {
		document.getElementById("Password").focus();
		document.getElementById("password").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Repassword").value == "") {
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Password").value != document.getElementById("Repassword").value) {
		document.getElementById("Password").focus();
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*Please enter the same Password.";
	}else {
		ajaxPost('individualServiceRegistrationForm','/registerServiceClients');
	}
}
function validateAddIndividual() {
	if (document.getElementById("FirstName").value == "") {
		document.getElementById("FirstName").focus();
		document.getElementById("firstname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("LastName").value == "") {
		document.getElementById("LastName").focus();
		document.getElementById("lastname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("EMail").value == "") {
		document.getElementById("EMail").focus();
		document.getElementById("email").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("PhoneNumber").value == "") {
		document.getElementById("PhoneNumber").focus();
		document.getElementById("mobile").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Password").value == "") {
		document.getElementById("Password").focus();
		document.getElementById("password").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Repassword").value == "") {
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Password").value != document.getElementById("Repassword").value) {
		document.getElementById("Password").focus();
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*Please enter the same Password.";
	}else {
		ajaxPost('addIndividualForm','/addClients');
	}
}
function validateEmployeeRegistration() {
	if (document.getElementById("UserType").value == "") {
		document.getElementById("userTypeSpan").textContent = "*Please Select At Least One Value.";	
	  }else if (document.getElementById("UserType").value == "Admin") {
		 if (document.getElementById("EMail").value == "") {
				document.getElementById("EMail").focus();
				document.getElementById("email").textContent = "*You can't leave this empty.";
		}else if(document.getElementById("FirstName").value == "") {
			document.getElementById("FirstName").focus();
			document.getElementById("firstname").textContent = "*You can't leave this empty.";
		}else if (document.getElementById("LastName").value == "") {
			document.getElementById("LastName").focus();
			document.getElementById("lastname").textContent = "*You can't leave this empty.";
		} else if (document.getElementById("PhoneNumber").value == "") {
			document.getElementById("PhoneNumber").focus();
			document.getElementById("mobile").textContent = "*You can't leave this empty.";
		} else if (document.getElementById("Password").value == "") {
			document.getElementById("Password").focus();
			document.getElementById("password").textContent = "*You can't leave this empty.";
		} else if (document.getElementById("Repassword").value == "") {
			document.getElementById("Repassword").focus();
			document.getElementById("repassword").textContent = "*You can't leave this empty.";
		}else if (document.getElementById("Password").value != document.getElementById("Repassword").value) {
			document.getElementById("Password").focus();
			document.getElementById("Repassword").focus();
			document.getElementById("repassword").textContent = "*Please enter the same Password.";
		}
		else {
			ajaxPost('employeeRegistrationForm', '/registerEmployee');
		}
       }
		else{
			if (document.getElementById("UserCategory").value == "") {
				document.getElementById("userCategorySpan").textContent = "*You can't leave this empty.";
			}else if (document.getElementById("FirstName").value == "") {
				document.getElementById("FirstName").focus();
				document.getElementById("firstname").textContent = "*You can't leave this empty.";
			}else if (document.getElementById("LastName").value == "") {
				document.getElementById("LastName").focus();
				document.getElementById("lastname").textContent = "*You can't leave this empty.";
			} else if (document.getElementById("EMail").value == "") {
				document.getElementById("EMail").focus();
				document.getElementById("email").textContent = "*You can't leave this empty.";
			} else if (document.getElementById("PhoneNumber").value == "") {
				document.getElementById("PhoneNumber").focus();
				document.getElementById("mobile").textContent = "*You can't leave this empty.";
			} else if (document.getElementById("Password").value == "") {
				document.getElementById("Password").focus();
				document.getElementById("password").textContent = "*You can't leave this empty.";
			} else if (document.getElementById("Repassword").value == "") {
				document.getElementById("Repassword").focus();
				document.getElementById("repassword").textContent = "*You can't leave this empty.";
			}else if (document.getElementById("Password").value != document.getElementById("Repassword").value) {
				document.getElementById("Password").focus();
				document.getElementById("Repassword").focus();
				document.getElementById("repassword").textContent = "*Please enter the same Password.";
			}
			else {
				ajaxPost('employeeRegistrationForm', '/registerEmployee');
			}
     }
  }
function validateCreateContractForm() {
	 if (document.getElementById("ContractBriefDescription").value == "") {
		document.getElementById("contractbriefdescriptionSpan").textContent = "*You can't leave this empty.";
	}  else if (document.getElementById("PaymentTerm").value == "") {
		document.getElementById("paymenttermSpan").textContent = "*Please Select At Least One Value.";
	} else if (document.getElementById("PaymentMethod").value == "") {
		document.getElementById("paymentmethodSpan").textContent = "*Please Select At Least One Value.";
	}else if (document.getElementById("hiddenCorporateService").value == "") {
		document.getElementById("corporateserviceSpan").textContent = "*Please Select At Least One Value.";
	} else if (document.getElementById("startdatepicker").value == "") {
		document.getElementById("startdatepickerSpan").textContent = "*Please Select Date.";
	} else if (document.getElementById("enddatepicker").value == "") {
		document.getElementById("enddatepickerSpan").textContent = "*Please Select Date";
	} else {
		ajaxPost('createCorporateContractForm', '/contractDetails');
	}
}
function onblurCorporateRegistrationForm(){
	document.getElementById("industrytypeSpan").textContent ="";	
}
function onblurEmployeeRegistrationForm(){
	document.getElementById("userTypeSpan").textContent ="";
	document.getElementById("userCategorySpan").textContent ="";
}
function onblurCreateContractForm() {
	document.getElementById("corporateserviceSpan").textContent = "";
	document.getElementById("contractbriefdescriptionSpan").textContent = "";
	document.getElementById("paymenttermSpan").textContent = "";
	document.getElementById("paymentmethodSpan").textContent = "";
	document.getElementById("industrytypeSpan").textContent = "";
	document.getElementById("startdatepickerSpan").textContent = "";
	document.getElementById("enddatepickerSpan").textContent = "";
}


function validateLoginForm() {

	if (document.getElementById("user_Id").value == "") {
		document.getElementById("userIdSpan").textContent = "*User Id Is Required.";
	} else if (document.getElementById("password").value == "") {
		document.getElementById("passwordSpan").textContent = "*Password Is Required.";
	} else {
		//document.getElementById("msg").disabled = true;
		ajaxPost('loginForm', '/loginUser');
	}
}


function onblurLoginForm() {
	//document.getElementById("msg").value = "";
	document.getElementById("userIdSpan").textContent = "";
	document.getElementById("passwordSpan").textContent = "";
}
function validateForgotPassword() {
	if (document.getElementById("forgotPassword").value == "") {
		document.getElementById("forgotPasswordSpan").textContent = "*User Id Is Required.";
	} else {
		document.getElementById("forgotPasswordSpan").textContent = "";
		ajaxPost('forgotPasswordForm', '/forgotpassword');
		$('#forgotModal').hide();
		//$('.modal-backdrop').hide();
		
	}
}
function validateContractIdDetailsForm(){

	if (document.getElementById("hiddenContractId").value =="") {
		document.getElementById("contractIdSpan").textContent = "*Please Select Atleast One Contract ID";
 
	}else {
		ajaxPost('contractIdForm','/getcontractdetails');
		getCorporateDetails();
	}
}

function validateResetPasswordForm() {

	if (document.getElementById("EMail").value == "") {
		document.getElementById("EMail").focus();
		document.getElementById("email").textContent = "*Email Id Is Required.";
	} else if (document.getElementById("Password").value == "") {
		document.getElementById("password").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("Repassword").value == "") {
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*You can't leave this empty.";
	}
	else {
		var str = $("#User_Id").val();
		var str0 = $("#User_Identity").val();
		var str1 = $("#Password").val();
		var str2 = $("#EMail").val();
		var res = str.concat("---"+str0);
		res = res.concat("---"+str1);
		res = res.concat("---"+str2);
		ajaxPost("NOForm", "/resetPasswords/"+res);
		}
}

function validateInviteLawyerForm() {
	if (document.getElementById("UserCategory").value == ""){
		document.getElementById("UserCategory").focus();
		document.getElementById("usercategory").textContent = "*You can't leave this unselected. Please select any one.";
 	} else if (document.getElementById("FirstName").value == "") {
		document.getElementById("FirstName").focus();
		document.getElementById("firstname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("LastName").value == "") {
		document.getElementById("LastName").focus();
		document.getElementById("lastname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("EMail_Id").value == "") {
		document.getElementById("EMail_Id").focus();
		document.getElementById("email").textContent = "*You can't leave this empty.";
	}else {
		ajaxPost('inviteLawyerForm','/inviteLawyer');
	}
}

function validateAddClientForm() {
	if (document.getElementById("UserCategory").value == ""){
		document.getElementById("UserCategory").focus();
		document.getElementById("usercategory").textContent = "*You can't leave this unselected. Please select any one.";
 	} else if (document.getElementById("FirstName").value == "") {
		document.getElementById("FirstName").focus();
		document.getElementById("firstname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("LastName").value == "") {
		document.getElementById("LastName").focus();
		document.getElementById("lastname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("EMail_Id").value == "") {
		document.getElementById("EMail_Id").focus();
		document.getElementById("email").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("Phone_Mobile").value == "") {
		document.getElementById("Phone_Mobile").focus();
		document.getElementById("mobile").textContent = "*You can't leave this empty.";
	}else {
		ajaxPost('addClientForm','/addClient');
	}
}

function validateLawyerInviteRegForm() {
	if (document.getElementById("FirstName").value == "") {
		document.getElementById("FirstName").focus();
		document.getElementById("firstname").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("LastName").value == "") {
		document.getElementById("LastName").focus();
		document.getElementById("lastname").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("PhoneNumber").value == "") {
		document.getElementById("PhoneNumber").focus();
		document.getElementById("mobile").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("Password").value == "") {
		document.getElementById("Password").focus();
		document.getElementById("password").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("Repassword").value == "") {
		document.getElementById("Repassword").focus();
		document.getElementById("repassword").textContent = "*You can't leave this empty.";
	}
	else {
		var inviteInfo = [];
		inviteInfo.push($("#FirstName").val());
		inviteInfo.push($("#LastName").val());
		inviteInfo.push($("#PhoneNumber").val())
		inviteInfo.push($("#Password").val());
		inviteInfo.push($("#UserCategory").val());
		inviteInfo.push($("#EMail").val());
		var res = inviteInfo[0];
		res = res.concat("-"+inviteInfo[1]+"-"+inviteInfo[2]+"-"+inviteInfo[3]+"-"+inviteInfo[4]+"---"+inviteInfo[5]);
		ajaxPost("NoForm", "/postInvitation/"+res);
		}
}

function validateAdminAddService(){
	if (document.getElementById("hiddenServicesCode").value == "") {
		document.getElementById("services_CodeSpan").textContent = "*You have already created this service go to update or choose new service.";
	}  else if (document.getElementById("Rate_BaseRate").value == "") {
		document.getElementById("rate_BaseRateSpan").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Rate_Discount").value == "") {
		document.getElementById("rate_DiscountSpan").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("Rate_ServiceTax").value == "") {
		document.getElementById("rate_ServiceTaxSpan").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Rate_Cess").value == "") {
		document.getElementById("rate_CessSpan").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Rate_Loyality").value == "") {
		document.getElementById("rate_LoyalitySpan").textContent = "*You can't leave this empty.";
	}  else if (document.getElementById("Valid_From").value == "") {
		document.getElementById("valid_FromSpan").textContent = "*Please Select Start Date.";
	} else if (document.getElementById("Valid_To").value == "") {
		document.getElementById("valid_ToSpan").textContent = "*Please Select End Date";
	}else {
		ajaxPost('adminAddCorporateServiceForm','/createCorporateService');
	}
}

function validateAdminAddSla(){
	if (document.getElementById("SlaHour").value == "") {
		document.getElementById("slaHourSpan").textContent = "*Choose Atleast One Sla Hours.";
	}else if (document.getElementById("Rate_BaseRate").value == "") {
		document.getElementById("rate_BaseRateSpan").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Rate_Discount").value == "") {
		document.getElementById("rate_DiscountSpan").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("Rate_ServiceTax").value == "") {
		document.getElementById("rate_ServiceTaxSpan").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Rate_Cess").value == "") {
		document.getElementById("rate_CessSpan").textContent = "*You can't leave this empty.";
	} else if (document.getElementById("Rate_Loyality").value == "") {
		document.getElementById("rate_LoyalitySpan").textContent = "*You can't leave this empty.";
	}  else if (document.getElementById("Valid_From").value == "") {
		document.getElementById("valid_FromSpan").textContent = "*Please Select Start Date.";
	} else if (document.getElementById("Valid_To").value == "") {
		document.getElementById("valid_ToSpan").textContent = "*Please Select End Date";
	}else {
		ajaxPost('adminAddSlaDescriptionForm', '/createSlaDescription');
	}
}

function validateAdminAddScheme(){
	if (document.getElementById("scheme").value == "") {
		document.getElementById("schemeSpan").textContent = "*Choose Atleast One Scheme.";
	}else if (document.getElementById("Scheme_Discount").value == "") {
		document.getElementById("scheme_DiscountSpan").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("Valid_From").value == "") {
		document.getElementById("valid_FromSpan").textContent = "*Please Select Start Date.";
	}else if (document.getElementById("Valid_To").value == "") {
		document.getElementById("valid_ToSpan").textContent = "*Please Select End Date";
	}else {
		ajaxPost('newSchemeForm', '/createScheme');
	}
}
function validateAdminUpdateScheme(){
	if (document.getElementById("scheme").value == "") {
		document.getElementById("schemeSpan").textContent = "*Choose Atleast One Scheme.";
	}else if (document.getElementById("Scheme_Discount").value == "") {
		document.getElementById("scheme_DiscountSpan").textContent = "*You can't leave this empty.";
	}else if (document.getElementById("Valid_From").value == "") {
		document.getElementById("valid_FromSpan").textContent = "*Please Select Start Date.";
	}else if (document.getElementById("Valid_To").value == "") {
		document.getElementById("valid_ToSpan").textContent = "*Please Select End Date";
	}else {
		ajaxPost('updateSchemeForm', '/updateScheme');
	}
}
function onblurAdminAddSlaForm() {
	document.getElementById("slaHourSpan").textContent = "";
	document.getElementById("rate_BaseRateSpan").textContent = "";
	document.getElementById("rate_DiscountSpan").textContent = "";
	document.getElementById("rate_ServiceTaxSpan").textContent = "";
	document.getElementById("rate_CessSpan").textContent = "";
	document.getElementById("rate_LoyalitySpan").textContent = "";
	document.getElementById("valid_FromSpan").textContent = "";
	document.getElementById("valid_ToSpan").textContent = "";
}

function onblurAdminAddSchemeForm() {
	document.getElementById("schemeSpan").textContent = "";
	document.getElementById("scheme_DiscountSpan").textContent = "";
	document.getElementById("valid_FromSpan").textContent = "";
	document.getElementById("valid_ToSpan").textContent = "";
}

function onblurAdminAddServiceForm() {
	document.getElementById("services_CodeSpan").textContent = "";
	document.getElementById("rate_BaseRateSpan").textContent = "";
	document.getElementById("rate_DiscountSpan").textContent = "";
	document.getElementById("rate_ServiceTaxSpan").textContent = "";
	document.getElementById("rate_CessSpan").textContent = "";
	document.getElementById("rate_LoyalitySpan").textContent = "";
	document.getElementById("valid_FromSpan").textContent = "";
	document.getElementById("valid_ToSpan").textContent = "";
}

function validateClientSegmentation(){
	if (document.getElementById("ClientType").value == "") {
		document.getElementById("clientTypeSpan").textContent = "*Choose Atleast One Scheme.";
	}else if (document.getElementById("StartDate").value == "") {
		document.getElementById("startDateSpan").textContent = "*Please Select Time Interval";
	}else if (document.getElementById("EndDate").value == "") {
		document.getElementById("endDateSpan").textContent = "*Please Select Time Interval";
	}else {
		ajaxPost('clientSegmentationForm', '/getClientSegments');
		getLoadScheme();
	}
}
function onblurClientSegmentationForm() {
	document.getElementById("clientTypeSpan").textContent = "";
	document.getElementById("intervalSpan").textContent = "";
}

function ValidateCreateDiligence() {
	var Case_Id=document.getElementById("Diligence_Id").value;
	var Client_Id=document.getElementById("Client_Id").value;
	if (document.getElementById("DiligenceCat").value == "") {
		document.getElementById("diligenceCatSpan").textContent = "please choose Category";
	} else if (document.getElementById("organisationName").value == "") {
		document.getElementById("organisationNameSpan").textContent = "please fill your organisation name";
	} else if (document.getElementById("DiligenceBrief").value == "") {
		document.getElementById("diligenceBriefSpan").textContent = "please enter your Brief";
	} else {
		ajaxPost('createDiligenceForm', '/servicedetails');
	}
	
	
}


function ValidateCreateContract() {
	var Case_Id=document.getElementById("Contract_Id").value;
	var Client_Id=document.getElementById("Client_Id").value;
	if (document.getElementById("ContractCat").value == "") {
		document.getElementById("contractCatSpan").textContent = "please choose Category";
	} else if (document.getElementById("ContractBrief").value == "") {
		document.getElementById("contractBriefSpan").textContent = "please enter your Brief";
	} else {
		ajaxPost('createContractForm', '/servicedetails');
	}
	
	
}


function ManageFileLinkSubmit() {
	
	document.getElementById("clientSpan").textContent = "";
	document.getElementById("clientNameSpan").textContent = "";
	document.getElementById("clientPhoneSpan").textContent = "";
	document.getElementById("clientEmailSpan").textContent = "";
	document.getElementById("requestTypeSpan").textContent = "";
	document.getElementById("requestItemSpan").textContent = "";
	document.getElementById("requestMessageSpan").textContent = "";
	
}

function validateLoginUser(id, spanId, buttonId) {
	var username = document.getElementById(id).value;
	var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	var phonereg = /^[1-9]{1}[0-9]{9}$/;
	if (username == '') {
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		document.getElementById(spanId).textContent = "*You can't leave this empty.";
	} else if (username.match(emailreg)) {
		document.getElementById(buttonId).disabled = false;
		document.getElementById(spanId).textContent = "";
		return true;
	}else if (username.match(phonereg)) {
		document.getElementById(buttonId).disabled = false;
		document.getElementById(spanId).textContent = "";
		return true;
	} else {
		document.getElementById(spanId).textContent = "*Invalid Username!.";
		document.getElementById(buttonId).disabled = true;
		document.getElementById(id).focus();
		return false;
	}
}

function validate(){
	//alert("Validate");
	if (document.getElementById("renewSessionWithPassword").value == "") {
		document.getElementById("PasswordSpan").textContent = "please enter your password";
	} else {
		$("#PasswordSpan").text("");
		var id=null;
		var password=$("#renewSessionWithPassword").val();
		id = $("#client_id").text();
		if (id.slice(0, 1)=='C')
			{
			authenticatePassword(id,password);
			}
		else {
			id = $("#user_id").text();
			if (id.slice(0, 1)=='U')
			{
			authenticatePassword(id,password);
			}
			else {
				
				window.location.href = "";
				}
		}
		
	}
}


function authenticatePassword(id,password){

	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getPassword/' + id,
		success : function(response) {
			var dbPassword = response.result;
			//alert(dbPassword);
			if(password==dbPassword){
				//alert("DashboardService");
				//ajaxPost("NoForm", "/Dashboard/" + id);
				$("#renewSessionWithPassword").val("");
				$('#signInModal').modal({backdrop: 'remove', keyboard: true});
				$("#signInModal").modal('hide');
				startTime();
				
			}
			else{
				$("#PasswordSpan").text("");
				$("#PasswordSpan").text("Invalid Password");
				
			}
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
	
	
}



$('#renewSessionWithPassword').keypress(function(event){
	 if(event.keyCode == 13){
		//$('#PasswordButton').click();
		 event.preventDefault();
	  }
	});
