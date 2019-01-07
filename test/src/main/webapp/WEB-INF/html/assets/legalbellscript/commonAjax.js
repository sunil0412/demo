$(document).ajaxStart(function(){
	document.getElementById('timer').innerHTML =
		  30 + ":" + 00;
    $("#loaderModal").show();
    window.scrollTo(0,0);
    });
 
$(document).ajaxStop(function(){
	$("#loaderModal").hide();
     });

function doAjaxFormPost(jsonString, action) {
	var returnObj = null;
	$.ajax({
		type : 'POST',
		contentType : 'application/json',
		accept : 'application/json',
		dataType : 'json',
		data : jsonString,
		async : false,
		cache : false,
		processData : false,
		url : '/LegalBell' + action,
		beforeSend: function (request)
        {
			request.setRequestHeader("token", $("#userToken").text());
        },
		success : function(response) {
			console.log(response);
			returnObj = response.result;
		},
		error : function(response) {
			console.log(response);
			loadAjaxErrorPage();
		}
	});
	return returnObj;
}
function loadMerchantPage(page,data){
	var vUrl = '/LegalBell/paytmCheckOut';
	var vWindowName = 'PrintReport';
	var newWindow = window.open('' + vUrl + '', '' + vWindowName + '', width=1010, height=750);
	$(newWindow).load(function(){
		newWindow.document.getElementById('CHECKSUMHASH').value =data.CHECKSUMHASH;
		newWindow.document.getElementById('CHANNEL_ID').value =data.CHANNEL_ID;
		newWindow.document.getElementById('CUST_ID').value =data.CUST_ID;
		newWindow.document.getElementById('EMAIL').value =data.EMAIL;
		newWindow.document.getElementById('INDUSTRY_TYPE_ID').value =data.INDUSTRY_TYPE_ID;
		newWindow.document.getElementById('MID').value =data.MID;
		newWindow.document.getElementById('MOBILE_NO').value =data.MOBILE_NO;
		newWindow.document.getElementById('ORDER_ID').value =data.ORDER_ID;
		newWindow.document.getElementById('TXN_AMOUNT').value =data.TXN_AMOUNT;
		newWindow.document.getElementById('WEBSITE').value =data.WEBSITE;
		newWindow.document.getElementById('CALLBACK_URL').value =data.CALLBACK_URL;
		newWindow.document.getElementById('payForm').submit();
	});
}
function loadMerchantPage1(page,data){
	var vUrl = 'http:legalbell.custoslegisonline.com:8080/LegalBell/hdfcCheckOut';
	var vWindowName = 'PrintReport1';
	var newWindow = window.open('' + vUrl + '', '' + vWindowName + '', width=1010, height=750);
	$(newWindow).load(function(){
		console.log(data);
		newWindow.document.getElementById('secure_hash').value =data.secure_hash;
		newWindow.document.getElementById('account_id').value =data.account_id;
		newWindow.document.getElementById('channel').value =data.channel;
		newWindow.document.getElementById('description').value =data.description;
		newWindow.document.getElementById('currency').value =data.currency;
		newWindow.document.getElementById('return_url').value =data.return_url;
		newWindow.document.getElementById('mode').value =data.mode;
		newWindow.document.getElementById('algo').value =data.algo;
		newWindow.document.getElementById('reference_no').value =data.reference_no;
		newWindow.document.getElementById('amount').value =data.amount;
		newWindow.document.getElementById('name').value =data.name;
		newWindow.document.getElementById('address').value =data.address;
		newWindow.document.getElementById('city').value =data.city;
		newWindow.document.getElementById('state').value =data.state;
		newWindow.document.getElementById('postal_code').value =data.postal_code;
		newWindow.document.getElementById('country').value =data.country;
		newWindow.document.getElementById('phone').value =data.phone;
		newWindow.document.getElementById('email').value =data.email;
		newWindow.document.getElementById('ship_name').value =data.ship_name;
		newWindow.document.getElementById('ship_address').value =data.ship_address;
		newWindow.document.getElementById('ship_city').value =data.ship_city;
		newWindow.document.getElementById('ship_state').value =data.ship_state;
		newWindow.document.getElementById('ship_country').value =data.ship_country;
		newWindow.document.getElementById('ship_phone').value =data.ship_phone;
		newWindow.document.getElementById('ship_postal_code').value =data.ship_postal_code;
		newWindow.document.getElementById('order').submit();
	});
}
function navigateNewQuery(queryresult, lawyerresult) {
	var url = queryresult.viewName;
	loadMultipleTable(url, queryresult.model.command.aaData,
			lawyerresult.model.command.aaData);
}
function navigateNewCase(caseresult, lawyerresult) {
	var url = caseresult.viewName;
	loadMultipleTable(url, caseresult.model.command.aaData,
			lawyerresult.model.command.aaData);
}
function navigateNewDueDiligence(diligenceresult, lawyerresult) {
	var url = diligenceresult.viewName;
	loadAdminNewDiligenceTable(url, diligenceresult.model.command.aaData,
			lawyerresult.model.command.aaData);
}
function navigateNewConciliationMediation(conciliationresult, lawyerresult) {
	var url = conciliationresult.viewName;
	loadAdminNewConciliationTable(url, conciliationresult.model.command.aaData,
			lawyerresult.model.command.aaData);
}
function navigateNewContractManagement(contractresult, lawyerresult) {
	var url = contractresult.viewName;
	loadAdminNewContractTable(url, contractresult.model.command.aaData,
			lawyerresult.model.command.aaData);
}


function navigate(result) {
	console.log("navigate");
	console.log(result);
	var url = result.viewName;
	if (url.includes('Profile')) {
		loadDashboard(url, result.model.command);
	}else if (url == "popUpUpdateClient") {
		loadClientDetailsInPopup(result.model.command);
	}else if (url == "GenericTable" || url == "GenericTable2" || 
			url == "GenericTable3"  || url == "GenericTable4"|| 
			url == "GenericTable5"  || url == "GenericTable6"|| 
			url == "GenericTable10" || url == "GenericTable11"|| 
			url == "GenericTable8"  || url == "GenericTable9"|| 
			url == "GenericTable12" || url == "GenericTable13"|| 
			url == "GenericTable14" || url == "GenericTable15"|| 
			url == "GenericTable16" || url == "GenericTable17" ||
			url == "GenericTable18" || url == "GenericTable19"||
			url == "GenericTable7"  || url == "GenericTable21"||
			url == "GenericTable22" || url == "GenericTable23"||
			url == "GenericTable24") {
		loadGenericTable(url, result.model.command.aaData);
	}else if (url == "GenericTableLegalnoticeReport") {
		loadGenericTableLegalNoticeReport(url, result.model.command.aaData);
	}else if (url=="DisplayResponseLegalNoticeAdmin") {
		loadResponseLegalNoticeAdmin(url, result.model.command);			
	}else if (url=="LegalNoticeResponse") {
		loadLegalNoticeResponseDetails(url, result.model.command);
	}else if (url=="DisplayLegalNoticeDetails") {
		loadLegalNoticeDetails(url, result.model.command);
	}else if (url == "PostToPaytm") {
		loadMerchantPage(url, result.model.command);
	}else if (url == "PostToHDFC") {
		loadMerchantPage1(url, result.model.command);
	} else if (url == "SolvedCase") {
		loadSolvedCaseTable(url, result.model.command.aaData);
	}else if (url == "GenericTableReport") {
		loadGenericTableReport(url, result.model.command.aaData);
	}else if (url == "SolvedContractManagement") {
		loadClientSolvedCMTable(url, result.model.command.aaData);
	} else if (url == "ClosedDisputeResolutionLawyer") {
		loadLawyerClosedDRTable(url, result.model.command.aaData);
	}/*else if (url == "ClosedConciliationMediationLawyer") {
		loadLawyerClosedCMDTable(url, result.model.command.aaData);
	}*/else if (url == "ClosedDueDiligenceLawyer") {
		loadLawyerClosedDDTable(url, result.model.command.aaData);
	}else if (url == "PendingCMApprovalAdmin") {
		loadPendingCMAdmin(url, result.model.command.aaData);
	}/*else if (url == "PendingCMDApprovalAdmin") {
		loadPendingCMDAdmin(url, result.model.command.aaData);
	}*/else if (url == "PendingCMApprovalLawyer") {
		loadPendingCMLawyer(url, result.model.command.aaData);
	}/*else if (url == "PendingCMDApprovalLawyer") {
		loadPendingCMDLawyer(url, result.model.command.aaData);
	}else if (url=="CreateLegalAdvisory" || url=="CreateTaxAdvisory") {
		loadQueryContent(url, result.model.command);
	}*/else if (url=="ToggleLegalAdvisory" || url=="ToggleTaxAdvisory") {
		loadQueryContent(url, result.model.command);
	}else if (url=="UpdateLegalAdvisory" || url=="UpdateTaxAdvisory") {
		loadUpdateQueryContent(url, result.model.command);
	}/*else if (url=="TARateChart" || url=="LARateChart") {
		loadRateChartTable(url, result.model.command);
	}*/else if (url=="TARateChart" || url=="LARateChart"|| url=="LNRateChart") {
		openRateChartTab(url, result.model.command);
	} else if (url=="TARateChartU" || url=="LARateChartU"||url=="LNRateChartU") {
		loadRateChartTable(url, result.model.command);
	} 
 else if (url=="ToggleDisputeResolution") {
		loadDisputeResolutionContent(url, result.model.command);
	}else if (url=="ToggleContractManagement") {
		loadContractManagementContent(url, result.model.command);
	}/*else if (url=="CreateConciliationMediation") {
		loadConciliationMediationContent(url, result.model.command);
	}*/else if (url=="NewQueryReport") {
		loadNewQueryReport(url, result.model.command.aaData);
	}else if (url=="ProgressQueryReport") {
		loadProgressQueryReport(url, result.model.command.aaData);
	}else if (url=="SolvedQueryReport") {
		loadSolvedQueryReport(url, result.model.command.aaData);
	}else if (url=="NewCaseReport") {
		loadNewCaseReport(url, result.model.command.aaData);
	}else if (url=="ProgressCaseReport") {
		loadProgressCaseReport(url, result.model.command.aaData);
	}else if (url=="SolvedCaseReport") {
		loadSolvedCaseReport(url, result.model.command.aaData);
	}else if (url=="ContractIdDetails") {
		loadContractIdDetails(url,result.model.command.contractIdMap);
	}else if (url=="LawyerInfo") {
		setLawyerInfo(result.model.command);
	}else if (url == "NewTaskAdmin") {
		loadAdminNewTaskTable(url, result.model.command.aaData);
	} else if (url == "ProgressTaskAdmin") {
		loadAdminProgressTaskTable(url, result.model.command.aaData);
	} else if (url == "SolvedTaskAdmin") {
		loadAdminSolvedTaskTable(url, result.model.command.aaData);
	}else if (url == "TaskAssignToLawyer") {
		loadTaskAssignToLawyerTable(url, result.model.command.aaData);
	}else if (url == "NewTaskLawyer") {
		loadNewTaskLawyerTable(url, result.model.command.aaData);
	}else if (url == "ProgressTaskLawyer") {
		loadProgressTaskLawyerTable(url, result.model.command.aaData);
	}else if (url == "SolvedTaskLawyer") {
		loadSolvedTaskLawyerTable(url, result.model.command.aaData);
	}else if (url=="AdminClientReport") {
		loadAdminClientReport(url, result.model.command.aaData);
	}else if (url=="displayassignedCasePopup") {
		loadAssignCaseDetailsByLwyrId(url, result.model.command.aaData);
	}else if (url=="displayassignedQueryPopup") {
		loadAssignQueryDetailsByLwyrId(url, result.model.command.aaData);
	}else if (url=="displayassignedCsePopup") {
		loadAssignCaseDetailsByLwyrIdNewQueryAdmin(url, result.model.command.aaData);
	}else if (url=="displayassignedQryPopup") {
		loadAssignQueryDetailsByLwyrIdNewQueryAdmin(url, result.model.command.aaData);
	}else if (url=="DisplayQueryDetails") {
		loadQueryDetails(url, result.model.command);
	}else if (url=="DisplayResponseQueryAdmin") {
		loadResponseQueryAdmin(url, result.model.command);			
	}else if (url=="DisplayResponseCMAdmin") {
		loadResponseCMAdmin(url, result.model.command);			
	}else if (url=="DisplayResponseCMDAdmin") {
		loadResponseCMDAdmin(url, result.model.command);			
	}else if (url=="DisplaySelectedCaseDetailsNewQueryAdmin") {
		loadSelectedCaseDetailsNewQueryAdmin(url, result.model.command);
	}else if (url=="DisplaySelectedQueryDetailsNewCaseAdmin") {
		loadSelectedQueryDetailsNewCaseAdmin(url, result.model.command);
	}else if (url=="DisplaySelectedClientDetailsInAdmin") {
		loadSelectedClientDetailsInClientReportAdmin(url, result.model.command);
	}else if (url=="displayCaseAndCommentDetails") {
		loadCaseAndCommentDetails(url, result.model.command);
	}else if (url=="DisplayDisputeDetails") {
		loadDisputeDetails(url, result.model.command);
	}else if (url=="DisplayContractDetails") {
		loadContractDetails(url, result.model.command);
	}else if (url=="DisplayDiligenceDetails") {
		loadDiligenceDetails(url, result.model.command);
	}else if (url=="DisplayConciliationDetails") {
		loadConciliationDetails(url, result.model.command);
	}else if (url=="DisplayTaskDetails") {
		loadSelectedTaskDetails(url, result.model.command);
	}else if (url=="DueInvoices") {
		loadDueInvoicesClientTable(url, result.model.command);
	}else if (url=="ClosedInvoices") {
		loadClosedInvoicesClientTable(url, result.model.command);
	}else if (url=="NewFeeQuote") {
		loadNewQuotationClientTable(url, result.model.command);
	}else if (url=="ClosedFeeQuote") {
		loadClosedQuotationClientTable(url, result.model.command);
	}else if (url=="DueInvoicesAdmin") {
		loadDueInvoicesAdminTable(url, result.model.command);
	}else if (url=="ClosedInvoicesAdmin") {
		loadClosedInvoicesAdminTable(url, result.model.command);
	}else if (url=="NewDraftLawyer") {
		loadNewDraftLawyerTable(url, result.model.command);
	}else if (url=="NewDraftAdmin") {
		loadNewDraftAdminTable(url, result.model.command);
	}else if (url=="ApprovedDraftLawyer") {
		loadApprovedDraftLawyerTable(url, result.model.command);
	}else if (url=="ApprovedDraftAdmin") {
		loadApprovedDraftAdminTable(url, result.model.command);
	}else if (url=="InReviewDraftLawyer") {
		loadInReviewDraftLawyerTable(url, result.model.command);
	}else if (url=="InReviewDraftAdmin") {
		loadInReviewDraftAdminTable(url, result.model.command);
	}else if (url=="DisplayClosedRequestDetails") {
		loadDisplayClosedRequestDetails(url, result.model.command);
	}else if (url=="DueInvoicesLwrbyAdmin") {
		loadDueInvoicesLwrbyAdminTable(url, result.model.command);
	}else if (url=="CorporateContractService") {
		loadServiceRateChartTable(url, result.model.command.aaData);
	}else if (url == "InReviewContractAdmin") {
		loadInReviewContractAdminTable(url, result.model.command.aaData);
	}else if (url == "InReviewContractClient") {
		loadInReviewContractClientTable(url, result.model.command.aaData);
	}else if (url == "ShowSelectedReviewContractDetailsForm") {
		loadSelectedReviewContractDetailsTable(url, result.model.command);
	}else if (url == "InProgressContractAdmin") {
		loadInProgressContractAdminTable(url, result.model.command.aaData);
	}else if (url=="Quotation") {
		loadQuotationPage(url, result.model.command);
	}else if (url=="QuotationReview") {
		populateQuotation(url,result.model.command);
	}else if (url=="FeeQuoteReview") {
		populateQuotation(url,result.model.command);
	}else if (url=="Invoice") {
		loadInvoicePage(url, result.model.command);
	}else if (url=="Draft") {
		loadInvoicePage(url, result.model.command);
	}else if (url=="ManageFileLawyer") {
		loadManageFilePage(url, result.model.command);
	}else if (url=="InvoiceReview") {
		populateInvoice(url,result.model.command);
	}else if (url=="DraftReview") {
		populateDraft(url,result.model.command);
	}else if (url=="ContractReview") {
		loadContractReviewPage(url, result.model.command);
	}else if (url=="UpdateContractReview") {
		loadContractReviewPage(url, result.model.command);
	}else if (url=="UpdateCorporateContract") {
		loadSelectedServiceRateChartTable(url, result.model.command);
	}else if (url=="AdminUpdateSlaDescription") {
		loadAllSlaList(url,result.model.command.slaListMap);
	}else if (url=="AdminUpdateCorporateService") {
		loadAllCorporateServiceList(url,result.model.command.serviceListMap);
	}else if (url == "InProgressContractClient") {
		loadInProgressContractClientTable(url, result.model.command.aaData);
	}else if (url == "DocumentRequestByLawyer") {
		loadReqDocumentsByLawyerTable(url, result.model.command.aaData);
	}else if (url == "ClosedRequestedDocumentByLawyer") {
		loadclosedReqDocumentsByLawyerTable(url, result.model.command.aaData);
	}else if (url=="AdminRemoveSlaDescription") {
		loadAllSlaList(url,result.model.command.slaListMap);
	}else if (url=="AdminRemoveCorporateService") {
		loadAllCorporateServiceList(url,result.model.command.serviceListMap);
	}else if (url=="AdminAddCorporateService") {
		loadServiceCategoryList(url,result.model.command.serviceCategoryListMap);
	}else if (url=="RequestedTable") {
		loadRequestDetailsTable(url, result.model.command.aaData);
	}else if (url=="RequestedTableClosed") {
		loadRequestDetailsClosedTable(url, result.model.command.aaData);
	}else if (url=="UpcomingHearing") {
		loadUpcomingHearingTable(url, result.model.command.aaData);
	}else if (url == "ShowTaskDetailsForm") {
		loadShowTaskDetailsPopup(url, result.model.command);
	}else if (url=="CloseCaseRequestLawyer") {
		loadCaseClosurePage(url, result.model.command);
	}else if (url=="CloseCaseRequestAdmin") {
		loadCloseCaseRequestAdminTable(url, result.model.command.aaData);
	}else if (url=="UpdateScheme") {
		loadAllSchemeList(url,result.model.command.schemeListMap);
	}else if (url=="ClientSegmentation") {
		loadClientSegmentTable(url, result.model.command.aaData);
	}else if (url=="InvoiceConfirmed") {
		loadMsgContent(url, result.model.command);
	}else if (url=="AppMsgA"  || url=="AppMsgH" || url=="AppMsgOTP" || url=="DueDiligenceFeeQuote" || url=="DisputeResolutionFeeQuote" || url=="ConciliationMediationFeeQuote" || url=="ContractManagementFeeQuote") {
		loadMsgContent(url, result.model.command);
	}else if (url=="AppMsg" || url=="AppMsgB") {
		loadMsgContent1(url, result.model.command);
	}
else if (url=="UploadTaskDocument") {
		loadTaskUpload(url, result.model.command);
	}else if (url=="LoginForm") {
		loadLoginPopUpContent(url, result.model.command);
	}else if (url=="GenerateFeeQuote") {
		populateQuoteDetails(url, result.model.command);
	}else if (url=="DisplayInvoiceDetails") {
		loadInvoiceDetails(url, result.model.command);
	}else if (url=="FeeQuoteView") {
		loadQuotationDetails(url, result.model.command);
		//populateQuotation(url,result.model.command);
	}else if (url=="AdvanceInvoice") {
		loadAdvanceDetails(url, result.model.command);
		//populateQuotation(url,result.model.command);
	}else if (url=="DisplayRequestDetails") {
		loadRequestDetails(url, result.model.command);
	}
	else if (url=="QueryResponse") {
		loadResponseDetails(url, result.model.command);
	}else if(url=="RosterTable"){
		//loadRosterTable(url, result.model.command[0]);
		loadRosterTable(url, result.model.command);
	}else if(url=="RosterTableClient"){
		loadRosterTableClient(url, result.model.command);
		
	}else if (url=="ToggleLegalNotice") {
		loadLegalNoticeContent(url, result.model.command);
	}else if (url=="AppMsgM") {
		loadMessageInPopup(result.model.command);
	}
	/*else if (url=="LegalAdvisoryReview" || url=="TaxAdvisoryReview"||url=="ConciliationMediationReview"||url=="ContractManagementReview" || url=="DisputeResolutionReview"|| url=="DueDiligenceReview") {
		loadReviewContent(url, result.model.command);
	}*/else if (url=="LegalAdvisoryReview" || url=="TaxAdvisoryReview"||url=="ConciliationMediationReview"||url=="ContractManagementReview" || url=="DisputeResolutionReview"|| url=="DueDiligenceReview"
		||url=="LegalNoticeReview") {
		loadTabReviewContent(url, result.model.command);
	}else if (url=="LegalAdvisoryEditor" || url=="UploadLegalAdvisoryFile" || 
			 url=="TaxAdvisoryEditor" || url=="UploadTaxAdvisoryFile" ||
			 url=="DisputeResolutionEditor" || url=="UploadDisputeFile" || url=="DisputeResolutionFeeQuote" ||
			 url=="ContractEditor" || url=="UploadContractFile" || url=="UploadContractSupportingFile" || url=="ContractManagementFeeQuote" ||
			 url=="DueDiligenceEditor" || url=="UploadDueDiligenceFile" || url=="DueDiligenceFeeQuote"
			 || url=="LegalNoticeEditor"|| url=="UploadLegalNoticeFile")	 
	  {
		loadTabContent(url, result.model.command);
		}

    else if(url=='RefereshImage'){
		if(result.model.command.pro_image=="NA"){
		}else{
		document.getElementById("pro_img").src = "data:image/jpg;base64," + result.model.command.pro_image;
		document.getElementById("dp").src = "data:image/jpg;base64," + result.model.command.pro_image;
	}
	 }else {
		loadContent(url, result.model.command);
	}
}
function populateQuoteDetails(url,jsonObject){
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				populateForm(jsonObject);
				$("#ratetable").dataTable().fnDestroy();
				$("#ratetable").dataTable(
											{
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"columnDefs": [
														   { className: "dt[-head|-body]-center" }
														  ],
											"aaData" : jsonObject.descriptions,
											"aoColumns" : [ {
															"width": "10%",
															"mData" : "slno"
														},{
															"width": "80%",
															"mData" : "particulars"
														},{
															"width": "10%",
															"mData" : "normal_fee"
														},{
															"mData" : null,
															render : function(
																	data, type,
																	full, meta) {
																return '<input type="checkbox" name="quotecheck" id="'+ data.slno+","+data.particulars+","+data.normal_fee+ '"value="'+ data.slno+","+data.particulars+","+data.normal_fee+ '" onclick="populateQuoteTable(this.id)">';
																
															}
														},{
															"mData" : null,
															render : function(
																	data, type,
																	full, meta) {
																return '<input type="checkbox" name="invoicecheck" id="'+ data.slno+","+data.particulars+","+data.normal_fee+ '"value="'+ data.slno+","+data.particulars+","+data.normal_fee+ '" onclick="populatePaymentTable(this.id)">';
																
															}
														} 
														] 
													});
				
			});
}
function loadprocess(target,targetObject){
	alert(target+"    "+targetObject);
	$("#"+target).html("");
	$("#"+target).load("/LegalBell/html/contentPages/" + targetObject + ".html",
			function() {
				console.log("target loaded");
			});
}
function getProfileImage(forid){
	var id=$("#"+forid).val();
	ajaxPost("NoForm","/getRefreshedImage/"+id);
}

/*$(document).on(
		'click',
		"#initializeTimer",
		function() {
			//alert("initializeTimer");
			//$("#hideTimer").click();
			document.getElementById('timer').innerHTML =
				  30 + ":" + 00;
			$("#hideTimer").click();
			$("#RefreshRequest").click();
				//startTimer();
		});


function startTimer() {
	var presentTime = document.getElementById('timer').innerHTML;
	 var timeArray = presentTime.split(/[:]+/);
	  var m = timeArray[0];
	  var s = checkSecond((timeArray[1] - 1));
	  if(s==59){m=m-1}
	  if(m==9 && s==59){
		  $("#showtimer").click();}
	  if(s==00 && m==0){
		  loadGenericPagesOnLogout();
		  return;
	  }
	  document.getElementById('timer').innerHTML =
	    m + ":" + s;
	  setTimeout(startTimer, 1000);
	}

	function checkSecond(sec) {
	  if (sec < 10 && sec >= 0) {sec = "0" + sec};
	  if (sec < 0) {sec = "59"};
	  return sec;
	}*/
	function navigateNewLegalNotice(noticeresult, lawyerresult) {
		var url = noticeresult.viewName;
		loadMultipleTable(url, noticeresult.model.command.aaData,
				lawyerresult.model.command.aaData);
	}
	
	
