function loadClientQueryDataInTable(elementid,identifier,url){
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

function loadAdminInvoiceDataInTable(elementid,identifier,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		
	ajaxPost("NoForm", "/"+url+".web");
	}
}



function loadAdminQueryDataInTable(elementid,identifier,url){
    	var value = $("#"+elementid).text().split(" ");
		var QueryNumber = value[value.length-1];
    	if(QueryNumber == 0){
    		$("#hiddenNoValPopUpModal").click();
    	}else{
    		
    		var paramInfo = [];
    		paramInfo.push($("#user_id").text());
    		paramInfo.push(identifier);
    		var client_id=$("#user_id").text();
    		if(url!="newQueryAdmin"){
    		ajaxPost("NoForm", "/"+url+".web/" + paramInfo);
    		}else{
    			ajaxPostNew("adminNewQueryForm", "/"+url+".web/" + paramInfo, "/lawyer.web/"+ client_id);
    		}
    	}
    }
$(document).on('click',"#showSlaButton",function() {
		ajaxPost('rateChartForm','/rateChart.web/'+ ($("#ClientId").val() + "-" + $("#QueryId").val()));
	});
$(document).on('click',"#submitSlaButton",function() {
		var getQueryIdAndSlaId = [];
		var query_id = $("#fixedquery").val();
		getQueryIdAndSlaId.push(query_id);
		var radiovalue = null;
		if(($("input[type='radio'][name='slaId']:checked").length > 0)){
		$('input:radio[name=slaId]').each(function() {
			if ($(this).is(':checked')) {
				radiovalue = ($(this).val().split("-"));
			}
		});
		getQueryIdAndSlaId.push(radiovalue[0]);
		ajaxPost('NoForm','/showSlaRate/'+getQueryIdAndSlaId);
		}else{
			$("#rateChartSpan").text("Please select an option");
			getQueryIdAndSlaId.push(radiovalue);
		}
		});
$(document).on('click',"#queryReport",function() {
	$("#contentPage").load("/LegalBell/html/contentPages/AdminQueryReport.html");
	});

$(document).on('click',"#adminNewQueryReport",function() {
		$("#reportTab").load("/LegalBell/html/contentPages/AdminNewQueryReport.html");
		$("#genericDataTable").dataTable().fnDestroy();
	});
$(document).on('click',"#adminProgressQueryReport",function() {
		$("#reportTab").load("/LegalBell/html/contentPages/AdminProgressQueryReport.html");
		$("#genericDataTable").dataTable().fnDestroy();
	});
$(document).on('click',"#adminSolvedQueryReport",function() {
		$("#reportTab").load("/LegalBell/html/contentPages/AdminSolvedQueryReport.html");
		$("#genericDataTable").dataTable().fnDestroy();
	});
$(document).on('click',"#newQueryReportButton",function() {
		var days=$("#newQueryInterval").val();
		if(days>0 && days<=90){
		var reportInfo = [];
		reportInfo.push($("#newQueryInterval").val());
		reportInfo.push($("#user_id").text());
		ajaxPost('NoForm','/newQueryReport.web/'+reportInfo);
		}
		else{
			$("#newQueryReportSpan").text("Days Range should be between 1 to 90");	
		}
		});
$(document).on('click',"#progressQueryReportButton",function() {
		var days=$("#progressQueryInterval").val();
		if(days>0 && days<=90){
		var reportInfo = [];
		reportInfo.push($("#progressQueryInterval").val());
		reportInfo.push($("#user_id").text());
		ajaxPost('NoForm','/progressQueryReport.web/'+reportInfo);
		}
		else{
			$("#progressQueryReportSpan").text("Days Range should be between 1 to 90");	
		}
		});
$(document).on('click',"#solvedQueryReportButton",function() {
		var days=$("#solvedQueryInterval").val();
		if(days>0 && days<=90){
		var reportInfo = [];
		reportInfo.push($("#solvedQueryInterval").val());
		reportInfo.push($("#user_id").text());
		ajaxPost('NoForm','/solvedQueryReport.web/'+reportInfo);
		}
		else{
			$("#solvedQueryReportSpan").text("Days Range should be between 1 to 90");	
		}
		});
$(document).on('click',"#lawyerQueryReport",function() {
	$("#contentPage").load("/LegalBell/html/contentPages/LawyerQueryReport.html");
});
$(document).on('click',"#lawyerNewQueryReport",function() {
		$("#reportTab").load("/LegalBell/html/contentPages/LawyerNewQueryReport.html");
		$("#genericDataTable").dataTable().fnDestroy();	
});
$(document).on('click',"#lawyerProgressQueryReport",function() {
		$("#reportTab").load("/LegalBell/html/contentPages/LawyerProgressQueryReport.html");
		$("#genericDataTable").dataTable().fnDestroy();	
});
$(document).on('click',"#lawyerSolvedQueryReport",function() {
		$("#reportTab").load("/LegalBell/html/contentPages/LawyerSolvedQueryReport.html");
		$("#genericDataTable").dataTable().fnDestroy();	
});
$(document).on('click',"#lawyerNewQueryReportButton",function() {
		var days=$("#lawyerNewQueryInterval").val();
		if(days>0 && days<=90){
		var reportInfo = [];
		reportInfo.push($("#lawyerNewQueryInterval").val());
		reportInfo.push($("#user_id").text());
		ajaxPost('NoForm','/lawyerNewQueryReport.web/'+reportInfo);
		}
		else{
			$("#lawyerNewQueryReportSpan").text("Days Range should be between 1 to 90");	
		}
		});
$(document).on('click',"#lawyerProgressQueryReportButton",function() {
		var days=$("#lawyerProgressQueryInterval").val();
		if(days>0 && days<=90){
		var reportInfo = [];
		reportInfo.push($("#lawyerProgressQueryInterval").val());
		reportInfo.push($("#user_id").text());
		ajaxPost('NoForm','/lawyerProgressQueryReport.web/'+reportInfo);
		}
		else{
			$("#lawyerProgressQueryReportSpan").text("Days Range should be between 1 to 90");	
		}
		});
$(document).on('click',"#lawyerSolvedQueryReportButton",function() {
		var days=$("#lawyerSolvedQueryInterval").val();
		if(days>0 && days<=90){
		var reportInfo = [];
		reportInfo.push($("#lawyerSolvedQueryInterval").val());
		reportInfo.push($("#user_id").text());
		ajaxPost('NoForm','/lawyerSolvedQueryReport.web/'+reportInfo);
		}
		else{
			$("#lawyerSolvedQueryReportSpan").text("Days Range should be between 1 to 90");	
		}
		});

function loadRateChartTable(url, jsonObject) {
	
	if(url=="LNRateChartU"){
		var selectedSla=jsonObject.notice.sla;
		$("#fixedquery").val(jsonObject.notice.notice_Id);
	  }
	else{
		var selectedSla=jsonObject.qry.sla;
		$("#fixedquery").val(jsonObject.qry.query_Id);
	}
	
		$("#contentPage").html("");
		$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
				function() {
			$("#slatable").dataTable().fnDestroy(); 
					$("#slatable").dataTable({
						dom: 'lBfrtip',
				        buttons: [
				            /*'copyHtml5',
				            'excelHtml5',
				            'pdfHtml5'*/
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
				});
		}
/*function loadRateChartTable(url, jsonObject) {
		var selectedSla=jsonObject.qry.sla;
		$("#fixedquery").val(jsonObject.qry.query_Id);
		
		$("#contentPage").html("");
		$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
				function() {
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
				});
		}*/
function loadGenericTable(url, jsonObject) {

			$("#contentPage").html("");
			$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
					function() {
				$("#genericDataTable").dataTable().fnDestroy(); 
						$("#genericDataTable").dataTable({
							
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
							"aaData" : jsonObject,
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
						});
					});
}
function loadGenericTableReport(url, jsonObject) {
$("#genericDataTable").dataTable().fnDestroy(); 
				$("#genericDataTable").dataTable({
					
					dom: 'lBfrtip',
			        buttons: [
			            /*'copyHtml5',
			            'excelHtml5',
			            'pdfHtml5'*/
			        ],
					"bProcessing" : true,
					"sort" : "position",
					"bStateSave" : false,
					"iDisplayLength" : 5,
					"iDisplayStart" : 0,
					"aaData" : jsonObject,
					"aoColumns" :  [ {
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
				});
}
function getQueryDescriptionInClientpopUp(query_Id) {
	    	var value = $("#client_id").text();
	    	value = value + "-" + query_Id;
	    	$.ajax({
	    		method : 'POST',
	    		url : '/LegalBell' + '/getQueryDesc/' + value,
	    		success : function(response) {
	    			var queryDesc = response.result;
	    			$("#QueryDescription").html("");
	    			$("#QueryDescription").append(queryDesc);
	    		},
	    		error : function() {
	    			loadAjaxErrorPage();
	    		}
	    	});

	    }
function getQueryResponseClientpopUp(query_Id) {
	    	var value = $("#client_id").text();
	    	value = value + "-" + query_Id;
	    	$.ajax({
	    		method : 'POST',
	    		url : '/LegalBell' + '/getQueryResponseContent/' + value,
	    		success : function(response) {
	    			var queryResponse = response.result;
	    			$("#queryResponse").html("");
	    			$("#queryResponse").append(queryResponse);
	    		},
	    		error : function() {
	    			loadAjaxErrorPage();
	    		}
	    	});
}
function changeType(id) {
 	   var a = document.getElementById(id).value;       
 	  $("#queryType").val(a);
 if(a == "Select")
 {
 	 $("select#queryCategory").html('<option value="" selected>--Select--</option>');
 	 $("select#querySubCategory").html('<option value="" selected>--Select--</option>');
    document.getElementById("selectQueryCategory").style.display="block"; 
    document.getElementById("selectQuerySubCategory").style.display="block";
    document.getElementById("selectCaseId").style.display="none";
    document.getElementById("selectQueryBriefDescription").style.display="block";
 }
 if(a == "General")
    {
        document.getElementById("selectQueryCategory").style.display="block"; 
        document.getElementById("selectQuerySubCategory").style.display="block";
        document.getElementById("selectCaseId").style.display="none";
        document.getElementById("selectQueryBriefDescription").style.display="block";
        var nodes = document.getElementById("selectCaseId").getElementsByTagName('*');
        for(var i = 0; i < nodes.length; i++){
             nodes[i].disabled = true;
        }
       
    }
 if(a == "CaseSpecific")
    {
        document.getElementById("selectQueryCategory").style.display="block"; 
        document.getElementById("selectQuerySubCategory").style.display="block";
        document.getElementById("selectCaseId").style.display="block";
        var nodes = document.getElementById("selectCaseId").getElementsByTagName('*');
        for(var i = 0; i < nodes.length; i++){
             nodes[i].disabled = false;
        }
        document.getElementById("selectQueryBriefDescription").style.display="block";
    }
 }

 function getQuerySubCategory(id,action){
 	$("select#qrySubCat").html('<option value="" selected>--Select--</option>');
 			var value = document.getElementById(id).value; 
 			$("#queryCategory").val(value);
 			if ($("#queryCategory").val()!="")
 			{
 			$.ajax({
 				method : 'POST',
 				url : '/LegalBell' + action,
 				data : {
 					queryCategory :value,
 					
 				 },
 				 success: function (response) {
 					var qrySub= response.result;
 					 var z = document.getElementById("qrySubCat");				   
 					    for (var i = 0; i < qrySub.length; i++) {
 					    	 var option = document.createElement("option");
 					    	option.text = qrySub[i];
 						    z.add(option);
 		                } 
 					    $("#qrySubCat").val($("#querySubCategory").text());
 				  },
					error : function() {
						loadAjaxErrorPage();
					}
				});
 			}
 			else $("select#qrySubCat").html('<option value="" selected>--Select--</option>');
 }
function QrySubCatValue(id){
 	var value = document.getElementById(id).value;
 	$("#querySubCategory").val(value);
 }
 function getCaseID(id){
 	var CaseIdVal = document.getElementById(id).value;
 	$("#caseId").val(CaseIdVal);
 }
 /*function ValidateCreateQuery(){
 if(document.getElementById("qryCat").value == ""){
 		document.getElementById("qryCatSpan").textContent = "*Please choose a Query Category";	
 	}else if(document.getElementById("qrySubCat").value == ""){
 		document.getElementById("querySubCatSpan").textContent = "*Please choose a Query SubCategory";	
 	}else if(document.getElementById("QueryBrief").value == ""){
 		document.getElementById("queryBriefSpan").textContent = "*Please Enter some brief Description of your Query";
 	}else{
 		ajaxPost('createQueryForm','/detailsQuery');
 }
 }*/
 function ValidateCreateQuery(){
		
	 if(document.getElementById("notsure").checked == true){
	 	if(document.getElementById("QueryBrief").value == ""){
	  		document.getElementById("queryBriefSpan").textContent = "*Please Enter some brief Description of your Query";
	  	}
	     else
	     	{
	     	ajaxPost('createQueryForm','/detailsQuery');
	     	}
	 }else{
	 	if(document.getElementById("qryCat").value == ""){
	  		document.getElementById("qryCatSpan").textContent = "*Please choose a Query Category";	
	  	}else if(document.getElementById("qrySubCat").value == ""){
	  		document.getElementById("querySubCatSpan").textContent = "*Please choose a Query SubCategory";	
	  	}else if(document.getElementById("QueryBrief").value == ""){
	  		document.getElementById("queryBriefSpan").textContent = "*Please Enter some brief Description of your Query";
	  	}else{
	  		ajaxPost('createQueryForm','/detailsQuery');
	  }
	 	
	 }
	 	 
	 }
function onBlurCreateQuery(){
 	document.getElementById("qryCatSpan").textContent = "";
 	document.getElementById("querySubCatSpan").textContent = "";
 	document.getElementById("queryBriefSpan").textContent = "";
 }
function onBlurQueryEditor(){
 	document.getElementById("myspan").textContent = "";	
 }
function loadMultipleTable(url, jsonObject, jsonObject1) {
$("#contentPage").html("");
		$("#contentPage")
				.load(
						"/LegalBell/html/contentPages/" + url + ".html",
						function() {
							$("#genericDataTable").dataTable().fnDestroy(); 
							$("#genericDataTable")
									.dataTable(
											{
												
												dom: 'lBfrtip',
										        buttons: [
										           /* 'copyHtml5',
										            'excelHtml5',
										            'pdfHtml5'*/
										        ],
												"bProcessing" : true,
												"sort" : "position",
												"bStateSave" : false,
												"iDisplayLength" : 5,
												"iDisplayStart" : 0,
												"aaData" : jsonObject,
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
											});
							$("#genericDataTable1").dataTable().fnDestroy(); 
							$("#genericDataTable1")
							.dataTable(
									{
									
									"bProcessing" : true,
									"sort" : "position",
									"bStateSave" : false,
									"iDisplayLength" : 5,
									"iDisplayStart" : 0,
									"aaData" : jsonObject1,
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
									});
			});
}
function loadPopupAssignCseDetails(lawyer_Id,newCaseValue){
	if(newCaseValue == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
$('#popupAssignedCaseListLink').click();
ajaxPost("NoForm", "/assignedCaseDetailsByLawyerId.web/"
+ lawyer_Id);	
	}
}
function loadPopupAssignQryDetails(lawyer_Id,newQueryValue){
	if(newQueryValue == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
$('#popupAssignedQueryListLink').click();
ajaxPost("NoForm", "/assignedQueryDetailsByLawyerId.web/"
+ lawyer_Id);	
}
}	
function loadAssignCaseDetailsByLwyrIdNewQueryAdmin(url, jsonObject) {
		$("#showAssignedCaseDetailsTable").dataTable().fnDestroy();
		$("#showAssignedCaseDetailsTable").dataTable({
			"bProcessing" : true,
			"sort" : "position",
			"bStateSave" : false,
			"iDisplayLength" : 5,
			"iDisplayStart" : 0,
			"aaData" : jsonObject,
			"aoColumns" : [ {
				"mData" : null,
				render : function(
						data, type,
						full, meta) {
					return '<input type="button" id="'+ data.client_Id+","+data.case_Id+ '"value="'+ data.case_Id +'" onclick="loadCaseOnClick(this.id)">';
					
				}
			}, {
				"mData" : "case_BriefDescription"
			},

			]
		});
}
function loadAssignQueryDetailsByLwyrIdNewQueryAdmin(url, jsonObject) {
$("#showAssignedQueryDetailsTable").dataTable().fnDestroy(); 
$("#showAssignedQueryDetailsTable").dataTable({
"bProcessing" : true,
"sort" : "position",
"bStateSave" : false,
"iDisplayLength" : 5,
"iDisplayStart" : 0,
"aaData" : jsonObject,
"aoColumns" : [ {
	"mData" : null,
	render : function(
			data, type,
			full, meta) {
			return '<input type="button" id="'+ data.client_Id+","+data.query_Id+ '"value="'+ data.query_Id +'" onclick="loadQueryOnClick(this.id)">';
			}
}, {
	"mData" : "query_BriefDescription"
},
]
});
}		
function loadQueryOnClick(multipleIds){
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchQueryDetails/"+ multipleId[1]);
	getQueryDescriptionInUserpopUp(multipleId[0],multipleId[1],'N');
	getUploadedFileDetails(multipleId[0],multipleId[1],'N');
	getQueryResponseInUserpopUp(multipleId[0],multipleId[1],'N');
	getResponseFileDetailsInQueryReview(multipleId[0],multipleId[1],'N');
	
	}
function setPreviousGenericComments(ids) {
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getGenericComments/' + ids,
		success : function(response) {
			var comments = response.result;
			$("#CommentHistory").html("");
			$("#CommentHistory").append(comments);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}
function loadQueryCommentOnClick(multipleIds){
	var data=multipleIds.split(",");
	$("#contentPage").load("/LegalBell/html/contentPages/GenericServiceComment.html",function(){
		$("#Service_Id").val(data[1]);
		$("#Comment_By").val($("#user_id").text());
		setPreviousGenericComments(multipleIds);
	});
	}
function createGenericComment(){
	var data=$("#CommentEditor").Editor("getText");
	document.getElementById("CommentText").value = data;
	if (document.getElementById("CommentText").value == "") {
		document.getElementById("commentTextSpan").textContent = "*Please enter your Comment text";
	} else {
		ajaxPost('GenericCommentForm', '/createQueryComment');
	}
}
function loadQueryDetails(url, jsonObject){
	//new Date().toISOString().slice(0, 19).replace('T', ' ');
	//alert(query_Created_Date);
	var query_Created_Date=new Date(jsonObject.query_Created_Date);	
	var newQuery_Created_Date=query_Created_Date.getFullYear() + '-'
	+( query_Created_Date.getMonth() + 1) + '-'
	+ query_Created_Date.getDate();
	//alert(newQuery_Created_Date);
	var assigned_Date=new Date(jsonObject.assigned_Date);
	var newAssigned_Date=assigned_Date.getFullYear() + '-'
	+( assigned_Date.getMonth() + 1) + '-'
	+ assigned_Date.getDate();
	var query_Response_Date=new Date(jsonObject.query_Response_Date);
	var newQuery_Response_Date=query_Response_Date.getFullYear() + '-'
	+( query_Response_Date.getMonth() + 1) + '-'
	+ query_Response_Date.getDate();
	var queryType = jsonObject.query_Type;
	var client=jsonObject.client_Id.split("-");
	$('#displayQueryDetailsPopup').click();
	////////////////////////////
	

	$("#client_id").text(client[0]);
	$("#bclient_id").val(client[1]);
	$("#queryId").val(jsonObject.query_Id);
	$("#qclientId").val(jsonObject.client_Id);
	$("#fixedquery").val(jsonObject.query_Id);
	$("#queryType").val(jsonObject.query_Type);
	$("#queryCategory").val(jsonObject.query_Category);
	$("#querySubCategory").val(jsonObject.query_SubCategory);
	$("#queryBriefDescription").val(jsonObject.query_BriefDescription);
	$("#queryStatus").val(jsonObject.query_Status);
	$("#queryCreatedDate").val(newQuery_Created_Date);
	$("#queryComment").val(jsonObject.query_Comment);
	$("#sla").val(jsonObject.sla);
	if(jsonObject.query_Status=="New" || jsonObject.query_Status=="Active" || jsonObject.query_Status=="Closed" || jsonObject.query_Status=="Approval"){
		$("#queryComment").val(jsonObject.query_Comment);
		var lawyer=jsonObject.assigned_Lawyer.split("-");
		var admin=jsonObject.assigned_By.split("-");
		$("#assignedLawyer").val(lawyer[1]);
		$("#assignedBy").val(admin[1]);
		$("#assignedDate").val(newAssigned_Date);
		if(jsonObject.query_Status=="Closed" ){
			$("#queryResponseDate").val(newQuery_Response_Date);
		}
	}
		else if(jsonObject.query_Status=="Initial")
			{
			$("#assignedLawyer").val("N.A");
			$("#assignedBy").val("N.A");
			$("#assignedDate").val("N.A");
			$("#queryResponseDate").val("N.A");
			}
	if(queryType=="CaseSpecific"){
		$("#caseId").val(jsonObject.case_Id);
	}
	else $("#caseId").val("N.A");
}
function loadClickCseDetailNewQueryAdmin(multipleIds){
var multipleId = multipleIds.split(",");	
ajaxPost("NoForm", "/displayCaseDetailsBySelectedCseIdNewQueryAdmin/"+ multipleId[1]);
getCaseDescriptionInUserspopUp(multipleId[0],multipleId[1]);
}	
function getCaseDescriptionInUserspopUp(client_Id,case_Id) {
	value = client_Id + "-" + case_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getCaseDesc/' + value,
		success : function(response) {
			var caseDesc = response.result;
			$("#CaseDescription").html("");
			$("#CaseDescription").append(caseDesc);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}
function loadSelectedCaseDetailsNewQueryAdmin(url, jsonObject){
	var created_On=new Date(jsonObject.created_On);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
	var assigned_Date=new Date(jsonObject.assigned_Date);
	var newAssigned_Date=assigned_Date.getFullYear() + '-'
	+( assigned_Date.getMonth() + 1) + '-'
	+ assigned_Date.getDate();
$('#displaySelectedCseDetailsLink').click();
$("#ClientId").val(jsonObject.client_Id);
$("#CaseId").val(jsonObject.case_Id);
$("#caseCategory").val(jsonObject.case_Category);
$("#caseSubCategory").val(jsonObject.case_SubCategory);
$("#caseBriefDescription").val(jsonObject.case_BriefDescription);
$("#caseStatus").val(jsonObject.current_Status);
$("#AssignedLawyer").val(jsonObject.assigned_Lawyer);
$("#AssignedBy").val(jsonObject.assigned_By);
$("#AssignedDate").val(newAssigned_Date);
$("#caseCreatedDate").val(newCreated_On);
}
function ReassignQuery(reqValues){
	var client_id = $("#user_id").text();
	var lawyerResult = doAjaxFormPost('', "/lawyer.web/"+ client_id);
	var multipleId = reqValues.split(",");
	 $("#popupReassignQuery").click();
	 $("#qryIDs").val(multipleId[0]);
	 $("#lwyrIDs").val(multipleId[1]);
	 $("#genericDataTable1").dataTable().fnDestroy(); 
		$("#genericDataTable1").dataTable({
			
			dom: 'lBfrtip',
	        buttons: [
	           /* 'copyHtml5',
	            'excelHtml5',
	            'pdfHtml5'*/
	        ],
			"bProcessing" : true,
			"sort" : "position",
			"bStateSave" : false,
			"iDisplayLength" : 5,
			"iDisplayStart" : 0,
			"aaData" : lawyerResult.model.command.aaData,
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
		});
}
$(document).on('click',"#reassignQueryButton",function(){
		var selectedLawyer = "";
		if(($("input[type='radio'][name='lwyrId']:checked").length > 0)){
		selectedLawyer = $("input[type='radio'][name='lwyrId']:checked").val();
		var comment = $("#commentIDs").val();
		var queryId = $("#qryIDs").val();
		if(comment == ""){
			$("#reassignCommentSpan").text("Please give assignment comment");
		}else{
			var userId = $("#user_id").text();
			var assignQueryInfo = [];
			assignQueryInfo.push(userId);
			assignQueryInfo.push(comment);
			assignQueryInfo.push(selectedLawyer);
			assignQueryInfo.push(queryId);
			$(".modal-backdrop").remove();
			ajaxPost("NoForm", "/ReassignQuery/" + assignQueryInfo);
		}
	}else{
		$("#reassignLawyerSpan").text("Please select lawyer");
		}    
	    
	}); 
function loadReviewResponseQueryAdmin(multipleIds){
	    //alert(multipleIds);
		var multipleId = multipleIds.split(",");	
		ajaxPost("NoForm", "/displayResponseQueryAdmin/"+multipleId[1]);
		getQueryDescriptionInUserpopUp(multipleId[0],multipleId[1],'R');
		getQueryResponseUserpopUpEditor(multipleId[0],multipleId[1]);
		getUploadedFileDetails(multipleId[0],multipleId[1],'R');
		getResponseFileDetailsInQueryReview(multipleId[0],multipleId[1],'N');
		}
	
	function loadResponseQueryAdmin(url, jsonObject){
		var query_Created_Date=new Date(jsonObject.query_Created_Date);
		var newQuery_Created_Date=query_Created_Date.getFullYear() + '-'
		+( query_Created_Date.getMonth() + 1) + '-'
		+ query_Created_Date.getDate();
		var assigned_Date=new Date(jsonObject.assigned_Date);
		var newAssigned_Date=assigned_Date.getFullYear() + '-'
		+( assigned_Date.getMonth() + 1) + '-'
		+ assigned_Date.getDate();
		var query_Response_Date=new Date(jsonObject.query_Response_Date);
		var newQuery_Response_Date=query_Response_Date.getFullYear() + '-'
		+( query_Response_Date.getMonth() + 1) + '-'
		+ query_Response_Date.getDate();
		$('#displaySelectedQryDetailsLinkReviewQueryAdminLink').click();
	$("#clientIdR").val(jsonObject.client_Id);
	$("#queryIdR").val(jsonObject.query_Id);
	/*$("#queryTypeR").val(jsonObject.query_Type);
	var queryType = jsonObject.query_Type;
	if(queryType == "General"){
		$("#caseIdR").val("N.A");
	}else{
		$("#caseIdR").val(jsonObject.case_Id);
	}*/
	$("#queryCategoryR").val(jsonObject.query_Category);
	$("#querySubCategoryR").val(jsonObject.query_SubCategory);
	$("#caseIdR").val(jsonObject.case_Id);
	$("#queryBriefDescriptionR").val(jsonObject.query_BriefDescription);
	$("#queryStatusR").val(jsonObject.query_Status);
	$("#slaR").val(jsonObject.sla);
	$("#assignedLawyerR").val(jsonObject.assigned_Lawyer);
	$("#assignedByR").val(jsonObject.assigned_By);
	$("#assignedDateR").val(newAssigned_Date);
	$("#queryCreatedDateR").val(newQuery_Created_Date);
	$("#queryResponseDateR").val(newQuery_Response_Date);
	$("#queryCommentR").val(jsonObject.query_Comment);
	}
$(document).on('click', "#assignQueryButton", function() {
		if($("input[type='checkbox'][name='getqueryComment']:checked").length > 0){
			var getValue=$("input[type='checkbox'][name='getqueryComment']:checked").val();
			if(getValue == "1"){
		var userId = $("#user_id").text();
		var assignQueryInfo = [];
		assignQueryInfo.push(userId);
		var commentId =$("#commentIDs").val();
		assignQueryInfo.push(commentId);
		var lawyerId = $('input:text[name=lwyrIds]').val();
		assignQueryInfo.push(lawyerId);
		var queryId = $('textarea[name=qryID]').val();
		assignQueryInfo.push(queryId);
		}}else
		{
			var userId = $("#user_id").text();
			var assignQueryInfo = [];
			assignQueryInfo.push(userId);
			//var commentId =null;
			var commentId =$("#commentIDs").val();
			assignQueryInfo.push(commentId);
			var lawyerId = $('input:text[name=lwyrIds]').val();
			assignQueryInfo.push(lawyerId);
			var queryId = $('textarea[name=qryID]').val();
			assignQueryInfo.push(queryId);
		}
		$(".modal-backdrop").remove();
		
		ajaxPost("NoForm", "/assignQuery/" + assignQueryInfo);
		});

$(document).on('click',"#newQueryAdminMenu",function() {
		var client_id = $("#user_id").text();
		ajaxPostNew("adminNewQueryForm", "/newQueryAdmin.web/"
		    + client_id, "/lawyer.web/" + client_id);
	});
$(document).on('click',"#openPopoupButton",function(){
		if(($("input[type='checkbox'][name='qryId']:checked").length > 0) && 
				($("input[type='radio'][name='lwyrId']:checked").length > 0)){
			$('#popupQueryLink').click();
			if($("input[type='checkbox'][name='qryId']:checked").length > 1){
			$("#applyToAllDiv").css("display","block");	
			}else{
			  $("#applyToAllDiv").css("display","none");	
			}
			$("#qryIDs").val("");
		
			//var value = [];
			$('input:checkbox[name=qryId]').each(function(){	
				
	    	if($(this).is(':checked')){
	    		//value.push($(this).val());
	    	$("#qryIDs").val( $(this).val() + "," +  $( "#qryIDs").val());
	    	}
	    });	//alert(value);
        var selectedVal ="";
	    var selected = $("input[type='radio'][name='lwyrId']:checked");
	    if(selected.length > 0){
	    	selectedVal =selected.val();
	    	$("#lwyrIDs").val(selectedVal);
	    }
	    $("#newQueryAdminSpan").text("");
	}else{
		$("#newQueryAdminSpan").text("Please Select Query Id and Lawyer Id to Assign Query");
	}    
	});

function getQueryDescriptionInUserpopUp(client_Id,query_Id,ptype) {
	    	var value = client_Id + "-" + query_Id;
	    	$.ajax({
	    		method : 'POST',
	    		url : '/LegalBell' + '/getQueryDesc/' + value,
	    		success : function(response) {
	    			console.log(response);
	    			var qrydesc = response.result;
	    			if(ptype=='N'){
	    			$("#QueryDescription").html("");
	    			$("#QueryDescription").append(qrydesc);
	    			}else{
	    				$("#QueryDescriptionR").html("");
		    			$("#QueryDescriptionR").append(qrydesc);	
	    			}
	    		},
	    		error : function() {
	    			loadAjaxErrorPage();
	    		}
	    	});
 }
function getQueryResponseInUserpopUp(client_Id,query_Id,ptype) {
	    	var value = client_Id + "-" + query_Id;
	    	$.ajax({
	    		method : 'POST',
	    		url : '/LegalBell' + '/getQueryResponseContent/' + value,
	    		success : function(response) {
	    			var qryRes = response.result;
	    			if(ptype=='N'){
	    			$("#QueryResponse").html("");
	    			$("#QueryResponse").append(qryRes);
	    			}else{
	    				$("#QueryDescriptionR").html("");
		    			$("#QueryDescriptionR").append(qryRes);	
	    			}
	    		},
	    		error : function() {
	    			loadAjaxErrorPage();
	    		}
	    	});
}
function getQueryResponseUserpopUp(client_Id,query_Id) {
	value = client_Id + "-" + query_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getQueryResponseContent/' + value,
		success : function(response) {
			var queryResponse = response.result;
			$("#queryResponse").html("");
			$("#queryResponse").append(queryResponse);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}
function getQueryResponseUserpopUpEditor(client_Id,query_Id) {
	value = client_Id + "-" + query_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getQueryResponseContent/' + value,
		success : function(response) {
			var queryResponse = response.result;
			$("#editor").Editor("setText", queryResponse);
			},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}
	$(document).on('click', "#activateQueryButton", function() {
		var checkboxValues = [];
		checkboxValues.push($("#user_id").text());
		if(($("input[type='checkbox'][name='query_Id']:checked").length > 0)){
		$('input:checkbox[name=query_Id]').each(function() {
			if ($(this).is(':checked')) {
				checkboxValues.push($(this).val());
			}
		});
		ajaxPost("NoForm", "/activatequery/" + checkboxValues);
		}else{
			$("#newQueryLawyerSpan").text("Please Select atleast one Query to activate");
			checkboxValues.push($(this).val());
		}
	});
$(document).on('click', "#approveQueryButton", function() {
		var checkboxValues = [];
		checkboxValues.push($("#user_id").text());
		if(($("input[type='checkbox'][name='query_Id']:checked").length > 0)){
		$('input:checkbox[name=query_Id]').each(function() {
			if ($(this).is(':checked')) {
				checkboxValues.push($(this).val());
			}
		});
		ajaxPost("NoForm", "/approveQueryResponse/" + checkboxValues);
		}else{
			$("#newQueryLawyerSpan").text("Please Select atleast one Query to approve");
			checkboxValues.push($(this).val());
		}
	});

	$(document).on('click', "#respondQueryButton", function() {
		var radiovalue = null;
		if(($("input[type='radio'][name='query_Id']:checked").length > 0)){
		$('input:radio[name=query_Id]').each(function() {
			if ($(this).is(':checked')) {
				radiovalue = ($(this).val());
			}
		});
        ajaxPost("NoForm", "/responseQuery/" + radiovalue);
		}else{
			$("#progressQueryLawyerSpan").text("Please select one Query to give Response");
		}
	});
$(document).on('click', "#createLegalAdvisory", function() {
		var queryInfo = [];
		queryInfo.push($("#client_id").text());
		queryInfo.push("Legal Advisory");
		ajaxPost("NoForm", "/createQuery/"+queryInfo);	
	});
$(document).on('click', "#createTaxAdvisory", function() {
		var queryInfo = [];
		queryInfo.push($("#client_id").text());
		queryInfo.push("Tax Advisory");
		ajaxPost("NoForm", "/createQuery/"+queryInfo);	
	});
function loadQueryContent(url, jsonObject) {
		$("#contentPage").html("");
		$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
				function() {
			   $("#Client_Id").val(jsonObject.client_id);
			   $("#Advice_For").val(jsonObject.advice_For);
			   $("#Query_Id").val(jsonObject.query_Id);
			   $("#queryCategory").val(jsonObject.query_Category);
			   $("#querySubCategory").val(jsonObject.query_SubCategory);
			   var x = document.getElementById("qryCat");
			   var queryCat =jsonObject.queryCategoryMap;
			   for (var i = 0; i < queryCat.length; i++) {
			    	var option = document.createElement("option");
			    	option.text = queryCat[i];
				    x.add(option);
				    $("#qryCat").val(jsonObject.query_Category);
             }
				});
	} 
function onblurAdminQueryReport(){
		$("#newQueryReportSpan").text("");
		$("#progressQueryReportSpan").text("");
		$("#solvedQueryReportSpan").text("");
	}
function onblurLawyerQueryReport(){
		$("#lawyerNewQueryReportSpan").text("");
		$("#lawyerProgressQueryReportSpan").text("");
		$("#lawyerSolvedQueryReportSpan").text("");
	}
function getCommentTypeList(){
		$
		.ajax({
			url : '/LegalBell' + '/getCommentType',
			method : 'POST',
			success : function(response) {
				var jsonObject = response.result;
				var cmntType = document.getElementById("commentType");
				for (var i = 0; i < jsonObject.length; i++) {
					var option = document.createElement("option");
					option.text = jsonObject[i];
					cmntType.add(option);
				}
		$("#hiddenCommentType").val($("#commentType").val());
		$.ajax({
			url : '/LegalBell' + '/getCommentCategory',
			method : 'POST',
			success : function(response) {
				var jsonObject1 = response.result;
				var cmntType = document.getElementById("commentCat");
				for (var i = 0; i < jsonObject1.length; i++) {
					var option = document.createElement("option");
					option.text = jsonObject1[i];
					cmntType.add(option);
				}
		$("#hiddenCommentCategory").val($("#commentCat").val());
	},
		error : function() {
			loadAjaxErrorPage();
		}
		});
	},
		error : function() {
			loadAjaxErrorPage();
		}

	});
	}
$(document).on('click', "#queryPDF", function() {
		var queryInfo = [];
		queryInfo.push($("#fixedquery").val());
		queryInfo.push($("#client_id").text());
		//alert(queryInfo);
		ajaxpdfdownload('/getQueryPDF/' + queryInfo);
});
function ajaxpdfdownload(url) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/LegalBell' + url, true);
		xhr.responseType = 'arraybuffer';
		xhr.onload = function () {
		    if (this.status === 200) {
		        var filename = "";
		        var disposition = xhr.getResponseHeader('Content-Disposition');
		        if (disposition && disposition.indexOf('attachment') !== -1) {
		            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
		            var matches = filenameRegex.exec(disposition);
		            if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
		        }
		        var type = xhr.getResponseHeader('Content-Type');
		        var blob = new Blob([this.response], { type: type });
		        if (typeof window.navigator.msSaveBlob !== 'undefined') {
		            window.navigator.msSaveBlob(blob, filename);
		        } else {
		            var URL = window.URL || window.webkitURL;
		            var downloadUrl = URL.createObjectURL(blob);
		            if (filename) {
		                var a = document.createElement("a");    
		                if (typeof a.download === 'undefined') {
		                    window.location = downloadUrl;
		                } else {
		                    a.href = downloadUrl;
		                    a.download = filename;
		                    document.body.appendChild(a);
		                    a.click();
		                }
		            } else {
		                window.location = downloadUrl;
		            }
		            setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
		        }
		    }
		};
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send();
	}
$(document).on('click', "#confirmPaymentButton", function() {
		var query_id = $("#fixedquery").val();
		ajaxPost("NoForm", "/confirmPayment/"+ query_id);	
		});
function loadUpdateQueryContent(url, jsonObject) {
		$("#contentPage").html("");
		$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
				function() {
			console.log(jsonObject.query_SubCategory);
			$("#Advice_For").val($("#advice_For").text());
			$("#Client_Id").val($("#client_id").text());
			   $("#Query_Id").val(jsonObject.query_Id);
			   $("#queryType").val(jsonObject.query_Type);
			   if(document.getElementById('queryType').value=="CaseSpecific"){
					document.getElementById("selectCaseId").style.display = "block";
			   }
			   $("#queryCategory").val(jsonObject.query_Category);
			   $("#querySubCategory").val(jsonObject.query_SubCategory);
			   $("#caseId").val(jsonObject.case_Id); 
			   $("#QueryBrief").val(jsonObject.query_BriefDescription);
			   var x = document.getElementById("qryCat");
			   var queryCat =jsonObject.queryCategoryMap;
			   for (var i = 0; i < queryCat.length; i++) {
			    	var option = document.createElement("option");
			    	option.text = queryCat[i];
				    x.add(option);
				   
             } $("#qryCat").val(jsonObject.query_Category);
			   
			   var m = document.getElementById("qrySubCat");
			   var querySubCat =jsonObject.querySubCategoryMap;
			   for (var i = 0; i < querySubCat.length; i++) {
			    	var option = document.createElement("option");
			    	option.text = querySubCat[i];
				    m.add(option);
			} 
			   $("#qrySubCat").val($("#querySubCategory").val());
			   var y = document.getElementById("querytype");
			  var querytype =jsonObject.queryTypeMap;
			  for (var i = 0; i < querytype.length; i++) {
			    	 var option = document.createElement("option");
			    	option.text = querytype[i];
				    y.add(option);
		   }
			  $("#querytype").val(jsonObject.query_Type);
			  
			  var c = document.getElementById("cseId");
			  var caseId =jsonObject.caseIdMap;
			  for (var i = 0; i < caseId.length; i++) {
			    	 var option = document.createElement("option");
			    	option.text = caseId[i];
				    c.add(option);
			}	  $("#cseId").val(jsonObject.case_Id);
				});
} 
function ValidateUpdateQuery(){
	 var Query_Id = $("#fixedquery").val();
 if(document.getElementById("querytype").value == ""){
 	document.getElementById("qryTypeSpan").textContent = "*Please choose a Query Type.";	
 }else if(document.getElementById("querytype").value == "General"){
 	if(document.getElementById("qryCat").value == ""){
 		document.getElementById("qryCatSpan").textContent = "*Please choose a Query Category";	
 	}else if(document.getElementById("qrySubCat").value == ""){
 		document.getElementById("querySubCatSpan").textContent = "*Please choose a Query SubCategory";	
 	}else if(document.getElementById("QueryBrief").value == ""){
 		document.getElementById("queryBriefSpan").textContent = "*Please Enter some brief Description of your Query";
 	}else{
 ajaxPost('updateQueryForm','/updateDetailsQuery');
 }
 }else{
 	if(document.getElementById("qryCat").value == ""){
 		document.getElementById("qryCatSpan").textContent = "*Please choose a Query Category";	
 	}else if(document.getElementById("qrySubCat").value == ""){
 		document.getElementById("querySubCatSpan").textContent = "*Please choose a Query SubCategory";	
 	}else if(document.getElementById("cseId").value == ""){
 		document.getElementById("caseIdSpan").textContent = "*Please Choose a Case Id";
 	}else if(document.getElementById("QueryBrief").value == ""){
 		document.getElementById("queryBriefSpan").textContent = "*Please Enter some brief Description of your Query";
 	}else{
 		ajaxPost('updateQueryForm','/updateDetailsQuery');
 }
 }
 getQueryDescriptionInUpdateQueryEditor(Query_Id);
 }
 function getQueryDescriptionInUpdateQueryEditor(query_Id) {
 	var value = $("#client_id").text();
 	value = value + "-" + query_Id;
 	$.ajax({
 		method : 'POST',
 		url : '/LegalBell' + '/getQueryDesc/' + value,
 		success : function(response) {
 			var queryDescription = response.result;
 			$("#updateQueryEditor").Editor("setText", queryDescription);
 		},
 		error : function() {
 			loadAjaxErrorPage();
 		}
 	});
 }
 
 function onBlurUpdateQueryEditor(){
	 	document.getElementById("myUpdatespan").textContent = "";	
	 }
 function onBlurUpdateQuery(){
	 	document.getElementById("qryTypeSpan").textContent = "";	
	 	document.getElementById("qryCatSpan").textContent = "";
	 	document.getElementById("querySubCatSpan").textContent = "";
	 	document.getElementById("caseIdSpan").textContent = "";
	 	document.getElementById("queryBriefSpan").textContent = "";
	 }
 function UpdateQrySubCatValue(id){
	 	var value = document.getElementById(id).value;
	 	$("#querySubCategory").val(value);
	 }
function getUploadedFileDetails(ClientId,QueryId,ptype){
	 	var value1 = ClientId + "-" + QueryId;
	 	var value = ClientId + "||" + QueryId + "||" + "Uploaded";
	 	$.ajax({
	 				method : 'POST',
	 				url : '/LegalBell' + '/getUploadedFileDetailsOfQuery/'+value1,
	 				success : function(response) {
	 					var finalresult = response.result;
	 					var fileLength = response.result.length;
	 					var txt = "";
	 					
	 					if (fileLength > 0) {
	 						txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
	 						
	 					for (var i = 0; i < fileLength; i++) {
	 						txt += "<tr><td><input type='text' name='sl_No' size='3' readonly='readonly' value="
	 								+ (i + 1)+"></td>"
	 								+"<td><input type='text' name='file_Name' size='60' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td>" 
	 								+"<td><button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfQuery(this.id)'><img src='assets/imgs/view.png' alt='' width='25' height='25'/></button>"
	 								//+"<td><input type='button' value='view' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfQuery(this.id)' />&nbsp;&nbsp;&nbsp;" 
	 								+"<button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdfOfQuery(this.id)'><img src='assets/imgs/download.png' alt='' width='25' height='25'/></button></td></tr>"
	 								//+"<input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdfOfQuery(this.id)' /></td></tr>"
	 								
	 					}
	 						if(ptype=="N"){
	 					$("#uploadedFileDetails").html("");
	 					$("#uploadedFileDetails").append(txt);
	 						}else{
	 							$("#uploadedFileDetailsR").html("");
	 		 					$("#uploadedFileDetailsR").append(txt);
	 						}
	 				}
	 				},
	 				error : function() {
	 					loadAjaxErrorPage();
	 				}

	 			});
	 }
function getUploadedFileDetailsInQueryReview(ClientId,QueryId){
	//alert(ClientId);
	//alert(QueryId);
	 var value1 = ClientId + "-" + QueryId + "-QueryFileHandler" ;
	 	value = ClientId + "||" + QueryId + "||" + "Temp";
	 	$.ajax({
	 				method : 'POST',
	 				url : '/LegalBell' + '/getUploadedFileDetailsOfQuery/'+value1,
	 				success : function(response) {
	 					var finalresult = response.result;
	 					//alert(finalresult);
	 					var fileLength = response.result.length;
	 					var txt = "";
	 					
	 					$("#uploadedFileDetails").html("");
	 						txt += "<tr><th class='col-sm-1'><b>Sl.No</b></th><th class='col-sm-6'><b>File Name</b></th><th class='col-sm-3'><b>Operation</b></th></tr>"
	 							if(fileLength > 0){
	 					for (var i = 0; i < fileLength; i++) {
	 						txt += "<tr><td ><input type='text' name='sl_No' size='1' readonly='readonly' value="+ (i + 1)+"></td>"
	 								+"<td><input type='text' name='file_Name'  size='25%' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td>"
	 								+"<td><button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfQuery(this.id)'><img src='assets/imgs/view.png' alt='' width='25' height='25'/></button>"
	 								/*+"<input type='button' value='view' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfQuery(this.id)'/>&nbsp;&nbsp;&nbsp;"*/
	 								+"<button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdfOfQuery(this.id)'><img src='assets/imgs/download.png' alt='' width='25' height='25'/></button> "
	 								/*+"<input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdfOfQuery(this.id)' />" */
	 								+"<button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='deleteUploadedfilesPdfOfQuery(this.id,this)'><img src='assets/imgs/delete.png' alt='' width='25' height='25'/></button></td></tr>"
	 								/*+"<input type='button' value='delete' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='deleteUploadedfilesPdfOfQuery(this.id,this)' /></td></tr>"*/
	 					}
	 				 }
	 					$("#uploadedFileDetails").append(txt);
	 				},
	 				error : function() {
	 					loadAjaxErrorPage();
	 				}

	 			});
	 }


function getResponseFileDetailsInQueryReview(ClientId,QueryId){
	 var value1 = ClientId + "-" + QueryId + "-QueryFileHandler" ;
	 	value = ClientId + "||" + QueryId + "||" + "Response";
	 	$.ajax({
	 				method : 'POST',
	 				url : '/LegalBell' + '/getResponseFileDetailsOfQuery/'+value1,
	 				success : function(response) {
	 					console.log(response);
	 					var finalresult = response.result;
	 					var fileLength = response.result.length;
	 					var txt = "";
	 					
	 					$("#responseFileDetailsDIV").html("");
	 						txt += "<tr><th class='col-sm-1'><b>Sl.No</b></th><th class='col-sm-6'><b>File Name</b></th><th class='col-sm-3'><b>Operation</b></th></tr>"
	 							if(fileLength > 0){
	 					for (var i = 0; i < fileLength; i++) {
	 						txt += "<tr><td ><input type='text' name='sl_No' size='2' readonly='readonly' " +
	 								"value="
	 								+ (i + 1)
	 								+ "></td><td ><input type='text' name='file_Name'  " +
	 								"size='32%' readonly='readonly'" +
	 								" value="+finalresult[i].replace(/\s/g,"|")+"></td>" +
	 								"<td><button type='button' title='View'"+
	 								"id="+finalresult[i].replace(/\s/g,"|")+"||"+
	 								" onclick='getUploadedFileViewOfQuery(this.id)'><img src='assets/imgs/view.png' alt='' width='25' height='25'/></button></td></tr>";
	 								/*"<td><input type='button' value='view'" +
	 								" id="+finalresult[i].replace(/\s/g,"|")+"||"+
	 								value+" onclick='getUploadedFileViewOfQuery(this.id)'  /></td></tr>"*/	
	 								
	 					}
	 							}
	 					$("#responseFileDetailsDIV").append(txt);
	 				},
	 				error : function() {
	 					loadAjaxErrorPage();
	 				}

	 			});
	 }
 function getUploadedfilesPdfOfQuery(ArrayOfFile){
 	var fileArray = ArrayOfFile.split("||");
 	var uploadedFileInfo = [];
 	uploadedFileInfo.push(fileArray[1]);
 	uploadedFileInfo.push(fileArray[2]);
 	uploadedFileInfo.push(fileArray[3]);
 	uploadedFileInfo.push(fileArray[0]);
 	uploadedFilesdownloadOfQuery('/downloadUploadedFilesOfQuery/' + uploadedFileInfo);
}
 function uploadedFilesdownloadOfQuery(url) {
 	var xhr = new XMLHttpRequest();
 	xhr.open('POST', '/LegalBell' + url, true);
 	xhr.responseType = 'arraybuffer';
 	xhr.onload = function() {
 		if (this.status === 200) {
 			var filename = "";
 			var disposition = xhr.getResponseHeader('Content-Disposition');
 			if (disposition && disposition.indexOf('attachment') !== -1) {
 				var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
 				var matches = filenameRegex.exec(disposition);
 				if (matches != null && matches[1])
 					filename = matches[1].replace(/['"]/g, '');
 			}
 			var type = xhr.getResponseHeader('Content-Type');

 			var blob = new Blob([ this.response ], {
 				type : type
 			});
 			if (typeof window.navigator.msSaveBlob !== 'undefined') {
 			window.navigator.msSaveBlob(blob, filename);
 			} else {
 				var URL = window.URL || window.webkitURL;
 				var downloadUrl = URL.createObjectURL(blob);
 				if (filename) {
 					var a = document.createElement("a");
 					if (typeof a.download === 'undefined') {
 						window.location = downloadUrl;
 					} else {
 						a.href = downloadUrl;
 						a.download = filename;
 						document.body.appendChild(a);
 						a.click();
 					}
 				} else {
 					window.location = downloadUrl;
 				}

 				setTimeout(function() {
 					URL.revokeObjectURL(downloadUrl);
 				}, 100); 
 			}
 		}
 	};
 	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
 	xhr.send();
 }
$(document).on('click', "#queryDocRequested", function() {
		var value = $("#queryDocRequested").text().split(" ");
		var queryDocRequestedNumber = value[value.length-1];
		if(queryDocRequestedNumber == 0){
			$("#hiddenNoValPopUpModal").click();
		}else{
		var client_id = $("#client_id").text();
		ajaxPost("NoForm", "/queryDocRequested.web/" + client_id);
		}
		});
$(document).on('click', "#queryDocRequestClosed", function() {
		var value = $("#queryDocRequestClosed").text().split(" ");
		var queryDocRequestClosedNumber = value[value.length-1];
		if(queryDocRequestClosedNumber == 0){
			$("#hiddenNoValPopUpModal").click();
		}else{
		var client_id = $("#client_id").text();
		ajaxPost("NoForm", "/queryDocClosedRequested.web/" + client_id);
		}
		});
function createQuerySpecificCase(queryId){
		ajaxPost("NoForm", "/createCaseByQueryId/" + queryId);
	}
function getUploadedFileViewOfQuery(ArrayOfFile){
		var fileArray = ArrayOfFile.split("||");
	 	var uploadedFileInfo = [];
	 	uploadedFileInfo.push(fileArray[1]);
	 	uploadedFileInfo.push(fileArray[2]);
	 	uploadedFileInfo.push(fileArray[0]);
	 	uploadedFileInfo.push(fileArray[3]);
	 $.ajax({
	 		method : 'POST',
	 		url : '/LegalBell' + '/convertFileToHtml',
	 		data:{
	 			Value:uploadedFileInfo,
	 		},
	 		success : function(response) {
	 			console.log(response.result);
	 			if(response.result.code=="01"){
	 				$("#fileDetailsPopUp").click();
		 			$("#fileDetailsDiv").html(response.result.message);
	 			}
	 			else if(response.result.code=="02"){
	 				if (response.result.message != null) {
	                    window.open('data:application/pdf;base64, ' + encodeURIComponent(response.result.message));
	                }
	 			}else if(response.result.code=="03"){
	 			 	$("#fileDetailsPopUp").click();
	 				$("#fileDetailsDiv").html(response.result.message);
	 			}
	 		},
	 		error : function() {
	 			loadAjaxErrorPage();
	 		}
	 	});
	}
function confirmQueryOnClick(query_Id){
		 ajaxPost("NoForm", "/makeUnConfirmToConfirmQuery/" + query_Id);
	 }
function skipQueryPaymentOnClick(query_Id){
	 ajaxPost("NoForm", "/skipQueryPayment/" + query_Id);
}
function onBlurCreateGenericComment() {
	document.getElementById("commentTextSpan").textContent = "";
}

/*function deleteUploadedfilesPdfOfQuery(id,thisid){
	
	var ID = id.split("||");
	var filname=String(ID[0]);
	var clientId=String(ID[1]);
	var queryId=String(ID[2]);
	var folder=String(ID[3]);
	//alert(folder);
	
    var objFormData = new FormData();
    objFormData.append('filename', filname);
    objFormData.append('clientId',clientId);
    objFormData.append('queryId', queryId);
    objFormData.append('fileLocation', folder);
   
    $.ajax({
        url: '/LegalBell/deleteQueryFileFromReview',
        type: 'POST',
        contentType: false,
        data: objFormData,
        //JQUERY CONVERT THE FILES ARRAYS INTO STRINGS.SO processData:false
        processData: false,
        success: function(data) {
       
        }
    });
   
    $(thisid).closest('tr').remove();
}*/
$(document).on('click',"#legalNoticeReportAdmin",function() {
	$("#contentPage").load("/LegalBell/html/contentPages/AdminLegalNoticeReport.html",function(){
	$("#reportTab").load("/LegalBell/html/contentPages/AdminNewLegalNoticeReport.html");
			
	});
	});




function onblurAdminLegalNoticeReport(){
	$("#newLegalNoticeReportSpan").text("");
	$("#progressLegalNoticeReportSpan").text("");
	$("#solvedLegalNoticeReportSpan").text("");
}



$(document).on('click',"#adminNewLegalNoticeReport",function() {
	$("#reportTab").load("/LegalBell/html/contentPages/AdminNewLegalNoticeReport.html");
	$("#genericDataTable").dataTable().fnDestroy();
	$("#table").css("display", "none");
});
$(document).on('click',"#adminProgressLegalNoticeReport",function() {
	$("#reportTab").load("/LegalBell/html/contentPages/AdminProgressLegalNoticeReport.html");
	$("#genericDataTable").dataTable().fnDestroy();
	$("#table").css("display", "none");
});
$(document).on('click',"#adminSolvedLegalNoticeReport",function() {
	$("#reportTab").load("/LegalBell/html/contentPages/AdminSolvedLegalNoticeReport.html");
	$("#genericDataTable").dataTable().fnDestroy();
	$("#table").css("display", "none");
});



$(document).on('click',"#lawyerNewLegalNoticeReport",function() {
	$("#reportTab").load("/LegalBell/html/contentPages/LawyerNewLegalNoticeReport.html");
	$("#genericDataTable").dataTable().fnDestroy();
	$("#table").css("display", "none");
});
$(document).on('click',"#lawyerProgressLegalNoticeReport",function() {
	$("#reportTab").load("/LegalBell/html/contentPages/LawyerProgressLegalNoticeReport.html");
	$("#genericDataTable").dataTable().fnDestroy();
	$("#table").css("display", "none");
});
$(document).on('click',"#lawyerSolvedLegalNoticeReport",function() {
	$("#reportTab").load("/LegalBell/html/contentPages/LawyerSolvedLegalNoticeReport.html");
	$("#genericDataTable").dataTable().fnDestroy();
	$("#table").css("display", "none");
});



$(document).on('click',"#newLegalNoticeReportButton",function() {
	var days=$("#newLegalNoticeInterval").val();
	if(days>0 && days<=90){
	var reportInfo =$("#newLegalNoticeInterval").val().concat(",");
	reportInfo=reportInfo.concat("Initial");
	//alert(reportInfo);
	ajaxPost('NoForm','/LegalNoticeReportAdmin.web/'+reportInfo);
	}
	else{
		$("#newLegalNoticeReportSpan").text("Days Range should be between 1 to 90");	
	}
	});
$(document).on('click',"#progressLegalNoticeReportButton",function() {
	var days=$("#progressLegalNoticeInterval").val();
	if(days>0 && days<=90){
		var reportInfo =$("#progressLegalNoticeInterval").val().concat(",");
		reportInfo=reportInfo.concat("Active");
		//alert(reportInfo);
		ajaxPost('NoForm','/LegalNoticeReportAdmin.web/'+reportInfo);
	}
	else{
		$("#progressLegalNoticeReportSpan").text("Days Range should be between 1 to 90");	
	}
	});
$(document).on('click',"#solvedLegalNoticeReportButton",function() {
	var days=$("#solvedLegalNoticeInterval").val();
	if(days>0 && days<=90){
		var reportInfo =$("#solvedLegalNoticeInterval").val();
		ajaxPost('NoForm','/closedLegalNoticeReportAdmin.web/'+reportInfo);
	}
	else{
		$("#solvedLegalNoticeReportSpan").text("Days Range should be between 1 to 90");	
	}
	});






$(document).on('click',"#legalNoticeReportLawyer",function() {
	$("#contentPage").load("/LegalBell/html/contentPages/LawyerLegalNoticeReport.html",function(){
	$("#reportTab").load("/LegalBell/html/contentPages/LawyerNewLegalNoticeReport.html");
			
	});
	});

function onblurLawyerLegalNoticeReport(){
	$("#newLegalNoticeReportSpanLawyer").text("");
	$("#progressLegalNoticeReportSpanLawyer").text("");
	$("#solvedLegalNoticeReportSpanLawyer").text("");
}

$(document).on('click',"#lawyerNewLegalNoticeReport",function() {
	$("#reportTab").load("/LegalBell/html/contentPages/LawyerNewLegalNoticeReport.html");
	$("#genericDataTable").dataTable().fnDestroy();
	$("#table").css("display", "none");
});
$(document).on('click',"#lawyerProgressLegalNoticeReport",function() {
	$("#reportTab").load("/LegalBell/html/contentPages/LawyerProgressLegalNoticeReport.html");
	$("#genericDataTable").dataTable().fnDestroy();
	$("#table").css("display", "none");
});
$(document).on('click',"#lawyerSolvedLegalNoticeReport",function() {
	$("#reportTab").load("/LegalBell/html/contentPages/LawyerSolvedLegalNoticeReport.html");
	$("#genericDataTable").dataTable().fnDestroy();
	$("#table").css("display", "none");
});


$(document).on('click',"#newLegalNoticeReportButtonLawyer",function() {
	var days=$("#newLegalNoticeIntervalLawyer").val();
	if(days>0 && days<=90){
	var reportInfo =$("#newLegalNoticeIntervalLawyer").val().concat(",");
	reportInfo=reportInfo.concat("New");
	reportInfo=reportInfo.concat(",");
	reportInfo=reportInfo.concat($("#user_id").text());
	//alert(reportInfo);
	ajaxPost('NoForm','/LegalNoticeReportLawyer.web/'+reportInfo);
	}
	else{
		$("#newLegalNoticeReportSpanLawyer").text("Days Range should be between 1 to 90");	
	}
	});
$(document).on('click',"#progressLegalNoticeReportButtonLawyer",function() {
	var days=$("#progressLegalNoticeIntervalLawyer").val();
	if(days>0 && days<=90){
		var reportInfo =$("#progressLegalNoticeIntervalLawyer").val().concat(",");
		reportInfo=reportInfo.concat("Active");
		reportInfo=reportInfo.concat(",");
		reportInfo=reportInfo.concat($("#user_id").text());
		//alert(reportInfo);
		ajaxPost('NoForm','/LegalNoticeReportLawyer.web/'+reportInfo);
	}
	else{
		$("#progressLegalNoticeReportSpanLawyer").text("Days Range should be between 1 to 90");	
	}
	});
$(document).on('click',"#solvedLegalNoticeReportButtonLawyer",function() {
	var days=$("#solvedLegalNoticeIntervalLawyer").val();
	if(days>0 && days<=90){
		var reportInfo =$("#solvedLegalNoticeIntervalLawyer").val().concat(",");
		reportInfo=reportInfo.concat($("#user_id").text());
		ajaxPost('NoForm','/closedLegalNoticeReportLawyer.web/'+reportInfo);
	}
	else{
		$("#solvedLegalNoticeReportSpanLawyer").text("Days Range should be between 1 to 90");	
	}
	});









function loadGenericTableLegalNoticeReport(url, jsonObject) {
	$("#table").css("display", "block");
	$("#genericDataTable").dataTable().fnDestroy(); 
					$("#genericDataTable").dataTable({
						
						dom: 'lBfrtip',
				        buttons: [
				            /*'copyHtml5',
				            'excelHtml5',
				            'pdfHtml5'*/
				        ],
						"bProcessing" : true,
						"sort" : "position",
						"bStateSave" : false,
						"iDisplayLength" : 5,
						"iDisplayStart" : 0,
						"aaData" : jsonObject,
						"aoColumns" :  [ {
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
					});
	}


