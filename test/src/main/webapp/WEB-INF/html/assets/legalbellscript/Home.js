 (function($) {
	$.fn.serializeFormJSON = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
})(jQuery);
 
 
 function calculationQuotation(){
	 var grossTotal=0;
	 $("#quoteItems #qrate").each(function(){
	  grossTotal+=parseFloat($(this).val());
	 });
	 $.isNumeric(grossTotal)?1:grossTotal=0;
	 discount=parseFloat($("#discountPer").val());
	 tax=parseFloat($("#percentage").val());
	 $("#grossTotal").val(grossTotal.toFixed(2));
	 $("#discountAmount").val((grossTotal*discount/100).toFixed(2));
	 afterDiscount=grossTotal-(grossTotal*discount/100);
	 $("#afterDiscount").val(afterDiscount.toFixed(2));
	 $("#serviceTax").val((afterDiscount*tax/100).toFixed(2));
	 $("#netTotal").val((afterDiscount+(afterDiscount*tax/100)).toFixed(2));
 }
 
 
 function calculationInvoice(){
	 var grossTotal=0;
	 $("#invoiceItems #irate").each(function(){
	  grossTotal+=parseFloat($(this).val());
	 });
	 $.isNumeric(grossTotal)?1:grossTotal=0;
	 discount=parseFloat($("#discountPerI").val());
	 tax=parseFloat($("#percentageI").val());
	 $("#grossTotalI").val(grossTotal.toFixed(2));
	 $("#discountAmountI").val((grossTotal*discount/100).toFixed(2));
	 afterDiscount=grossTotal-(grossTotal*discount/100);
	 $("#afterDiscountI").val(afterDiscount.toFixed(2));
	 $("#serviceTaxI").val((afterDiscount*tax/100).toFixed(2));
	 $("#netTotalI").val((afterDiscount+(afterDiscount*tax/100)).toFixed(2));
 }

	 $('body').on('keyup','.qrate',function(){
		 calculationQuotation();
	 });
	 
	 $('body').on('keyup','.irate',function(){
		 calculationInvoice();
	 }); 
 
 function populateQPTables(form){
	 jsonData = '';
	 if (form != 'NoForm') {
	 jsonData = JSON.stringify($('#' + form).serializeFormJSON());
	 }
	 var obj = $.parseJSON(jsonData);
	 var q=obj['quotecheck'];
	 var p=obj['invoicecheck'];
	 var str1 = "";
	 var str2 = "";
	 if(q.constructor === Array){
	 //alert("array");
	 for(i=0;i<q.length;i++){
		var qdata=q[i].split(",");
		str1=str1.concat('<tr><td><label>'+1*(i+1)+'</label></td><td><input type="text" name="quoteParticulars" readonly value="'+qdata[1]+'"></td><td><input class="qrate" name="quoteRate" id="qrate" type="text" value="'+qdata[2]+'"></td></tr>'); 
	 }}else{
		 var qdata=q.split(",");
		str1=str1.concat('<tr><td><label>'+1+'</label></td><td><input type="text" name="quoteParticulars" readonly value="'+qdata[1]+'"></td><td><input class="qrate" name="quoteRate" id="qrate" type="text" value="'+qdata[2]+'"></td></tr>'); 
		
	 }
	 
	 if(p.constructor === Array){
	 for(j=0;j<p.length;j++){
		 ///alert("array");
		 var pdata=p[j].split(",");
		 str2=str2.concat('<tr><td><label>'+1*(j+1)+'</label></td><td><input type="text" name="invoiceParticulars" readonly value="'+pdata[1]+'"></td><td><input class="irate" name="invoiceRate" id="irate" type="text" value="'+pdata[2]+'"></td></tr>'); 
	 }}else{
		 var pdata=p.split(",");
		 str2=str2.concat('<tr><td><label>'+1+'</label></td><td><input type="text" name="invoiceParticulars" readonly value="'+pdata[1]+'"></td><td><input class="irate" name="invoiceRate" id="irate" type="text" value="'+pdata[2]+'"></td></tr>'); 
	   
	 }
	 $("#quoteItems").html("");
	 $("#quoteItems").html("<tr><th colspan='3'>Quotation Details</th></tr><tr><th>Sl No.</th><th>Particulars <font color='red'>*</font></th><th>Amount <font color='red'>*</font></th></tr>");
	 $('#quoteItems tr:last').after(str1);
	 $("#invoiceItems").html("");
	 $("#invoiceItems").html("<tr><th colspan='3'>Advance Payment Details</th></tr><tr><th>Sl No.</th><th>Particulars <font color='red'>*</font></th><th>Amount <font color='red'>*</font></th></tr>");
	 $('#invoiceItems tr:last').after(str2);
	 $("#closerate").click();
	 //var result = doAjaxFormPost(jsonData, action);
	 //navigate(result);
 }
function populateForm(jsonObject) {
	$.each(jsonObject, function(name, val) {
		var $el = $('[name="' + name + '"]'), type = $el.attr('type');
		switch (type) {
		case 'checkbox':
			$el.attr('checked', 'checked');
			break;
		case 'radio':
			$el.filter('[value="' + val + '"]').attr('checked', 'checked');
			break;
		default:
			$el.val(val);
		}
	});
	
}
function populateDashboard(jsonObject) {
	$.each(jsonObject, function(name, val) {
		var $el = $('[id="' + name + '"]'); 
		$el.html("");
		$el.html(val);
		
	});
	if(jsonObject.pro_image=="NA"){
			}else{
		document.getElementById("pro_img").src = "data:image/jpg;base64," + jsonObject.pro_image;
	}
	
}
function populateMsg(jsonObject) {
	$.each(jsonObject, function(name, val) {
		var $el = $('[id="' + name + '"]');
		$el.html("");
		$el.html(val);
	});
}
function loadRegistrationPage(){
	$("#pageHeader").html("");
	$("#contentPageHome").html("");
	$("#pageHeader").load("/LegalBell/html/layout/GenericHeader.html");
	$("#contentPageHome").load("/LegalBell/html/contentPages/RegistrationPage.html",function(){
	});		
}
function loadLoginPage(){
	$("#pageHeader").html("");
	$("#pageHeader").load(
	"/LegalBell/html/layout/HomeHeader.html");
	$("#contentPageHome").html("");
	$("#pageHeader").load("/LegalBell/html/layout/HomeHeader.html");
	$("#contentPageHome").load("/LegalBell/html/contentPages/LoginPage.html",function(){
	});		
}
function checkUserIdentity() {
	
	$("#user_Identityf").val($("#user_Identity").val())
}
function clientLoginForm() {
$("#pageHeader").html("");
$("#pageHeader").load(
"/LegalBell/html/layout/HomeHeader.html");
$("#contentPageHome").html("");
$("#contentPageHome").load(
"/LegalBell/html/contentPages/LoginForm.html", function() {
	$("#user_Identity").val("Client");
});
}
function councelLoginForm() {
$("#pageHeader").html("");
$("#pageHeader").load(
		"/LegalBell/html/layout/HomeHeader.html");
$("#contentPageHome").html("");
$("#contentPageHome").load(
"/LegalBell/html/contentPages/LoginForm.html", function() {
$("#user_Identity").val("Counsel");
});
}
function ajaxPost(form, action) {
jsonData = '';
if (form != 'NoForm') {
jsonData = JSON.stringify($('#' + form).serializeFormJSON());
}
console.log(jsonData);
var result = doAjaxFormPost(jsonData, action);
navigate(result);
}
function ajaxPostNew(form, action1, action2) {
var jsonData = '';
if (form == 'adminNewQueryForm') {
var queryResult = doAjaxFormPost(jsonData, action1);
var lawyerResult = doAjaxFormPost(jsonData, action2);
navigateNewQuery(queryResult, lawyerResult);
}
if (form == 'adminNewServiceForm') {
var caseResult = doAjaxFormPost(jsonData, action1);
var lawyerResult = doAjaxFormPost(jsonData, action2);
navigateNewCase(caseResult, lawyerResult);
}
}
function loadContent(url, jsonObject) {
$(".modal-backdrop").remove();
$("#contentPage").html("");
$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
function() {
	populateForm(jsonObject);
});
}
function loadMsgContent(url, jsonObject) {
$(".modal-backdrop").remove();
$("#contentPage").html("");
$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
function() {
	populateMsg(jsonObject);
});
}
function loadLoginPopUpContent(url, jsonObject) {
	$('#displayInvalidDetailsPopup').click();
	populateMsg(jsonObject);
	}
function loadDashboard(url, jsonObject) {
	
if (!($("#client_id").length || $("#user_id").length)) {
	//alert("first log");
$("#pageHeader").html("");
$("#pageHeader").load(
	"/LegalBell/html/layout/" + url + "Header.html",
	function() {
		/*document.getElementById('timer').innerHTML =
			  30 + ":" + 00;
		startTimer();*/
		//startTime();
	    if(jsonObject.lawyer_id != null){
			document.getElementById("switchAccountLink").style.display="block";
		}
		$("#contentPageHome").load(
				"/LegalBell/html/contentPages/" + url + ".html",
				function() {
					populateDashboard(jsonObject);
				});
	});
} else {
	//alert("dashboard");
	$("#pageHeader").html("");
	$("#pageHeader").load(
		"/LegalBell/html/layout/" + url + "Header.html",
		function() {
			//document.getElementById('timer').innerHTML =
				  //30 + ":" + 00;
			//startTimer("1");
			startTime();
			if(jsonObject.lawyer_id != null){
				document.getElementById("switchAccountLink").style.display="block";
			}
$("#contentPageHome").html("");
$("#contentPageHome").load("/LegalBell/html/contentPages/" + url + ".html", function() {
	populateDashboard(jsonObject);
	});
		});
}
}
function loadAjaxErrorPage() {
$("#contentPage").html("");
$("#pageHeader").html("");
$("#contentPage").load("/LegalBell/html/contentPages/ServiceError.html", function() {
});
}
function addIndividual() {
$("#contentPage").html("");
$("#contentPage").load(
"/LegalBell/html/contentPages/AddIndividual.html", function() {
});
}
function addCorporate() {
$("#contentPage").html("");
$("#contentPage").load(
"/LegalBell/html/contentPages/AddCorporate.html");
getCompanyType();
}
function loadGenericPagesOnLogout() {
stopTime();
var token = $("#userToken").text();
$.ajax({
url : '/LegalBell' + '/logoutUser/'+token,
method : 'POST',
success : function(response) {
$("#pageHeader").html("");
$("#pageHeader").load("/LegalBell/html/layout/HomeHeader.html");
$("#footer").html("");
$("#footer").load("/LegalBell/html/layout/GenericFooter.html");
$("#contentPageHome").html("");
$("#contentPageHome").load("/LegalBell/html/contentPages/LoginPage.html", function() {
});
},
error : function() {
loadAjaxErrorPage();
}
});
}
function populateReviewForm(jsonObject) {
	$.each(jsonObject, function(name, val) {
		var $el = $('[name="' + name + '"]'), type = $el.attr('type');
		$el.val(val);
	});
	$("#query_BriefDescription").text(jsonObject.query_BriefDescription);
	var value =  jsonObject.client_Id;
	value = value + "-" + jsonObject.query_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getQueryDesc/' + value,
		success : function(response) {
			var queryDesc = response.result;
			$("#QueryDescription").text("");
			$("#QueryDescription").append(queryDesc);
			
			getUploadedFileDetailsInQueryReview(jsonObject.client_Id,jsonObject.query_Id);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
} 
function populateReviewFormCMD(jsonObject) {
		$.each(jsonObject, function(name, val) {
			var $el = $('[name="' + name + '"]'), type = $el.attr('type');
			$el.val(val);
		});
		var value =  jsonObject.client_Id;
    	value = value + "-" + jsonObject.conciliation_Id;
    	$.ajax({
    		method : 'POST',
    		url : '/LegalBell' + '/getServiceDescription/' + value,
    		success : function(response) {
    			console.log("description");
    			console.log(response);
    			var serviceDesc = response.result;
    			$("#ServiceDescription").html("");
    			$("#ServiceDescription").append(serviceDesc);
    			
    			getUploadedFileDetailsOfService(jsonObject.client_Id, jsonObject.conciliation_Id,
						"ServiceFileHandlerInReview","Temp");
    		},
    		error : function() {
    			loadAjaxErrorPage();
    		}
    	});
	} 
 function populateReviewFormCM(jsonObject) {
		$.each(jsonObject, function(name, val) {
			var $el = $('[name="' + name + '"]'), type = $el.attr('type');
			$el.val(val);
		});
		$("#contract_BriefDescription").html("");
		$("#contract_BriefDescription").append(jsonObject.contract_BriefDescription);
		var value =  jsonObject.client_Id;
    	value = value + "-" + jsonObject.contract_Id;
    	$.ajax({
    		method : 'POST',
    		url : '/LegalBell' + '/getServiceDescription/' + value,
    		success : function(response) {
    			console.log("description");
    			console.log(response);
    			var serviceDesc = response.result;
    			$("#ServiceDescription").html("");
    			$("#ServiceDescription").append(serviceDesc);
    			
    			getUploadedFileDetailsOfService(jsonObject.client_Id, jsonObject.contract_Id,
						"ServiceFileHandlerInReview","Temp");
    		},
    		error : function() {
    			loadAjaxErrorPage();
    		}
    	});
	}
 function loadResponseDetails(url,jsonObject)
 {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
		$("#QueryDescription1").html("");
		$("#QueryDescription1").html(jsonObject.query_Description);
		$("#clientId").val(jsonObject.client_Id);
		$("#queryCategory").val(jsonObject.query_Category);
		$("#queryId").val(jsonObject.query_Id);
		$("#queryIda").val(jsonObject.query_Id);
		$("#clientIda").val(jsonObject.client_Id);
		$("#querySubCategory").val(jsonObject.query_SubCategory);
		$("#queryBriefDescription").text(jsonObject.query_BriefDescription);
		});
	}
 function loadReviewContent(url, jsonObject) {
		$("#contentPage").html("");
		$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
				function() {
			if(url=="LegalAdvisoryReview" || url=="TaxAdvisoryReview"){
					populateReviewForm(jsonObject);}
			else if(url=="ConciliationMediationReview"){
				populateReviewFormCMD(jsonObject);
			}else if(url=="ContractManagementReview"){
				populateReviewFormCM(jsonObject);
			}else if(url=="DisputeResolutionReview"){
				populateReviewFormDR(jsonObject);
			}
             else if(url=="DueDiligenceReview"){
				populateReviewFormDD(jsonObject);
			}
		});
	} 
$(window).bind('beforeunload',function(){
		//alert("your session will be closed instantly");
		loadGenericPagesOnLogout();
});
function loadPage(target,page){
		$("#"+target).html("");
		$("#"+target).load(
		"/LegalBell/html/contentPages/"+page+".html",function(){
			$("#UserId").val($("#Id").val());
			$("#Password").val($("#ps").val());
			$("#LawyerId").val($("#lId").val());
			var LID = $("#lId").val();
			//alert(LID);
			if(LID != ""){
				$("#"+target).html("");
				$("#msgAlreadyCreated").text("You have Already Been Registered as Lawyer");
			}
		});
		}
function createGenericAttachment(target,page){
$("#"+target).html("");
$("#"+target).load(
"/LegalBell/html/contentPages/"+page+".html",function(){
	$("#QueryId").val($("#queryId").val());
	$("#ClientId").val($("#clientId").val());
});
}
function createGenericAttachmentContract(target,page){
	$("#"+target).html("");
	$("#"+target).load(
	"/LegalBell/html/contentPages/"+page+".html",function(){
		$("#ContractId").val($("#contractId").val());
		$("#ClientId").val($("#clientId").val());
	});
	}
function createGenericAttachmentContractR(target,page){
	$("#"+target).html("");
	$("#"+target).load(
	"/LegalBell/html/contentPages/"+page+".html",function(){
		$("#ContractId").val($("#contractIdR").val());
		$("#ClientId").val($("#clientIdR").val());
	});
	}
function createGenericAttachmentTask(target,page){
	$("#"+target).html("");
	$("#"+target).load(
	"/LegalBell/html/contentPages/"+page+".html",function(){
		$("#TaskId").val($("#taskId").val());
		$("#CaseId").val($("#caseId").val());
		$("#ClientId").val($("#clientId").val());
	});
	}
function createGenericAttachmentConciliation(target,page){
	$("#"+target).html("");
	$("#"+target).load(
	"/LegalBell/html/contentPages/"+page+".html",function(){
		$("#ConciliationId").val($("#conciliationId").val());
		$("#ClientId").val($("#clientId").val());
	});
	}
function loadClientFeeQuoteDataInTable(elementid,identifier,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		var paramInfo = [];
		paramInfo.push($("#client_id").text());
		paramInfo.push(identifier);
	ajaxPost("NoForm", "/"+url+".web/" + paramInfo);
	}
}
function redirectToDashBoard(){
	if($("#client_id").text()==''){
		var user_id = $("#user_id").text();
		ajaxPost("NoForm", "/Dashboard/" + user_id);
	}else{
		var client_id = $("#client_id").text();
		ajaxPost("NoForm", "/Dashboard/" + client_id);
	}
}
function populateReviewFormDR(jsonObject) {
	$.each(jsonObject, function(name, val) {
		var $el = $('[name="' + name + '"]'), type = $el.attr('type');
		$el.val(val);
	});
	$("#dispute_Brief").html("");
	$("#dispute_Brief").append(jsonObject.dispute_BriefDescription);
	getCaseDescriptionInClientpopUp(jsonObject.client_Id, jsonObject.dispute_Id);
	getUploadedFileDetailsOfCase(jsonObject.client_Id, jsonObject.dispute_Id,
			"CaseFileHandlerInReview","Temp");
}
function populateReviewFormDD(jsonObject) {
	$.each(jsonObject, function(name, val) {
		var $el = $('[name="' + name + '"]'), type = $el.attr('type');
		$el.val(val);
	});
	$("#diligence_Brief").html("");
	$("#diligence_Brief").append(jsonObject.diligence_BriefDescription);
	getServiceDescriptionInClientpopUp(jsonObject.client_Id, jsonObject.diligence_Id);
	getUploadedFileDetailsOfService(jsonObject.client_Id, jsonObject.diligence_Id,
			"ServiceFileHandlerInReview","Temp");
}
function loadMsgContent1(url, jsonObject) {
	$(".modal-backdrop").remove();
	$("#contentPageHome").html("");
	$("#contentPageHome").load("/LegalBell/html/contentPages/" + url + ".html",
	function() {
		populateMsg(jsonObject);
	});
	}
function loadDocListInTable(elementid,identifier,status,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		var user_id = $("#client_id").text();
		var info=user_id.concat(","+identifier);
		info=info.concat(","+status);
		ajaxPost("NoForm", "/"+url+".web/" + info);
	}
}
function loadDocListOfLawyerInTable(elementid,identifier,status,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		var user_id = $("#user_id").text();
		var info=user_id.concat(","+identifier);
		info=info.concat(","+status);
		ajaxPost("NoForm", "/"+url+".web/" + info);
	}
}


function loadTabContent(url, jsonObject) {
	$(".modal-backdrop").remove();
	openTab(url,jsonObject);
	}


function openTab(tabName,jsonObject) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    populateForm(jsonObject);
}
function openReviewTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    
}

function openPreviousTab(tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    
}

function loadTabReviewContent(url, jsonObject) {
	    openReviewTab(url);
		if(url=="LegalAdvisoryReview" || url=="TaxAdvisoryReview"){
				populateReviewForm(jsonObject);}
		else if(url=="ConciliationMediationReview"){
			populateReviewFormCMD(jsonObject);
		}else if(url=="ContractManagementReview"){
			populateReviewFormCM(jsonObject);
		}else if(url=="DisputeResolutionReview"){
			populateReviewFormDR(jsonObject);
		}else if(url=="LegalNoticeReview"){
			populateReviewFormLegalNotice(jsonObject);
		}else if(url=="DueDiligenceReview"){
			populateReviewFormDD(jsonObject);
		}



			
}

function openPreviousTabFromContractReview(category){
	
	var i, tabcontent,tabName;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    if(category=="Draft"){
    	tabName="UploadContractSupportingFile";	
    }
    else{
    	tabName="UploadContractFile";
    }
    //alert(tabName);
    document.getElementById(tabName).style.display = "block";
	
}



function openRateChartTab(tabName,jsonObject) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    loadQueryRateChartTable(tabName,jsonObject);
}

function openRateChart(url,jsonObject) {
	var selectedSla=jsonObject.qry.sla;
	$("#fixedquery").val(jsonObject.qry.query_Id);
	
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
    loadQueryRateChartTable(jsonObject);
	});
}


function loadQueryRateChartTable(tabName,jsonObject) {
	if(tabName=="LNRateChart"){
		var selectedSla=jsonObject.notice.sla;
		$("#fixedquery").val(jsonObject.notice.notice_Id);
	  }
	else{
		var selectedSla=jsonObject.qry.sla;
		$("#fixedquery").val(jsonObject.qry.query_Id);
	}
		$("#slatable").dataTable().fnDestroy(); 
					$("#slatable").dataTable({
						dom: 'lBfrtip',
				        buttons: [
				            'copyHtml5',
				            'excelHtml5',
				            'pdfHtml5'
				        ],
						"bProcessing" : true,
						"sort" : "position",
						"bStateSave" : false,
						"iDisplayLength" : 5,
						"iDisplayStart" : 0,
						"aaData" : jsonObject.aaData,
						"aoColumns" : [
										{
											"mData" : null,
											render : function(data,
													type, full,
													meta) {
												if(selectedSla==data.sla_Id){
												return '<input type="radio" name="slaId" checked="checked" value="'
														+ data.sla_Id+"-"+data.rate
														+ '">';
												}
												else{
												return '<input type="radio" name="slaId"  value="'
														+ data.sla_Id+"-"+data.rate
														+ '">';
														}
											}
										},
										{
											"data" : null,
											"bSortable" : false,
											"mRender" : function(
													data, type,
													full, meta) {
												return data.sla
														
											}
										},
										{
											"data" : null,
											"bSortable" : false,
											"mRender" : function(
													data, type,
													full, meta,row) {
												return "Base Rate " +data.baseRate+
													   "\nService Tax " +data.serviceTax+"%"+
													   "\nCess "+data.cess+"%"+
													   "\nDiscount "+data.discount+"%"
											}
										},

										{
											"data" : null,
											"bSortable" : false,
											"mRender" : function(
													data, type,
													full, meta) {
												return data.rate
														
											}
										}

								]
					});
				
		}

function notSure(value,categoryId,hiddenCategoryId,subcategoryId,hiddenSubcategoryId){
	$("#"+categoryId).val("");
	$("#"+subcategoryId).val("");
	$("#"+hiddenCategoryId).val(value);
	$("#"+hiddenSubcategoryId).val(value);
	
}

function uncheck(id){
	if($('#'+id).val()!='' || $('#'+id).val()!= null){
		$('#notsure').attr('checked',false);
	}
}


/*function loadRosterTable(url, jsonObject) {

	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
		$("#rosterDataTable").dataTable().fnDestroy(); 
		$('#rosterDataTable').DataTable( {
	        data: jsonObject,
	       columns: [
                  {   "class":          "details-control",
                      "orderable":      false,
                      "data":           null,
                      "defaultContent": "",
                   }
	        ],
	      columnDefs: [
	                   
	              
	                      {   "targets": 5,
	                           "data": null, 
	                            "defaultContent": "<input  class='btn btn-blue'  value='Details'/>"
	                        }
	       ]
	     
	    } );
			});
}*/

function populateReviewFormLegalNotice(jsonObject) {
	$.each(jsonObject, function(name, val) {
		var $el = $('[name="' + name + '"]'), type = $el.attr('type');
		$el.val(val);
	});
	$("#dispute_Brief").html("");
	$("#dispute_Brief").append(jsonObject.notice_BriefDescription);
	getCaseDescriptionInClientpopUp(jsonObject.client_Id, jsonObject.notice_Id);
	getUploadedFileDetailsOfCase(jsonObject.client_Id, jsonObject.notice_Id,
			"CaseFileHandlerInReview","Temp");
}

function ajaxPostNewLegalNotice(form, action1, action2) {
	var jsonData = '';
	if (form == 'adminNewLegalNoticeForm') {
	var legalNoticeResult = doAjaxFormPost(jsonData, action1);
	var lawyerResult = doAjaxFormPost(jsonData, action2);
	navigateNewLegalNotice(legalNoticeResult, lawyerResult);
	}

	}

function loadLegalNoticeResponseDetails(url,jsonObject)
{
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
		$("#LegalNoticeDescription1").html("");
		$("#LegalNoticeDescription1").html(jsonObject.notice_Description);
		$("#clientId").val(jsonObject.client_Id);
		$("#noticeId").val(jsonObject.notice_Id);
		$("#noticeIda").val(jsonObject.notice_Id);
		$("#clientIda").val(jsonObject.client_Id);
		$("#noticeBriefDescription").text(jsonObject.notice_BriefDescription);
		});
	}

function createGenericAttachmentLegalNotice(target,page){
	$("#"+target).html("");
	$("#"+target).load(
	"/LegalBell/html/contentPages/"+page+".html",function(){
		$("#NoticeId").val($("#noticeId").val());
		$("#ClientId").val($("#clientId").val());
	});
	}

function loadMessageInPopup(jsonObject) {
	$("#address").val(jsonObject.client.address);
	$("#city").val(jsonObject.client.city);
	$("#postalCode").val(jsonObject.client.postalCode);
	$("#country").val(jsonObject.client.country);
	$("#state").val(jsonObject.client.state);
	$("#phone").val(jsonObject.client.phone);
	$("#email").val(jsonObject.client.email);
	$("#merchantSpan").text("");
	 if($("#IndividualLink").is(":visible")){
		$("#IndividualLink").css("display","none");
     } else if($("#CorporateLink").is(":visible")){
		$("#CorporateLink").css("display","none");
     }else{
    	 
     }
	$("#hiddenMessagePopup").click();
	populateMsg(jsonObject.status);
	
	}




function loadRosterTable(url, jsonObject) {
console.log(jsonObject);
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
		$("#rosterDataTable").dataTable().fnDestroy(); 
		$('#rosterDataTable').DataTable( {
			dom: 'lBfrtip',
	        buttons: [
	            /*'copyHtml5',
	            'excelHtml5',
	            'pdfHtml5'*/
	        ],
	        "order": [[ 0, "desc" ]],
			"bProcessing" : true,
			"sort" : "position",
			"bStateSave" : false,
			"iDisplayLength" : 5,
			"iDisplayStart" : 0,
			"aaData" : jsonObject.bbData,
			"aoColumns" : [ {
				"width": "50%",
				"mData" : "clientName"
			},{
				"width": "20%",
				"className": "details-control",
				"mData" : "action"
			}
			]
	     
	    } );
			});
}



/*function loadRosterTableClient(url, jsonObject) {
	console.log(jsonObject);
		$("#contentPage").html("");
		$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
				function() {
			$("#rosterDataTable").dataTable().fnDestroy(); 
			$('#rosterDataTable').DataTable( {
				dom: 'lBfrtip',
		        buttons: [
		            'copyHtml5',
		            'excelHtml5',
		            'pdfHtml5'
		        ],
		        "order": [[ 0, "desc" ]],
				"bProcessing" : true,
				"sort" : "position",
				"bStateSave" : false,
				"iDisplayLength" : 5,
				"iDisplayStart" : 0,
				"aaData" : jsonObject.bbData,
				"aoColumns" : [ {
					"width": "20%",
					"mData" : "serviceName"
				},{
					"width": "40%",
					"mData" : "serviceBriefDescription"
				},{
					"width": "20%",
					"mData" : "serviceStatus"
				},{
					"width": "20%",
					"mData" : "action"
				}
				]
		     
		    } );
				});
	}

*/

function loadRosterTableClient(url, jsonObject) {
	console.log(jsonObject);
		$("#contentPage").html("");
		$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
				function() {
			$("#rosterDataTableClient").dataTable().fnDestroy(); 
			$('#rosterDataTableClient').DataTable( {
				"order": [[ 0, "desc" ]],
				"bProcessing" : true,
				"sort" : "position",
				"bStateSave" : false,
				"iDisplayLength" : 5,
				"iDisplayStart" : 0,
				"aaData" : jsonObject.bbData,
				"aoColumns" : [ {
					"width": "50%",
					"mData" : "serviceName"
				},{
					"width": "20%",
					"className": "details-client-control",
					"mData" : "action"
				}
				]
		     
		    } );
				});
	}
