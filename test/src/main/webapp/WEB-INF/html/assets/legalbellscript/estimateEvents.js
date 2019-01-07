/*var taskName = new Array;
var taskRate = new Array;
var taskId = new Array;
var masterTask = new Array;*/

/*function populateQuoteDetails(description){
	//$(".modal-backdrop").remove();
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				populateForm(jsonObject);
				masterTask.splice(0,masterTask.length);
				taskName.splice(0,taskName.length);
				taskId.splice(0,taskId.length);
				taskRate.splice(0,taskRate.length);
				masterTask = (description).split('|');
				taskName = masterTask[1].split(',');
				taskId = masterTask[0].split(',');
				taskRate = masterTask[2].split(',');
			});
	
}*/


$('body').on('blur','.clientName',function(){
var selectedCase = $('#clientNameTextBoxId').val();
	var clnt = selectedCase.split("[");
	var clnt1 = clnt[1].split("]");
	var clntId = clnt1[0];
	var quotationInfo = [];
	quotationInfo.push(clntId);
	quotationInfo.push($("#pageId").val());
	quotationInfo.push($("#lawer").val());
	
	if ($("#pageId").val() == 'Q') {
$.ajax({
			type : 'POST',
			url : '/LegalBell/fetchClientDetails/' + quotationInfo,
			async : false,
			timeout : 5000,
			success : function(data) {
				console.log(data);
				var option = '<option value="Select">Select</option>';
				for (var i = 0; i < data.caseList.length; i++) {
					option += '<option value="' + data.caseList[i] + '">'
							+ data.caseList[i] + '</option>';
				}
				$('#caseID').find('option').remove();
				$('#caseID').append(option);
				$("#clientNameId").val(
						data.clientFirstName + " " + data.clientMiddleName
								+ " " + data.clientLastName);
				$("#clientPhoneId").val(data.clientPhoneNumber);
				$("#clientEmailId").val(data.clientEmailID);
				$("#addressLine1").val(data.addressLine1);
				$("#addressLine2").val(data.addressLine2);
				$("#pincode").val(data.pinCode);
				$("#country").val(data.country);
				$("#clientId").val(clntId);
				$("#state").val(data.state);
				if(data.discount!=""){
					$("#discountPer").val(data.discount);
				}
				
				$("#percentage").val(data.serviceTax);
				$("#case").val("");
				masterTask.splice(0,masterTask.length);
				taskName.splice(0,taskName.length);
				taskId.splice(0,taskId.length);
				taskRate.splice(0,taskRate.length);
				masterTask = (data.description).split('|');
				taskName = masterTask[1].split(',');
				taskId = masterTask[0].split(',');
				taskRate = masterTask[2].split(',');
				$('#clientNameTextBoxId').autocomplete({
					source : custName,
				});

			},
			error : function(xhr, textStatus, errorThrown) {
				alert('request failed :' + errorThrown + " " + textStatus + " "
						+ xhr.toString());
			}
		});

	}

	/*else if ($("#pageId").val() == 'F') {
		$.ajax({
			type : 'POST',
			url : '/LegalBell/fetchClientDetails/' + quotationInfo,
			async : false,
			timeout : 5000,
			success : function(data) {
				var option = '<option value="Select">Select</option>';
				for (var i = 0; i < data.caseList.length; i++) {
					option += '<option value="' + data.caseList[i] + '">'
							+ data.caseList[i] + '</option>';
				}
				$('#caseID').find('option').remove();
				$('#caseID').append(option);
				var option1 = '<option value="Select">Select</option>';
				for (var j = 0; j < data.queryList.length; j++) {
					option1 += '<option value="' + data.queryList[j] + '">'
							+ data.queryList[j] + '</option>';
				}
				$('#queryID').find('option').remove();
				$('#queryID').append(option1);
				$("#clientNameId").val(
						data.clientFirstName + " " + data.clientMiddleName
								+ " " + data.clientLastName);
				$("#clientPhoneId").val(data.clientPhoneNumber);
				$("#clientEmailId").val(data.clientEmailID);
				$("#addressLine1").val(data.addressLine1);
				$("#addressLine2").val(data.addressLine2);
				$("#pincode").val(data.pinCode);
				$("#country").val(data.country);
				$("#state").val(data.state);
				$("#clientId").val(clntId);
				if($("#itemID").val()=="Query"){
					 selectedDiv("Query");
				}else{
					selectedDiv("Case");
				}
			},
			error : function(xhr, textStatus, errorThrown) {
				console.log('request failed :' + errorThrown + " " + textStatus
						+ " " + xhr.toString());
			}
		});

	}*/
	else if ($("#pageId").val() == 'F') {
		$.ajax({
			type : 'POST',
			url : '/LegalBell/fetchClientDetails/' + quotationInfo,
			async : false,
			timeout : 5000,
			success : function(data) {
				var option = '<option value="Select">Select</option>';
				for (var i = 0; i < data.caseList.length; i++) {
					option += '<option value="' + data.caseList[i] + '">'
							+ data.caseList[i] + '</option>';
				}
				$('#caseID').find('option').remove();
				$('#caseID').append(option);
				
				var option1 = '<option value="Select">Select</option>';
				for (var j = 0; j < data.queryList.length; j++) {
					option1 += '<option value="' + data.queryList[j] + '">'
							+ data.queryList[j] + '</option>';
				}
				$('#queryID').find('option').remove();
				$('#queryID').append(option1);
				
				var option2 = '<option value="Select">Select</option>';
				for (var k = 0; k < data.noticeList.length; k++) {
					option2 += '<option value="' + data.noticeList[k] + '">'
							+ data.noticeList[k] + '</option>';
				}
				$('#noticeID').find('option').remove();
				$('#noticeID').append(option2);
				
				$("#clientNameId").val(data.clientFirstName + " " + data.clientMiddleName+ " " + data.clientLastName);
				$("#clientPhoneId").val(data.clientPhoneNumber);
				$("#clientEmailId").val(data.clientEmailID);
				$("#addressLine1").val(data.addressLine1);
				$("#addressLine2").val(data.addressLine2);
				$("#pincode").val(data.pinCode);
				$("#country").val(data.country);
				$("#state").val(data.state);
				$("#clientId").val(clntId);
				if($("#itemID").val()=="Query"){
					 selectedDiv("Query");
				}else if($("#itemID").val()=="LegalNotice"){
					 selectedDiv("LegalNotice");
				}else{
					selectedDiv("Case");
				}
			},
			error : function(xhr, textStatus, errorThrown) {
				console.log('request failed :' + errorThrown + " " + textStatus
						+ " " + xhr.toString());
			}
		});

	}
	
	else if($("#pageId").val() == 'C'){
		quotationInfo.push($("#service").val());
		$.ajax({
			type : 'POST',
			url : '/LegalBell/fetchClientDetails/' + quotationInfo,
			async : false,
			timeout : 5000,
			success : function(data) {
				var option = '<option value="Select">Select</option>';
				for (var i = 0; i < data.caseList.length; i++) {
					option += '<option value="' + data.caseList[i] + '">'
							+ data.caseList[i] + '</option>';
				}
				$('#caseID').find('option').remove();
				$('#caseID').append(option);
				$("#clientNameId").val(
						data.clientFirstName + " " + data.clientMiddleName
								+ " " + data.clientLastName);
				$("#clientPhoneId").val(data.clientPhoneNumber);
				$("#clientEmailId").val(data.clientEmailID);
				$("#addressLine1").val(data.addressLine1);
				$("#addressLine2").val(data.addressLine2);
				$("#pincode").val(data.pinCode);
				$("#country").val(data.country);
				$("#state").val(data.state);
				$("#clientId").val(clntId);
				$("#case").val("");
			},
			error : function(xhr, textStatus, errorThrown) {
				console.log('request failed :' + errorThrown + " " + textStatus
						+ " " + xhr.toString());
			}
		});
		//loadCaseCloseRequestList();
	}else {
		quotationInfo.push($("#service").val());
		$.ajax({
			type : 'POST',
			url : '/LegalBell/fetchClientDetails/' + quotationInfo,
			async : false,
			timeout : 5000,
			success : function(data) {
				console.log(data);
				var option = '<option value="Select">Select</option>';
				for (var i = 0; i < data.caseList.length; i++) {
					option += '<option value="' + data.caseList[i] + '">'
							+ data.caseList[i] + '</option>';
				}
				$('#caseID').find('option').remove();
				$('#caseID').append(option);
				$("#clientNameId").val(
						data.clientFirstName + " " + data.clientMiddleName
								+ " " + data.clientLastName);
				$("#clientPhoneId").val(data.clientPhoneNumber);
				$("#clientEmailId").val(data.clientEmailID);
				$("#addressLine1").val(data.addressLine1);
				$("#addressLine2").val(data.addressLine2);
				$("#pincode").val(data.pinCode);
				$("#country").val(data.country);
				$("#state").val(data.state);
				$("#clientId").val(clntId);
				$("#case").val("");
			},
			error : function(xhr, textStatus, errorThrown) {
				console.log('request failed :' + errorThrown + " " + textStatus
						+ " " + xhr.toString());
			}
		});

	}

});


$('body').on('keydown.autocomplete','.task', function(){
    $( this ).autocomplete({
	  source: taskName
	})
  });


$('body').on('blur','.task',function(){
   	var t = this.parentNode.parentNode;
   	taskName.indexOf($(t).find(".task").val())<0?$(t).find("#rate").val("0"):$(t).find("#rate").val(taskRate[taskName.indexOf($(t).find(".task").val())]);
    taskName.indexOf($(t).find(".task").val())<0?$(t).find("#taskId").val("0"):$(t).find("#taskId").val(taskId[taskName.indexOf($(t).find(".task").val())]);
    $(t).find(".qty").val("1");
    $(t).find(".total").val(parseFloat($(t).find(".qty").val())*parseFloat($(t).find(".rate").val()));
    calculationQuotation();
});  

/*function calculationQuotation(){

var grossTotal=0;

$("#quoteItems #qrate").each(function(){
 grossTotal+=parseFloat($(this).val());
 alert(grossTotal);
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

$('body').on('keyup','.qrate',function(){

    	calculationQuotation();
	
}); */

/*$('body').on('keyup','.qty',function(){
var t = this.parentNode.parentNode;
if($.isNumeric($( this ).val()))
	{
    	$(t).find(".total").val(parseFloat($(t).find(".qty").val())*parseFloat($(t).find(".rate").val()));
    	calculationQuotation();
	}

else
	{
		$( this ).val($( this ).val().substr(0,($( this ).val().length-1)));
	}
	
}); */


/*$("body").delegate("#taskDetails .delrow", "click", function() {
	var t = this.parentNode.parentNode;
  
	3 != $("#taskDetails tr").length && ($(t).remove(), $.each($("#taskDetails").find(".slNo"), function(t) {
		$(this).val(t + 1)
	}))
    $("#taskDetails .btn-success").eq($("#taskDetails .btn-success").length-1).addClass("addrow");
    $("#taskDetails .task").eq($("#taskDetails .task").length-1).prop("readonly",false);
    $("#taskDetails #rate").eq($("#taskDetails #rate").length-1).prop("readonly",false);
    $("#taskDetails .qty").eq($("#taskDetails .qty").length-1).prop("readonly",false);
    calculationQuotation();
});

$("body").delegate("#newTask .delTaskrow", "click", function() {
	var t = this.parentNode.parentNode;
  
	3 != $("#newTask tr").length && ($(t).remove(), $.each($("#newTask").find(".slNo"), function(t) {
		$(this).val(t + 1)
	}))
    $("#newTask .btn-success").eq($("#newTask .btn-success").length-1).addClass("addTaskrow");
    $("#newTask .task1").eq($("#newTask .task1").length-1).prop("readonly",false);
    $("#newTask #TaskRate").eq($("#newTask #TaskRate").length-1).prop("readonly",false);
});*/


$(".itemID").change(function() {
	var selectedItem = $('#itemID :selected').text();
	if(selectedItem=="Case"){
		document.getElementById("caseDiv").style.display = "block";
		document.getElementById("queryDiv").style.display = "none";
		$("#requestType").val("CaseFileRequest");
	}
    if(selectedItem=="Query"){
    	document.getElementById("caseDiv").style.display = "none";
    	document.getElementById("queryDiv").style.display = "block";
    	$("#requestType").val("QueryFileRequest");
	}
});


$(".draftID").change(function() {
	var selectedCase = $('#clientNameTextBoxId').val();
	var clnt = selectedCase.split("[");
    clnt[1]=clnt[1].replace('"','');
	var clntId = clnt[1].substring(0, clnt[1].length-1);
	var selectedDraft = $('#draftID :selected').text();
	var selectedCase = $('#caseID :selected').text();
	var draftInfo = [];
	draftInfo.push(selectedDraft);
	draftInfo.push(clntId);
	$.ajax({
		type : 'POST',
		url : '/LegalBell/fetchTaskDetailsOnDraftID/'+draftInfo,
		async : false,
		timeout : 5000,
		
		success : function(data) {
			var html = "";
			var resultArray = data.result;
			var rateTot = 0;
			var dataObj=[];
			for(var i=0;i<resultArray.slno.length;i++){
				var obj={
						"slno" : resultArray.slno[i],
						"taskIds" : resultArray.taskIds[i],
						"tasks" : resultArray.tasks[i],
						"rate" : resultArray.rate[i],
						"qty" : resultArray.qty[i],
						"amount" : resultArray.amount[i]
				}
				dataObj.push(obj);
			}
			$('#taskDetails').dataTable().fnDestroy();
			$("#taskDetails").dataTable({
							"bProcessing" : true,
							"sort" : "position",
							"bStateSave" : false,
							"iDisplayLength" : 5,
							"iDisplayStart" : 0,
							"aaData" : dataObj,
							"aoColumns" : [ {
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno=="0"){
									return '<input type="hidden" name="slNo" id="rate" class="slNo form-control" readonly="readonly" value="'
									+ data.slno
									+ '"> <input type="hidden" name="taskId" id="taskId" value="'+ data.taskIds+ '">';
									}else{
										return '<input type="text" name="slNo" id="rate" class="slNo form-control" readonly="readonly" value="'
										+ data.slno
										+ '"> <input type="hidden" name="taskId" id="taskId" value="'+ data.taskIds+ '">';
									}
								}
							}, {
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno==0){
										return '<input type="hidden" name="description" id="task" class="task form-control"  value="'
										+ data.tasks
										+ '">';
									}else{
										return '<input type="text" name="description" id="task" class="task form-control" readonly="readonly" value="'
										+ data.tasks
										+ '">';	
									}
									
								}
							},{
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno==0){
									return '<input type="hidden" name="rate" id="rate" class="rate form-control" value="'
									+ data.rate
									+ '">';
									}else{
										return '<input type="text" name="rate" id="rate" class="rate form-control" value="'
										+ data.rate
										+ '">';
									}
								}
							},{
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno==0){
									return '<input type="hidden" name="qty" id="qty" class="qty form-control" value="0">';
									}else if(data.tasks=="Hearing" && data.slno>0){
										return '<input type="text" name="qty" id="qty" class="qty form-control" readonly="readonly" value="'
										+ data.qty
										+ '">';
									}
									else{
										return '<input type="text" name="qty" id="qty" class="qty form-control" value="'
										+ data.qty
										+ '">';
									}
								}
							},{
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno==0){
									return '<input type="hidden" name="total" id="total" class="total form-control" value="0">';
									}else{
										return '<input type="text" name="total" id="total" class="total form-control" readonly="readonly" value="'
										+ data.amount
										+ '">';	
									}
								}
							},{
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno==0){
									return '<input type="hidden" name="delrow" value="-" class="delrow btn-danger">';
									}else{
										return '<input type="button" name="delrow" value="-" class="delrow btn-danger">';	
									}
								}
							}
							]
						});
			discount=parseFloat(resultArray.discount);
			$("#case").val(selectedCase);
			$("#draft").val(selectedDraft);
			$("#discountPer").val(0);
			$("#percentage").val(parseFloat(resultArray.serviceTax));
			calculationQuotation();
			},
		error : function(xhr, textStatus, errorThrown) {
			alert('request failed :' + errorThrown + " " + textStatus + " "
					+ xhr.toString()); 
		}
	
	});
});

$(".caseID").change(function() {
	var selectedCase = $('#clientNameTextBoxId').val();
	var clnt = selectedCase.split("[");
    clnt[1]=clnt[1].replace('"','');
	var clntId = clnt[1].substring(0, clnt[1].length-1);
	var selectedCase = $('#caseID :selected').text();
	var caseInfo = [];
	if ($("#pageId").val() == 'Q') {
		$("#case").val(selectedCase);	
	}
	else if ($("#pageId").val() == 'I') {
		$("#case").val(selectedCase);
		$.ajax({
			type : 'POST',
			url : '/LegalBell/fetchDraftDetails/'+selectedCase,
			async : false,
			timeout : 5000,
			success : function(data) {
				console.log(data);
				var option = '<option value="Select">Select</option>';
				for (var i = 0; i < data.result.length; i++) {
					option += '<option value="' + data.result[i] + '">'
							+ data.result[i] + '</option>';
				}
				$('#draftID').find('option').remove();
				$('#draftID').append(option);
			},
			error : function(xhr, textStatus, errorThrown) {
				alert('request failed :' + errorThrown + " " + textStatus + " "
						+ xhr.toString()); 
			}
		});
	}
	else if ($("#pageId").val() == 'D') {
	caseInfo.push(selectedCase);
	caseInfo.push(clntId);
	$.ajax({
		type : 'POST',
		url : '/LegalBell/fetchTaskDetailsOnCaseID/'+caseInfo,
		async : false,
		timeout : 5000,
		
		success : function(data) {
			var html = "";
			var resultArray = data.result;
			var rateTot = 0;
			var dataObj=[];
			for(var i=0;i<resultArray.slno.length;i++){
				var obj={
						"slno" : resultArray.slno[i],
						"taskIds" : resultArray.taskIds[i],
						"tasks" : resultArray.tasks[i],
						"rate" : resultArray.rate[i],
						"qty" : resultArray.qty[i],
						"amount" : resultArray.amount[i]
				}
				dataObj.push(obj);
			}
			$('#taskDetails').dataTable().fnDestroy();
			$("#taskDetails").dataTable({
							"bProcessing" : true,
							"sort" : "position",
							"bStateSave" : false,
							"iDisplayLength" : 5,
							"iDisplayStart" : 0,
							"aaData" : dataObj,
							"aoColumns" : [ {
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno=="0"){
									return '<input type="hidden" name="slNo" id="rate" class="slNo form-control" readonly="readonly" value="'
									+ data.slno
									+ '"> <input type="hidden" name="taskId" id="taskId" value="'+ data.taskIds+ '">';
									}else{
										return '<input type="text" name="slNo" id="rate" class="slNo form-control" readonly="readonly" value="'
										+ data.slno
										+ '"> <input type="hidden" name="taskId" id="taskId" value="'+ data.taskIds+ '">';
									}
								}
							}, {
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno==0){
										return '<input type="hidden" name="description" id="task" class="task form-control"  value="'
										+ data.tasks
										+ '">';
									}else{
										return '<input type="text" name="description" id="task" class="task form-control" readonly="readonly" value="'
										+ data.tasks
										+ '">';	
									}
									
								}
							},{
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno==0){
									return '<input type="hidden" name="rate" id="rate" class="rate form-control" value="'
									+ data.rate
									+ '">';
									}else{
										return '<input type="text" name="rate" id="rate" class="rate form-control" value="'
										+ data.rate
										+ '">';
									}
								}
							},{
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno==0){
									return '<input type="hidden" name="qty" id="qty" class="qty form-control" value="0">';
									}else if(data.tasks=="Hearing" && data.slno>0){
										return '<input type="text" name="qty" id="qty" class="qty form-control" readonly="readonly" value="'
										+ data.qty
										+ '">';
									}
									else{
										return '<input type="text" name="qty" id="qty" class="qty form-control" value="'
										+ data.qty
										+ '">';
									}
								}
							},{
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno==0){
									return '<input type="hidden" name="total" id="total" class="total form-control" value="0">';
									}else{
										return '<input type="text" name="total" id="total" class="total form-control" readonly="readonly" value="'
										+ data.amount
										+ '">';	
									}
								}
							},{
								"mData" : null,
								render : function(data,
										type, full,
										meta) {
									if(data.slno==0){
									return '<input type="hidden" name="delrow" value="-" class="delrow btn-danger">';
									}else{
										return '<input type="button" name="delrow" value="-" class="delrow btn-danger">';	
									}
								}
							}
							]
						});
			discount=parseFloat(resultArray.discount);
			$("#case").val(selectedCase);
			$("#discountPer").val(0);
			$("#percentage").val(parseFloat(resultArray.serviceTax));
			calculationQuotation();
			},
		error : function(xhr, textStatus, errorThrown) {
			alert('request failed :' + errorThrown + " " + textStatus + " "
					+ xhr.toString()); 
		}
	
	});
	}
	else if ($("#pageId").val() == 'F') {
		var value1 = clntId + "-" + selectedCase;
		var value = clntId + "||" + selectedCase;
		$.ajax({
					method : 'POST',
					url : '/LegalBell' + '/getUploadedFileDetailsOfCase/'+value1,
					success : function(response) {
						var finalresult = response.result;
						var fileLength = response.result.length;
						var txt = "";
						$("#fileDetails").html("");
						if (fileLength > 0) {
							txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
							
						for (var i = 0; i < fileLength; i++) {
							txt += "<tr><td><input type='text' name='sl_No' size='3' readonly='readonly' value="
									+ (i + 1)
									+ "></td><td><input type='text' name='file_Name' size='60' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td><td><input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdf(this.id)' /></td></tr>"
									
						}
						
						$("#fileDetails").append(txt);
						}
						$("#requestItem").val(selectedCase);	
					},
					error : function() {
						loadAjaxErrorPage();
					}

				});	
		
	}
	else if ($("#pageId").val() == 'C') {
		document.getElementById("RequestMsgDiv").style.display = "none";
		document.getElementById("cancelButtonDiv").style.display = "none";
		$("#requestMsgSpan").text("");
		caseInfo.push(selectedCase);
		caseInfo.push($("#user_id").text());
		$.ajax({
			type : 'POST',
			url : '/LegalBell/fetchCaseDetailsByCaseID/'+selectedCase,
			async : false,
			timeout : 5000,
			
			success : function(response) {
				var created_On = new Date(response.result.created_On);
				var newCreated_On = created_On.getFullYear() + '-'
						+ (created_On.getMonth() + 1) + '-'
						+ created_On.getDate();
				var assigned_Date = new Date(response.result.assigned_Date);
				var newAssigned_Date = assigned_Date.getFullYear() + '-'
						+ (assigned_Date.getMonth() + 1) + '-'
						+ assigned_Date.getDate();
				$("#caseCategoryId").val(response.result.case_Category);
				$("#caseSubCategoryId").val(response.result.case_SubCategory);
				$("#createdDateId").val(newCreated_On);
				$("#assignDateId").val(newAssigned_Date);
		$.ajax({
			type : 'POST',
			url : '/LegalBell/fetchInvoiceListOnCaseIDBylawyer/'+caseInfo,
			async : false,
			timeout : 5000,
			
			success : function(response) {
				var jsonObject= response.result.aaData;
				$('#invoicestatuslawyertable').dataTable().fnDestroy();
				$("#invoicestatuslawyertable").dataTable({
								"bProcessing" : true,
								"sort" : "status.sort",
								"bStateSave" : false,
								"iDisplayLength" : 5,
								"iDisplayStart" : 0,
								"aaData" :jsonObject,
								"aoColumns" : [ {
									"width": "10%",
									"mData" : "id"
								},{
									"width": "10%",
									"mData" : "raiedOn"
								},{
									"width": "10%",
									"mData" : "pendingSince"
								},{
									"width": "60%",
									"mData" : "details"
								},{
									"width": "10%",
									"mData" : "action"
								}
								]
				/*[
												{
													"mData" : "invoice_Id"
												},
												{
													"mData" : "order_Id"
												},
											    {
													"mData" : null,
													render : function(data, type, full, meta) {
													var status="Due";
													if(data.status==1){
														status="Paid";
													}
													return status;
													}
												}
										]*/
									});
			$.ajax({
			type : 'POST',
			url : '/LegalBell/fetchTaskListOnCaseIDBylawyer/'+caseInfo,
			async : false,
			timeout : 5000,
			
			success : function(response) {
				var jsonObject2= response.result.aaData;
				$('#taskstatuslawyertable').dataTable().fnDestroy();
				$("#taskstatuslawyertable").dataTable({
								"bProcessing" : true,
								"sort" : "position",
								"bStateSave" : false,
								"iDisplayLength" : 5,
								"iDisplayStart" : 0,
								"aaData" :jsonObject2,
								"aoColumns" :
									[ {
										"width": "10%",
										"mData" : "id"
									},{
										"width": "10%",
										"mData" : "raiedOn"
									},{
										"width": "10%",
										"mData" : "pendingSince"
									},{
										"width": "60%",
										"mData" : "details"
									},{
										"width": "10%",
										"mData" : "action"
									}
									]
									/*[
												{
													"mData" : "task_Id"
												},
												{
													"mData" : "assign_To"
												},
												{
													"mData" : "task_Description"
												},
											    {
													"mData" : "task_Status"
												}
										]*/
									});
					if(jsonObject.length!=0 && jsonObject2.length!=0){
					var indexPos=[];
					for(var i=0;i<jsonObject2.length;i++){
						if(jsonObject2[i].task_Status=="Active" || jsonObject2[i].task_Status=="Initial"){
							indexPos.push(jsonObject2[i]);
						}
					}
					for(var j=0;j<jsonObject.length;j++){
						if(jsonObject[j].status==0){
							indexPos.push(jsonObject[j]);
						}
					}
					if(indexPos.length==0){
						document.getElementById("RequestMsgDiv").style.display = "block";
						
					}else{
						document.getElementById("requestMsgSpan").textContent = "Some case invoices or tasks is not cleared.";
						document.getElementById("cancelButtonDiv").style.display = "block";
						
					}
					}else{
						document.getElementById("requestMsgSpan").textContent = "This Case has no task or invoices created.";
						document.getElementById("cancelButtonDiv").style.display = "block";
						
					}
			   }
				});
		}
		});
		},
		error : function() {
			loadAjaxErrorPage();
		}
		});
}
	else{		
	}


});


$(".queryID").change(function() {
	var selectedClient = $('#clientNameTextBoxId').val();
	var clnt = selectedClient.split("[");
	clnt[1]=clnt[1].replace('"','');
	var clntId = clnt[1].substring(0, clnt[1].length-1);
	var selectedQuery = $('#queryID :selected').text();
	
	if ($("#pageId").val() == 'F') {
		var value1 = clntId + "-" + selectedQuery;
		var value = clntId + "||" + selectedQuery;
		$.ajax({
					method : 'POST',
					url : '/LegalBell' + '/getUploadedFileDetailsOfQuery/'+value1,
					success : function(response) {
						var finalresult = response.result;
						var fileLength = response.result.length;
						var txt = "";
						$("#fileDetails").html("");
						if (fileLength > 0) {
							txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
							
						for (var i = 0; i < fileLength; i++) {
							txt += "<tr><td><input type='text' name='sl_No' size='3' readonly='readonly' value="
									+ (i + 1)
									+ "></td><td><input type='text' name='file_Name' size='60' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td><td><input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdf(this.id)' /></td></tr>"
									
						}
						
						$("#fileDetails").append(txt);
					}
						$("#requestItem").val(selectedQuery);
					},
					error : function() {
						loadAjaxErrorPage();
					}

				});	
		
	}


});

$('body').on('click','#saveInvoicePDF',function(){
	var invoicePdfInfo = [];
	invoicePdfInfo.push($("#invoiceID").val());
	invoicePdfInfo.push($("#clientId").val());
	invoicePdfInfo.push($("#caseID").val());
	invoicepdfdownload('/getInvoicePDF/' + invoicePdfInfo);

});

$('body').on('click','#saveDraftPDF',function(){
	var invoicePdfInfo = [];
	invoicePdfInfo.push($("#draftID").val());
	invoicePdfInfo.push($("#clientId").val());
	invoicePdfInfo.push($("#caseID").val());
	invoicepdfdownload('/getInvoicePDF/' + invoicePdfInfo);

});

$('body').on('click','#saveQuotationPDF',function(){
	var quotationPdfInfo = [];
	quotationPdfInfo.push($("#quotationID").val());
	quotationPdfInfo.push($("#clientId").val());
	quotationPdfInfo.push($("#serviceID").val());
	//alert(quotationPdfInfo);
	invoicepdfdownload('/getQuotationPDF/' + quotationPdfInfo);

});

$('body').on('click','#notifyQuotationPDF',function(){
	var quotationInfo = [];
	quotationInfo.push($("#clientId").val());
	quotationInfo.push($("#serviceID").val());
	quotationInfo.push($("#quotationID").val());
	quotationInfo.push($("#user_id").text());
	//alert(quotationInfo);
	ajaxPost("NoForm", "/sendQuotation/" + quotationInfo);
});




$('body').on('click','#notifyInvoicePDF',function(){
	var invoiceInfo = [];
	invoiceInfo.push($("#clientId").val());
	invoiceInfo.push($("#caseID").val());
	invoiceInfo.push($("#invoiceID").val());
	ajaxPost("NoForm", "/sendInvoice/" + invoiceInfo);
});

$('body').on('click','#saveDraft',function(){
	var draftInfo = [];
	draftInfo.push($("#clientId").val());
	draftInfo.push($("#caseID").val());
	draftInfo.push($("#draftID").val());
	//alert(draftInfo);
	ajaxPost("NoForm", "/saveDraft/" + draftInfo);
});

function loadCaseCloseRequestList(){
	$.ajax({
		url : '/LegalBell' + '/getAllCaseCloseRequestList',
		method : 'POST',
		success : function(response) {
			var jsonObject = response.result;
			var x = document.getElementById("caseID");
			for (var i = 0; i < jsonObject.length; i++) {
				for (var j = 0; j < x.length; j++) {
				if(jsonObject[i].request_Item==x.options[j].value){
				x.remove(j);
				}
			  }
			}
		},
		error : function() {
			loadAjaxErrorPage();
		}

	});
}


function selectedDiv(selectedItem) {
	//var selectedItem = $('#itemID :selected').text();
	//alert(selectedItem);
	if(selectedItem=="Case"){
		document.getElementById("caseDiv").style.display = "block";
		document.getElementById("queryDiv").style.display = "none";
		document.getElementById("noticeDiv").style.display = "none";
		$("#requestType").val("CaseFileRequest");
	}
	else if(selectedItem=="Query"){
		//alert("In");
    	document.getElementById("caseDiv").style.display = "none";
    	document.getElementById("queryDiv").style.display = "block";
    	document.getElementById("noticeDiv").style.display = "none";
    	$("#requestType").val("QueryFileRequest");
	}
	else if(selectedItem=="LegalNotice"){
    	document.getElementById("caseDiv").style.display = "none";
    	document.getElementById("queryDiv").style.display = "none";
    	document.getElementById("noticeDiv").style.display = "block";
    	$("#requestType").val("LegalNoticeFileRequest");
	}
}

$(".noticeID").change(function() {
	var selectedClient = $('#clientNameTextBoxId').val();
	var clnt = selectedClient.split("[");
	clnt[1]=clnt[1].replace('"','');
	var clntId = clnt[1].substring(0, clnt[1].length-1);
	var selectedNotice = $('#noticeID :selected').text();
	
	if ($("#pageId").val() == 'F') {
		var value1 = clntId + "-" + selectedNotice;
		var value = clntId + "||" + selectedNotice;
		$.ajax({
					method : 'POST',
					url : '/LegalBell' + '/getUploadedFileDetailsOfQuery/'+value1,
					success : function(response) {
						var finalresult = response.result;
						var fileLength = response.result.length;
						var txt = "";
						$("#fileDetails").html("");
						if (fileLength > 0) {
							txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
							
						for (var i = 0; i < fileLength; i++) {
							txt += "<tr><td><input type='text' name='sl_No' size='3' readonly='readonly' value="
									+ (i + 1)
									+ "></td><td><input type='text' name='file_Name' size='60' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td><td><input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdf(this.id)' /></td></tr>"
									
						}
						
						$("#fileDetails").append(txt);
					}
						$("#requestItem").val(selectedNotice);
					},
					error : function() {
						loadAjaxErrorPage();
					}

				});	
		
	}


});




