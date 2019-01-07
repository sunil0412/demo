
$(document).on(
		'click',
		"#caseReport",
		function() {
			$("#contentPage").load(
					"/LegalBell/html/contentPages/AdminNewCaseReport.html");
		});

$(document).on(
		'click',
		"#adminNewCaseReport",
		function() {
			$("#contentPage").load(
					"/LegalBell/html/contentPages/AdminNewCaseReport.html");
		});

$(document).on(
		'click',
		"#adminProgressCaseReport",
		function() {
			$("#loadCaseReport").load(
					"/LegalBell/html/contentPages/AdminProgressCaseReport.html");
		});

$(document).on(
		'click',
		"#adminSolvedCaseReport",
		function() {
			$("#loadCaseReport").load(
					"/LegalBell/html/contentPages/AdminSolvedCaseReport.html");
		});

$(document).on('click', "#newCaseReportButton", function() {
	var days = $("#newCaseInterval").val();
	if (days > 0 && days <= 90) {
		var reportInfo = [];
		reportInfo.push($("#newCaseInterval").val());
		reportInfo.push($("#user_id").text());
		ajaxPost('NoForm', '/newCaseReport.web/' + reportInfo);
	} else {
		$("#newCaseReportSpan").text("Days Range should be between 1 to 90");
	}
});

$(document).on(
		'click',
		"#progressCaseReportButton",
		function() {
			var days = $("#progressCaseInterval").val();
			if (days > 0 && days <= 90) {
				var reportInfo = [];
				reportInfo.push($("#progressCaseInterval").val());
				reportInfo.push($("#user_id").text());
				ajaxPost('NoForm', '/progressCaseReport.web/' + reportInfo);
			} else {
				$("#progressCaseReportSpan").text(
						"Days Range should be between 1 to 90");
			}
		});

$(document).on(
		'click',
		"#solvedCaseReportButton",
		function() {
			var days = $("#solvedCaseInterval").val();
			if (days > 0 && days <= 90) {
				var reportInfo = [];
				reportInfo.push($("#solvedCaseInterval").val());
				reportInfo.push($("#user_id").text());
				ajaxPost('NoForm', '/solvedCaseReport.web/' + reportInfo);
			} else {
				$("#solvedCaseReportSpan").text(
						"Days Range should be between 1 to 90");
			}
		});


$(document).on(
		'click',
		"#lawyerCaseReport",
		function() {
			$("#contentPage").load(
					"/LegalBell/html/contentPages/LawyerNewCaseReport.html");
		});

$(document).on(
		'click',
		"#lawyerNewCaseReport",
		function() {
			$("#contentPage").load(
					"/LegalBell/html/contentPages/LawyerNewCaseReport.html");
		});

$(document).on(
		'click',
		"#lawyerProgressCaseReport",
		function() {
			$("#loadLawyerCaseReport").load(
					"/LegalBell/html/contentPages/LawyerProgressCaseReport.html");
		});

$(document).on(
		'click',
		"#lawyerSolvedCaseReport",
		function() {
			$("#loadLawyerCaseReport").load(
					"/LegalBell/html/contentPages/LawyerSolvedCaseReport.html");
		});

$(document).on(
		'click',
		"#lawyerNewCaseReportButton",
		function() {
			var days = $("#lawyerNewCaseInterval").val();
			if (days > 0 && days <= 90) {
				var reportInfo = [];
				reportInfo.push($("#lawyerNewCaseInterval").val());
				reportInfo.push($("#user_id").text());
				ajaxPost('NoForm', '/lawyerNewCaseReport.web/' + reportInfo);
			} else {
				$("#lawyerNewCaseReportSpan").text(
						"Days Range should be between 1 to 90");
			}
		});

$(document).on(
		'click',
		"#lawyerProgressCaseReportButton",
		function() {
			var days = $("#lawyerProgressCaseInterval").val();
			if (days > 0 && days <= 90) {
				var reportInfo = [];
				reportInfo.push($("#lawyerProgressCaseInterval").val());
				reportInfo.push($("#user_id").text());
				ajaxPost('NoForm', '/lawyerProgressCaseReport.web/'
						+ reportInfo);
			} else {
				$("#lawyerProgressCaseReportSpan").text(
						"Days Range should be between 1 to 90");
			}
		});

$(document)
		.on(
				'click',
				"#lawyerSolvedCaseReportButton",
				function() {
					var days = $("#lawyerSolvedCaseInterval").val();
					if (days > 0 && days <= 90) {
						var reportInfo = [];
						reportInfo.push($("#lawyerSolvedCaseInterval").val());
						reportInfo.push($("#user_id").text());
						ajaxPost('NoForm', '/lawyerSolvedCaseReport.web/'
								+ reportInfo);
					} else {
						$("#lawyerSolvedCaseReportSpan").text(
								"Days Range should be between 1 to 90");
					}
				});

function loadNewCaseReport(url, jsonObject) {
	$('#newcasetable').dataTable().fnDestroy();
	$("#newcasetable").dataTable({
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
		"aoColumns" : [ {
			"mData" : null,
			render : function(
					data, type,
					full, meta) {
				return '<input type="button" id="'+data.client_Id+","+data.case_Id+ '"value="'+ data.case_Id +'" onclick="loadCaseOnClick(this.id)">';
					}
		}, {
			"mData" : "client_Id"
		}, {
			"mData" : "case_Category"
		}, {
			"mData" : "case_SubCategory"
		}, {
			"mData" : null,
			render : function(
					data, type,
					full, meta) {
					var x=null;
					x=data.case_BriefDescription;
					if(x.length>18)
					{
					x=x.substr(0,18);
					x=x+"...";
					return x;
					}
					else return x;
			
			}
		}, {
				"mData" : null,
				render : function(data, type, full, meta) {
				var created_On=new Date(data.created_On);
				var newCreated_On=created_On.getFullYear() + '-'
				+( created_On.getMonth() + 1) + '-'
				+ created_On.getDate();
				return newCreated_On;
				}
		}, {
			"mData" : "current_Status"

		},{
           	
			render : function(data,type,full,meta){
					var date = new Date();
					
				var yyyy = date.getFullYear().toString();
				var mm = (date.getMonth()+1).toString();
				var dd = date.getDate().toString();
				var mmChars = mm.split('');
				var ddChars = dd.split('');
				var dateString = yyyy + '-' + (mmChars[1]?mm:"0" +mmChars[0]) + '-' + (ddChars[1]?dd:"0" +ddChars[0]);
				var sqlDateStr = data.created_On;
				var oneDay = 24*60*60*1000;
				var firstDate = new Date(sqlDateStr);
				var secondDate = new Date(dateString);
				var diffDays = Math.round(Math.abs((firstDate.getTime()-secondDate.getTime())/(oneDay))) ;
				return (diffDays + " days") ;
				},
				 "mData" :null
           
        }, ]
	});
}

function loadProgressCaseReport(url, jsonObject) {
	$('#progresscasetable').dataTable().fnDestroy();
	$("#progresscasetable").dataTable({
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
			"mData" : null,
			render : function(
					data, type,
					full, meta) {
				return '<input type="button" id="'+ data.client_Id+","+data.case_Id+'"value="'+ data.case_Id +'" onclick="loadCaseAndCommentOnClick(this.id)">';
					
					}
		}, {
			"mData" : "client_Id"
		}, {
			"mData" : "case_Category"
		}, {
			"mData" : "case_SubCategory"
		}, {
			"mData" : null,
			render : function(
					data, type,
					full, meta) {
					var x=null;
					x=data.case_BriefDescription;
					if(x.length>10)
					{
					x=x.substr(0,10);
					x=x+"...";
					return x;
					}
					else return x;
			
			}
		}, {
			"mData" : null,
			render : function(data, type, full, meta) {
			var created_On=new Date(data.created_On);
			var newCreated_On=created_On.getFullYear() + '-'
			+( created_On.getMonth() + 1) + '-'
			+ created_On.getDate();
			return newCreated_On;
			}
	    }, {
			"mData" : "assigned_Lawyer"
		}, {
				"mData" : null,
				render : function(data, type, full, meta) {
				var assigned_Date=new Date(data.assigned_Date);
				var newAssigned_Date=assigned_Date.getFullYear() + '-'
				+( assigned_Date.getMonth() + 1) + '-'
				+ assigned_Date.getDate();
				return newAssigned_Date;
				}
		}, {
			"mData" : "current_Status"
		},{
           	
			render : function(data,type,full,meta){
					var date = new Date();
					
				var yyyy = date.getFullYear().toString();
				var mm = (date.getMonth()+1).toString();
				var dd = date.getDate().toString();
				var mmChars = mm.split('');
				var ddChars = dd.split('');
				var dateString = yyyy + '-' + (mmChars[1]?mm:"0" +mmChars[0]) + '-' + (ddChars[1]?dd:"0" +ddChars[0]);
				var sqlDateStr = data.created_On;
				var oneDay = 24*60*60*1000;
				var firstDate = new Date(sqlDateStr);
				var secondDate = new Date(dateString);
				var diffDays = Math.round(Math.abs((firstDate.getTime()-secondDate.getTime())/(oneDay))) ;
				return (diffDays + " days") ;
				},
				 "mData" :null
           
        }, ]
	});
}


function loadSolvedCaseReport(url, jsonObject) {
	$('#solvedcasetable').dataTable().fnDestroy();
	$("#solvedcasetable").dataTable({
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
			"mData" : null,
			render : function(
					data, type,
					full, meta) {
				 return '<input type="button" id="'+ data.client_Id+","+data.case_Id+'"value="'+ data.case_Id +'" onclick="loadCaseAndCommentOnClick(this.id)">';
				 }
		}, {
			"mData" : "client_Id"
		}, {
			"mData" : "case_Category"
		}, {
			"mData" : "case_SubCategory"
		}, {
			"mData" : null,
			render : function(
					data, type,
					full, meta) {
					var x=null;
					x=data.case_BriefDescription;
					if(x.length>12)
					{
					x=x.substr(0,12);
					x=x+"...";
					return x;
					}
					else return x;
			
			}},
		{
			"mData" : null,
			render : function(data, type, full, meta) {
			var created_On=new Date(data.created_On);
			var newCreated_On=created_On.getFullYear() + '-'
			+( created_On.getMonth() + 1) + '-'
			+ created_On.getDate();
			return newCreated_On;
			}
	    }, {
			"mData" : "assigned_Lawyer"
		}, {
				"mData" : null,
				render : function(data, type, full, meta) {
				var completed_On=new Date(data.completed_On);
				var newCompleted_On=completed_On.getFullYear() + '-'
				+( completed_On.getMonth() + 1) + '-'
				+ completed_On.getDate();
				return newCompleted_On;
				}
		}, {
			"mData" : "current_Status"
		}, ]
	});
}



function loadCaseOnClick(multipleIds){
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchCaseDetails/"+ multipleId[1]);
	getCaseDescriptionInPopUp(multipleId[0],multipleId[1]);
	getUploadedFileDetailsOfCase(multipleId[0],multipleId[1],"allCaseFileDetails","Uploaded");
}

function loadDueDiligenceOnClick(multipleIds){
	//alert("work is in progress");
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchCaseDetails/"+ multipleId[1]);
	getCaseDescriptionInPopUp(multipleId[0],multipleId[1]);
	getUploadedFileDetailsOfCase(multipleId[0],multipleId[1],"allCaseFileDetails","Uploaded");
}

function getCaseDescriptionInPopUp(client_Id,case_Id) {
	var value = client_Id + "-" + case_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getCaseDesc/' + value,
		success : function(response) {
			var caseDesc = response.result;
			//alert(caseDesc);
			$("#CaseDescription").html("");
			$("#CaseDescription").html(caseDesc);
			//$(".cseDescription").html(caseDesc);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});

}


function loadCaseDetails(url, jsonObject){
	console.log("Popup Values");
	console.log(jsonObject);
	
	
	var created_On=new Date(jsonObject.created_On);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
	var client=jsonObject.client_Id.split("-");
	$('#displayCaseDetailsPopup').click();

	   $("#cClientId").val(client[0]);
	   $("#cclient").val(client[1]);
	   $("#CaseId").val(jsonObject.case_Id);
	   $("#caseCategory").val(jsonObject.case_Category);
	   $("#caseSubCategory").val(jsonObject.case_SubCategory);
	   
	   
	   $("#caseBriefDescription").val(jsonObject.case_BriefDescription);
	   $("#caseStatus").val(jsonObject.current_Status);
	   $("#caseCreatedDate").val(newCreated_On);
	   $("#caseComment").val(jsonObject.case_Comment);
	   $("#nextHereing").val(jsonObject.next_Hereing);
	   	if(jsonObject.current_Status=="Initial"){
	   		$("#cassignedLawyer").val("N.A");
			$("#cassignedBy").val("N.A");
			$("#cassignedDate").val("N.A");
			$("#completedOn").val("N.A");
	   	}

		if(jsonObject.current_Status=="New" || jsonObject.current_Status=="Active" || jsonObject.current_Status=="Closed"){
			var assigned_Date=new Date(jsonObject.assigned_Date);
			var newAssigned_Date=assigned_Date.getFullYear() + '-'
			+( assigned_Date.getMonth() + 1) + '-'
			+ assigned_Date.getDate();
			
			var lawyer=jsonObject.assigned_Lawyer.split("-");
			var admin=jsonObject.assigned_By.split("-");
			$("#cassignedLawyer").val(lawyer[1]);
			$("#cassignedBy").val(admin[1]);
			$("#cassignedDate").val(newAssigned_Date);
		
		
		if(jsonObject.current_Status=="Closed"){
			var completed_On=new Date(jsonObject.completed_On);
			var newCompleted_On=completed_On.getFullYear() + '-'
			+( completed_On.getMonth() + 1) + '-'
			+ completed_On.getDate();
			$("#completedOn").val(newCompleted_On);
		}
		}
}		

	



function getDisputeSubCategory(id, action) {
	$("select#DisputeSubCat")
			.html('<option value="" selected>--Select--</option>');
	var value = document.getElementById(id).value;
	$("#disputeCategory").val(value);
	if ($("#disputeCategory").val()!="")
	{
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + action,
		data : {
			caseCategory : value,

		},
		success : function(response) {
			var cseSub = response.result;
			var z = document.getElementById("DisputeSubCat");

			for (var i = 0; i < cseSub.length; i++) {
				var option = document.createElement("option");
				option.text = cseSub[i];
				z.add(option);
			}
			return cseSub;
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
	}else $("select#DisputeSubCat").html('<option value="" selected>--Select--</option>');
}

function DisputeSubCatValue(id) {
	var value = document.getElementById(id).value;
	$("#disputeSubCategory").val(value);
}

function getConciliationSubCategory(id, action) {
	$("select#ConciliationSubCat")
			.html('<option value="" selected>--Select--</option>');
	var value = document.getElementById(id).value;
	$("#conciliationCategory").val(value);
	if ($("#conciliationCategory").val()!="")
	{
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + action,
		data : {
			caseCategory : value,

		},
		success : function(response) {
			var cseSub = response.result;
			var z = document.getElementById("ConciliationSubCat");

			for (var i = 0; i < cseSub.length; i++) {
				var option = document.createElement("option");
				option.text = cseSub[i];
				z.add(option);
			}
			return cseSub;
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
	}else $("select#ConciliationSubCat").html('<option value="" selected>--Select--</option>');
}

function ConciliationSubCatValue(id) {
	var value = document.getElementById(id).value;
	$("#conciliationSubCategory").val(value);
}



/*function ValidateCreateCase() {
	var Case_Id=document.getElementById("Dispute_Id").value;
	var Client_Id=document.getElementById("Client_Id").value;
	if (document.getElementById("DisputeCat").value == "") {
		document.getElementById("disputeCatSpan").textContent = "please choose your Dispute Category";
	} else if (document.getElementById("DisputeSubCat").value == "") {
		document.getElementById("disputeSubCatSpan").textContent = "please choose your Dispute SubCategory";
	} else if (document.getElementById("DisputeBrief").value == "") {
		document.getElementById("disputeBriefSpan").textContent = "please enter your Dispute Brief.";
	}else if (document.getElementById("AdversoryName").value == "") {
		document.getElementById("advNameSpan").textContent = "please enter adversory full name.";
	}else if (document.getElementById("Adversory_Address").value == "") {
		document.getElementById("adversoryAddressSpan").textContent = "please enter adversory address.";
	} else {
		$("#disputeCategory").val(document.getElementById("DisputeCat").value);
		$("#disputeSubCategory").val(document.getElementById("DisputeSubCat").value);
		ajaxPost('createDisputeForm', '/disputedetails');
	}
	if(Case_Id!=''){
		var value = Client_Id + "-" + Case_Id;
		$.ajax({
			method : 'POST',
			url : '/LegalBell' + '/getCaseDesc/' + value,
			success : function(response) {
				var caseDescription = response.result;
	 			$("#editor").Editor("setText", caseDescription);
			},
			error : function() {
				loadAjaxErrorPage();
			}
		});
	}
	
}*/

function ValidateCreateCase(){
	var Case_Id=document.getElementById("Dispute_Id").value;
	var Client_Id=document.getElementById("Client_Id").value;
	if(document.getElementById("notsure").checked == true){
		if (document.getElementById("DisputeBrief").value == "") {
			document.getElementById("disputeBriefSpan").textContent = "please enter your Dispute Brief.";
		}else if (document.getElementById("AdversoryName").value == "") {
			document.getElementById("advNameSpan").textContent = "please enter adversory full name.";
		}else if (document.getElementById("Adversory_Address").value == "") {
			document.getElementById("adversoryAddressSpan").textContent = "please enter adversory address.";
		} else {
			
			ajaxPost('createDisputeForm', '/disputedetails');
		}
	}else{
		if (document.getElementById("DisputeCat").value == "") {
			document.getElementById("disputeCatSpan").textContent = "please choose your Dispute Category";
		} else if (document.getElementById("DisputeSubCat").value == "") {
			document.getElementById("disputeSubCatSpan").textContent = "please choose your Dispute SubCategory";
		} else if (document.getElementById("CaseReq").value == "") {
			document.getElementById("casereqSpan").textContent = "please choose your Dispute SubCategory";
		} else if (document.getElementById("DisputeBrief").value == "") {
			document.getElementById("disputeBriefSpan").textContent = "please enter your Dispute Brief.";
		}else if (document.getElementById("AdversoryName").value == "") {
			document.getElementById("advNameSpan").textContent = "please enter adversory full name.";
		}else if (document.getElementById("Adversory_Address").value == "") {
			document.getElementById("adversoryAddressSpan").textContent = "please enter adversory address.";
		} else {
			$("#disputeCategory").val(document.getElementById("DisputeCat").value);
			$("#disputeSubCategory").val(document.getElementById("DisputeSubCat").value);
			ajaxPost('createDisputeForm', '/disputedetails');
		}
		
	}
	if(Case_Id!=''){
		var value = Client_Id + "-" + Case_Id;
		$.ajax({
			method : 'POST',
			url : '/LegalBell' + '/getCaseDesc/' + value,
			success : function(response) {
				var caseDescription = response.result;
	 			$("#editor").Editor("setText", caseDescription);
			},
			error : function() {
				loadAjaxErrorPage();
			}
		});
	}	 
	}	 

function ValidateCreateConciliation() {
	var Case_Id=document.getElementById("Conciliation_Id").value;
	var Client_Id=document.getElementById("Client_Id").value;
	if (document.getElementById("ConciliationCat").value == "") {
		document.getElementById("conciliationCatSpan").textContent = "please choose your Conciliation Category";
	} else if (document.getElementById("ConciliationSubCat").value == "") {
		document.getElementById("conciliationSubCatSpan").textContent = "please choose your Conciliation SubCategory";
	} else if (document.getElementById("ConciliationBrief").value == "") {
		document.getElementById("conciliationBriefSpan").textContent = "please enter your Conciliation Brief.";
	}else if (document.getElementById("AdversoryName").value == "") {
		document.getElementById("advNameSpan").textContent = "please enter adversory full name.";
	}else if (document.getElementById("Adversory_Address").value == "") {
		document.getElementById("adversoryAddressSpan").textContent = "please enter adversory address.";
	} else {
		$("#conciliationCategory").val(document.getElementById("ConciliationCat").value);
		$("#conciliationSubCategory").val(document.getElementById("ConciliationSubCat").value);
		ajaxPost('createConciliationForm', '/conciliationdetails');
	}
	if(Case_Id!=''){
		var value = Client_Id + "-" + Case_Id;
		$.ajax({
			method : 'POST',
			url : '/LegalBell' + '/getCaseDesc/' + value,
			success : function(response) {
				var caseDescription = response.result;
	 			$("#editor").Editor("setText", caseDescription);
			},
			error : function() {
				loadAjaxErrorPage();
			}
		});
	}
	
}

/*function onBlurCreateCase() {
	document.getElementById("disputeCatSpan").textContent = "";
	document.getElementById("disputeSubCatSpan").textContent = "";
	document.getElementById("disputeBriefSpan").textContent = "";
}*/
function onBlurCreateCase() {
	document.getElementById("disputeCatSpan").textContent = "";
	document.getElementById("disputeSubCatSpan").textContent = "";
	document.getElementById("disputeBriefSpan").textContent = "";
	document.getElementById("advNameSpan").textContent = "";
	document.getElementById("adversoryAddressSpan").textContent = "";
	
}


function onBlurCreateConciliation() {
	document.getElementById("conciliationCatSpan").textContent = "";
	document.getElementById("conciliationSubCatSpan").textContent = "";
	document.getElementById("conciliationBriefSpan").textContent = "";
}

function onBlurCaseEditor() {
	document.getElementById("myspan").textContent = "";
}



function loadPopupAssignCaseDetails(lawyer_Id,newCaseValue) {
	if(newCaseValue == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
$('#popupAssignedCaseLink').click();
ajaxPost("NoForm", "/assignedCaseDetailsByLawyer.web/" + lawyer_Id);
	}
}
function loadPopupAssignQueryDetails(lawyer_Id,newQueryValue) {
	if(newQueryValue == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
$('#popupAssignedQueryLink').click();
ajaxPost("NoForm", "/assignedQueryDetailsByLawyer.web/" + lawyer_Id);
	}
}

function loadAssignCaseDetailsByLwyrId(url, jsonObject) {
$("#showAssignedCseDetailsTable").dataTable().fnDestroy();
$("#showAssignedCseDetailsTable").dataTable({
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
	"mData" : null,
	render : function(
				data, type,
				full, meta) {
		          return '<input type="button" id="'+ data.client_Id+","+data.case_Id+'"value="'+ data.case_Id +'" onclick="loadCaseOnClick(this.id)">';
				}
}, {
	"mData" : "case_BriefDescription"
},

]
});
}

function loadAssignQueryDetailsByLwyrId(url, jsonObject) {
$("#showAssignedQryDetailsTable").dataTable().fnDestroy();
$("#showAssignedQryDetailsTable").dataTable({
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
				return '<input type="button" id="'+data.client_Id+","+ data.query_Id+ '"value="'+ data.query_Id +'" onclick="loadQueryOnClick(this.id)">';
				}
}, {
	"mData" : "query_BriefDescription"
},

]
});
}


function loadClickQryDetailNewCaseAdmin(multipleIds){
//$(".modal-backdrop").remove();
var multipleId = multipleIds.split(",");
ajaxPost("NoForm", "/displayQueryDetailsBySelectedQryIdNewCaseAdmin/"+ multipleId[1]);
getQueryDescriptionInUserspopUp(multipleId[0],multipleId[1]);
}	
function getQueryDescriptionInUserspopUp(client_Id,query_Id) {
	value = client_Id + "-" + query_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getQueryDesc/' + value,
		success : function(response) {
			var qrydesc = response.result;
			$("#QueryDescription").html("");
			$("#QueryDescription").append(qrydesc);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});

}


function loadSelectedQueryDetailsNewCaseAdmin(url, jsonObject){
	var query_Created_Date=new Date(jsonObject.query_Created_Date);
	var newQuery_Created_Date=query_Created_Date.getFullYear() + '-'
	+(query_Created_Date.getMonth() + 1) + '-'
	+ query_Created_Date.getDate();
	var assigned_Date=new Date(jsonObject.assigned_Date);
	var newAssigned_Date=assigned_Date.getFullYear() + '-'
	+( assigned_Date.getMonth() + 1) + '-'
	+ assigned_Date.getDate();
$('#displaySelectedQryDetailsLink').click();

$("#clientId").val(jsonObject.client_Id);
$("#queryId").val(jsonObject.query_Id);
$("#queryType").val(jsonObject.query_Type);
$("#queryCategory").val(jsonObject.query_Category);
$("#querySubCategory").val(jsonObject.query_SubCategory);
$("#caseId").val(jsonObject.case_Id);

$("#queryBriefDescription").val(jsonObject.query_BriefDescription);
$("#queryStatus").val(jsonObject.query_Status);
$("#assignedLawyer").val(jsonObject.assigned_Lawyer);
$("#assignedBy").val(jsonObject.assigned_By);
$("#assignedDate").val(newAssigned_Date);
$("#queryCreatedDate").val(newQuery_Created_Date);

}					



$(document).on(
		'click',
		"#newCaseAdminMenu",
		function() {
			var client_id = $("#user_id").text();
			ajaxPostNew("adminNewCaseForm", "/newCaseAdmin.web/" + client_id,
					"/lawyer.web/" + client_id);
		});

$(document)
		.on(
				'click',
				"#assignCaseButton",
				function() {
					if ($("input[type='checkbox'][name='getcaseComment']:checked").length > 0) {
						var getValue = $(
								"input[type='checkbox'][name='getcaseComment']:checked")
								.val();
						if (getValue == "1") {
							var userId = $("#user_id").text();
							var assignCaseInfo = [];
							assignCaseInfo.push(userId);
							var commentId = $("#commentIDs").val();
							assignCaseInfo.push(commentId);
							var lawyerId = $('input:text[name=lwyrIds]').val();
							assignCaseInfo.push(lawyerId);
							var caseId = $('textarea[name=cseID]').val();
							assignCaseInfo.push(caseId);
						}

					} else {
						var userId = $("#user_id").text();
						var assignCaseInfo = [];
						assignCaseInfo.push(userId);
						var commentId = null;
						assignCaseInfo.push(commentId);
						var lawyerId = $('input:text[name=lwyrIds]').val();
						assignCaseInfo.push(lawyerId);
						var caseId = $('textarea[name=cseID]').val();
						assignCaseInfo.push(caseId);
						
					}
					//$(".modal-backdrop").remove();
					ajaxPost("NoForm", "/assignCase/" + assignCaseInfo);
				});


$(document)
.on(
		'click',
		"#assignCMDButton",
		function() {
			if ($("input[type='checkbox'][name='getcaseComment']:checked").length > 0) {
				var getValue = $(
						"input[type='checkbox'][name='getcaseComment']:checked")
						.val();
				if (getValue == "1") {
					var userId = $("#user_id").text();
					var assignCaseInfo = [];
					assignCaseInfo.push(userId);
					var commentId = $("#commentIDs").val();
					assignCaseInfo.push(commentId);
					var lawyerId = $('input:text[name=lwyrIds]').val();
					assignCaseInfo.push(lawyerId);
					var caseId = $('textarea[name=cseID]').val();
					assignCaseInfo.push(caseId);
				}

			} else {
				var userId = $("#user_id").text();
				var assignCaseInfo = [];
				assignCaseInfo.push(userId);
				var commentId = null;
				assignCaseInfo.push(commentId);
				var lawyerId = $('input:text[name=lwyrIds]').val();
				assignCaseInfo.push(lawyerId);
				var caseId = $('textarea[name=cseID]').val();
				assignCaseInfo.push(caseId);
				
			}
			//$(".modal-backdrop").remove();
			ajaxPost("NoForm", "/assignCMD/" + assignCaseInfo);
		});



$(document)
.on(
		'click',
		"#assignCMButton",
		function() {
			if ($("input[type='checkbox'][name='getcaseComment']:checked").length > 0) {
				var getValue = $(
						"input[type='checkbox'][name='getcaseComment']:checked")
						.val();
				if (getValue == "1") {
					var userId = $("#user_id").text();
					var assignCaseInfo = [];
					assignCaseInfo.push(userId);
					var commentId = $("#commentIDs").val();
					assignCaseInfo.push(commentId);
					var lawyerId = $('input:text[name=lwyrIds]').val();
					assignCaseInfo.push(lawyerId);
					var caseId = $('textarea[name=cseID]').val();
					assignCaseInfo.push(caseId);
				}

			} else {
				var userId = $("#user_id").text();
				var assignCaseInfo = [];
				assignCaseInfo.push(userId);
				var commentId = null;
				assignCaseInfo.push(commentId);
				var lawyerId = $('input:text[name=lwyrIds]').val();
				assignCaseInfo.push(lawyerId);
				var caseId = $('textarea[name=cseID]').val();
				assignCaseInfo.push(caseId);
				
			}
			//$(".modal-backdrop").remove();
			ajaxPost("NoForm", "/assignCM/" + assignCaseInfo);
		});



$(document)
.on(
		'click',
		"#assignDDButton",
		function() {
			if ($("input[type='checkbox'][name='getcaseComment']:checked").length > 0) {
				var getValue = $(
						"input[type='checkbox'][name='getcaseComment']:checked")
						.val();
				if (getValue == "1") {
					var userId = $("#user_id").text();
					var assignCaseInfo = [];
					assignCaseInfo.push(userId);
					var commentId = $("#commentIDs").val();
					assignCaseInfo.push(commentId);
					var lawyerId = $('input:text[name=lwyrIds]').val();
					assignCaseInfo.push(lawyerId);
					var caseId = $('textarea[name=cseID]').val();
					assignCaseInfo.push(caseId);
				}

			} else {
				var userId = $("#user_id").text();
				var assignCaseInfo = [];
				assignCaseInfo.push(userId);
				var commentId = null;
				assignCaseInfo.push(commentId);
				var lawyerId = $('input:text[name=lwyrIds]').val();
				assignCaseInfo.push(lawyerId);
				var caseId = $('textarea[name=cseID]').val();
				assignCaseInfo.push(caseId);
				
			}
			//$(".modal-backdrop").remove();
			ajaxPost("NoForm", "/assignDD/" + assignCaseInfo);
		});


/*-----------open PopUp button onClick Function---------------*/
$(document)
		.on(
				'click',
				"#openCasePopoupButton",
				function() {
					
					if (($("input[type='checkbox'][name='cseId']:checked").length > 0)
							&& ($("input[type='radio'][name='lwyrId']:checked").length > 0)) {
						$('#popupCaseLink').click();
						$("#cseIDs").val("");
						$('input:checkbox[name=cseId]').each(
								function() {
									if ($(this).is(':checked')) {
										$("#cseIDs").val(
												$("#cseIDs").val() + ","
														+ $(this).val());
									}
								});

						var selectedVal = "";
						var selected = $("input[type='radio'][name='lwyrId']:checked");
						selectedVal = selected.val();
							$("#lwyrIDs").val(selectedVal);
						$("#newCaseAdminSpan").text("");
					} else {
						$("#newCaseAdminSpan")
								.text(
										"Please select Case ID and Lawyer Id to Asssign Case");
					}
				});



/*-------Updated Task Table Starts here---------*/
function loadTaskOnClick(taskIds){
	taskIds_str = new Array;
	taskIds_str = taskIds.split(',');
	//$(".modal-backdrop").remove();
	ajaxPost("NoForm", "/fetchTaskDetails/"+ taskIds_str[0]);
	}	

function loadSelectedTaskDetails(url, jsonObject){
	var created_Date=new Date(jsonObject.created_Date);
	var newCreated_Date=created_Date.getFullYear() + '-'
	+(created_Date.getMonth() + 1) + '-'
	+ created_Date.getDate();
	var closed_Date=new Date(jsonObject.closed_Date);
	var newClosed_Date=closed_Date.getFullYear() + '-'
	+( closed_Date.getMonth() + 1) + '-'
	+ closed_Date.getDate();
$('#displayTaskDetailsPopup').click();
var clientId=jsonObject.client_Id.split("-");
$("#taskId").val(jsonObject.task_Id);
$("#tcaseId").val(jsonObject.case_Id);
$("#taskName").val(jsonObject.task_Name);
$("#tClientId").val(clientId[0]);
$("#tClient").val(clientId[1]);
$("#taskDescription").val(jsonObject.task_Description);
$("#taskResponse").val(jsonObject.task_Response);
$("#taskStatus").val(jsonObject.task_Status);
getUploadedFileDetailsOfTask(clientId[0],jsonObject.task_Id,jsonObject.case_Id,"taskFileDetails","Upload");
getRespondedFileDetailsOfTask(clientId[0],jsonObject.task_Id,jsonObject.case_Id,"taskFileDetailsResponse","Response");

var assignBy=jsonObject.assign_By.split("-");
$("#tassignBy").val(assignBy[1]);
var assignTo=jsonObject.assign_To.split("-");
$("#tassignTo").val(assignTo[1]+" "+assignTo[2]);
$("#tcreatedDate").val(newCreated_Date);
if(jsonObject.task_Status=="Closed"){
$("#tclosedDate").val(newClosed_Date);
}else $("#tclosedDate").val("N.A");
$("#taskComments").val(jsonObject.task_Comments);
}



$(document)
		.on(
				'click',
				"#activateTaskButton",
				function() {
					var checkboxValues = [];
					if (($("input[type='checkbox'][name='task_Id']:checked").length > 0)) {
						$('input:checkbox[name=task_Id]').each(function() {
							if ($(this).is(':checked')) {
								checkboxValues.push($(this).val());
							}
						});
						ajaxPost("NoForm", "/activateTask/" + checkboxValues);
					} else {
						$("#activateTaskSpan").text(
								"Please Select atleast one Task to activate");
						checkboxValues.push($(this).val());
					}
				});

$(document).on('click', "#progressTaskToLawyerButtonButton", function() {
	var radiovalue = null;
	if (($("input[type='radio'][name='task_Id']:checked").length > 0)) {
		$('input:radio[name=task_Id]').each(function() {
			if ($(this).is(':checked')) {
				radiovalue = ($(this).val());
			}
		});
		ajaxPost("NoForm", "/responseTask/" + radiovalue);
	} else {
		$("#progressTaskToLawyerSpan").text("Please select one task");
	}
});



function loadDataInTable(elementid,identifier,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		var client_id=$("#user_id").text();
		if(url!="newCaseAdmin"){
	ajaxPost("NoForm", "/"+url+".web/" + client_id);
		}else{
			ajaxPostNew("adminNewCaseForm", "/"+url+".web/" + paramInfo, "/lawyer.web/"+ client_id);
		}
	}
}

function loadClientDataInTable(elementid,identifier,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		var client_id=$("#client_id").text();
		if(url!="newCaseAdmin"){
	ajaxPost("NoForm", "/"+url+".web/" + client_id);
		}else{
			ajaxPostNew("adminNewCaseForm", "/"+url+".web/" + paramInfo, "/lawyer.web/"+ client_id);
		}
	}
}




$(document).on('click', "#submitContractButton", function() {
	var radiovalue = null;
	if(($("input[type='radio'][name='contract_Id']:checked").length > 0)){
	$('input:radio[name=contract_Id]').each(function() {
		if ($(this).is(':checked')) {
			radiovalue = ($(this).val());
		}
	});
    ajaxPost("NoForm", "/responseContract/" + radiovalue);
	}else{
		$("#progressContractLawyerSpan").text("Please select one Contract to give Response");
	}
});

$(document).on('click', "#ATTContractButton", function() {
	var radiovalue = null;
	if(($("input[type='radio'][name='contract_Id']:checked").length > 0)){
	$('input:radio[name=contract_Id]').each(function() {
		if ($(this).is(':checked')) {
			radiovalue = ($(this).val());
		}
	});
    ajaxPost("NoForm", "/responseATTContract/" + radiovalue);
	}else{
		$("#pendingCMspanLaw").text("Please select one Contract to add Attachment");
	}
});





function loadCaseAndCommentOnClick(multipleIds){
	//$(".modal-backdrop").remove();
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchCaseAndCommentDetails/"+ multipleId[1]);
	getCaseDescriptionInPopUp(multipleId[0],multipleId[1]);
	/*setPreviousComments();-have to get comment in popup */
	getUploadedFileDetailsOfCase(multipleId[0],multipleId[1],"caseCommentFileDetails","Uploaded");	
	}

function loadCaseAndCommentDetails(url, jsonObject){
	var created_On=new Date(jsonObject.cse.created_On);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
	var assigned_Date=new Date(jsonObject.cse.assigned_Date);
	var newAssigned_Date=assigned_Date.getFullYear() + '-'
	+( assigned_Date.getMonth() + 1) + '-'
	+ assigned_Date.getDate();
	$('#displayCaseCommentDetailsPopup').click();
	var client=jsonObject.cse.client_Id.split("-");
	   $("#ccClientId").val(client[0]);
	   $("#ccclient").val(client[1]);
	   $("#ccCaseId").val(jsonObject.cse.case_Id);
	   $("#cccaseCategory").val(jsonObject.cse.case_Category);
	   $("#cccaseSubCategory").val(jsonObject.cse.case_SubCategory);
	   
	   $("#cccaseBriefDescription").val(jsonObject.cse.case_BriefDescription);
	   $("#cccaseStatus").val(jsonObject.cse.current_Status);
	   var lawyer=jsonObject.cse.assigned_Lawyer.split("-");
	   var admin=jsonObject.cse.assigned_By.split("-");
	   $("#ccassignedLawyer").val(lawyer[1]);
	   $("#ccassignedBy").val(admin[1]);
	   $("#ccAssignedDate").val(newAssigned_Date);
	   $("#cccaseCreatedDate").val(newCreated_On);
	   $("#cccaseComment").val(jsonObject.cse.case_Comment);
	   
	   $("#cccommenttable").dataTable().fnDestroy();
		$("#cccommenttable").dataTable({
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
			"aoColumns" : [ {
				"mData" : "comment_Id"
			}, {
				"mData" : "comment_Category"
			}, {
				"mData" : "comment_By"
			}, {
				"mData" : "comment_Text"
			},{
				"mData" : null,
				render : function(
						data, type,
						full, meta) {
						var comment_Date = new Date(data.comment_Date_Time);
						var newComment_Date = comment_Date.getFullYear()+"-"+(comment_Date.getMonth()+1)+"-"+
						comment_Date.getDate();
						return newComment_Date;
						}
			}

			]
		});
}




$(document)
		.on(
				'click',
				"#activateCaseButton",
				function() {
					var checkboxValues = [];
					if (($("input[type='checkbox'][name='case_Id']:checked").length > 0)) {
						$('input:checkbox[name=case_Id]').each(function() {
							if ($(this).is(':checked')) {
								checkboxValues.push($(this).val());
							}
						});
						ajaxPost("NoForm", "/activatecase/" + checkboxValues);
					} else {
						$("#newCaseLawyerSpan").text(
								"Please Select atleast one Case to activate");
						checkboxValues.push($(this).val());
					}
				});

$(document)
.on(
		'click',
		"#activateCMDButton",
		function() {
			var checkboxValues = [];
			if (($("input[type='checkbox'][name='case_Id']:checked").length > 0)) {
				$('input:checkbox[name=case_Id]').each(function() {
					if ($(this).is(':checked')) {
						checkboxValues.push($(this).val());
					}
				});
				ajaxPost("NoForm", "/activateCMD/" + checkboxValues);
			} else {
				$("#newCaseLawyerSpan").text(
						"Please Select atleast one Case to activate");
				checkboxValues.push($(this).val());
			}
		});


$(document)
.on(
		'click',
		"#activateCMButton",
		function() {
			var checkboxValues = [];
			if (($("input[type='checkbox'][name='case_Id']:checked").length > 0)) {
				$('input:checkbox[name=case_Id]').each(function() {
					if ($(this).is(':checked')) {
						checkboxValues.push($(this).val());
					}
				});
				ajaxPost("NoForm", "/activateCM/" + checkboxValues);
			} else {
				$("#newCaseLawyerSpan").text(
						"Please Select atleast one Case to activate");
				checkboxValues.push($(this).val());
			}
		});

$(document)
.on(
		'click',
		"#activateDDButton",
		function() {
			var checkboxValues = [];
			if (($("input[type='checkbox'][name='case_Id']:checked").length > 0)) {
				$('input:checkbox[name=case_Id]').each(function() {
					if ($(this).is(':checked')) {
						checkboxValues.push($(this).val());
					}
				});
				ajaxPost("NoForm", "/activateDD/" + checkboxValues);
			} else {
				$("#newCaseLawyerSpan").text(
						"Please Select atleast one Case to activate");
				checkboxValues.push($(this).val());
			}
		});


$(document).on('click', "#CreateDR", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoFrom", "/createDR/" + client_id);
//$(".modal-backdrop").remove();
});

$(document).on('click', "#CreateCMD", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoFrom", "/createCMD/" + client_id);
//$(".modal-backdrop").remove();
});

function loadDisputeResolutionContent(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$("#Client_Id").val(jsonObject.client_Id);
				
				var a = document.getElementById("DisputeCat");
				var disputeCat = jsonObject.disputeCategoryMap;
				for (var i = 0; i < disputeCat.length; i++) {
					var option = document.createElement("option");
					option.text = disputeCat[i];
					a.add(option);
				}
				if(jsonObject.dispute_Category!=null && jsonObject.dispute_SubCategory!=null){
				   $("#Dispute_Id").val(jsonObject.dispute_Id);
					$("#DisputeBrief").val(jsonObject.dispute_BriefDescription);
					$("#DisputeCat").val(jsonObject.dispute_Category);
					var b = document.getElementById("DisputeSubCat");
					var disputeSubCat = jsonObject.disputeSubCategoryMap;
					for (var i = 0; i < disputeSubCat.length; i++) {
						var option = document.createElement("option");
						option.text = disputeSubCat[i];
						b.add(option);
					}
					$("#DisputeSubCat").val(jsonObject.dispute_SubCategory);
					$("#AdversoryName").val(jsonObject.adversory_Name);
					$("#AdversoryEmail").val(jsonObject.adversory_Email);
					$("#AdversoryMobile").val(jsonObject.adversory_Mobile);
					$("#AdversoryAddress").text(jsonObject.adversory_Address);
					
				}
				
			});
}


function loadContractManagementContent(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$("#Client_Id").val(jsonObject.client_Id);
				
				var a = document.getElementById("ContractCat");
				var contractCat = jsonObject.contractCategoryMap;
				for (var i = 0; i < contractCat.length; i++) {
					var option = document.createElement("option");
					option.text = contractCat[i];
					a.add(option);
				}
				if(jsonObject.contract_Category!=null){
				   $("#Contract_Id").val(jsonObject.contract_Id);
					$("#ContractBrief").val(jsonObject.contract_BriefDescription);
					$("#ContractCat").val(jsonObject.contract_Category);
					$("#contractCategory").val(jsonObject.contract_Category);
					
				}
				
			});
}


function loadConciliationMediationContent(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$("#Client_Id").val(jsonObject.client_Id);
				
				var a = document.getElementById("ConciliationCat");
				var conciliationCat = jsonObject.conciliationCategoryMap;
				for (var i = 0; i < conciliationCat.length; i++) {
					var option = document.createElement("option");
					option.text = conciliationCat[i];
					a.add(option);
				}
				if(jsonObject.conciliation_Category!=null && jsonObject.conciliation_SubCategory!=null){
				   $("#Conciliation_Id").val(jsonObject.conciliation_Id);
					$("#ConciliationBrief").val(jsonObject.conciliation_BriefDescription);
					$("#ConciliationCat").val(jsonObject.conciliation_Category);
					var b = document.getElementById("ConciliationSubCat");
					var conciliationSubCat = jsonObject.conciliationSubCategoryMap;
					for (var i = 0; i < conciliationSubCat.length; i++) {
						var option = document.createElement("option");
						option.text = conciliationSubCat[i];
						b.add(option);
					}
					$("#ConciliationSubCat").val(jsonObject.conciliation_SubCategory);
					$("#AdversoryName").val(jsonObject.adversory_Name);
					$("#AdversoryEmail").val(jsonObject.adversory_Email);
					$("#AdversoryMobile").val(jsonObject.adversory_Mobile);
					$("#AdversoryAddress").val(jsonObject.adversory_Address);
					
				}
				
			});
}

$(document)
.on(
		'click',
		"#createTaskButton",
		function() {
			if (document.getElementById("TaskType").value == "") {
				document.getElementById("taskTypeSpan").textContent = "*Please select your Task Type";
			} else if (document.getElementById("TaskName").value == "") {
				document.getElementById("taskNameSpan").textContent = "*Please enter your Task Name";
			} else if (document.getElementById("TaskDescription").value == "") {
				document.getElementById("taskDescSpan").textContent = "*Please enter your Task Description";
			} else if (document.getElementById("TaskComments").value == "") {
				document.getElementById("taskCommentsSpan").textContent = "*Please enter your Task Comment";
			} else if (document.getElementById("AssignTo").value == "") {
				document.getElementById("AssignToSpan").textContent = "*Please select one of among them ";
			} else {
				ajaxPost('createTaskForm', '/createTask');
			}
			$('#loaderModal').remove();
		});

function onBlurCreateTask() {
document.getElementById("taskNameSpan").textContent = "";
document.getElementById("taskDescSpan").textContent = "";
document.getElementById("taskCommentsSpan").textContent = "";
document.getElementById("AssignToSpan").textContent = "";
}

function loadActionPage(caseid) {
	ajaxPost("NoFrom", "/getCaseAction/" + caseid);
}
function loadDraftPage(caseid) {
	ajaxPost("NoFrom", "/getDraftAction/" + caseid);
}

function createDraftInfo(){
	var data=$("#DraftEditor").Editor("getText");
	document.getElementById("DraftDetail").value = data;
	if (document.getElementById("DraftDetail").value == "") {
		document.getElementById("DraftDetailSpan").textContent = "*Please create written version of Draft";
	} else {
		ajaxPost('DraftingForm', '/createDraftEditor');
	}
	$('#loaderModal').remove();

}
$(document).on(
		'click',
		"#addGenericComment",
		function() {
			$("#pageContentLoad").html("");
			$("#pageContentLoad").load(
					"/LegalBell/html/contentPages/GenericComment.html",function(){
						getCommentTypeList();
						setPreviousComments();	
					});
			
		});

$(document).on('click', "#generateTask", function() {
	$("#pageContentLoad").html("");
	$("#pageContentLoad").load("/LegalBell/html/contentPages/CreateTask.html",function(){
		setLawyerInfo();
		setTaskDescription();
	});
	
});

$(document).on('click', "#generateDraft", function() {
	$("#pageContentLoad").html("");
	$("#pageContentLoad").load("/LegalBell/html/contentPages/CreateDraft.html",function(){
		setLawyerInfo();
		//setTaskDescription();
	});
});

$(document).on('click', "#cancelTaskButton", function() {
	$("#pageContentLoad").html("");
	$("#pageContentLoad").load("/LegalBell/html/contentPages/CreateTask.html",function(){
		setLawyerInfo();
		setTaskDescription();
	});
	
});


function loadTaskUpload(url,taskid){
	console.log(taskid);
	$("#pageContentLoad").html("");
	$("#pageContentLoad").load("/LegalBell/html/contentPages/UploadTaskDocument.html",function(){
		$("#TaskId").val(taskid.code);
		$("#uCaseId").val($("#CaseId").val());
		$("#uClientId").val($("#ClientId").val());
	});
}
function setTaskDescription() {
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getTasks',
		success : function(response) {
			var jsonObject = response.result.taskMap;
			var x = document.getElementById("TaskType");
			for (var i = 0; i < jsonObject.length; i++) {
				var option = document.createElement("option");
				option.text = jsonObject[i];
				x.add(option);
			}
			
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}

function setLawyerInfo() {
	$.ajax({
		url : '/LegalBell' + '/getLawyerInformation',
		method : 'POST',
		success : function(response) {
			var jsonObject = response.result;
			var cmntType = document.getElementById("AssignTo");
			for (var i = 0; i < jsonObject.length; i++) {
				var option = document.createElement("option");
				option.text = jsonObject[i];
				cmntType.add(option);
			}
			$("#hiddenCaseId").val($("#CaseId").val());
			$("#hiddenClientId").val($("#ClientId").val());
			$("#hiddenAssignBy").val($("#user_id").text());
		}
	});

}

function setPreviousComments() {
	var value = $("#CaseId").val();
	var commentCat=$("#hiddenCommentCategory").val();
	value = value + "-" + $("#ClientId").val()+"-"+commentCat;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getComments/' + value,
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

function getCommentTypeList() {
	$.ajax({
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
			$("#CSE_ID").val($("#CaseId").val());
			$("#Comment_BY").val($("#user_id").text());
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});		
}

	function getCommentSubCategoryList(cmntType) {
		$("select#commentCat")
		.html('<option value="" selected>--Select--</option>');
		$.ajax({
					url : '/LegalBell' + '/getCommentCategory',
					method : 'POST',
					data : {
						Value : cmntType,
					},
					success : function(response) {
						var jsonObject = response.result;
						var cmntType = document.getElementById("commentCat");
						for (var i = 0; i < jsonObject.length; i++) {
							var option = document.createElement("option");
							option.text = jsonObject[i];
							cmntType.add(option);
						}

					},
					error : function() {
						loadAjaxErrorPage();
					}
				});
	}

function sendCmntTypeInHidden(id) {
	var CMNTTYPE = document.getElementById(id).value;
	$("#hiddenCommentType").val(CMNTTYPE);
	getCommentSubCategoryList(CMNTTYPE);
}

function getCmntCatInHidden(id) {
	var CMNTCAT = document.getElementById(id).value;
	$("#hiddenCommentCategory").val(CMNTCAT);
	setPreviousComments();
}

$(document)
		.on(
				'click',
				"#commentDetailsButton",
				function() {
					var data=$("#CommentEditor").Editor("getText");
					document.getElementById("CommentText").value = data;
					if (document.getElementById("commentType").value == "") {
						document.getElementById("commentTypeSpan").textContent = "*Please choose your Comment Type";
					} else if (document.getElementById("commentCat").value == "") {
						document.getElementById("commentCatSpan").textContent = "*Please choose your Commment Category";
					} else if (document.getElementById("CommentText").value == "") {
						document.getElementById("commentTextSpan").textContent = "*Please enter your Comment text";
					} else {
						ajaxPost('GenericCommentForm', '/createComment');
					}

				});

function onBlurCreateComment() {
	document.getElementById("commentTypeSpan").textContent = "";
	document.getElementById("commentCatSpan").textContent = "";
	document.getElementById("commentTextSpan").textContent = "";
}

// on blur method for all report
function onblurAdminCaseReport() {
	$("#newCaseReportSpan").text("");
	$("#progressCaseReportSpan").text("");
	$("#solvedCaseReportSpan").text("");
}

function onblurLawyerCaseReport() {
	$("#lawyerNewCaseReportSpan").text("");
	$("#lawyerProgressCaseReportSpan").text("");
	$("#lawyerSolvedCaseReportSpan").text("");
}

function getUploadedFileDetailsOfCase(ClientId,CaseId,identifier,fileLocation){
	var value1 = ClientId + "-" + CaseId+ "-" + identifier;
	var value = ClientId + "||" + CaseId+"||" + fileLocation;
	$.ajax({
				method : 'POST',
				url : '/LegalBell' + '/getUploadedFileDetailsOfCase/'+value1,
				success : function(response) {
					var finalresult = response.result;
					var fileLength = response.result.length;
					var txt = "";
					$("#"+identifier).html("");
					if (fileLength > 0) {
						txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
						
					for (var i = 0; i < fileLength; i++) {
						txt += "<tr><td><input type='text' name='sl_No' size='1' readonly='readonly' value="
								+(i + 1)+"></td><td>"
								+"<input type='text' name='file_Name' class='col-sm-12' size='25%' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td>"
								/*+"<td><input type='button' value='view' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfCase(this.id)' /> &nbsp;&nbsp;&nbsp;"*/
								+"<td><button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfCase(this.id)'><img src='assets/imgs/view.png' alt='' width='25' height='25'/></button>"
								/*+"<input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdf(this.id)' />"*/
								+"<button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdf(this.id)'><img src='assets/imgs/download.png' alt='' width='25' height='25'/></button> "
								/*+"&nbsp;&nbsp;&nbsp;<input type='button' value='delete' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='deleteUploadedfilesPdfOfCase(this.id,this)'/></td></tr>"*/
								+"<button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='deleteUploadedfilesPdfOfCase(this.id,this)'><img src='assets/imgs/delete.png' alt='' width='25' height='25'/></button></td></tr>"
								
					}
					
					$("#"+identifier).append(txt);
				}
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}
function getRespondedFileDetailsOfCase(ClientId,CaseId,identifier,fileLocation){
	var value1 = ClientId + "-" + CaseId+ "-" + identifier;
	var value = ClientId + "||" + CaseId+"||" + fileLocation;
	$.ajax({
				method : 'POST',
				url : '/LegalBell' + '/getRespondedFileDetailsOfCase/'+value1,
				success : function(response) {
					var finalresult = response.result;
					var fileLength = response.result.length;
					var txt = "";
					$("#"+identifier).html("");
					if (fileLength > 0) {
						txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
						
					for (var i = 0; i < fileLength; i++) {
						txt += "<tr><td><input type='text' name='sl_No' size='2' readonly='readonly' value="
								+ (i + 1)
								+ "></td><td><input type='text' name='file_Name' class='col-sm-12' size='47%' " +
										"readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td><td>" +
												"<input type='button' value='view' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" " +
														"onclick='getUploadedFileViewOfCase(this.id)'/></td></tr>"
								
					}
					
					$("#"+identifier).append(txt);
				}
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}

function getUploadedFileDetailsOfService(ClientId,ServiceId,identifier,fileLocation){
	var value1 = ClientId + "-" + ServiceId+ "-" + identifier;
	var value = ClientId + "||" + ServiceId+"||" + fileLocation;
	$.ajax({
				method : 'POST',
				url : '/LegalBell' + '/getUploadedFileDetailsOfService/'+value1,
				success : function(response) {
					console.log("file info");
					console.log(response);
					var finalresult = response.result;
					var fileLength = response.result.length;
					var txt = "";
					$("#"+identifier).html("");
					if (fileLength > 0) {
						txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
						
					for (var i = 0; i < fileLength; i++) {
						txt += "<tr><td><input type='text' name='sl_No' size='1' readonly='readonly' value="+ (i + 1)+"></td>"
								+ "<td><input type='text' name='file_Name' class='col-sm-12' size='25%' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td>"
								+"<td><button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfCase(this.id)'><img src='assets/imgs/view.png' alt='' width='25' height='25'/></button>"
								//+"<td><input type='button' value='view' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfCase(this.id)' /> &nbsp;&nbsp;&nbsp;"
								+"<button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdf(this.id)'><img src='assets/imgs/download.png' alt='' width='25' height='25'/></button>"
								//+"<input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdf(this.id)' />" 
								+"<button type='button' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='deleteUploadedfilesPdfOfService(this.id,this)'><img src='assets/imgs/delete.png' alt='' width='25' height='25'/></button></td></tr>"
								//+"&nbsp;&nbsp;&nbsp;<input type='button' value='delete' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='deleteUploadedfilesPdfOfService(this.id,this)' /></td></tr>"
					}
					
					$("#"+identifier).append(txt);
				}
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}

function getUploadedFileDetailsOfTask(ClientId,TaskId,CaseId,identifier,uploadfor){
	var value1 = ClientId + "-" + CaseId+ "-" + TaskId+ "-" +identifier+ "-" +uploadfor;
	var value = ClientId + "||" + CaseId+"||" + TaskId+"||" + identifier+"||" + uploadfor;
	$.ajax({
				method : 'POST',
				url : '/LegalBell' + '/getUploadedFileDetailsOfTask/'+value1,
				success : function(response) {
					var finalresult = response.result;
					var fileLength = response.result.length;
					var txt = "";
					$("#"+identifier).html("");
					if (fileLength > 0) {
						txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
						
					for (var i = 0; i < fileLength; i++) {
						txt += "<tr><td><input type='text' name='sl_No' size='2' readonly='readonly' value="
								+ (i + 1)
								+ "></td><td><input type='text' name='file_Name' class='col-sm-12' size='47%' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td><td><input type='button' value='view' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfTask(this.id)' /> &nbsp;&nbsp;&nbsp;<input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesTask(this.id)' /></td></tr>"
								
					}
					
					$("#"+identifier).append(txt);
				}
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}
function getRespondedFileDetailsOfTask(ClientId,TaskId,CaseId,identifier,uploadfor){
	var value1 = ClientId + "-" + CaseId+ "-" + TaskId+ "-" +identifier+ "-" +uploadfor;
	var value = ClientId + "||" + CaseId+"||" + TaskId+"||" +identifier+"||" +uploadfor;
	$.ajax({
				method : 'POST',
				url : '/LegalBell' + '/getRespondedFileDetailsOfTask/'+value1,
				success : function(response) {
					var finalresult = response.result;
					var fileLength = response.result.length;
					var txt = "";
					$("#"+identifier).html("");
					if (fileLength > 0) {
						txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
						
					for (var i = 0; i < fileLength; i++) {
						txt += "<tr><td><input type='text' name='sl_No' size='2' readonly='readonly' value="
								+ (i + 1)
								+ "></td><td><input type='text' name='file_Name' class='col-sm-12' size='47%' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td><td><input type='button' value='view' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfTask(this.id)' /> &nbsp;&nbsp;&nbsp;<input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesTask(this.id)' /></td></tr>"
								
					}
					
					$("#"+identifier).append(txt);
				}
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}

function getUploadedfilesTask(ArrayOfFile){
	var fileArray = ArrayOfFile.split("||");
	var uploadedFileInfo = [];
	uploadedFileInfo.push(fileArray[1]);
	uploadedFileInfo.push(fileArray[2]);
	uploadedFileInfo.push(fileArray[3]);
	uploadedFileInfo.push(fileArray[0]);
	uploadedFilesdownload('/downloadUploadedFilesTask/' + uploadedFileInfo);

}

function getUploadedfilesPdf(ArrayOfFile){
	var fileArray = ArrayOfFile.split("||");
	var uploadedFileInfo = [];
	uploadedFileInfo.push(fileArray[1]);
	uploadedFileInfo.push(fileArray[2]);
	uploadedFileInfo.push(fileArray[3]);
	uploadedFileInfo.push(fileArray[0]);
	uploadedFilesdownload('/downloadUploadedFiles/' + uploadedFileInfo);

}
function uploadedFilesdownload(url) {
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

$(document).on('click', "#caseDocRequested", function() {
	var value = $("#caseDocRequested").text().split(" ");
	var caseDocRequestedNumber = value[value.length-1];
	if(caseDocRequestedNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/caseDocRequested.web/" + client_id);
	}
	});

$(document).on('click', "#caseDocRequestClosed", function() {
	var value = $("#caseDocRequestClosed").text().split(" ");
	var caseDocRequestClosedNumber = value[value.length-1];
	if(caseDocRequestClosedNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/caseDocClosedRequested.web/" + client_id);
	}
	});
	
$(document).on('click', "#upcomingHearingAdmin", function() {
	var value = $("#upcomingHearingAdmin").text().split(" ");
	var hearingNumber = value[value.length-1];
	if(hearingNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	ajaxPost("NoForm", "/upcomingHearingAdmin.web");
	}
});



$(document).on('click', "#upcomingHearingClient", function() {
	var value = $("#upcomingHearingClient").text().split(" ");
	var hearingNumber = value[value.length-1];
	if(hearingNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/upcomingHearingClient.web/"+client_id);
	}
});

function loadUpcomingHearingTable(url, jsonObject) {
	console.log("hell");
	console.log(jsonObject);
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
		if( $('#user_id').length )        // use this if you are using id to check
		{
			$('#default').attr('id', 'CounselDashboard');
		}
		else  
		{
			$('#default').attr('id', 'ClientDashboard');
		}
		$("#upcominghearingtable").dataTable().fnDestroy();
				$("#upcominghearingtable").dataTable({
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
					"aaData" : jsonObject,
					"aoColumns" :[ {
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

function loadTaskDetailsPopup(taskIds){
	taskIds_str = new Array;
	taskIds_str = taskIds.split(',');
	ajaxPost("NoForm", "/showTaskDetails.web/"+taskIds_str[0]);
	
}


function loadShowTaskDetailsPopup(url, jsonObject) {
	var client=jsonObject.client_Id.split("-");
    var hearing_Date=new Date(jsonObject.hearing_Date);
    var newHearing_Date=hearing_Date.getFullYear() + '-'
    +( hearing_Date.getMonth() + 1) + '-'
    + hearing_Date.getDate();
    var created_Date=new Date(jsonObject.created_Date);
	var newCreated_Date=created_Date.getFullYear() + '-'
	+( created_Date.getMonth() + 1) + '-'
	+ created_Date.getDate();
	$('#displaySelectedTaskDetailsHearingButton').click();
	$("#TaskId").val(jsonObject.task_Id);
	$("#TaskType").val(jsonObject.task_Type);
	$("#CaseId").val(jsonObject.case_Id);
	$("#ClientId").val(client[0]);
	$("#ClientName").val(client[1]);
	$("#HearingDate").val(newHearing_Date);
	$("#HearingPlace").val(jsonObject.hearing_Place);
	$("#CreatedDate").val(newCreated_Date);
	$("#AssignedLawyer").val(jsonObject.assign_By);
	//var value1 = client[0] + "-" + jsonObject.case_Id+ "-" + jsonObject.task_Id+ "-" identifier;
	getUploadedFileDetailsOfTask(client[0],jsonObject.task_Id,jsonObject.case_Id,"taskFileDetails","Uploaded");
	getRespondedFileDetailsOfTask(client[0],jsonObject.task_Id,jsonObject.case_Id,"taskFileDetailsResponse","Response");
	
	setPreviousHearingCommentsInPopup(client[0],jsonObject.case_Id,jsonObject.task_Type);
}

function setPreviousHearingCommentsInPopup(client_Id,case_Id,task_Type) {
	var value = case_Id + "-" +client_Id+"-"+task_Type;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getComments/' + value,
		success : function(response) {
			var comments = response.result;
			$("#hearingDescription").html("");
			$("#hearingDescription").append(comments);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}

function getCommentSubCategoryList(cmntType) {
	$("select#commentCat")
	.html('<option value="" selected>--Select--</option>');
	$.ajax({
				url : '/LegalBell' + '/getCommentCategory',
				method : 'POST',
				data : {
					Value : cmntType,
				},
				success : function(response) {
					var jsonObject = response.result;
					var cmntType = document.getElementById("commentCat");
					for (var i = 0; i < jsonObject.length; i++) {
						var option = document.createElement("option");
						option.text = jsonObject[i];
						cmntType.add(option);
					}
				},
				error : function() {
					loadAjaxErrorPage();
				}
			});
}


function loadCaseClosurePage(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load(
			"/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$("#autoSgstclienNameId").val(
						jsonObject.invoiceGenerationBean.clientNameList);
				$("#pageId").val(jsonObject.invoiceGenerationBean.type);
				$("#lawer").val(jsonObject.invoiceGenerationBean.lawerId);
				$("#service").val(jsonObject.service);
				custName = new Array;
				custName = $("#autoSgstclienNameId").val().split(',');
				$('#clientNameTextBoxId').autocomplete({
					source : custName,
				});
			});
}

$(document).on('click', "#closeDisputeResolutionRequest", function() {
	var value = $("#closeDisputeResolutionRequest").text().split(" ");
	var closeCaseNumber = value[value.length-1];
	if(closeCaseNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	ajaxPost("NoForm", "/closeDRRequest.web");
	}
});

$(document).on('click', "#closeConciliationMediationRequest", function() {
	var value = $("#closeConciliationMediationRequest").text().split(" ");
	var closeCaseNumber = value[value.length-1];
	if(closeCaseNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	ajaxPost("NoForm", "/closeCMDRequest.web");
	}
});


function loadCloseCaseRequestAdminTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
		$("#closecaserequesttable").dataTable().fnDestroy();
				$("#closecaserequesttable").dataTable({
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
				});
			});
}

function loadCaseAllDetails(ids) {
	$("#contentPage").html("");
	$("#contentPage").load(
			"/LegalBell/html/contentPages/CloseCaseResponseAdmin.html");
	var caseInfo=[];
	var idsInfo=ids.split("-");
    caseInfo.push(idsInfo[1]);
    caseInfo.push(idsInfo[2]);
$.ajax({
	url : '/LegalBell/fetchCaseDetailsByCaseID/'+idsInfo[1],
	method : 'POST',
	success : function(response) {
		var created_On = new Date(response.result.created_On);
		var newCreated_On = created_On.getFullYear() + '-'
				+ (created_On.getMonth() + 1) + '-'
				+ created_On.getDate();
		var assigned_Date = new Date(response.result.assigned_Date);
		var newAssigned_Date = assigned_Date.getFullYear() + '-'
				+ (assigned_Date.getMonth() + 1) + '-'
				+ assigned_Date.getDate();
		$("#user_Id").val($("#user_id").text());
		$("#request_Id").val(idsInfo[0]);
		$("#caseId").val(response.result.case_Id);
		$("#caseCategoryId").val(response.result.case_Category);
		$("#caseCategoryId").val(response.result.case_Category);
		$("#caseSubCategoryId").val(response.result.case_SubCategory);
		$("#createdDateId").val(newCreated_On);
		$("#assignDateId").val(newAssigned_Date);
		$("#clientId").val(response.result.client_Id);
		$("#clientNameId").val(response.result.clientNameId);
		$("#clientPhoneId").val(response.result.phone_Id);
		$("#clientEmailId").val(response.result.email_Id);
$.ajax({
	url : '/LegalBell/fetchInvoiceListOnCaseIDBylawyer/'+caseInfo,
	type : 'POST',
    success : function(response) {
		var jsonObject= response.result.aaData;
		$('#invoicestatuslawyertable').dataTable().fnDestroy();
		$("#invoicestatuslawyertable").dataTable({
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
						"aaData" :jsonObject,
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
							});
	   
    $.ajax({
    url : '/LegalBell/fetchTaskListOnCaseIDBylawyer/'+caseInfo,
	type : 'POST',
	success : function(response) {
		var jsonObject2= response.result.aaData;
		$('#taskstatuslawyertable').dataTable().fnDestroy();
		$("#taskstatuslawyertable").dataTable({
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
							});
			if(jsonObject.length!=null && jsonObject2.length!=null){
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
				document.getElementById("ResponseMsgDiv").style.display = "block";
			
			}else{
				document.getElementById("cancelButtonDiv").style.display = "block";
				document.getElementById("requestMsgSpan").textContent = "Some case invoices or tasks is not cleared.";
			}
			}else{
				document.getElementById("cancelButtonDiv").style.display = "block";
				document.getElementById("requestMsgSpan").textContent = "This Case has no task or invoices created.";
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

function getCaseDescriptionInClientpopUp(client_id,case_Id) {
	var value = client_id + "-" + case_Id;
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

function getServiceDescriptionInClientpopUp(client_id,service_Id) {
	var value = client_id + "-" + service_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getServiceDescription/' + value,
		success : function(response) {
			var serviceDesc = response.result;
			$("#ServiceDescription").html("");
			$("#ServiceDescription").append(serviceDesc);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}



function getCasePdf(caseId,clientId){
	
	var caseInfo = [];
	caseInfo.push($("#"+caseId).val());
	caseInfo.push($("#"+clientId).val());
	
	//alert(caseInfo);
	
	ajaxpdfdownload('/getCasePDF/' + caseInfo);

}

function getDueDiligencePdf(diligenceId,clientId){
	var diligenceInfo = [];
	diligenceInfo.push($("#"+diligenceId).val());
	diligenceInfo.push($("#"+clientId).val());
	//alert(diligenceInfo);
	ajaxpdfdownload('/getDiligencePDF/' + diligenceInfo);

}

function getConciliationPdf(conciliationId,clientId){
	var conciliationInfo = [];
	conciliationInfo.push($("#"+conciliationId).val());
	conciliationInfo.push($("#"+clientId).val());
	ajaxpdfdownload('/getConciliationPDF/' + conciliationInfo);

}

function getContractManagementPdf(contractId,clientId){
	var contractInfo = [];
	contractInfo.push($("#"+contractId).val());
	contractInfo.push($("#"+clientId).val());
	ajaxpdfdownload('/getContractManagementPDF/' + contractInfo);

}

function getUploadedFileViewOfTask(ArrayOfFile){
	var fileArray = ArrayOfFile.split("||");
	var uploadedFileInfo = [];
 	uploadedFileInfo.push(fileArray[1]);
 	uploadedFileInfo.push(fileArray[2]);
 	uploadedFileInfo.push(fileArray[3]);
 	uploadedFileInfo.push(fileArray[4]);
 	uploadedFileInfo.push(fileArray[5]);
 	uploadedFileInfo.push(fileArray[0]);
 $.ajax({
 		method : 'POST',
 		url : '/LegalBell' + '/convertTaskFileToHtml',
 		data:{
 			Value:uploadedFileInfo,
 		},
 		success : function(response) {
 			if(response.result.code=="01"){
 				$("#fileDetailsPopUp").click();
	 			$("#fileDetailsDiv").html(response.result.message);
 			}
 			else if(response.result.code=="02"){
 				if (response.result.message != null) {
                    window.open('data:application/pdf;base64, ' + encodeURIComponent(response.result.message));
                }
 			}
 		},
 		error : function() {
 			loadAjaxErrorPage();
 		}
 	});
}


function getUploadedFileViewOfCase(ArrayOfFile){
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




$(document).on('click', "#confirmCasePaymentButton", function() {
	var invoice_Id = $("#invoice_Id").val();
	ajaxPost("NoForm", "/makeCasePayment/" + invoice_Id);
});


function setSelectedValue(id, target) {
	
	var value = document.getElementById(id).value;
	$("#"+target).val(value);
}

function onBlurCreateDiligence() {
	document.getElementById("diligenceCatSpan").textContent = "";
	document.getElementById("diligenceBriefSpan").textContent = "";
	document.getElementById("organisationNameSpan").textContent = "";
}

function onBlurCreateContract() {
	document.getElementById("contractCatSpan").textContent = "";
	document.getElementById("contractBriefSpan").textContent = "";
	/*document.getElementById("organisationNameSpan").textContent = "";*/
}

$(document).on('click', "#CreateDiligence", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoFrom", "/createDiligence/" + client_id);
//$(".modal-backdrop").remove();
});


$(document).on('click', "#CreateContract", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoFrom", "/createContract/" + client_id);
//$(".modal-backdrop").remove();
});


function loadPendingCMLawyer(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#cmtable").dataTable().fnDestroy();
						$("#cmtable")
								.dataTable(
										{
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
											"columnDefs": [
											               { className: "dt[-head|-body]-center" }
											             ],
											"aaData" : jsonObject,
											"aoColumns" :[ {
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


/*function loadPendingCMDLawyer(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#cmdtable").dataTable().fnDestroy();
						$("#cmdtable")
								.dataTable(
										{
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
											"columnDefs": [
											               { className: "dt[-head|-body]-center" }
											             ],
											"aaData" : jsonObject,
											"aoColumns" : [
													{
														"mData" : null,
														render : function(
																data, type,
																full, meta) {
																var x=data.client_Id.split("-");
																return '<input type="button" id="'+x[0]+","+data.conciliation_Id+'"value="'+ data.conciliation_Id +'" onclick="loadQueryOnClick(this.id)">';
																}
													},
													{
														"mData" : "client_Id"
													},
													{
														"mData" : null,
														render : function(
																data, type,
																full, meta) {
																var x=null;
																x=data.conciliation_BriefDescription;
																if(x.length>29)
																{
																x=x.substr(0,29);
																x=x+"...";
																return x;
																}
																else return x;
														
														}},
													{
															"mData" : null,
															render : function(data, type, full, meta) {
															var sla=(data.sla).match(/\[(.*?)\]/);
															return sla[1];
															}
													},{
										               	
														render : function(data,type,full,meta){
																var date = new Date();
																
															var yyyy = date.getFullYear().toString();
															var mm = (date.getMonth()+1).toString();
															var dd = date.getDate().toString();
															var mmChars = mm.split('');
															var ddChars = dd.split('');
															var dateString = yyyy + '-' + (mmChars[1]?mm:"0" +mmChars[0]) + '-' + (ddChars[1]?dd:"0" +ddChars[0]);
															var sqlDateStr = data.query_Created_Date;
															var oneDay = 24*60*60*1000;
															var firstDate = new Date(sqlDateStr);
															var secondDate = new Date(dateString);
															var diffDays = Math.round(Math.abs((firstDate.getTime()-secondDate.getTime())/(oneDay))) ;
															return (diffDays + " days");
															},
															 "mData" :null
										               
											        },
											        {
														"mData" : "current_Status"
													}
									
											]
										});
					});
}*/

function loadPendingCMAdmin(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#cmtable").dataTable().fnDestroy();
						$("#cmtable")
								.dataTable(
										{
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
											"columnDefs": [
											               { className: "dt[-head|-body]-center" }
											             ],
											"aaData" : jsonObject,
											"aoColumns" :[ {
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


function loadPendingCMDAdmin(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#cmdtable").dataTable().fnDestroy();
						$("#cmdtable")
								.dataTable(
										{
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
											"columnDefs": [
											               { className: "dt[-head|-body]-center" }
											             ],
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

function loadReviewResponseCMAdmin(multipleIds){
	var multipleId = multipleIds.split(",");	
	ajaxPost("NoForm", "/displayResponseCMAdmin/"+multipleId[1]);
	getCMDescriptionInUserpopUp(multipleId[0],multipleId[1],'R');
	getCMResponseUserpopUpEditor(multipleId[0],multipleId[1]);
	getRespondedFileDetailsOfCase(multipleId[0],multipleId[1],"allCaseFileDetailsResponse12","Uploaded");

	//getUploadedFileDetailsCM(multipleId[0],multipleId[1],'R');
	}

function loadReviewResponseCMDAdmin(multipleIds){
	var multipleId = multipleIds.split(",");	
	ajaxPost("NoForm", "/displayResponseCMDAdmin/"+multipleId[1]);
	getCMDDescriptionInUserpopUp(multipleId[0],multipleId[1],'R');
	getCMDResponseUserpopUpEditor(multipleId[0],multipleId[1]);
	//getUploadedFileDetailsCM(multipleId[0],multipleId[1],'R');
	}


function getCMDescriptionInUserpopUp(client_Id,query_Id,ptype) {
	var value = client_Id + "-" + query_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getServiceDescription/' + value,
		success : function(response) {
			console.log(response);
			var qrydesc = response.result;
			if(ptype=='N'){
				//console.log(qrydesc);
			$("#ContractDescription").html("");
			$("#ContractDescription").append(qrydesc);
			}else{
				$("#ContractDescriptionR").html("");
    			$("#ContractDescriptionR").append(qrydesc);	
			}
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});

}

function getCMDDescriptionInUserpopUp(client_Id,query_Id,ptype) {
	var value = client_Id + "-" + query_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getServiceDescription/' + value,
		success : function(response) {
			console.log(response);
			var qrydesc = response.result;
			if(ptype=='N'){
				//console.log(qrydesc);
			$("#ConciliationDescription").html("");
			$("#ConciliationDescription").append(qrydesc);
			}else{
				$("#ConciliationDescriptionR").html("");
    			$("#ConciliationDescriptionR").append(qrydesc);	
			}
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});

}

function getCMResponseUserpopUpEditor(client_Id,query_Id) {
	value = client_Id + "-" + query_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getCMResponseContent/' + value,
		success : function(response) {
			var queryResponse = response.result;
			$("#editor").Editor("setText", queryResponse);
			},
		error : function() {
			loadAjaxErrorPage();
		}
	});

}

function getCMDResponseUserpopUpEditor(client_Id,query_Id) {
	value = client_Id + "-" + query_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getCMDResponseContent/' + value,
		success : function(response) {
			var queryResponse = response.result;
			$("#editor").Editor("setText", queryResponse);
			},
		error : function() {
			loadAjaxErrorPage();
		}
	});

}

function loadResponseCMAdmin(url, jsonObject){
	var assigned_Date=new Date(jsonObject.assigned_Date);
	var newAssigned_Date=assigned_Date.getDate() + '-'
	
	$('#displaySelectedCMDetailsLinkReviewQueryAdminLink').click();
$("#clientIdR").val(jsonObject.client_Id);
$("#contractIdR").val(jsonObject.contract_Id);

$("#contractCategoryR").val(jsonObject.contract_Category);
$("#contractBriefDescriptionR").val(jsonObject.contract_BriefDescription);
$("#contractStatusR").val(jsonObject.current_Status);
$("#assignedLawyerR").val(jsonObject.assigned_Lawyer);
$("#assignedByR").val(jsonObject.assigned_By);
$("#assignedDateR").val(newAssigned_Date);
}


function loadResponseCMDAdmin(url, jsonObject){
	var assigned_Date=new Date(jsonObject.assigned_Date);
	var newAssigned_Date=assigned_Date.getDate() + '-'
	
	$('#displaySelectedCMDDetailsLinkReviewQueryAdminLink').click();
$("#clientIdR").val(jsonObject.client_Id);
$("#conciliationIdR").val(jsonObject.conciliation_Id);

$("#conciliationCategoryR").val(jsonObject.conciliation_Category);
$("#conciliationBriefDescriptionR").val(jsonObject.conciliation_BriefDescription);
$("#conciliationStatusR").val(jsonObject.current_Status);
$("#assignedLawyerR").val(jsonObject.assigned_Lawyer);
$("#assignedByR").val(jsonObject.assigned_By);
$("#assignedDateR").val(newAssigned_Date);
}

$(document).on('click', "#approveCMButton", function() {
	var checkboxValues = [];
	checkboxValues.push($("#user_id").text());
	if(($("input[type='checkbox'][name='contract_Id']:checked").length > 0)){
	$('input:checkbox[name=contract_Id]').each(function() {
		if ($(this).is(':checked')) {
			checkboxValues.push($(this).val());
		}
	});
	ajaxPost("NoForm", "/approveCMResponse/" + checkboxValues);
	}else{
		$("#newCMLawyerSpan").text("Please Select atleast one Contract to approve");
		checkboxValues.push($(this).val());
	}
});

$(document).on('click', "#approveCMDButton", function() {
	var checkboxValues = [];
	checkboxValues.push($("#user_id").text());
	if(($("input[type='checkbox'][name='conciliation_Id']:checked").length > 0)){
	$('input:checkbox[name=conciliation_Id]').each(function() {
		if ($(this).is(':checked')) {
			checkboxValues.push($(this).val());
		}
	});
	ajaxPost("NoForm", "/approveCMDResponse/" + checkboxValues);
	}else{
		$("#newCMLawyerSpan").text("Please Select atleast one Contract to approve");
		checkboxValues.push($(this).val());
	}
});



$(document).on('click', "#submitConciliationButton", function() {
	var radiovalue = null;
	if(($("input[type='radio'][name='conciliation_Id']:checked").length > 0)){
	$('input:radio[name=conciliation_Id]').each(function() {
		if ($(this).is(':checked')) {
			radiovalue = ($(this).val());
		}
	});
    ajaxPost("NoForm", "/responseConciliation/" + radiovalue);
	}else{
		$("#progressConciliationLawyerSpan").text("Please select one Conciliation to give Response");
	}
});


$(document).on('click', "#submitCaseFileButton", function() {
	var radiovalue = null;
	if(($("input[type='radio'][name='dispute_Id']:checked").length > 0)){
	$('input:radio[name=dispute_Id]').each(function() {
		if ($(this).is(':checked')) {
			radiovalue = ($(this).val());
		}
	});
    ajaxPost("NoForm", "/caseFile/" + radiovalue);
	}else{
		$("#progressDisputeLawyerSpan").text("Please select one Dispute to file a case");
	}
});




function createDisputeSpecificCase(conciliationId){
	ajaxPost("NoForm", "/createCaseByQueryId/" + conciliationId);
}

function loadAdminServiceDRDataInTable(elementid,identifier,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		
		var paramInfo = [];
		paramInfo.push($("#user_id").text());
		paramInfo.push(identifier);
		var client_id=$("#user_id").text();
		if(url!="newDRAdmin"){
		ajaxPost("NoForm", "/"+url+".web/" + paramInfo[0]);
		}else{
			ajaxPostNew("adminNewServiceForm", "/"+url+".web/" + paramInfo, "/lawyer.web/"+ client_id);
		}
	}
}
function loadAdminServiceDDDataInTable(elementid,identifier,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		
		var paramInfo = [];
		paramInfo.push($("#user_id").text());
		paramInfo.push(identifier);
		var client_id=$("#user_id").text();
		if(url!="newDueDiligenceAdmin"){
		ajaxPost("NoForm", "/"+url+".web/" + paramInfo[0]);
		}else{
			ajaxPostNew("adminNewServiceForm", "/"+url+".web/" + paramInfo, "/lawyer.web/"+ client_id);
		}
	}
}

function loadAdminServiceCMDataInTable(elementid,identifier,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		
		var paramInfo = [];
		paramInfo.push($("#user_id").text());
		paramInfo.push(identifier);
		var client_id=$("#user_id").text();
		if(url!="newCMAdmin"){
		ajaxPost("NoForm", "/"+url+".web/" + paramInfo[0]);
		}else{
			ajaxPostNew("adminNewServiceForm", "/"+url+".web/" + paramInfo, "/lawyer.web/"+ client_id);
		}
	}
}

function loadAdminServiceCMDDataInTable(elementid,identifier,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		
		var paramInfo = [];
		paramInfo.push($("#user_id").text());
		paramInfo.push(identifier);
		var client_id=$("#user_id").text();
		if(url!="newCMDAdmin"){
		ajaxPost("NoForm", "/"+url+".web/" + paramInfo[0]);
		}else{
			ajaxPostNew("adminNewServiceForm", "/"+url+".web/" + paramInfo, "/lawyer.web/"+ client_id);
		}
	}
}



function loadDisputeOnClick(multipleIds){
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchCaseDetails/"+ multipleId[1]);
	getCaseDescriptionInNewPopUp(multipleId[0],multipleId[1],"DisputeDescription");
	getUploadedFileDetailsOfCase(multipleId[0],multipleId[1],"allCaseFileDetails1","Uploaded");
}

function loadDiligenceOnClick(multipleIds){
	//alert("work is in progress");
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchCaseDetails/"+ multipleId[1]);
	getCaseDescriptionInNewPopUp(multipleId[0],multipleId[1],"DiligenceDescription");
	getUploadedFileDetailsOfCase(multipleId[0],multipleId[1],"allCaseFileDetails2","Uploaded");
}

function loadConciliationOnClick(multipleIds){
	//alert("work is in progress");
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchCaseDetails/"+ multipleId[1]);
	getCaseDescriptionInNewPopUp(multipleId[0],multipleId[1],"ConciliationDescription");
	getUploadedFileDetailsOfCase(multipleId[0],multipleId[1],"allCaseFileDetails3","Uploaded");
	getRespondedFileDetailsOfCase(multipleId[0],multipleId[1],"allCaseFileDetailsResponse3","Uploaded");

}

function loadContractOnClick(multipleIds){
	//alert("work is in progress");
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchCaseDetails/"+ multipleId[1]);
	getCaseDescriptionInNewPopUp(multipleId[0],multipleId[1],"ContractDescription");
	getUploadedFileDetailsOfCase(multipleId[0],multipleId[1],"allCaseFileDetails","Uploaded");
	getRespondedFileDetailsOfCase(multipleId[0],multipleId[1],"allCaseFileDetailsResponse12","Uploaded");

}







function loadDiligenceDetails(url, jsonObject){
	console.log("Popup Values");
	console.log(jsonObject);
	
	
	var created_On=new Date(jsonObject.created_On);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
	var client=jsonObject.client_Id.split("-");
	$('#displayDiligenceDetailsPopup').click();

	   $("#ClientId").val(client[0]);
	   $("#diclient").val(jsonObject.client_Id);
	   $("#DiligenceId").val(jsonObject.diligence_Id);
	   $("#DiligenceCategory").val(jsonObject.diligence_Category);
	   $("#DiligenceSubCategory").val(jsonObject.diligence_Details);
	   
	   
	   $("#DiligenceBriefDescription").text(jsonObject.diligence_BriefDescription);
	   $("#DiligenceStatus").val(jsonObject.current_Status);
	   $("#DiligenceCreatedDate").val(newCreated_On);
	   $("#DiligenceComment").val(jsonObject.diligence_Comment);
	   $("#DiligenceDescription").text(jsonObject.diligence_BriefDescription);
	   //$("#nextHereing").val(jsonObject.next_Hereing);
	   	if(jsonObject.current_Status=="Initial"){
	   		$("#diassignedLawyer").val("N.A");
			$("#diassignedBy").val("N.A");
			$("#diassignedDate").val("N.A");
			$("#dicompletedOn").val("N.A");
	   	}

		if(jsonObject.current_Status=="New" || jsonObject.current_Status=="Active" || jsonObject.current_Status=="Closed"){
		
			
			var assigned_Date=new Date(jsonObject.assigned_Date);
			var newAssigned_Date=assigned_Date.getFullYear() + '-'
			+( assigned_Date.getMonth() + 1) + '-'
			+ assigned_Date.getDate();
			
			var lawyer=jsonObject.assigned_Lawyer.split("-");
			var admin=jsonObject.assigned_By.split("-");
			$("#diassignedLawyer").val(lawyer[1]);
			$("#diassignedBy").val(admin[1]);
			$("#diassignedDate").val(newAssigned_Date);
		
		
		if(jsonObject.current_Status=="Closed"){
			var completed_On=new Date(jsonObject.completed_On);
			var newCompleted_On=completed_On.getFullYear() + '-'
			+( completed_On.getMonth() + 1) + '-'
			+ completed_On.getDate();
			$("#dicompletedOn").val(newCompleted_On);
		}
		}
}

function loadDisputeDetails(url, jsonObject){
	console.log("Popup Values");
	console.log(jsonObject);
	
	var created_On=new Date(jsonObject.created_On);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
	
	/*var created_On=new Date(jsonObject.created_On);
	var newCreated_On=created_On.getDate() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getFullYear();*/
	var client=jsonObject.client_Id.split("-");
	$('#displayDisputeDetailsPopup').click();

	   $("#ClientId").val(client[0]);
	   $("#diclient").val(client[1]);
	   
	
	$("#DisputeId").val(jsonObject.dispute_Id);
	     $("#pClientId").val(jsonObject.client_Id);
	   $("#DisputeCategory").val(jsonObject.dispute_Category);
	   $("#DisputeSubCategory").val(jsonObject.dispute_SubCategory);
	   
	   
	   $("#DisputeBriefDescription").html("");
	   $("#DisputeBriefDescription").html(jsonObject.dispute_BriefDescription);
	   $("#DisputeStatus").val(jsonObject.current_Status);
	   $("#DisputeCreatedDate").val(newCreated_On);
	   $("#DisputeComment").val(jsonObject.dispute_Comment);
	  // $("#DisputeDescription").html(jsonObject.dispute_BriefDescription);
	   $("#nextHereing").val(jsonObject.next_Hereing);
	   	if(jsonObject.current_Status=="Initial"){
	   		$("#drassignedLawyer").val("N.A");
			$("#drassignedBy").val("N.A");
			$("#drassignedDate").val("N.A");
			$("#drcompletedOn").val("N.A");
	   	}
	   	
	   	
	   	

		if(jsonObject.current_Status=="New" || jsonObject.current_Status=="Active" || jsonObject.current_Status=="Closed"){
			/*var assigned_Date=new Date(jsonObject.assigned_Date);
			var newAssigned_Date=assigned_Date.getDate() + '-'
			+( assigned_Date.getMonth() + 1) + '-'
			+ assigned_Date.getFullYear();*/
			var assigned_Date=new Date(jsonObject.assigned_Date);
			var newAssigned_Date=assigned_Date.getFullYear() + '-'
			+( assigned_Date.getMonth() + 1) + '-'
			+ assigned_Date.getDate();
			
			var lawyer=jsonObject.assigned_Lawyer.split("-");
			var admin=jsonObject.assigned_By.split("-");
			$("#drassignedLawyer").val(lawyer[1]);
			$("#drassignedBy").val(admin[1]);
			$("#drassignedDate").val(newAssigned_Date);
		
		
		if(jsonObject.current_Status=="Closed"){
			
			
			var completed_On=new Date(jsonObject.completed_On);
			var newCompleted_On=completed_On.getFullYear() + '-'
			+( completed_On.getMonth() + 1) + '-'
			+ completed_On.getDate();
			/*var completed_On=new Date(jsonObject.completed_On);
			var newCompleted_On=completed_On.getDate() + '-'
			+( completed_On.getMonth() + 1) + '-'
			+ completed_On.getFullYear();*/
			$("#drcompletedOn").val(newCompleted_On);
		}
		}
}		
function loadContractDetails(url, jsonObject){
	console.log("Popup Values");
	console.log(jsonObject);
	
	
	
	var created_On=new Date(jsonObject.created_On);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
	var client=jsonObject.client_Id.split("-");
	$('#displayContractDetailsPopup').click();

	   $("#ClientId").val(client[0]);
	   $("#conclient").val(client[1]);
	
	   $("#ContractId").val(jsonObject.contract_Id);
	   $("#cClientId").val(jsonObject.client_Id);
	   $("#ContractCategory").val(jsonObject.contract_Category);
	   $("#ContractDetails").text(jsonObject.contract_Details);
	   
	   
	   $("#ContractBriefDescription").text(jsonObject.contract_BriefDescription);
	   $("#ContractStatus").val(jsonObject.current_Status);
	   $("#ContractCreatedDate").val(newCreated_On);
	   $("#ContractComment").val(jsonObject.contract_Comment);
	  // $("#nextHereing").val(jsonObject.next_Hereing);
	   	if(jsonObject.current_Status=="Initial"){
	   		$("#conassignedLawyer").val("N.A");
			$("#conassignedBy").val("N.A");
			$("#conassignedDate").val("N.A");
			$("#concompletedOn").val("N.A");
	   	}

		if(jsonObject.current_Status=="New" || jsonObject.current_Status=="Active" || jsonObject.current_Status=="Closed"){
			
			
			
			
			
			var assigned_Date=new Date(jsonObject.assigned_Date);
			var newAssigned_Date=assigned_Date.getFullYear() + '-'
			+( assigned_Date.getMonth() + 1) + '-'
			+ assigned_Date.getDate();
			
			var lawyer=jsonObject.assigned_Lawyer.split("-");
			var admin=jsonObject.assigned_By.split("-");
			$("#conassignedLawyer").val(lawyer[1]);
			$("#conassignedBy").val(admin[1]);
			$("#conassignedDate").val(newAssigned_Date);
		
		
		if(jsonObject.current_Status=="Closed"){
			
			var completed_On=new Date(jsonObject.completed_On);
			var newCompleted_On=completed_On.getFullYear() + '-'
			+( completed_On.getMonth() + 1) + '-'
			+ completed_On.getDate();
			$("#concompletedOn").val(newCompleted_On);
		}
		}
}		
function loadConciliationDetails(url, jsonObject){
	var created_On=new Date(jsonObject.created_On);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
	$('#displayConciliationDetailsPopup').click();
$("#coclient").val(jsonObject.client_Id);
	   $("#ConciliationId").val(jsonObject.conciliation_Id);
	   $("#ConciliationCategory").val(jsonObject.conciliation_Category);
	   $("#ConciliationSubCategory").val(jsonObject.conciliation_SubCategory);
	   $("#ConciliationBriefDescription").text(jsonObject.conciliation_BriefDescription);
	   $("#ConciliationStatus").val(jsonObject.current_Status);
	   $("#ConciliationCreatedDate").val(newCreated_On);
	   $("#caseComment").val(jsonObject.conciliation_Comment);
		if(jsonObject.current_Status=="Initial"){
	   		$("#coassignedLawyer").val("N.A");
			$("#coassignedBy").val("N.A");
			$("#coassignedDate").val("N.A");
			$("#cocompletedOn").val("N.A");
	   	}
if(jsonObject.current_Status=="New" || jsonObject.current_Status=="Active" || jsonObject.current_Status=="Closed"){
			var assigned_Date=new Date(jsonObject.assigned_Date);
			var newAssigned_Date=assigned_Date.getFullYear() + '-'
			+( assigned_Date.getMonth() + 1) + '-'
			+ assigned_Date.getDate();
			
			var lawyer=jsonObject.assigned_Lawyer.split("-");
			var admin=jsonObject.assigned_By.split("-");
			$("#coassignedLawyer").val(lawyer[1]);
			$("#coassignedBy").val(admin[1]);
			$("#coassignedDate").val(newAssigned_Date);
		
		
		if(jsonObject.current_Status=="Closed"){
			var completed_On=new Date(jsonObject.completed_On);
			var newCompleted_On=completed_On.getFullYear() + '-'
			+( completed_On.getMonth() + 1) + '-'
			+ completed_On.getDate();
			$("#cocompletedOn").val(newCompleted_On);
		}
		}
}

function getInvoiceDetails(multipleIds){
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchInvoiceDetails/"+ multipleId[1]);
    getCaseDescriptionInPopUp(multipleId[0],multipleId[1]);
	getUploadedFileDetailsOfCase(multipleId[0],multipleId[1],"allCaseFileDetails","Uploaded");
}

function loadInvoiceDetails(url, jsonObject){
	var created_On=new Date(jsonObject.created_On);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
	$('#displayInvoiceDetailsPopup').click();
$("#ivClientId").val(jsonObject.client_Id);
	  $("#InvoiceId").val(jsonObject.invoice_Id);
	   $("#InvoiceCategory").val(jsonObject.invoice_Type);
	   $("#InvoiceCreatedBy").val(jsonObject.created_By);
	   $("#InvoiceLawyer").val(jsonObject.assigned_Lawyer);
	   $("#InvoiceCreatedDate").val(newCreated_On);
	   $("#InvoiceDueDate").val(jsonObject.invoice_Due_Date);
	   $("#InvoiceGrossAmt").val(jsonObject.invoice_Gross_Amount);
	   $("#InvoiceComment").val(jsonObject.case_Comment);
	   $("#InvoiceState").val(jsonObject.invoice_State);
}	
function loadCaseCommentOnClick(multipleIds){
	var data=multipleIds.split(",");
	$("#contentPage").load("/LegalBell/html/contentPages/GenericCaseComment.html",function(){
		$("#Service_Id").val(data[1]);
		$("#Comment_By").val($("#user_id").text());
		setPreviousGenericComments(multipleIds);
	});
	}
function createGenericCaseComment(){
	var data=$("#CommentEditor").Editor("getText");
	document.getElementById("CommentText").value = data;
	if (document.getElementById("CommentText").value == "") {
		document.getElementById("commentTextSpan").textContent = "*Please enter your Comment text";
	} else {
		ajaxPost('GenericCommentForm', '/createComment');
	}
}	
function getCaseDescriptionInNewPopUp(client_Id,case_Id,target_div) {
	var value = client_Id + "-" + case_Id;
	$.ajax({
		method : 'POST',
		url : '/LegalBell' + '/getCaseDesc/' + value,
		success : function(response) {
			var caseDesc = response.result;
			$("#"+target_div).html("");
			$("#"+target_div).html(caseDesc);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}
function getFeeQuoteDetails(multipleIds){
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchFeeQuoteDetails/"+ multipleId[0]);
}
function loadQuotationDetails(url, jsonObject){
	$("#contentPage").load(
			"/LegalBell/html/contentPages/" + url + ".html",
			function() {
				if(jsonObject.vstatus==1){
					document.getElementById("newQuote").style.display = "none";
					document.getElementById("acceptedQuote").style.display = "block";
				}
				$.each(jsonObject, function(name, val) {
					var $el = $('[id="' + name + '"]');
					$el.html("");
					$el.html(val);
				});
				$("#clientID").val(jsonObject.clientId);
				$("#serviceID").val(jsonObject.serviceId);
				$("#createdBY").val(jsonObject.createdBy);
				$("#quotationID").val(jsonObject.quotationId);
				$("#advanceID").val(jsonObject.advanceId);
				//$("#quotationID").val(jsonObject.quotationId);
				var qpart=jsonObject.qparticulars;
				var qparts=qpart.split("|");
				var ipart=jsonObject.iparticulars;
				var iparts=ipart.split("|");
				var qrpart=jsonObject.qrates;
				var qrparts=qrpart.split("|");
				var irpart=jsonObject.irates;
				var irparts=irpart.split("|");
				var txt = "";
				var txt1 = "";
				if (qparts.length > 0) {
					for (var i = 1; i < qparts.length; i++) {
						txt += "<tr><td>" + (i) + "</td><td>"
								+ qparts[i] + "</td><td>"
								+ qrparts[i] + "</td></tr>"
					}
					$("#quoteDetails").append(txt);
				}
				if (irparts.length > 0) {
					for (var i = 1; i < irparts.length; i++) {
						txt1 += "<tr><td>" + (i) + "</td><td>"
								+ iparts[i] + "</td><td>"
								+ irparts[i] + "</td></tr>"
					}
					$("#advanceDetails").append(txt1);
				}
				
			});
}	

function loadAdvanceDetails(url, jsonObject){
	$("#contentPage").load(
			"/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$.each(jsonObject, function(name, val) {
					var $el = $('[id="' + name + '"]');
					$el.html("");
					$el.html(val);
				});
				$("#quotationID").val(jsonObject.quotationId);
				//$("#quotationID").val(jsonObject.quotationId);
				
				var ipart=jsonObject.iparticulars;
				var iparts=ipart.split("|");
				
				var irpart=jsonObject.irates;
				var irparts=irpart.split("|");
				var txt = "";
				
				if (irparts.length > 0) {
					for (var i = 1; i < irparts.length; i++) {
						txt += "<tr><td>" + (i) + "</td><td>"
								+ iparts[i] + "</td><td>"
								+ irparts[i] + "</td></tr>"
					}
					$("#advanceDetails").append(txt);
				}
				
			});
}	

function getRequestDetails(multipleIds){
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/fetchRequestDetails/"+ multipleId[0]);
	getRequestedDocDetailsOfCase(multipleId[3],multipleId[2],multipleId[0],"docRequest");
}
/*function loadRequestDetails(url, jsonObject){
	var status=jsonObject.request_Status;
	var requestType=jsonObject.request_Type;
	//alert(status);
	var created_On=new Date(jsonObject.created_Date);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
	var respond_date=new Date(jsonObject.response_Date);
	var newResponse_On=respond_date.getFullYear() + '-'
	+(respond_date.getMonth() + 1) + '-'
	+ respond_date.getDate();
	$('#displayRequestDetailsPopup').click();
    if(status=="Closed" && (requestType=="CaseFileRequest"||requestType=="QueryFileRequest")){
		document.getElementById("DateLabelDiv").style.display = "block";
		document.getElementById("DateDiv").style.display = "block";
		document.getElementById("ResponseLabelDiv").style.display = "block";
		document.getElementById("ResponseDiv").style.display = "block";
		document.getElementById("RequestedFileDetails").style.display = "block";
		
	}
    if(jsonObject.request_Item.includes("CLO_LA") || jsonObject.request_Item.includes("CLO_TA") )
	{   // alert("Query");
		 document.getElementById('LabelDiv').innerText='';
	     document.getElementById('LabelDiv').innerText='Query Id';	
	} 
	if(jsonObject.request_Item.includes("CLO_DR") || jsonObject.request_Item.includes("CLO_DD")|| jsonObject.request_Item.includes("CLO_CM"))
		{
		//alert("Case");
		document.getElementById('LabelDiv').innerText='';
	     document.getElementById('LabelDiv').innerText='Case Id';
		}
	
	
	$("#RequestId").val(jsonObject.request_Id); 
	 $("#RequestItem").val(jsonObject.request_Item);
	 $("#RequestType").val(jsonObject.request_Type);
	 $("#RequestStatus").val(jsonObject.request_Status);
	 $("#RequestCreatedDate").val(newCreated_On);
	 $("#RequestFrom").val(jsonObject.request_From);
	 $("#RequestTo").val(jsonObject.request_To);
	 $("#ResponseDate").val(newResponse_On);
	 $("#RequestMessage").text(jsonObject.request_Message);
	 $("#ResponseMessage").text(jsonObject.response_Message);
}
*/

function loadRequestDetails(url, jsonObject){
	var status=jsonObject.request_Status;
	var requestType=jsonObject.request_Type;
	//alert(status);
	var created_On=new Date(jsonObject.created_Date);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
	var respond_date=new Date(jsonObject.response_Date);
	var newResponse_On=respond_date.getFullYear() + '-'
	+(respond_date.getMonth() + 1) + '-'
	+ respond_date.getDate();
	$('#displayRequestDetailsPopup').click();
    if(status=="Closed" && (requestType=="CaseFileRequest"||requestType=="QueryFileRequest"||requestType=="LegalNoticeFileRequest")){
		document.getElementById("DateLabelDiv").style.display = "block";
		document.getElementById("DateDiv").style.display = "block";
		document.getElementById("ResponseLabelDiv").style.display = "block";
		document.getElementById("ResponseDiv").style.display = "block";
		document.getElementById("RequestedFileDetails").style.display = "block";
		
	}
    if(jsonObject.request_Item.includes("CLO_LA") || jsonObject.request_Item.includes("CLO_TA") )
	{   // alert("Query");
		 document.getElementById('LabelDiv').innerText='';
	     document.getElementById('LabelDiv').innerText='Query Id';	
	} 
	if(jsonObject.request_Item.includes("CLO_DR") || jsonObject.request_Item.includes("CLO_DD")|| jsonObject.request_Item.includes("CLO_CM"))
		{
		//alert("Case");
		document.getElementById('LabelDiv').innerText='';
	     document.getElementById('LabelDiv').innerText='Case Id';
		}
	if(jsonObject.request_Item.includes("LN"))
	{
	//alert("Case");
	document.getElementById('LabelDiv').innerText='';
     document.getElementById('LabelDiv').innerText='Notice Id';
	}
	
	
	 $("#RequestId").val(jsonObject.request_Id); 
	 $("#RequestItem").val(jsonObject.request_Item);
	 $("#RequestType").val(jsonObject.request_Type);
	 $("#RequestStatus").val(jsonObject.request_Status);
	 $("#RequestCreatedDate").val(newCreated_On);
	 $("#RequestFrom").val(jsonObject.request_From);
	 $("#RequestTo").val(jsonObject.request_To);
	 $("#ResponseDate").val(newResponse_On);
	 $("#RequestMessage").text(jsonObject.request_Message);
	 $("#ResponseMessage").text(jsonObject.response_Message);
}









function getRequestedDocDetailsOfCase(ClientId,CaseId,RequestId,identifier){
	var value1 = ClientId + "-" + CaseId + "-" + RequestId+ "-" + identifier;
	var value = ClientId + "||" + CaseId+ "||" +RequestId;
	$.ajax({
				method : 'POST',
				url : '/LegalBell' + '/getRequestedDocDetailsOfCase/'+value1,
				success : function(response) {
					var finalresult = response.result;
					//alert(finalresult);
					var fileLength = response.result.length;
					var txt = "";
					$("#"+identifier).html("");
					if (fileLength > 0) {
						txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
						
					for (var i = 0; i < fileLength; i++) {
						txt += "<tr><td><input type='text' name='sl_No' size='2' readonly='readonly' value="
								+ (i + 1)
								+ "></td><td><input type='text' name='file_Name' class='col-sm-12' size='47%' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td><td><input type='button' value='view' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedFileViewOfCase(this.id)' /> &nbsp;&nbsp;&nbsp;<input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedfilesPdf(this.id)' /></td></tr>"
								
					}
					
					$("#"+identifier).append(txt);
				}
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}




function loadRequestedDocumentDetails(ids) {
	var caseInfo=[];
	var idsInfo=ids.split("-");
	//alert(idsInfo);
	caseInfo.push(idsInfo[0]);
	caseInfo.push(idsInfo[1]);
    caseInfo.push(idsInfo[2]);
	
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/DocRequestResponseClient.html",
			function() {
		
		if(idsInfo[1].startsWith("CLO_LA") || idsInfo[1].startsWith("CLO_TA") )
		{  
			 document.getElementById('LabelId').innerText='';
		     document.getElementById('LabelId').innerText='Query Id';
		     document.getElementById('catLabelId').innerText='';
		     document.getElementById('catLabelId').innerText='Query Category';
		     document.getElementById('subCatLabelId').innerText='';
		     document.getElementById('subCatLabelId').innerText='Query SubCategory';
		}else if(idsInfo[1].startsWith("LN")){
			 document.getElementById('LabelId').innerText='';
		     document.getElementById('LabelId').innerText='Notice Id';
		     document.getElementById('caseCategoryDiv').style.display = "none";
		     document.getElementById('caseSubCategoryDiv').style.display = "none";
		}
	});
	
    
    
$.ajax({
	url : '/LegalBell/fetchCaseDetailsByCaseID/'+idsInfo[1],
	method : 'POST',
	success : function(response) {
		var created_On = new Date(response.result.created_On);
		var newCreated_On = created_On.getFullYear() + '-'
				+ (created_On.getMonth() + 1) + '-'
				+ created_On.getDate();
		var assigned_Date = new Date(response.result.assigned_Date);
		var newAssigned_Date = assigned_Date.getFullYear() + '-'
				+ (assigned_Date.getMonth() + 1) + '-'
				+ assigned_Date.getDate();
		$("#user_Id").val(idsInfo[2]);
		$("#request_Id").val(idsInfo[0]);
		$("#request_Item").val(idsInfo[1]);
		$("#caseId").val(response.result.case_Id);
		$("#caseCategoryId").val(response.result.case_Category);
		$("#caseCategoryId").val(response.result.case_Category);
		$("#caseSubCategoryId").val(response.result.case_SubCategory);
		$("#createdDateId").val(newCreated_On);
		$("#assignDateId").val(newAssigned_Date);
		$("#clientId").val(response.result.client_Id);
		$("#clientNameId").val(response.result.clientNameId);
		$("#clientPhoneId").val(response.result.phone_Mobile);
		$("#clientEmailId").val(response.result.email_Id);
	}
});

$.ajax({
	url : '/LegalBell/fetchDocRequestDetails/'+idsInfo[0],
	method : 'POST',
	success : function(response) {
		var created_On = new Date(response.result.created_Date);
		var newCreated_On = created_On.getFullYear() + '-'
				+ (created_On.getMonth() + 1) + '-'
				+ created_On.getDate();
		$("#created_Date").val(newCreated_On);
		$("#RequestMsg").text(response.result.request_Message);
		
		
	}
});
}


$(document).on(
		'click',
		"#closeButton",
		function() {
			document.getElementById("DateLabelDiv").style.display = "none";
			document.getElementById("DateDiv").style.display = "none";
			document.getElementById("ResponseLabelDiv").style.display = "none";
			document.getElementById("ResponseDiv").style.display = "none";
			document.getElementById("RequestedFileDetails").style.display = "none";
			$('#displaySelectedRequestDetails').modal('hide');
		});


function loadrate(){
	$("#showrate").click();
}


$(document).on('click', "#createLN", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoFrom", "/createLN/" + client_id);
//$(".modal-backdrop").remove();
});

function loadLegalNoticeContent(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$("#Client_Id").val(jsonObject.client_Id);
				 $("#Notice_Id").val(jsonObject.notice_Id);
					$("#NoticeBrief").val(jsonObject.notice_BriefDescription);
					$("#AdversoryName").val(jsonObject.adversory_Name);
					$("#AdversoryEmail").val(jsonObject.adversory_Email);
					$("#AdversoryMobile").val(jsonObject.adversory_Mobile);
					$("#AdversoryAddress").text(jsonObject.adversory_Address);
					
				}
				
			);
}


function ValidateCreateNotice(){
	 if(document.getElementById("NoticeBrief").value == ""){
	 		document.getElementById("noticeBriefSpan").textContent = "*Please Enter  Brief Description about your Notice";	
	 	}else if(document.getElementById("AdversoryName").value == ""){
	 		document.getElementById("advNameSpan").textContent = "*Please Enter Adversory Name";	
	 	}else if(document.getElementById("Adversory_Address").value == ""){
	 		document.getElementById("adversoryAddressSpan").textContent = "*Please Enter Adversory Address";
	 	}else{
	 		ajaxPost('createNoticeForm','/detailsLegalNotice');
	 }
	 }

$(document).on('click',"#LegalNoticeSlaButton",function() {
	ajaxPost('rateChartForm','/rateChartForLegalNotice.web/'+ ($("#ClientId").val() + "-" + $("#noticeId").val()));
});



function loadClientLegalNoticeDataInTable(elementid,identifier,url){
	var value = $("#"+elementid).text().split(" ");
	var NoticeNumber = value[value.length-1];
	if(NoticeNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
		var id=$("#client_id").text();
	ajaxPost("NoForm", "/"+url+".web/" + id);
	}
}



function loadAdminLegalNoticeDataInTable(elementid,identifier,url){
	var value = $("#"+elementid).text().split(" ");
	var QueryNumber = value[value.length-1];
	if(QueryNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	/*	
		var paramInfo = [];
		paramInfo.push($("#user_id").text());
		paramInfo.push(identifier);*/

		var client_id=$("#user_id").text();
		if(url!="newLegalNoticeAdmin"){
		ajaxPost("NoForm", "/"+url+".web/" + client_id);
		}else{
			ajaxPostNewLegalNotice("adminNewLegalNoticeForm", "/"+url+".web/", "/lawyersForLegalNotices.web/"+ client_id);
		}
	}
}

$(document).on('click',"#openPopupButtonForLegalNotice",function(){
	if(($("input[type='checkbox'][name='lnId']:checked").length > 0) && 
			($("input[type='radio'][name='lwyrId']:checked").length > 0)){
		$('#popupLegalNoticeLink').click();
		if($("input[type='checkbox'][name='lnId']:checked").length > 1){
			$("#applyToAllDivLN").css("display","block");	
			}else{
			  $("#applyToAllDivLN").css("display","none");	
			}
		$("#lnIDs").val("");
	
		$('input:checkbox[name=lnId]').each(function(){	
    	if($(this).is(':checked')){
    	$("#lnIDs").val($( "#lnIDs").val() + "," +  $(this).val());
    	}
    });	
var selectedVal ="";
    var selected = $("input[type='radio'][name='lwyrId']:checked");
    if(selected.length > 0){
    	selectedVal =selected.val();
    	$("#lwyrIDs").val(selectedVal);
    }
    $("#newLegalNoticeAdminSpan").text("");
}else{
	$("#newLegalNoticeAdminSpan").text("Please Select Notice Id and Lawyer Id to Assign Legal Notice");
}    
}); 


$(document).on('click', "#assignLegalNoticeButton", function() {
if($("input[type='checkbox'][name='getlegalnoticeComment']:checked").length > 0){
	var getValue=$("input[type='checkbox'][name='getlegalnoticeComment']:checked").val();
	if(getValue == "1"){
var userId = $("#user_id").text();
var assignLegalNoticeInfo = [];
assignLegalNoticeInfo.push(userId);
var commentId =$("#commentIDs").val();
assignLegalNoticeInfo.push(commentId);
var lawyerId = $('input:text[name=lwyrIds]').val();
assignLegalNoticeInfo.push(lawyerId);
var noticeId = $('textarea[name=lnID]').val();
assignLegalNoticeInfo.push(noticeId);
}
}else{
	var userId = $("#user_id").text();
	var assignLegalNoticeInfo = [];
	assignLegalNoticeInfo.push(userId);
	//var commentId =null;
	var commentId =$("#commentIDs").val();
	assignLegalNoticeInfo.push(commentId);
	var lawyerId = $('input:text[name=lwyrIds]').val();
	assignLegalNoticeInfo.push(lawyerId);
	var noticeId = $('textarea[name=lnID]').val();
	assignLegalNoticeInfo.push(noticeId);
	}
$(".modal-backdrop").remove();

ajaxPost("NoForm", "/assignLegalNotice/" + assignLegalNoticeInfo);
});


function ReassignLegalNotice(reqValues){
var client_id = $("#user_id").text();
var lawyerResult = doAjaxFormPost('', "/lawyer.web/"+ client_id);
var multipleId = reqValues.split(",");
 $("#popupReassignLegalNotice").click();
 $("#lnIDs").val(multipleId[0]);
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
	
	$(document).on('click',"#reassignLegalNoticeButton",function(){
		var selectedLawyer = "";
		if(($("input[type='radio'][name='lwyrId']:checked").length > 0)){
		selectedLawyer = $("input[type='radio'][name='lwyrId']:checked").val();
		var comment = $("#commentIDs").val();
		var noticeId = $("#lnIDs").val();
		if(comment == ""){
			$("#reassignCommentSpan").text("Please give assignment comment");
		}else{
			var userId = $("#user_id").text();
			var assignNoticeInfo = [];
			assignNoticeInfo.push(userId);
			assignNoticeInfo.push(comment);
			assignNoticeInfo.push(selectedLawyer);
			assignNoticeInfo.push(noticeId);
			$(".modal-backdrop").remove();
			ajaxPost("NoForm", "/ReassignLegalNotice/" + assignNoticeInfo);
		}
	}else{
		$("#reassignLawyerSpan").text("Please select lawyer");
		}    
	    
	});
	
	
	
	$(document).on('click', "#approveLegalNoticeByAdminButton", function() {
		var checkboxValues = [];
		//alert("HI");
		checkboxValues.push($("#user_id").text());
		if(($("input[type='checkbox'][name='notice_Id']:checked").length > 0)){
		$('input:checkbox[name=notice_Id]').each(function() {
			if ($(this).is(':checked')) {
				checkboxValues.push($(this).val());
			}
		});
		ajaxPost("NoForm", "/approveLegalNoticeResponseAdmin/" + checkboxValues);
		}else{
			$("#editSpan").text("Please Select atleast one Legal Notice to approve");
			checkboxValues.push($(this).val());
		}
	});
	
	
	
	function loadReviewResponseLegalNoticeAdmin(multipleIds){
	    var multipleId = multipleIds.split(",");	
		ajaxPost("NoForm", "/displayResponseLegalNoticeAdmin/"+multipleId[1]);
		getLegalNoticeDescriptionInUserpopUp(multipleId[0],multipleId[1],'R');
		getLegalNoticeResponseUserpopUpEditor(multipleId[0],multipleId[1]);
		getUploadedFileDetails(multipleId[0],multipleId[1],'R');
		getResponseFileDetailsInQueryReview(multipleId[0],multipleId[1],'N');
		}
	
	function loadResponseLegalNoticeAdmin(url, jsonObject){
		var notice_Created_Date=new Date(jsonObject.notice_Created_Date);
		var newNotice_Created_Date=notice_Created_Date.getFullYear() + '-'
		+( notice_Created_Date.getMonth() + 1) + '-'
		+ notice_Created_Date.getDate();
		var assigned_Date=new Date(jsonObject.assigned_Date);
		var newAssigned_Date=assigned_Date.getFullYear() + '-'
		+( assigned_Date.getMonth() + 1) + '-'
		+ assigned_Date.getDate();
		var notice_Response_Date=new Date(jsonObject.notice_Response_Date);
		var newNotice_Response_Date=notice_Response_Date.getFullYear() + '-'
		+( notice_Response_Date.getMonth() + 1) + '-'
		+ notice_Response_Date.getDate();
		$('#displayLegalNoticeDetailsAdminLink').click();
	$("#clientIdR").val(jsonObject.client_Id);
	$("#noticeIdR").val(jsonObject.notice_Id);
	$("#noticeBriefDescriptionR").val(jsonObject.notice_BriefDescription);
	$("#noticeStatusR").val(jsonObject.notice_Status);
	$("#slaR").val(jsonObject.sla);
	$("#assignedLawyerR").val(jsonObject.assigned_Lawyer);
	$("#assignedByR").val(jsonObject.assigned_By);
	$("#assignedDateR").val(newAssigned_Date);
	$("#noticeCreatedDateR").val(newNotice_Created_Date);
	$("#noticeResponseDateR").val(newNotice_Response_Date);
	$("#noticeCommentR").val(jsonObject.notice_Comment);
	}





function getLegalNoticeDescriptionInUserpopUp(client_Id,notice_Id,ptype) {
var value = client_Id + "-" + notice_Id;
$.ajax({
	method : 'POST',
	url : '/LegalBell' + '/getQueryDesc/' + value,
	success : function(response) {
		console.log(response);
		var noticedesc = response.result;
		if(ptype=='N'){
		$("#NoticeDescription").html("");
		$("#NoticeDescription").append(noticedesc);
		}else{
			$("#NoticeDescriptionR").html("");
			$("#NoticeDescriptionR").append(noticedesc);	
		}
	},
	error : function() {
		loadAjaxErrorPage();
	}
});
}


function getLegalNoticeResponseUserpopUpEditor(client_Id,notice_Id) {
value = client_Id + "-" + notice_Id;
$.ajax({
	method : 'POST',
	url : '/LegalBell' + '/getQueryResponseContent/' + value,
	success : function(response) {
		var noticeResponse = response.result;
		$("#editor").Editor("setText", noticeResponse);
		},
	error : function() {
		loadAjaxErrorPage();
	}
});
}


$(document).on('click', "#activateLegalNoticeButton", function() {
var checkboxValues = [];
checkboxValues.push($("#user_id").text());
if(($("input[type='checkbox'][name='notice_Id']:checked").length > 0)){
$('input:checkbox[name=notice_Id]').each(function() {
	if ($(this).is(':checked')) {
		checkboxValues.push($(this).val());
	}
});
ajaxPost("NoForm", "/activateLegalNoticeByLawyer/" + checkboxValues);
}else{
	$("#newLegalNoticeLawyerSpan").text("Please Select atleast one Legal Notice to activate");
	checkboxValues.push($(this).val());
}
});

$(document).on('click', "#respondLegalNoticeButton", function() {
var radiovalue = null;
if(($("input[type='radio'][name='notice_Id']:checked").length > 0)){
$('input:radio[name=notice_Id]').each(function() {
	if ($(this).is(':checked')) {
		radiovalue = ($(this).val());
	}
});
ajaxPost("NoForm", "/responseLegalNotice/" + radiovalue);
}else{
	$("#respondLegalNoticeLawyerSpan").text("Please select one Legal Notice to give Response");
}
});



function loadLegalNoticeOnClick(multipleIds){
var multipleId = multipleIds.split(",");
ajaxPost("NoForm", "/fetchLegalNoticeDetails/"+ multipleId[1]);
getLegalNoticeDescriptionInUserpopUp(multipleId[0],multipleId[1],'N');
getUploadedLegalNoticeFileDetails(multipleId[0],multipleId[1],'N');
getLegalNoticeResponseInUserpopUp(multipleId[0],multipleId[1],'N');
getResponseFileDetailsInLegalNoticeReview(multipleId[0],multipleId[1]);

}

function loadLegalNoticeDetails(url, jsonObject){
var notice_Created_Date=new Date(jsonObject.notice_Created_Date);	
var newNotice_Created_Date=notice_Created_Date.getFullYear() + '-'
+( notice_Created_Date.getMonth() + 1) + '-'
+ notice_Created_Date.getDate();
var assigned_Date=new Date(jsonObject.assigned_Date);
var newAssigned_Date=assigned_Date.getFullYear() + '-'
+( assigned_Date.getMonth() + 1) + '-'
+ assigned_Date.getDate();
var notice_Response_Date=new Date(jsonObject.notice_Response_Date);
var newNotice_Response_Date=notice_Response_Date.getFullYear() + '-'
+( notice_Response_Date.getMonth() + 1) + '-'
+ notice_Response_Date.getDate();

$('#displayLegalNoticeDetailsPopup').click();
$("#lnclientId").val(jsonObject.client_Id);
$("#lnId").val(jsonObject.notice_Id);
$("#lnBriefDescription").val(jsonObject.notice_BriefDescription);
$("#lnStatus").val(jsonObject.notice_Status);
$("#lnCreatedDate").val(newNotice_Created_Date);
$("#lnComment").val(jsonObject.notice_Comment);
$("#lnsla").val(jsonObject.sla);
if(jsonObject.notice_Status=="New" || jsonObject.notice_Status=="Active" || jsonObject.notice_Status=="Closed" || jsonObject.notice_Status=="Approval"){
	$("#lnComment").val(jsonObject.notice_Comment);
	var lawyer=jsonObject.assigned_Lawyer.split("-");
	var admin=jsonObject.assigned_By.split("-");
	$("#lnassignedLawyer").val(lawyer[1]);
	$("#lnassignedBy").val(admin[1]);
	$("#lnassignedDate").val(newAssigned_Date);
	if(jsonObject.notice_Status=="Closed" ){
		$("#lnResponseDate").val(newNotice_Response_Date);
	}
}
	else if(jsonObject.notice_Status=="Initial" || jsonObject.notice_Status=="UnConfirmed")
		{
		$("#lnassignedLawyer").val("N.A");
		$("#lnassignedBy").val("N.A");
		$("#lnassignedDate").val("N.A");
		$("#lnResponseDate").val("N.A");
		}
}


function getLegalNoticeResponseInUserpopUp(client_Id,notice_Id,ptype) {
var value = client_Id + "-" + notice_Id;
$.ajax({
	method : 'POST',
	url : '/LegalBell' + '/getQueryResponseContent/' + value,
	success : function(response) {
		var noticeRes = response.result;
		if(ptype=='N'){
		$("#NoticeResponse").html("");
		$("#NoticeResponse").append(noticeRes);
		}else{
			$("#NoticeResponseR").html("");
			$("#NoticeResponseR").append(noticeRes);	
		}
	},
	error : function() {
		loadAjaxErrorPage();
	}
});
}


function getUploadedLegalNoticeFileDetails(ClientId,QueryId,ptype){
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
								+ (i + 1)
								+ "></td><td><input type='text' name='file_Name' size='60' readonly='readonly' " +
								"value="+finalresult[i].replace(/\s/g,"|")+"></td><td><input type='button' " +
									"value='view' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" " +
									"onclick='getUploadedFileViewOfQuery(this.id)' />&nbsp;&nbsp;&nbsp;<input type='button' " +
									"value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" " +
											"onclick='getUploadedfilesPdfOfQuery(this.id)' /></td></tr>"
								
					}
						if(ptype=="N"){
					$("#uploadedLegalNoticeFileDetails").html("");
					$("#uploadedLegalNoticeFileDetails").append(txt);
						}else{
							$("#uploadedLegalNoticeFileDetailsR").html("");
		 					$("#uploadedLegalNoticeFileDetailsR").append(txt);
						}
				}
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}

function getResponseFileDetailsInLegalNoticeReview(ClientId,QueryId){
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
 					
 					$("#responseLegalNoticeFileDetailsDIV").html("");
 						txt += "<tr><th class='col-sm-1'><b>Sl.No</b></th><th class='col-sm-6'><b>File Name</b></th><th class='col-sm-3'><b>Operation</b></th></tr>"
 							if(fileLength > 0){
 					for (var i = 0; i < fileLength; i++) {
 						txt += "<tr><td ><input type='text' name='sl_No' size='2' readonly='readonly' " +
 								"value="
 								+ (i + 1)
 								+ "></td><td ><input type='text' name='file_Name'  " +
 								"size='32%' readonly='readonly'" +
 								" value="+finalresult[i].replace(/\s/g,"|")+"></td>" +
 								"<td><input type='button' value='view'" +
 								" id="+finalresult[i].replace(/\s/g,"|")+"||"+
 								value+" onclick='getUploadedFileViewOfQuery(this.id)'  /></td></tr>"			
 					}
 							}
 					$("#responseLegalNoticeFileDetailsDIV").append(txt);
 				},
 				error : function() {
 					loadAjaxErrorPage();
 				}

 			});
 }

function confirmLegalNoticeOnClick(notice_id){
	 ajaxPost("NoForm", "/makeUnConfirmToConfirmLegalNotice/" + notice_id);
}

function loadDraftPage(caseid) {
	ajaxPost("NoFrom", "/getDraftAction/" + caseid);
}

function fetchInvoiceDetails(multipleIds){
	var multipleId = multipleIds.split(",");
	ajaxPost("NoForm", "/InvoiceDetailsById/"+ multipleId[1]);
   }



	