function getCompanyType() {
	$.ajax({
		url : '/LegalBell' + '/getIndustryTypeList',
		method : 'POST',
		success : function(response) {
			var jsonObject = response.result;
			var p = document.getElementById("IndustryType");
			for (var i = 0; i < jsonObject.length; i++) {
				var option = document.createElement("option");
				option.text = jsonObject[i];
				p.add(option);
			}
			$("#IndustryType").val($("#hiddenIndustryType").val());
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}
function getCountryList() {
	$
			.ajax({
				url : '/LegalBell' + '/getCountryList',
				method : 'POST',
				success : function(response) {
					var jsonObject = response.result;
					//alert(jsonObject);
					var x = document.getElementById("CountryId");
					for (var i = 0; i < jsonObject.length; i++) {
						var option = document.createElement("option");
						option.text = jsonObject[i];
						x.add(option);
					}
					$("#CountryId").val($("#hiddenCountry").val());
					var val = $("#hiddenCountry").val();
					if (val != "") {
						$
								.ajax({
									url : '/LegalBell' + '/getStateList',
									method : 'POST',
									data : {
										Value : val,
									},
									success : function(response) {
										var jsonObject = response.result;
										var y = document
												.getElementById("StateId");
										for (var i = 0; i < jsonObject.length; i++) {
											var option = document
													.createElement("option");
											option.text = jsonObject[i];
											y.add(option);
										}
										$("#StateId").val(
												$("#hiddenState").val())
										var val1 = $("#hiddenState").val();
										if (val1 != "") {
											$
													.ajax({
														url : '/LegalBell'
																+ '/getDistrictList',
														method : 'POST',
														data : {
															Value : val1,
														},
														success : function(
																response) {
															var jsonObject = response.result;
															var z = document
																	.getElementById("DistrictId");
															for (var i = 0; i < jsonObject.length; i++) {
																var option = document
																		.createElement("option");
																option.text = jsonObject[i];
																z.add(option);
															}
															$("#DistrictId")
																	.val(
																			$(
																					"#hiddenDistrict")
																					.val());
														},
														error : function() {
															loadAjaxErrorPage();
														}

													});
										}
									},
									error : function() {
										loadAjaxErrorPage();
									}
								});
					}
				},
				error : function() {
					loadAjaxErrorPage();
				}
			});
}
function changeStateList(Optionid, actionUrl) {
	$("select#StateId").html('<option value="" selected>--Select--</option>');
	$("select#DistrictId")
			.html('<option value="" selected>--Select--</option>');
	var country = document.getElementById(Optionid).value;
	$.ajax({
		url : '/LegalBell' + actionUrl,
		method : 'POST',
		data : {
			Value : country,
		},
		success : function(response) {
			var jsonObject = response.result;
			var x = document.getElementById("StateId");
			for (var i = 0; i < jsonObject.length; i++) {
				var option = document.createElement("option");
				option.text = jsonObject[i];
				x.add(option);
			}
			$("#hiddenCountry").val(country);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}
function changeDistrictList(Optionid, actionUrl) {
	$("select#DistrictId")
			.html('<option value="" selected>--Select--</option>');
	var state = document.getElementById(Optionid).value;
	$.ajax({
		url : '/LegalBell' + actionUrl,
		method : 'POST',
		data : {
			Value : state,
		},
		success : function(response) {
			var jsonObject = response.result;
			var x = document.getElementById("DistrictId");
			for (var i = 0; i < jsonObject.length; i++) {
				var option = document.createElement("option");
				option.text = jsonObject[i];
				x.add(option);
			}
			$("#hiddenState").val(state);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}
function getCorporateDetails() {
	$
			.ajax({
				url : '/LegalBell' + '/getPaymentTermList',
				method : 'POST',
				success : function(response) {
					var jsonObject = response.result;
					var y = document.getElementById("PaymentTerm");
					for (var i = 0; i < jsonObject.length; i++) {
						var option = document.createElement("option");
						option.text = jsonObject[i];
						y.add(option);

					}
					$("#PaymentTerm").val(
							document.getElementById("hiddenPaymentTerm").value);
					$
							.ajax({
								url : '/LegalBell' + '/getPaymentMethodList',
								method : 'POST',
								success : function(response) {
									var jsonObject = response.result;
									var z = document
											.getElementById("PaymentMethod");
									for (var i = 0; i < jsonObject.length; i++) {
										var option = document
												.createElement("option");
										option.text = jsonObject[i];
										z.add(option);
									}
									var term = ($("#hiddenPaymentTerm").val());
									$("#PaymentMethod")
											.val(
													document
															.getElementById("hiddenPaymentMethod").value);
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

function changeDistrictValue(Optionid) {
	var district = document.getElementById(Optionid).value;
	$("#hiddenDistrict").val(district);
}

function changeContractModeValue(Optionid) {
	var mode = document.getElementById(Optionid).value;
	$("#hiddenPaymentMethod").val(mode);
}

function changeIndustryTypeValue(Optionid) {
	var industry = document.getElementById(Optionid).value;
	$("#hiddenIndustryType").val(industry);
}

function changeContractTermValue(Optionid) {
	var term = document.getElementById(Optionid).value;
	$("#hiddenPaymentTerm").val(term);
	ajaxPost('NoForm', '/corporateServiceRateChart.web/' + term);
}

function changeContractServiceValue(Optionid) {
	var servs = document.getElementById(Optionid).value;
	$("#hiddenCorporateService").val(servs);
}

function changeUserCategory() {
	var value = document.getElementById("UserType").value;
	if (value == "") {
		document.getElementById("usercatdiv").style.display = "none";
		var nodes = document.getElementById("usercatdiv").getElementsByTagName(
				'*');
		for (var i = 0; i < nodes.length; i++) {
			nodes[i].disabled = true;
		}
	} else if (value == "Admin") {
		document.getElementById("usercatdiv").style.display = "none";
		var nodes = document.getElementById("usercatdiv").getElementsByTagName(
				'*');
		for (var i = 0; i < nodes.length; i++) {
			nodes[i].disabled = true;
		}
	} else {
		document.getElementById("usercatdiv").style.display = "block";
		var nodes = document.getElementById("usercatdiv").getElementsByTagName(
				'*');
		for (var i = 0; i < nodes.length; i++) {
			nodes[i].disabled = false;
		}
	}
}
$(document).on(
		'click',
		"#updateIndividualLink",
		function() {
			var client_id = $("#client_id").text();
			$("#contentPage").load("/LegalBell/html/contentPages/UpdateIndividualClient.html");
			ajaxPost("updateIndividualForm", "/clientdetails/" + client_id);
			getCountryList();
		});
$(document).on(
		'click',
		"#hdfcPaymentLink",
		function() {
			var client_id = $("#client_id").text();
			$("#contentPage").load(
					"/LegalBell/html/contentPages/Payment.html");
		});
$(document).on(
		'click',
		"#updateAdminLink",
		function() {
			var user_id = $("#user_id").text();
			$("#contentPage").load(
					"/LegalBell/html/contentPages/UpdateAdminDetails.html");
			ajaxPost("updateAdminDetailsForm", "/userdetails/" + user_id);
			getCountryList();
		});
$(document).on(
		'click',
		"#UpdateLawyerLink",
		function() {
			var user_id = $("#user_id").text();
			$("#contentPage").load(
					"/LegalBell/html/contentPages/UpdateLawyerDetails.html");
			ajaxPost("updateLawyerDetailsForm", "/userdetails/" + user_id);
			getCountryList();
		});
$(document).on('click', "#updateCorporateLink", function() {
	$(".modal-backdrop").remove();
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/clientdetails/" + client_id);
	getCompanyType();
	getCountryList();
});
$(document).on('click', "#corporateClientEditButton", function() {
	$(".modal-backdrop").remove();
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/clientdetails/" + client_id);
	getCompanyType();
	getCountryList();
});
$(document).on('click', "#createCorporateContractLink", function() {
	$(".modal-backdrop").remove();
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/corporateclientdetails/" + client_id);
	getCorporateDetails();
});
$(document).on('click', "#corporateContractEditButton", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/corporateclientdetails/" + client_id);
	getCorporateDetails();
});
$(document).on('click', "#updateCorporateContractLink", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/getContractIdPage/" + client_id);
});
function loadContractIdDetails(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				var x = document.getElementById("ContractId");
				for (var i = 0; i < jsonObject.length; i++) {
					var option = document.createElement("option");
					option.text = jsonObject[i];
					x.add(option);

				}
			});
}
$(document).on('click', "#clientReport", function() {
	$("#contentPage").load("/LegalBell/html/contentPages/AdminClientReport.html");
});
$(document).on(
		'click',
		"#adminClientReportButton",
		function() {
			var interval = $("#allClientInterval").val();
			if (interval > 0 && interval <= 90) {
				ajaxPost('NoForm', '/adminClientReport.web/' + interval);
			} else {
				$("#adminClientReportSpan").text(
						"Days Range should be between 1 to 90");
			}
		});
function loadAdminClientReport(url, jsonObject) {
	$('#clienttable').dataTable().fnDestroy();
	$("#clienttable")
			.dataTable(
					{
						dom: 'lBfrtip',
				        buttons: [
				        ],
						"bProcessing" : true,
						"sort" : "position",
						"bStateSave" : false,
						"iDisplayLength" : 5,
						"iDisplayStart" : 0,
						"aaData" : jsonObject,
						"aoColumns" : [
								{
									"mData" : null,
									render : function(data, type, full, meta) {
										return '<input type="button" id="'
												+ data.client_Id
												+ '"value="'
												+ data.client_Id
												+ '" onclick="loadClickClientDetails(this.id)">';
									}
								},
								{
									"mData" : "client_Type"
								},
								{
									"mData" : "first_Name"
								},
								{
									"mData" : "last_Name"
								},
								{
										"mData" : null,
										render : function(data, type, full, meta) {
										var created_Date=new Date(data.created_Date);
										var newCreated_Date=created_Date.getFullYear() + '-'
										+( created_Date.getMonth() + 1) + '-'
										+ created_Date.getDate();
										return newCreated_Date;
										}
								},
								{
									"mData" : "curnt_Status"
								}
						]
					});
}

function loadClickClientDetails(client_Id) {
	ajaxPost("NoForm", "/displayClientDetailsBySelectedClientId/" + client_Id);
}

function loadSelectedClientDetailsInClientReportAdmin(url, jsonObject) {
	var created_Date=new Date(jsonObject.created_Date);
	var newCreated_Date=created_Date.getFullYear() + '-'
	+(created_Date.getMonth() + 1) + '-'
	+ created_Date.getDate();
	$('#displaySelectedClientDetailsInAdminLink').click();
	$("#clientId").val(jsonObject.client_Id);
	$("#clientType").val(jsonObject.client_Type);
	$("#firstName").val(jsonObject.first_Name);
	$("#middleName").val(jsonObject.middle_Name);
	$("#lastName").val(jsonObject.last_Name);
	$("#countryId").val(jsonObject.country_Id);
	$("#stateId").val(jsonObject.state_Id);
	$("#districtId").val(jsonObject.district_Id);
	$("#addrLine1").val(jsonObject.addr_Line1);
	$("#addrLine2").val(jsonObject.addr_Line2);
	$("#pinCode").val(jsonObject.pin_Code);
	$("#currentStatus").val(jsonObject.curnt_Status);
	$("#panTan").val(jsonObject.pan_Tan);
	$("#phoneLand").val(jsonObject.phone_Land);
	$("#phoneMobile").val(jsonObject.phone_Mobile);
	$("#alternatePhone").val(jsonObject.alternate_Phone);
	$("#website").val(jsonObject.website);
	$("#emailId").val(jsonObject.email_Id);
	$("#alternateEmail").val(jsonObject.alternate_Email_Id);
	$("#fax").val(jsonObject.fax);
	$("#createdDate").val(newCreated_Date);
	$("#profileCompleteness").val(jsonObject.profile_Completeness);
}

$(document).on('click', "#corporateContractPdfButton", function() {
	var contractInfo = [];
	contractInfo.push($("#Contract_Id").val());
	contractInfo.push($("#client_id").text());
	ajaxcontractpdfdownload('/downloadContractPdf/' + contractInfo);
});

function ajaxcontractpdfdownload(url) {
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

$(document).on('click', "#ClientDashboard", function() {
	$(".modal-backdrop").remove();
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/Dashboard/" + client_id);
});

$(document).on('click', "#CounselDashboard", function() {
	$(".modal-backdrop").remove();
	var user_id = $("#user_id").text();
	ajaxPost("NoForm", "/Dashboard/" + user_id);
});

$(document).on('click', "#AdminDashboard", function() {
	$(".modal-backdrop").remove();
	var user_id = $("#user_id").text();
	ajaxPost("NoForm", "/Dashboard/" + user_id);
});

$(document).on('click', "#Dashboard", function() {
	$(".modal-backdrop").remove();
	var id=null;
	id = $("#client_id").text();
	if (id.slice(0, 1)=='C')
		{
		ajaxPost("NoForm", "/Dashboard/" + id);
		}
	else {
		id = $("#user_id").text();
		if (id.slice(0, 1)=='U')
		{
		ajaxPost("NoForm", "/Dashboard/" + id);
		}
		else {		
			window.location.href = "";
			}
	}
});

/*$(document).on('click', "#RefreshRequest", function() {
	alert("RefreshRequest");
	$(".modal-backdrop").remove();
	var id=null;
	id = $("#client_id").text();
	var val=id.slice(0, 1);
	if (id.slice(0, 1)=='C')
		
		{
		ajaxPost("NoForm", "/Dashboard/" + id);
		}
	else {
		id = $("#user_id").text();
		if (id.slice(0, 1)=='U')
		{
		ajaxPost("NoForm", "/Dashboard/" + id);
		}
		else {
			
			window.location.href = "";
			}
	}
});*/

function loadServiceRateChartTable(url, jsonObject) {
	$("#servicetable").dataTable().fnDestroy();
	$("#servicetable")
			.dataTable(
					{
						dom: 'lBfrtip',
				        buttons: [
				        ],
						"bProcessing" : true,
						"sort" : "position",
						"bStateSave" : false,
						"iDisplayLength" : 5,
						"iDisplayStart" : 0,
						"aaData" : jsonObject,
						"aoColumns" : [
								{
									"mData" : null,
									render : function(data, type, full, meta) {
										return '<input type="checkbox"  onclick="getService()" value="'
												+ data.service + '">';
									}
								},
								{
									"data" : null,
									"bSortable" : false,
									"mRender" : function(data, type, full, meta) {
										return data.service
									}
								},
								{
									"data" : null,
									"bSortable" : false,
									"mRender" : function(data, type, full,
											meta, row) {
										return "Base Rate " + data.baseRate
												+ "\nService Tax "
												+ data.serviceTax + "%"
												+ "\nCess " + data.cess + "%"
												+ "\nDiscount " + data.discount
												+ "%"
									}
								},

								{
									"mData" : "rate"
								}, {
									"mData" : "term"
								}, ]
					});
}

$(document).on('click', "#inReviewContract", function() {
	ajaxPost("NoForm", "/inReviewContractAdmin.web");
});

function loadInReviewContractAdminTable(url, jsonObject) {
	if(jsonObject.length==0){
		$("#hiddenNoValPopUpModal").click();
		}
	else{
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#contracttable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
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
					});
}
}

$(document).on('click', "#inReviewContractClient", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/inReviewContractClient.web/" + client_id);
});

function loadInReviewContractClientTable(url, jsonObject) {
	if(jsonObject.length==0){
		$("#hiddenNoValPopUpModal").click();
		}
	else{
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#contractclienttable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
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
}

$(document).on(
		'click',
		"#inReviewContractClientButton",
		function() {
			var contract_id = $("#selectedContractDetailsModal").find(
					'input[name="contract_Id"]').val();
			$(".modal-backdrop").remove();
			$("#selectedContractDetailsModal").hide();
			ajaxPost("NoForm", "/getcontractdetailsbyid/" + contract_id);
		});

function getContractDetails(ids) {
	var id=ids.split(",");
	ajaxPost("NoForm", "/showContractDetails.web/" + id[1]);
}

function loadSelectedReviewContractDetailsTable(url, jsonObject) {
	$('#displayContractModalButton').click();
	if(jsonObject.status=="InProgress"){
		document.getElementById("inProgressContrcatFooterDiv").style.display = "block";
		document.getElementById("inReviewFooterAdminDiv").style.display = "none";
		document.getElementById("inReviewFooterClientDiv").style.display = "none";
	}
	else{
	if( $('#user_id').length )        // use this if you are using id to check
	{
		document.getElementById("inReviewFooterAdminDiv").style.display = "block";
		document.getElementById("inReviewFooterClientDiv").style.display = "none";
		document.getElementById("inProgressContrcatFooterDiv").style.display = "none";
	}
	else  
	{
		document.getElementById("inReviewFooterClientDiv").style.display = "block";
		document.getElementById("inReviewFooterAdminDiv").style.display = "none";
		document.getElementById("inProgressContrcatFooterDiv").style.display = "none";
	}
	}
	$("#CompanyName").val(jsonObject.company_Name);
	$("#CompanyAddress").val(jsonObject.company_Address);
	$("#DirectorFname").val(jsonObject.director_Fname);
	$("#DirectorLname").val(jsonObject.director_Lname);
	$("#PhoneLandNumber").val(jsonObject.phone_Number);
	$("#FirstName").val(jsonObject.first_Name);
	$("#LastName").val(jsonObject.last_Name);
	$("#EMail").val(jsonObject.email_Id);
	$("#PhoneNumber").val(jsonObject.phone_Mobile);

	$("#Contract_Id").val(jsonObject.contract_Id);
	$("#Corporate_BriefDescription").val(jsonObject.contract_BriefDescription);
	$("#PaymentTerm").val(jsonObject.payment_Term);
	$("#PaymentMethod").val(jsonObject.payment_Method);
	$("#ContractCreationDate").val(jsonObject.contract_Creation_Date);
	$("#ContractStartDate").val(jsonObject.contract_Start_Date);
	$("#ContractEndDate").val(jsonObject.contract_End_Date);
	getSelectedServiceDetails(jsonObject.corporate_Service,
			jsonObject.payment_Term);
}

function getSelectedServiceDetails(Services, Term) {
	var contractParam = [];
	contractParam.push(Services);
	contractParam.push(Term);
	      $.ajax({
				url : '/LegalBell' + '/getServicesDetails',
				method : 'POST',
				data : {
					Value : contractParam,
				},
				success : function(response) {
					var len = response.result.length;
					var txt = "";
					var total=null;
					$("#contractServiceDetails").html("");
					if (len > 0) {
						txt += "<tr><th><b>Sl.No</b></th><th><b>Service Description</b></th><th><b>Base Rate</b></th><th><b>Cess</b></th><th><b>Discount</b></th><th><b>Service Tax</b></th><th><b>Total</b></th></tr>"
							txt += "<tr><td><input type='hidden' name='sl_No' value='0'</td><td><input type='hidden' name='service' value='default'</td><td><input type='hidden' name='base_Rate' value='0'</td><td><input type='hidden' name='cess' value='0'</td><td><input type='hidden' name='discount' value='0'</td><td><input type='hidden' name='service_Tax' value='0'</td><td><input type='hidden' name='rate' value='0'</td></tr>"

						for (var i = 0; i < len; i++) {
							txt += "<tr><td><input type='text' name='sl_No' size='3' readonly='readonly' value="
									+ (i + 1)
									+ "></td><td><input type='text' name='service' readonly='readonly' size='30' value="
									+ response.result[i].service
									+ "></td><td><input type='text' name='base_Rate' readonly='readonly' size='8' value="
									+ response.result[i].baseRate
									+ "></td><td><input type='text' name='cess' readonly='readonly' size='5' value="
									+ response.result[i].cess
									+ "></td><td><input type='text' name='discount' readonly='readonly' size='8' value="
									+ response.result[i].discount
									+ "></td><td><input type='text' name='service_Tax' readonly='readonly' size='8' value="
									+ response.result[i].serviceTax
									+ "></td><td><input type='text' name='rate' readonly='readonly' size='10' value="
									+ response.result[i].rate + "></td></tr>"
								total=(total+response.result[i].rate);
						}
						txt += "<tr><td></td><td></td><td></td><td></td><td></td><th><b>Gross Total</b></th><td><input type='text' name='gtotal' size='10' readonly='readonly' value="
									+ total
									+ "></td></tr>"						
						$("#contractServiceDetails").append(txt);
					}
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}

$(document).on(
		'click',
		"#contractActivateButton",
		function() {
			var contract_id = $("#selectedContractDetailsModal").find(
					'input[name="contract_Id"]').val();
			$(".modal-backdrop").remove();
			$("#selectedContractDetailsModal").hide();
			ajaxPost("NoForm", "/activateContractStatus/" + contract_id);
		});

$(document).on(
		'click',
		"#contractSuggestionButton",
		function() {
			var contract_id = $("#selectedContractDetailsModal").find(
					'input[name="contract_Id"]').val();
			$('#displayTextModalButton').click();
			$("#sendContractRevisedSuggestionModal").find(
					'input[name="contract_Id"]').val(contract_id);
			$("#sendContractRevisedSuggestionModal").find(
			'textarea[name="contract_BriefDescription"]').val("");
		});

$(document).on(
		'click',
		"#sendContractSuggestionMailButton",
		function() {
			if ($("#sendContractRevisedSuggestionModal").find(
					'textarea[name="contract_BriefDescription"]').val() != "") {
				var contractSuggestion = [];
				contractSuggestion
						.push($("#sendContractRevisedSuggestionModal").find(
								'input[name="contract_Id"]').val());
				contractSuggestion
						.push($("#sendContractRevisedSuggestionModal").find(
								'textarea[name="contract_BriefDescription"]')
								.val());
				$(".modal-backdrop").remove();
				$("#sendContractRevisedSuggestionModal").hide();
				$("#selectedContractDetailsModal").hide();
				ajaxPost("NoForm", "/inReviewContractStatus/"
						+ contractSuggestion);
			} else {
				$("#sendContractRevisedSuggestionModal").find(
						'span[id="contractRevisedSuggestionSpan"]').text(
						"Please Enter Some Mail Description.");
			}
		});

$(document).on('click', "#inProgressContractAdminMenu", function() {
	ajaxPost("NoForm", "/inProgressContract.web");
});

function loadInProgressContractAdminTable(url, jsonObject) {
	if(jsonObject.length==0){
		$("#hiddenNoValPopUpModal").click();
		}
	else{
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#contracttable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
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
}

$(document).on('click', "#estimateGeneration", function() {
	var user_id = $("#user_id").text();
	ajaxPost("NoForm", "/estimateDetails/" + user_id);
});

function generateFeeQuote(serviceid) {
	var multipleId = serviceid.split(",");
	multipleId[2]=$("#user_id").text();
	ajaxPost("NoForm", "/feeQuoteDetails/"+ multipleId);
}


$(document).on('click', "#advanceInvoice", function() {
	if(document.getElementById('accept').checked) {
		ajaxPost("createAdvanceInvoiceForm", "/createAdvanceInvoice");
	} else {
	    $("#checkspan").text("Please accept");
	}
	
});


$(document).on('click',"#payAdvanceInvoice", function(){
	var serId = $("#serviceId").text();
	var invId = $("#invoiceId").text();
	var user_id = $("#clientId").text();
	var str=serId+","+invId+","+user_id;
	invoicePayment(str);
});


$(document).on('click', "#invoiceDetails", function() {
	var user_id = $("#user_id").text();
	var service = $("#InvoiceFor").val();
	var Info = [];
	Info.push(user_id);
	Info.push(service);
	ajaxPost("NoForm", "/clientInvoiceDetails/" + Info);
});

$(document).on('click', "#closureDetails", function() {
	var user_id = $("#user_id").text();
	var service = $("#ServiceClosureFor").val();
	var Info = [];
	Info.push(user_id);
	Info.push(service);
	ajaxPost("NoForm", "/caseDetails/" + Info);
});

$(document).on('click', "#draftDetails", function() {
	var user_id = $("#user_id").text();
	var service = $("#DraftFor").val();
	var Info = [];
	Info.push(user_id);
	Info.push(service);
	ajaxPost("NoForm", "/clientDraftDetails/" + Info);
});

function changeDraftFor(Optionid,target) {
	var optionvalue = document.getElementById(Optionid).value;
	$("#"+target).val(optionvalue);
}

function loadQuotationPage(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load(
			"/LegalBell/html/contentPages/" + url + ".html",
			function() {				
				$("#autoSgstclienNameId").val(
						jsonObject.estimateGenerateBean.clientNameList);
				$("#pageId").val(jsonObject.estimateGenerateBean.type);
				$("#lawer").val(jsonObject.estimateGenerateBean.lawerId);
				custName = new Array;
				custName = $("#autoSgstclienNameId").val().split(',');
				$('#clientNameTextBoxId').autocomplete({
					source : custName,
				});
			});
}

function loadInvoicePage(url, jsonObject) {
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

$(document).on('click', "#cancelEstimateButton", function() {
	var user_id = $("#user_id").text();
	ajaxPost("NoForm", "/estimateDetails/" + user_id);
});

$(document).on('click', "#cancelInvoiceButton", function() {
	var user_id = $("#user_id").text();
	ajaxPost("NoForm", "/clientInvoiceDetails/" + user_id);
});

$(document)
		.on(
				'click',
				"#submitEstimateButton",
				function() {
					var jsonData = '';
					jsonData = JSON.stringify($('#createEstimationForm')
							.serializeFormJSON());
					if (document.getElementById("clientNameTextBoxId").value == "") {
						document.getElementById("clientSpan").textContent = "*Please choose a Client Name.";
					} else if (document.getElementById("clientNameId").value == "") {
						document.getElementById("clientNameSpan").textContent = "*Please enter your name.";
					} else if (document.getElementById("clientPhoneId").value == "") {
						document.getElementById("clientPhoneSpan").textContent = "*Please enter you phone number.";
					} else if (document.getElementById("clientEmailId").value == "") {
						document.getElementById("clientEmailSpan").textContent = "*Please enter your client email.";
					} else if (document.getElementById("case").value == "") {
						document.getElementById("caseIdSpan").textContent = "*Please choose your case id.";
					} else if (document.getElementById("netTotal").value == "" || document.getElementById("netTotal").value == "0.00") {
						document.getElementById("TaskDetailsSpan").textContent = "*Please prepare task decription well.";
					} else if (document.getElementById("quotaion_Notes").value == "") {
						document.getElementById("quotaion_NotesSpan").textContent = "*Please enter some notes.";
					} else if (document.getElementById("terms_Condition").value == "") {
						document.getElementById("terms_ConditionSpan").textContent = "*Please fill up terms and conditions.";
					} else {
						ajaxPost("createEstimationForm",
								"/submitEstimateDetails");
					}
				});

function EstimationSubmit() {
	document.getElementById("clientSpan").textContent = "";
	document.getElementById("clientNameSpan").textContent = "";
	document.getElementById("clientPhoneSpan").textContent = "";
	document.getElementById("clientEmailSpan").textContent = "";
	document.getElementById("caseIdSpan").textContent = "";
	document.getElementById("quotaion_NotesSpan").textContent = "";
	document.getElementById("terms_ConditionSpan").textContent = "";
}

$(document)
.on(
		'click',
		"#submitFeeQuoteButton",
		function() {
			var jsonData = '';
			jsonData = JSON.stringify($('#createFeeQuoteForm')
					.serializeFormJSON());
			if (document.getElementById("clientNameId").value == "") {
				document.getElementById("clientNameSpan").textContent = "*name should not be blank.";
			} else if (document.getElementById("clientPhoneId").value == "") {
				document.getElementById("clientPhoneSpan").textContent = "*phone number should not be blank.";
			} else if (document.getElementById("clientEmailId").value == "") {
				document.getElementById("clientEmailSpan").textContent = "*client email should not be blank.";
			} else if (document.getElementById("serviceId").value == "") {
				document.getElementById("serviceIdSpan").textContent = "*service should not be blank.";
			} else if (document.getElementById("netTotal").value == "" || document.getElementById("netTotal").value == "0.00") {
				document.getElementById("TaskDetailsSpan").textContent = "*Please prepare task decription well.";
			} else if (document.getElementById("quotaion_Notes").value == "") {
				document.getElementById("quotaion_NotesSpan").textContent = "*Please enter some notes.";
			} else if (document.getElementById("terms_Condition").value == "") {
				document.getElementById("terms_ConditionSpan").textContent = "*Please fill up terms and conditions.";
			} else {
				ajaxPost("createFeeQuoteForm",
						"/submitFeeQuoteDetails");
			}
		});

function FeeQuoteSubmit() {
	document.getElementById("clientNameSpan").textContent = "";
	document.getElementById("clientPhoneSpan").textContent = "";
	document.getElementById("clientEmailSpan").textContent = "";
	document.getElementById("serviceIdSpan").textContent = "";
	document.getElementById("quotaion_NotesSpan").textContent = "";
	document.getElementById("terms_ConditionSpan").textContent = "";
}

function populateQuotation(url, quotationData) {
	$("#contentPage").load(
			"/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$.each(quotationData, function(name, val) {
					var $el = $('[id="' + name + '"]');
					$el.html("");
					$el.html(val);
				});
				$("#creatorName").html("");
				$("#creatorName").html($("#username").text());
				$("#clientId").val(quotationData.clientId);
				$("#serviceID").val(quotationData.serviceId);
				$("#quotationID").val(quotationData.quotationId);
				var qlen = quotationData.quoteParticulars.length;
				var txt = "";
				var txt1 = "";
				if (qlen > 0) {
					for (var i = 0; i < qlen; i++) {
						txt += "<tr><td>" + (i+1) + "</td><td>"
								+ quotationData.quoteParticulars[i] + "</td><td>"
								+ quotationData.quoteRate[i] + "</td></tr>"
					}
					$("#quoteDetails").append(txt);
				}
				var ilen = quotationData.invoiceParticulars.length;
				if (ilen > 0) {
					for (var i = 0; i < ilen; i++) {
						txt1 += "<tr><td>" + (i+1) + "</td><td>"
								+ quotationData.invoiceParticulars[i] + "</td><td>"
								+ quotationData.invoiceRate[i] + "</td></tr>"
					}
					$("#advanceDetails").append(txt1);
				}
			});
}

$(document)
		.on(
				'click',
				"#submitInvoiceButton",
				function() {
					var jsonData = '';
					jsonData = JSON.stringify($('#createInvoiceForm')
							.serializeFormJSON());
					if (document.getElementById("clientNameTextBoxId").value == "") {
						document.getElementById("clientSpan").textContent = "*Please choose a Client Name.";
					} else if (document.getElementById("clientNameId").value == "") {
						document.getElementById("clientNameSpan").textContent = "*Please enter your name.";
					} else if (document.getElementById("clientPhoneId").value == "") {
						document.getElementById("clientPhoneSpan").textContent = "*Please enter you phone number.";
					} else if (document.getElementById("clientEmailId").value == "") {
						document.getElementById("clientEmailSpan").textContent = "*Please enter your client email.";
					} else if (document.getElementById("case").value == "") {
						document.getElementById("caseIdSpan").textContent = "*Please choose your case id.";
					}else if (document.getElementById("netTotal").value == "" || document.getElementById("netTotal").value == "0.00") {
						document.getElementById("TaskDetailsSpan").textContent = "*There are no tasks to create invoice.";
					}else if (document.getElementById("Invoice_Due_Date").value == "") {
						document.getElementById("dueDateSpan").textContent = "*Please choose due date.";
					} else if (document.getElementById("quotaion_Notes").value == "") {
						document.getElementById("quotaion_NotesSpan").textContent = "*Please enter some notes.";
					} else if (document.getElementById("terms_Condition").value == "") {
						document.getElementById("terms_ConditionSpan").textContent = "*Please fill up terms and conditions.";
					} else {
						ajaxPost("createInvoiceForm", "/createOrder");
					}
				});


$(document)
.on(
		'click',
		"#submitDraftButton",
		function() {
			var jsonData = '';
			jsonData = JSON.stringify($('#createDraftForm')
					.serializeFormJSON());
			if (document.getElementById("clientNameTextBoxId").value == "") {
				document.getElementById("clientSpan").textContent = "*Please choose a Client Name.";
			} else if (document.getElementById("clientNameId").value == "") {
				document.getElementById("clientNameSpan").textContent = "*Please enter your name.";
			} else if (document.getElementById("clientPhoneId").value == "") {
				document.getElementById("clientPhoneSpan").textContent = "*Please enter you phone number.";
			} else if (document.getElementById("clientEmailId").value == "") {
				document.getElementById("clientEmailSpan").textContent = "*Please enter your client email.";
			} else if (document.getElementById("case").value == "") {
				document.getElementById("caseIdSpan").textContent = "*Please choose your case id.";
			}else if (document.getElementById("netTotal").value == "" || document.getElementById("netTotal").value == "0.00") {
				document.getElementById("TaskDetailsSpan").textContent = "*There are no tasks to create invoice.";
			}else if (document.getElementById("Draft_Due_Date").value == "") {
				document.getElementById("dueDateSpan").textContent = "*Please choose due date.";
			} else if (document.getElementById("quotaion_Notes").value == "") {
				document.getElementById("quotaion_NotesSpan").textContent = "*Please enter some notes.";
			} else if (document.getElementById("terms_Condition").value == "") {
				document.getElementById("terms_ConditionSpan").textContent = "*Please fill up terms and conditions.";
			} else {
				ajaxPost("createDraftForm", "/createDraft");
			}
		});

function InvoiceSubmit() {
	document.getElementById("clientSpan").textContent = "";
	document.getElementById("clientNameSpan").textContent = "";
	document.getElementById("clientPhoneSpan").textContent = "";
	document.getElementById("clientEmailSpan").textContent = "";
	document.getElementById("caseIdSpan").textContent = "";
	document.getElementById("quotaion_NotesSpan").textContent = "";
	document.getElementById("terms_ConditionSpan").textContent = "";
}

function populateInvoice(url, invoiceData) {
	$("#contentPage").load(
			"/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$.each(invoiceData, function(name, val) {
					var $el = $('[id="' + name + '"]');
					$el.html("");
					$el.html(val);
				});
				$("#lawerName").html("");
				$("#lawerName").html($("#username").text());
				$("#clientId").val(invoiceData.clientId);
				$("#caseID").val(invoiceData.caseID);
				$("#invoiceID").val(invoiceData.invoiceId);
				var len = invoiceData.slNo.length;
				var txt = "";
				if (len > 0) {
					for (var i = 0; i < len; i++) {
						txt += "<tr><td>" + invoiceData.slNo[i] + "</td><td>"
								+ invoiceData.description[i] + "</td><td>"
								+ invoiceData.rate[i] + "</td><td>"
								+ invoiceData.qty[i] + "</td><td>"
								+ invoiceData.total[i] + "</td></tr>";
					}
					$("#taskDetails").append(txt);
				}
			});
}

function populateDraft(url, invoiceData) {
	$("#contentPage").load(
			"/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$.each(invoiceData, function(name, val) {
					var $el = $('[id="' + name + '"]');
					$el.html("");
					$el.html(val);
				});
				$("#lawerName").html("");
				$("#lawerName").html($("#username").text());
				$("#clientId").val(invoiceData.clientId);
				$("#caseID").val(invoiceData.caseID);
				$("#draftID").val(invoiceData.draftId);
				var len = invoiceData.slNo.length;
				var txt = "";
				if (len > 0) {
					for (var i = 0; i < len; i++) {
						txt += "<tr><td>" + invoiceData.slNo[i] + "</td><td>"
								+ invoiceData.description[i] + "</td><td>"
								+ invoiceData.rate[i] + "</td><td>"
								+ invoiceData.qty[i] + "</td><td>"
								+ invoiceData.total[i] + "</td></tr>";
					}
					$("#taskDetails").append(txt);
				}
			});
}

function invoicepdfdownload(url) {
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

function quotationpdfdownload(url) {
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

function loadContractReviewPage(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$.each(jsonObject, function(name, val) {
					var $el = $('[name="' + name + '"]');
					$el.val(val);
				});
				var client=jsonObject.client_Id.split("-");
				$("#Client").val(client[1]);
				$("#ClientId").val(client[0]);
			});
	getSelectedServiceDetails(jsonObject.corporate_Service,
			jsonObject.payment_Term);
}

$(document).on('click', "#addServiceButton", function() {
	var term = $("#hiddenPaymentTerm").val();
	ajaxPost('NoForm', '/corporateServiceRateChart.web/' + term);
	document.getElementById("addServiceTableDiv").style.display = "block";
});

function loadSelectedServiceRateChartTable(url, jsonObject) {
	var services = jsonObject.contractDetails.corporate_Service;
	var hiddenValues = services.split(" ");
	var renderServicesArray = [];
	for (var i = 0; i < jsonObject.aaData.length; i++) {
		var indexPos = [];
		for (var j = 1; j < hiddenValues.length; j++) {
			indexPos
					.push(jsonObject.aaData[i].service.indexOf(hiddenValues[j]));
		}
		for (var k = 0; k < indexPos.length; k++) {
			if (indexPos.indexOf(k) != -1) {
				renderServicesArray.push(jsonObject.aaData[i]);
			}
		}
	}
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#selectedservicetable").dataTable().fnDestroy();
						$("#selectedservicetable")
								.dataTable(
										{
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : renderServicesArray,
											"aoColumns" : [
													{
														"mData" : null,
														render : function(data,
																type, full,
																meta) {
															return '<input type="checkbox"  onclick="getService()"  checked="checked" value="'
																	+ data.service
																	+ '">';
														}
													},
													{
														"data" : null,
														"bSortable" : false,
														"mRender" : function(
																data, type,
																full, meta) {
															return data.service
														}
													},
													{
														"data" : null,
														"bSortable" : false,
														"mRender" : function(
																data, type,
																full, meta, row) {
															return "Base Rate "
																	+ data.baseRate
																	+ "\nService Tax "
																	+ data.serviceTax
																	+ "%"
																	+ "\nCess "
																	+ data.cess
																	+ "%"
																	+ "\nDiscount "
																	+ data.discount
																	+ "%"
														}
													},

													{
														"mData" : "rate"
													}, {
														"mData" : "term"
													} ]
										});
						$.each(jsonObject.contractDetails, function(name, val) {
							var $el = $('[name="' + name + '"]');
							$el.val(val);
						});
						var client=jsonObject.contractDetails.client_Id.split("-");
						$("#Client").val(client[1]);
						if(jsonObject.contractDetails.contract_Status=="InReview"){
							document.getElementById("dropDownDiv").style.display = "block";
							getCorporateDetails();
						}
						else{
							document.getElementById("hiddenTextDiv").style.display = "block";
						}
					});
}
$(document)
		.on(
				'click',
				"#createTaskDescriptionLink",
				function() {
					$(".modal-backdrop").remove();
					$("#contentPage")
							.load(
									"/LegalBell/html/contentPages/CreateLawyerTaskDescription.html",
									function() {
										$("#LawyerId")
												.val($("#user_id").text());
										$("#newTask tr:gt(4)").remove();
									});

				});

$(document)
		.on(
				'click',
				"#createTaskDescriptionButton",
				function() {
					if (document.getElementById("TaskDescription").value == "") {
						document.getElementById("taskdescriptionspan").textContent = "*Please insert atleast one task description.";
					} else if (document.getElementById("TaskRate").value == "") {
						document.getElementById("taskdescriptionspan").textContent = "*Please insert rate of task.";
					} else
						ajaxPost('createTaskDescriptionForm',
								'/createTaskDescription');

				});

function loadDueInvoicesClientTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#dueInvoiceTable').dataTable().fnDestroy();
						$("#dueInvoiceTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : "item_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
													"mData" : null,
													render : function(data, type, full, meta) {
													var invoice_Due_Date=new Date(data.invoice_Due_Date);
													var newInvoice_Due_Date=invoice_Due_Date.getFullYear() + '-'
													+( invoice_Due_Date.getMonth() + 1) + '-'
													+ invoice_Due_Date.getDate();
													return newInvoice_Due_Date;
													}
											        },
											        {
														"mData" : "invoice_Gross_Amount"
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="Download" onclick="getInvoicePdf(this.id)">';
																								}
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="Click Here" onclick="invoicePayment(this.id)">';
																								}
													}
											]
										});
					});
}

function loadNewQuotationClientTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#newQuotationTable').dataTable().fnDestroy();
						$("#newQuotationTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "quotation_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var quotation_Date=new Date(data.quotation_Date);
														var newQuotation_Date=quotation_Date.getFullYear() + '-'
														+( quotation_Date.getMonth() + 1) + '-'
														+ quotation_Date.getDate();
														return newQuotation_Date;
														}
													},
													{
														"mData" : "service_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var quotation_Date=new Date(data.quotation_Date);
														var newQuotation_Date=quotation_Date.getFullYear() + '-'
														+( quotation_Date.getMonth() + 1) + '-'
														+ quotation_Date.getDate();
														return newQuotation_Date;
														}
													},
											        {
														"mData" : "quotation_Gross_Amount"
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.service_Id+","+data.service_Id+","+data.client_Id+ '"value="Download" onclick="getInvoicePdf(this.id)">';
																								}
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.service_Id+","+data.quotation_Id+","+data.client_Id+ '"value="Click Here" onclick="acceptFeeQuote(this.id)">';
																								}
													}
											]
										});
					});
}


function acceptFeeQuote(params){
	var paramsArray = params.split(",");
	ajaxPost('NoForm', '/acceptFeeQuote/' + paramsArray);
}

function loadClosedInvoicesClientTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#closedInvoiceTable').dataTable().fnDestroy();
						$("#closedInvoiceTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : "item_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Clear_Date=new Date(data.invoice_Clear_Date);
														var newInvoice_Clear_Date=invoice_Clear_Date.getFullYear() + '-'
														+( invoice_Clear_Date.getMonth() + 1) + '-'
														+ invoice_Clear_Date.getDate();
														return newInvoice_Clear_Date;
														}
												    },
												    {
														"mData" : "invoice_Gross_Amount"
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="download" onclick="getInvoicePdf(this.id)">';
																								}
													}

											]
										});
					});
}

function loadClosedQuotationClientTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#closedQuotationTable').dataTable().fnDestroy();
						$("#closedQuotationTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "quotation_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var quotation_Date=new Date(data.quotation_Date);
														var newQuotation_Date=quotation_Date.getFullYear() + '-'
														+( quotation_Date.getMonth() + 1) + '-'
														+ quotation_Date.getDate();
														return newQuotation_Date;
														}
													},
													{
														"mData" : "service_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var quotation_Date=new Date(data.quotation_Date);
														var newQuotation_Date=quotation_Date.getFullYear() + '-'
														+( quotation_Date.getMonth() + 1) + '-'
														+ quotation_Date.getDate();
														return newQuotation_Date;
														}
													},
												    {
														"mData" : "quotation_Gross_Amount"
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.service_Id+","+data.quotation_Id+","+data.client_Id+ '"value="download" onclick="getInvoicePdf(this.id)">';
																								}
													}

											]
										});
					});
}

function loadDueInvoicesAdminTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#dueInvoiceTable').dataTable().fnDestroy();
						$("#dueInvoiceTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : "item_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Due_Date=new Date(data.invoice_Due_Date);
														var newInvoice_Due_Date=invoice_Due_Date.getFullYear() + '-'
														+( invoice_Due_Date.getMonth() + 1) + '-'
														+ invoice_Due_Date.getDate();
														return newInvoice_Due_Date;
														}
												        },
												       {
														"mData" : "invoice_Gross_Amount"
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="download" onclick="getInvoicePdf(this.id)">';
																								}
													}

											]
										});
					});
}

function loadClosedInvoicesAdminTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#closedInvoicetable').dataTable().fnDestroy();
						$("#closedInvoicetable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : "item_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Clear_Date=new Date(data.invoice_Clear_Date);
														var newInvoice_Clear_Date=invoice_Clear_Date.getFullYear() + '-'
														+( invoice_Clear_Date.getMonth() + 1) + '-'
														+ invoice_Clear_Date.getDate();
														return newInvoice_Clear_Date;
														}
												    },
												    {
														"mData" : "invoice_Gross_Amount"
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="download" onclick="getInvoicePdf(this.id)">';
																								}
													}

											]
										});
					});
}

$(document).on('click', "#newDraftAdmin", function() {
	var value = $("#newDraftAdmin").text().split(" ");
	var dueInvoicesLawyerNumber = value[value.length-1];
	if(dueInvoicesLawyerNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var admin_id = $("#user_id").text();
	ajaxPost('NoForm', '/newDraftDetailsAdmin.web/'+admin_id);
	}
});

function loadNewDraftAdminTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#newDraftAdminTable').dataTable().fnDestroy();
						$("#newDraftAdminTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : "item_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Due_Date=new Date(data.invoice_Due_Date);
														var newInvoice_Due_Date=invoice_Due_Date.getFullYear() + '-'
														+( invoice_Due_Date.getMonth() + 1) + '-'
														+ invoice_Due_Date.getDate();
														return newInvoice_Due_Date;
														}
												   },
												   {
														"mData" : "invoice_Gross_Amount"
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="download" onclick="getInvoicePdf(this.id)">';
																								}
													},
													{
														"mData" : null,
														render : function(
																data, type,
																full, meta) {
															return '<input type="checkbox" name="draft_Id" id="cbox2" value="'+ data.invoice_Id +'">';
														}
													}

											]
										});
					});
}

$(document).on('click', "#activateDraftButton", function() {
	var checkboxValues = [];
	checkboxValues.push($("#user_id").text());
	if(($("input[type='checkbox'][name='draft_Id']:checked").length > 0)){
	$('input:checkbox[name=draft_Id]').each(function() {
		if ($(this).is(':checked')) {
			checkboxValues.push($(this).val());
		}
	});
	ajaxPost("NoForm", "/activatedraft/" + checkboxValues);
	}else{
		$("#newDraftAdminSpan").text("Please Select atleast one Draft to activate");
		checkboxValues.push($(this).val());
	}
});

$(document).on('click', "#newDraftLawyer", function() {
	var value = $("#newDraftLawyer").text().split(" ");
	var dueInvoicesLawyerNumber = value[value.length-1];
	if(dueInvoicesLawyerNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var lawyer_id = $("#user_id").text();
	ajaxPost('NoForm', '/newDraftDetailsLawyer.web/'+lawyer_id);
	}
});

function loadNewDraftLawyerTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#dueInvoiceTable').dataTable().fnDestroy();
						$("#dueInvoiceTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : "item_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Due_Date=new Date(data.invoice_Due_Date);
														var newInvoice_Due_Date=invoice_Due_Date.getFullYear() + '-'
														+( invoice_Due_Date.getMonth() + 1) + '-'
														+ invoice_Due_Date.getDate();
														return newInvoice_Due_Date;
														}
												   },
												   {
														"mData" : "invoice_Gross_Amount"
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="download" onclick="getInvoicePdf(this.id)">';
																								}
													}

											]
										});
					});
}

function loadApprovedDraftLawyerTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#dueInvoiceTable').dataTable().fnDestroy();
						$("#dueInvoiceTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : "item_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Due_Date=new Date(data.invoice_Due_Date);
														var newInvoice_Due_Date=invoice_Due_Date.getFullYear() + '-'
														+( invoice_Due_Date.getMonth() + 1) + '-'
														+ invoice_Due_Date.getDate();
														return newInvoice_Due_Date;
														}
												   },
												   {
														"mData" : "invoice_Gross_Amount"
													},
													
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="download" onclick="getInvoicePdf(this.id)">';
																								}
													}

											]
										});
					});
}

function loadApprovedDraftAdminTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#approvedDraftAdminTable').dataTable().fnDestroy();
						$("#approvedDraftAdminTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : "item_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Due_Date=new Date(data.invoice_Due_Date);
														var newInvoice_Due_Date=invoice_Due_Date.getFullYear() + '-'
														+( invoice_Due_Date.getMonth() + 1) + '-'
														+ invoice_Due_Date.getDate();
														return newInvoice_Due_Date;
														}
												   },
												   {
														"mData" : "invoice_Gross_Amount"
													},
													
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="download" onclick="getInvoicePdf(this.id)">';
																								}
													}

											]
										});
					});
}

$(document).on('click', "#inReviewDraftAdmin", function() {
	var value = $("#inReviewDraftAdmin").text().split(" ");
	var closedInvoicesLawyerNumber = value[value.length-1];
	if(closedInvoicesLawyerNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var admin_id = $("#user_id").text();
	ajaxPost('NoForm', '/progressDraftAdmin.web/'+admin_id);
	}
});

function loadInReviewDraftAdminTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#inReviewDraftAdminTable').dataTable().fnDestroy();			
						$("#inReviewDraftAdminTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : "item_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Clear_Date=new Date(data.invoice_Clear_Date);
														var newInvoice_Clear_Date=invoice_Clear_Date.getFullYear() + '-'
														+( invoice_Clear_Date.getMonth() + 1) + '-'
														+ invoice_Clear_Date.getDate();
														return newInvoice_Clear_Date;
														}
												    },
												    {
														"mData" : "invoice_Gross_Amount"
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="download" onclick="getInvoicePdf(this.id)">';
																								}
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="cancel" onclick="">';
																								}
													},
													{
														"mData" : null,
														render : function(
																data, type,
																full, meta) {
															return '<input type="checkbox" name="draft_Id" id="cbox2" value="'+ data.invoice_Id +'">';
														}
													}

											]
										});
					});
}

$(document).on('click', "#approveDraftButton", function() {
	var checkboxValues = [];
	checkboxValues.push($("#user_id").text());
	if(($("input[type='checkbox'][name='draft_Id']:checked").length > 0)){
	$('input:checkbox[name=draft_Id]').each(function() {
		if ($(this).is(':checked')) {
			checkboxValues.push($(this).val());
		}
	});
	ajaxPost("NoForm", "/approvedraft/" + checkboxValues);
	}else{
		$("#inReviewDraftAdminSpan").text("Please Select atleast one Draft to activate");
		checkboxValues.push($(this).val());
	}
});

$(document).on('click', "#inReviewDraftLawyer", function() {
	var value = $("#inReviewDraftLawyer").text().split(" ");
	var closedInvoicesLawyerNumber = value[value.length-1];
	if(closedInvoicesLawyerNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var lawyer_id = $("#user_id").text();
	ajaxPost('NoForm', '/progressDraftLawyer.web/'+lawyer_id);
	}
});

function loadInReviewDraftLawyerTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#closedInvoiceTable').dataTable().fnDestroy();			
						$("#closedInvoiceTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : "item_Id"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Date=new Date(data.invoice_Date);
														var newInvoice_Date=invoice_Date.getFullYear() + '-'
														+( invoice_Date.getMonth() + 1) + '-'
														+ invoice_Date.getDate();
														return newInvoice_Date;
														}
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var invoice_Clear_Date=new Date(data.invoice_Clear_Date);
														var newInvoice_Clear_Date=invoice_Clear_Date.getFullYear() + '-'
														+( invoice_Clear_Date.getMonth() + 1) + '-'
														+ invoice_Clear_Date.getDate();
														return newInvoice_Clear_Date;
														}
												    },
												    {
														"mData" : "invoice_Gross_Amount"
													},
													{		"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" id="'+ data.item_Id+","+data.invoice_Id+","+data.client_Id+ '"value="download" onclick="getInvoicePdf(this.id)">';
																								}
													}

											]
										});
					});
}

function getInvoicePdf(multipleIds){
	var multipleID = multipleIds.split(",");
	var InvoicePdfInfo = [];
	InvoicePdfInfo.push(multipleID[1]);
	InvoicePdfInfo.push(multipleID[2]);
	InvoicePdfInfo.push(multipleID[0]);
	invoicepdfdownload('/getInvoicePDF/' + InvoicePdfInfo);
}

$(document).on('click',"#InviteLawyer",function() {
	$("#contentPage").load("/LegalBell/html/contentPages/InviteLawyer.html");
});

$(document).on('click',"#manageOldData",function() {
	$("#contentPage").load("/LegalBell/html/contentPages/UploadOldData.html");
});

function changeLawyerTypeValue(Optionid) {
	var lawyerType = document.getElementById(Optionid).value;
	$("#hiddenLawyerType").val(lawyerType);
}

function changeClientTypeValue(Optionid) {
	var clientType = document.getElementById(Optionid).value;
	$("#hiddenClientType").val(clientType);
}

$(document)
.on('click',
		"#createSlaLink",
		function() {
			$(".modal-backdrop").remove();
			$("#contentPage")
					.load(
							"/LegalBell/html/contentPages/AdminAddSlaDescription.html")
					loadExistingSlaList();		
							
		});

function loadExistingSlaList(){
	$.ajax({
		url : '/LegalBell' + '/getAllSlaList/'+'Existing',
		method : 'POST',
		success : function(response) {
			var jsonObject = response.result;
			var x = document.getElementById("SlaHour");
			for (var i = 0; i < jsonObject.length; i++) {
				for (var j = 0; j < x.length; j++) {
				if(jsonObject[i]==x.options[j].value){
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
$(document).on('click', "#updateSlaLink", function() {
	ajaxPost("NoForm", "/getAllSlaList/"+"Update");
});
function loadAllSlaList(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				var x = document.getElementById("Sla");
				for (var i = 0; i < jsonObject.length; i++) {
					var option = document.createElement("option");
					option.text = jsonObject[i];
					x.add(option);

				}
			});
}

function getSlaDescription(id,tableId) {
	var sla = document.getElementById(id).value;
	     $.ajax({
				url : '/LegalBell' + '/getSlaDetails',
				method : 'POST',
				data : {
					Value : sla,
				},
				success : function(response) {
					var len = response.result.length;
					var dateFrom = new Date(response.result[0].valid_From);
					var dateTo = new Date(response.result[0].valid_To);
					var newFormDate = dateFrom.getFullYear() + '-'
							+ (dateFrom.getMonth() + 1) + '-'
							+ dateFrom.getDate();
					var newToDate = dateTo.getFullYear() + '-' + (dateTo.getMonth()
							+ 1 )+ '-' + dateTo.getDate();
					var txt = "";
					if(tableId=='updateSlaDescription'){
						document.getElementById("updateSlaDivButtons").style.display = "block";
					$("#updateSlaDescription").html("");
					if (len > 0) {
						txt += "<tr><th><b>Transaction_Properties</b></th><th><b>Rate</b></th></tr>"
						for (var i = 0; i < len; i++) {
							txt += "<tr><input type='hidden' name='transaction_Code_Id' value="
									+ response.result[i].transaction_Code_Id
									+ "><input type='hidden' name='percentage_Absolute' value="
									+ response.result[i].percentage_Absolute
									+ "><input type='hidden' name='access_Sequence' value="
									+ response.result[i].access_Sequence
									+ "><input type='hidden' name='debit_Credit_Indicator' value="
									+ response.result[i].debit_Credit_Indicator
									+ "><input type='hidden' name='sla' size='3' value="
									+ response.result[i].sla
									+ "><td><input type='text' name='transaction_Properties' class='form-control' readonly='readonly' size='8' value="
									+ response.result[i].transaction_Properties
									+ "></td><td><input name='rate' class='form-control' size='6' value="
									+ response.result[i].rate + "></td></tr>"
						}
						txt += "<tr><th><b>Valid_From</b></th><th><b>Valid_To</b></th></tr>"
						txt += "<tr><tr><td><input name='valid_From' size='8' id='Valid_From' class='form-control' placeholder='DD-MM-YYYY' value="
								+ newFormDate
								+ "></td><td><input name='valid_To' size='6' id='Valid_To' class='form-control' placeholder='DD-MM-YYYY' value="
								+ newToDate + "></td></tr>"
						$("#updateSlaDescription").append(txt);
						getDatePicker();
					}
					}
                   else{
                	   document.getElementById("removeSlaDivButtons").style.display = "block";
                	   $("#removeSlaDescription").html("");
   					if (len > 0) {
   						txt += "<tr><th><b>Transaction_Properties</b></th><th><b>Rate</b></th></tr>"
   						for (var i = 0; i < len; i++) {
   							txt += "<tr><input type='hidden' name='transaction_Code_Id' id='Transaction_Code_Id' value="
   									+ response.result[i].transaction_Code_Id
   									+ "><input type='hidden' name='percentage_Absolute' value="
   									+ response.result[i].percentage_Absolute
   									+ "><input type='hidden' name='access_Sequence' value="
   									+ response.result[i].access_Sequence
   									+ "><input type='hidden' name='debit_Credit_Indicator' value="
   									+ response.result[i].debit_Credit_Indicator
   									+ "><input type='hidden' name='sla' size='3' value="
   									+ response.result[i].sla
   									+ "><td><input type='text' name='transaction_Properties' readonly='readonly' class='form-control' readonly='readonly' size='8' value="
   									+ response.result[i].transaction_Properties
   									+ "></td><td><input name='rate' class='form-control' readonly='readonly' size='6' value="
   									+ response.result[i].rate + "></td></tr>"
   						}
   						txt += "<tr><th><b>Valid_From</b></th><th><b>Valid_To</b></th></tr>"
   						txt += "<tr><tr><td><input name='valid_From' size='8' id='Valid_From' class='form-control' readonly='readonly' value="
   								+ newFormDate
   								+ "></td><td><input name='valid_To' size='6' id='Valid_To' class='form-control' readonly='readonly' value="
   								+ newToDate + "></td></tr>"
   						$("#removeSlaDescription").append(txt);
					}
                   }
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}

function getDatePicker() {
	$("#Valid_From").datepicker({
		dateFormat : 'dd-mm-yy',
		minDate : '0'
	});
	$("#Valid_To").datepicker({
		dateFormat : 'dd-mm-yy',
		minDate : '0'
	});
}

$(document).on(
		'click',
		"#createCorporateServiceLink",
		function() {
			$(".modal-backdrop").remove();
			ajaxPost("NoForm", "/getAllServiceCategory");
		});

$(document).on('click', "#updateCorporateServiceLink", function() {
	ajaxPost("NoForm", "/getAllServiceList/"+"Update");
});

function loadAllCorporateServiceList(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				var x = document.getElementById("Services_Code");
				for (var i = 0; i < jsonObject.length; i++) {
					var option = document.createElement("option");
					option.text = jsonObject[i];
					x.add(option);

				}
			});
}

function getCorporateService(id,tableId) {
	var service = document.getElementById(id).value;
	
	      $.ajax({
				url : '/LegalBell' + '/getCorporateServiceDetails',
				method : 'POST',
				data : {
					Value : service,
				},
				success : function(response) {
					var len = response.result.length;
					var dateFrom = new Date(response.result[0].valid_From);
					var dateTo = new Date(response.result[0].valid_To);
					var newFormDate = dateFrom.getFullYear() + '-'
							+( dateFrom.getMonth() + 1) + '-'
							+ dateFrom.getDate();
					var newToDate = dateTo.getFullYear() + '-' +( dateTo.getMonth()
							+ 1) + '-' + dateTo.getDate();
					var txt = "";
					if(tableId==='updateServiceDescription'){
						document.getElementById("updateServiceTableDiv").style.display = "block";
						document.getElementById("updateCorporateServiceButtons").style.display = "block";
					$("#updateServiceDescription").html("");
					if (len > 0) {
						txt += "<tr><th><b>Transaction_Properties</b></th><th><b>Rate</b></th></tr>"
						for (var i = 0; i < len; i++) {
							txt += "<tr><input type='hidden' name='corporate_Service_Transaction_Id' value="
									+ response.result[i].corporate_Service_Transaction_Id
									+ "><input type='hidden' name='percentage_Absolute' value="
									+ response.result[i].percentage_Absolute
									+ "><input type='hidden' name='access_Sequence' value="
									+ response.result[i].access_Sequence
									+ "><input type='hidden' name='debit_Credit_Indicator' value="
									+ response.result[i].debit_Credit_Indicator
									+ "><input type='hidden' name='services_Code' size='5' value="
									+ response.result[i].services_Code
									+ "><td style='padding: 5px;'><input type='text' name='transaction_Properties' class='form-control' readonly='readonly' size='8' value="
									+ response.result[i].transaction_Properties
									+ " style=' margin-bottom: 0px;'></td><td style='padding: 5px;'><input name='rate' class='form-control' size='6' value="
									+ response.result[i].rate + "></td></tr>"
						}
						txt += "<tr><th><b>Valid_From</b></th><th><b>Valid_To</b></th></tr>"
						txt += "<tr><tr><td style='padding: 5px;'><input name='valid_From' size='8' id='Valid_From' class='form-control' placeholder='DD-MM-YYYY' value="
								+ newFormDate
								+ "></td><td style='padding: 5px;'><input name='valid_To' size='6' id='Valid_To' class='form-control' placeholder='DD-MM-YYYY' value="
								+ newToDate + "></td></tr>"
						$("#updateServiceDescription").append(txt);
						getDatePicker();
					}
					}
					else{
							document.getElementById("removeServiceTableDiv").style.display = "block";
							document.getElementById("removeCorporateServiceButtons").style.display = "block";
						$("#removeServiceDescription").html("");
						if (len > 0) {
							txt += "<tr><th><b>Transaction_Properties</b></th><th><b>Rate</b></th></tr>"
							for (var i = 0; i < len; i++) {
								txt += "<tr><input type='hidden' name='corporate_Service_Transaction_Id' value="
										+ response.result[i].corporate_Service_Transaction_Id
										+ "><input type='hidden' name='percentage_Absolute' value="
										+ response.result[i].percentage_Absolute
										+ "><input type='hidden' name='access_Sequence' value="
										+ response.result[i].access_Sequence
										+ "><input type='hidden' name='debit_Credit_Indicator' value="
										+ response.result[i].debit_Credit_Indicator
										+ "><input type='hidden' name='services_Code' size='5' value="
										+ response.result[i].services_Code
										+ "><td style='padding: 5px;><input type='text' name='transaction_Properties' class='form-control' readonly='readonly' size='8' value="
										+ response.result[i].transaction_Properties
										+ "  style=' margin-bottom: 0px;'></td><td><input name='rate' class='form-control' readonly='readonly' size='6' value="
										+ response.result[i].rate + "></td></tr>"
							}
							txt += "<tr><th><b>Valid_From</b></th><th><b>Valid_To</b></th></tr>"
							txt += "<tr><tr><td style='padding: 5px;'><input name='valid_From' size='8' id='Valid_From' class='form-control' readonly='readonly' value="
									+ newFormDate
									+ "></td><td style='padding: 5px;'><input name='valid_To' size='6' id='Valid_To' class='form-control' readonly='readonly' value="
									+ newToDate + "></td></tr>"
							$("#removeServiceDescription").append(txt);
						}
					}
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}

$(document).on('click', "#adminRemoveSlaDescriptionButton", function() {
	$("#removeSlaPopupButton").click();
});

$(document).on('click', "#removeSlaButton", function() {
	$(".modal-backdrop").remove();
	 ajaxPost('adminRemoveSlaDescriptionForm', '/removeSlaDescription');
});

$(document).on('click', "#adminRemoveServiceDescriptionButton", function() {
	$("#removeServicePopupButton").click();
});

$(document).on('click', "#removeServiceButton", function() {
	$(".modal-backdrop").remove();
	onclick=ajaxPost('adminRemoveCorporateServiceForm', '/removeServiceDescription');
});

function getServiceSubCategory(Optionid) {
	$("#Services_SubCategory").html("");
	$("#Services_SubCategory").html('<option value="" selected>--Select--</option>');
	var servicesCategory = document.getElementById(Optionid).value;
	$("#hiddenServicesCategory").val(servicesCategory);
	$.ajax({
		url : '/LegalBell' + '/getServiceSubCategoryList',
		method : 'POST',
		data : {
			Value : servicesCategory,
		},
		success : function(response) {
			var jsonObject = response.result;
			var x = document.getElementById("Services_SubCategory");
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

function loadExistingServicesList(newService){
	$.ajax({
		url : '/LegalBell' + '/getAllServiceList/'+'Existing',
		method : 'POST',
		success : function(response) {
			var jsonObject = response.result;
				if(jsonObject.indexOf(newService)!=-1){
				$("#hiddenServicesCode").val("");
				$("#services_CodeSpan").text("*You have already created this service go to update or choose new service.")
				}
				else{
				$("#hiddenServicesCode").val(newService);
				}
			
		},
		error : function() {
			loadAjaxErrorPage();
		}

	});
}
function loadManageFilePage(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load(
			"/LegalBell/html/contentPages/" + url + ".html",
			function() {
				$("#autoSgstclienNameId").val(
						jsonObject.invoiceGenerationBean.clientNameList);
				$("#pageId").val(jsonObject.invoiceGenerationBean.type);
				$("#lawer").val(jsonObject.invoiceGenerationBean.lawerId);
				custName = new Array;
				custName = $("#autoSgstclienNameId").val().split(',');
				$('#clientNameTextBoxId').autocomplete({
					source : custName,
				});
				var type=$("#lawer").val().split(",");
				if(type[1]=="query_details"){
				    $('.itemID option:eq(1)').prop('selected', true);
				}
				else if(type[1]=="legal_notice_details"){
				    $('.itemID option:eq(2)').prop('selected', true);
				}
				else{
					  $('.itemID option:eq(3)').prop('selected', true);
					
				}
			});
}

function changeUpdateContractTermValue(Optionid) {
	var term = document.getElementById(Optionid).value;
	$("#hiddenPaymentTerm").val(term);
	document.getElementById("selectedServiceTableDiv").style.display = "none";
	document.getElementById("addServiceButtonDiv").style.display = "none";
	$("#selectedservicetable").dataTable().fnDestroy();
	$("#selectedServiceTableDiv").html("");
	ajaxPost('NoForm', '/corporateServiceRateChart.web/' + term);
	document.getElementById("addServiceTableDiv").style.display = "block";
}

$(document).on('click', "#inReviewContractAdminMenu", function() {
	ajaxPost("NoForm", "/inReviewContractAdmin.web");
});

$(document).on('click', "#inProgressContract", function() {
	ajaxPost("NoForm", "/inProgressContract.web");
});

$(document).on('click', "#inProgressContractClientMenu", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/inProgressContractClient.web/" + client_id);
});

$(document).on('click', "#inReviewContractClientMenu", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/inReviewContractClient.web/" + client_id);
});

$(document).on('click', "#inProgressContractClient", function() {
	var client_id = $("#client_id").text();
	ajaxPost("NoForm", "/inProgressContractClient.web/" + client_id);
});

function loadInProgressContractClientTable(url, jsonObject) {
	if(jsonObject.length==0){
		$("#hiddenNoValPopUpModal").click();
		}
	else{
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#contracttable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
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
					});
}
}
function validateRequestSubmit(){
	 if(document.getElementById("requestMessage").value == ""){
		 	document.getElementById("requestMessageSpan").textContent = "*Please enter request message.";	
	}else{	
	var temp=$("#lawer").val().split(",");
	$("#lawer").val("");
	$("#lawer").val(temp[0]);
	
	ajaxPost('requestForm', '/CreateRequestByLawyer');
		 }
}


$(document).on('click', "#queryReqDocsByLawyer", function() {
	var value = $("#queryReqDocsByLawyer").text().split(" ");
	var queryReqDocsByLawyerNumber = value[value.length-1];
	if(queryReqDocsByLawyerNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var user_id = $("#user_id").text();
	ajaxPost("NoForm", "/ReqDocsOfQueryByLawyer.web/" + user_id);
	}
});

$(document).on('click', "#closedQueryReqDocsByLawyer", function() {
	var value = $("#closedQueryReqDocsByLawyer").text().split(" ");
	var closedQueryReqDocsByLawyerNumber = value[value.length-1];
	if(closedQueryReqDocsByLawyerNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var user_id = $("#user_id").text();
	ajaxPost("NoForm", "/closedReqDocsOfQryByLawyer.web/" + user_id);
	}
});

$(document).on('click', "#caseReqDocsByLawyer", function() {
	var value = $("#caseReqDocsByLawyer").text().split(" ");
	var caseReqDocsByLawyerNumber = value[value.length-1];
	if(caseReqDocsByLawyerNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var user_id = $("#user_id").text();
	ajaxPost("NoForm", "/ReqDocsOfCaseByLawyer.web/" + user_id);
	}
});

$(document).on('click', "#closedCaseReqDocsByLawyer", function() {
	var value = $("#closedCaseReqDocsByLawyer").text().split(" ");
	var closedCaseReqDocsByLawyerNumber = value[value.length-1];
	if(closedCaseReqDocsByLawyerNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var user_id = $("#user_id").text();
	ajaxPost("NoForm", "/closedReqDocsOfCseByLawyer.web/" + user_id);
	}
});


function loadReqDocumentsByLawyerTable(url, jsonObject) {

	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
		$("#requestedDocTable").dataTable().fnDestroy(); 
				$("#requestedDocTable").dataTable({
					dom: 'lBfrtip',
			        buttons: [
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


function loadclosedReqDocumentsByLawyerTable(url, jsonObject) {

	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
		$("#closedRequestedDocTable").dataTable().fnDestroy(); 
				$("#closedRequestedDocTable").dataTable({
					dom: 'lBfrtip',
			        buttons: [
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
			});
}

function loadClickClosedLawyerRequest(Ids){
	var ids = Ids.split("-");
	var client_Id = ids[2];
	ajaxPost("NoForm", "/displayRequestDetailsByRequestId/"+ ids[0]);
	getUploadedFileDetailsRequested(client_Id, ids[0], ids[1]);
}

$(document).on('click', "#removeSlaLink", function() {
	ajaxPost("NoForm", "/getAllSlaList/"+"Remove");
});

function loadServiceCategoryList(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
				var x = document.getElementById("Services_Category");
				for (var i = 0; i < jsonObject.length; i++) {
					var option = document.createElement("option");
					option.text = jsonObject[i];
					x.add(option);
			 }
			});
}

$(document).on('click', "#removeCorporateServiceLink", function() {
	ajaxPost("NoForm", "/getAllServiceList/"+"Remove");
});

function loadRequestPage(request_Id) {
	ajaxPost("NoFrom", "/getRequestDetailsById/" + request_Id);
}

function loadRequestDetailsTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#reqtable").dataTable().fnDestroy();
						$("#reqtable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject,
											"aoColumns" : [
													{
														"mData" : "request_Id"
														
													},
													{
														"mData" : "request_Item"
													},
													{
														"mData" : "request_Type"
													},
													{
														"mData" : "request_From"
													},
													{
														"mData" : "request_Status"
													},
													{
														"mData" : null,
														render : function(data, type, full, meta) {
														var created_Date=new Date(data.created_Date);
														var newCreated_Date=created_Date.getFullYear() + '-'
														+( created_Date.getMonth() + 1) + '-'
														+ created_Date.getDate();
														return newCreated_Date;
														}
													},
													{
														"mData" : null,
														render : function(
																data, type,
																full, meta) {
																var x=null;
																x=data.request_Message;
																if(x.length>10)
																{
																x=x.substr(0,10);
																x=x+"...";
																return x;
																}
																else return x;
														
														}},
													{
															render : function(data,type,full,meta){
																var date = new Date();
																
															var yyyy = date.getFullYear().toString();
															var mm = (date.getMonth()+1).toString();
															var dd = date.getDate().toString();
															var mmChars = mm.split('');
															var ddChars = dd.split('');
															var dateString = yyyy + '-' + (mmChars[1]?mm:"0" +mmChars[0]) + '-' + (ddChars[1]?dd:"0" +ddChars[0]);
															var sqlDateStr = data.created_Date;
															var oneDay = 24*60*60*1000;
															var firstDate = new Date(sqlDateStr);
															var secondDate = new Date(dateString);
															var diffDays = Math.round(Math.abs((firstDate.getTime()-secondDate.getTime())/(oneDay))) ;
															return (diffDays + " days") ;
															},
															 "mData" :null
													},
													{
														"mData" : null,
														render : function(data,
																type, full,
																meta) {
															return '<input type="button" name="actionButton" id="'
																	+ data.request_Id
																	+ '" value="Go" onclick="loadRequestPage(this.id)">';
														}
													}

											]
										});
					});
}

function loadRequestDetailsClosedTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#reqClosedtable").dataTable().fnDestroy();
						$("#reqClosedtable")
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
											"aaData" : jsonObject,
											"aoColumns" : [
													{"mData" : "request_Id"
													},{
														"mData" : "request_Item"
													},{
														"mData" : "request_Type"
													},{
														"mData" : "request_From"
													},{
														"mData" : "request_Status"
													},{
														"mData" : null,
														render : function(data, type, full, meta) {
														var created_Date=new Date(data.created_Date);
														var newCreated_Date=created_Date.getFullYear() + '-'
														+( created_Date.getMonth() + 1) + '-'
														+ created_Date.getDate();
														return newCreated_Date;
														}},{
														"mData" : null,
														render : function(data, type,full, meta) {
																var x=null;
																x=data.request_Message;
																if(x.length>10)
																{
																x=x.substr(0,10);
																x=x+"...";
																return x;
																}
																else return x;
														
														}
													},{
														"mData" : null,
														render : function(data, type, full, meta) {
														var response_Date=new Date(data.response_Date);
														var newResponse_Date=response_Date.getFullYear() + '-'
														+( response_Date.getMonth() + 1) + '-'
														+ response_Date.getDate();
														return newResponse_Date;
														}},{
															"mData" : null,
															render : function(
																	data, type,
																	full, meta) {
																	var x=null;
																	x=data.response_Message;
																	if(x.length>10)
																	{
																	x=x.substr(0,10);
																	x=x+"...";
																	return x;
																	}
																	else return x;
															
															}
													}
													]
										});
					});
}

function loadRequestDetailsClosedTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$("#reqClosedtable").dataTable().fnDestroy();
						$("#reqClosedtable")
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
											"aaData" : jsonObject,
											"aoColumns" : [
													{"mData" : null,
														render : function(
																data, type,
																full, meta) {
																return '<input type="button" id="'+ data.request_Id+'-'+data.request_Item+ '"value="'+ data.request_Id +'" onclick="loadClickClosedRequestDetails(this.id)">';
																}
													},{
														"mData" : "request_Item"
													},{
														"mData" : "request_Type"
													},{
														"mData" : "request_From"
													},{
														"mData" : "request_Status"
													},{
														"mData" : null,
														render : function(data, type, full, meta) {
														var created_Date=new Date(data.created_Date);
														var newCreated_Date=created_Date.getDate() + '-'
														+( created_Date.getMonth() + 1) + '-'
														+ created_Date.getFullYear();
														return newCreated_Date;
														}},{
														"mData" : null,
														render : function(data, type,full, meta) {
																var x=null;
																x=data.request_Message;
																if(x.length>10)
																{
																x=x.substr(0,10);
																x=x+"...";
																return x;
																}
																else return x;
														
														}
													},{
														"mData" : null,
														render : function(data, type, full, meta) {
														var response_Date=new Date(data.response_Date);
														var newResponse_Date=response_Date.getFullYear() + '-'
														+( response_Date.getMonth() + 1) + '-'
														+ response_Date.getDate();
														return newResponse_Date;
														}},{
															"mData" : null,
															render : function(
																	data, type,
																	full, meta) {
																	var x=null;
																	x=data.response_Message;
																	if(x.length>10)
																	{
																	x=x.substr(0,10);
																	x=x+"...";
																	return x;
																	}
																	else return x;
															
															}
													}
													]
										});
					});
}

function loadClickClosedRequestDetails(Ids){
	var ids = Ids.split("-");
	var client_Id = $("#client_id").text();
	ajaxPost("NoForm", "/displayRequestDetailsByRequestId/"+ ids[0]);
	getUploadedFileDetailsRequested(client_Id, ids[0], ids[1]);
}

function loadDisplayClosedRequestDetails(url, jsonObject){
	var created_Date=new Date(jsonObject.created_Date);
	var newCreated_Date=created_Date.getFullYear() + '-'
	+(created_Date.getMonth() + 1) + '-'
	+ created_Date.getDate();
	var response_Date=new Date(jsonObject.response_Date);
	var newResponse_Date=response_Date.getFullYear() + '-'
	+( response_Date.getMonth() + 1) + '-'
	+ response_Date.getDate();
	$('#displayRequestedClosedDetailsButton').click();
	   $("#requestId").val(jsonObject.request_Id);
	   $("#requestItem").val(jsonObject.request_Item);
	   $("#requestType").val(jsonObject.request_Type);
	   $("#requestFrom").val(jsonObject.request_From);
	   $("#requestTo").val(jsonObject.request_To);
	   $("#requestDate").val(newCreated_Date);
	   $("#responseDate").val(newResponse_Date);
	   $("#requestMessage").val(jsonObject.request_Message);
	   $("#responseMessage").val(jsonObject.response_Message);
}		

function getUploadedFileDetailsRequested(ClientId, RequestId, ItemId){
	var value1 = ClientId + "-" + RequestId + "-" + ItemId;
	var value = ClientId + "||" + RequestId + "||" + ItemId;
	$.ajax({
				method : 'POST',
				url : '/LegalBell' + '/getUploadedFileDetailsRequestedClient/'+value1,
				success : function(response) {
					var finalresult = response.result;
					
					var fileLength = response.result.length;
					var txt = "";
					$("#uploadedFileDetailsRequested").html("");
					if (fileLength > 0) {
						txt += "<tr><th><b>Sl.No</b></th><th><b>File Name</b></th><th><b>Operation</b></th></tr>"
						
					for (var i = 0; i < fileLength; i++) {
						txt += "<tr><td><input type='text' name='sl_No' size='3' readonly='readonly' value="
								+ (i + 1)
								+ "></td><td><input type='text' name='file_Name' size='60' readonly='readonly' value="+finalresult[i].replace(/\s/g,"|")+"></td><td><input type='button' value='view' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getViewOfUploadedRequestFiles(this.id)' /> &nbsp;&nbsp;&nbsp;<input type='button' value='download' id="+finalresult[i].replace(/\s/g,"|")+"||"+value+" onclick='getUploadedRequestFiles(this.id)' /></td></tr>"
								
					}
					
					$("#uploadedFileDetailsRequested").append(txt);
				}
				},
				error : function() {
					loadAjaxErrorPage();
				}

			});
}

function getUploadedRequestFiles(ArrayOfFile){
	var fileArray = ArrayOfFile.split("||");
	var uploadedFileInfo = [];
	uploadedFileInfo.push(fileArray[1]);
	uploadedFileInfo.push(fileArray[3]);
	uploadedFileInfo.push(fileArray[2]);
	uploadedFileInfo.push(fileArray[0]);
	uploadedFilesdownload('/downloadUploadedRequestFiles/' + uploadedFileInfo);

}

function getContractPdf(ids){
	var contractids=ids.split("-");
	var contractInfo = [];
	contractInfo.push(contractids[0]);
	contractInfo.push(contractids[1]);
	ajaxcontractpdfdownload('/downloadContractPdf/' + contractInfo);
}

function loadDueInvoicesLwrbyAdminTable(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage")
			.load(
					"/LegalBell/html/contentPages/" + url + ".html",
					function() {
						$('#dueInvoiceTable').dataTable().fnDestroy();
						$("#dueInvoiceTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject.aaData,
											"aoColumns" : [
													{
														"mData" : "invoice_Id"
													},
													{
														"mData" : "assigned_Lawyer"
													},
													{
														"mData" : "invoice_Gross_Amount"
													},
													{	
														"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="button" name="actionButton" id="'
														+ data.invoice_Id
														+ '" value="Go" onclick="loadLawyerDuePaymentbyAdmin(this.id)">';
																								}
													}

											]
										});
					});
}

function loadLawyerDuePaymentbyAdmin(invoice_Id) {
	ajaxPost("NoFrom", "/getDuePaymentDetailsbyInvoiceId/" + invoice_Id);
}

$(document).on('click', "#approvedDraftLawyer", function() {
	var value = $("#approvedDraftLawyer").text().split(" ");
	var dueInvoicesLawyerNumber = value[value.length-1];
	if(dueInvoicesLawyerNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var lawyer_id = $("#user_id").text();
	ajaxPost('NoForm', '/approvedDraft.web/'+lawyer_id);
	}
});

$(document).on('click', "#approvedDraftAdmin", function() {
	var value = $("#approvedDraftAdmin").text().split(" ");
	var dueInvoicesLawyerNumber = value[value.length-1];
	if(dueInvoicesLawyerNumber == 0){
		$("#hiddenNoValPopUpModal").click();
	}else{
	var admin_id = $("#user_id").text();
	ajaxPost('NoForm', '/approvedDraftAdmin.web/'+admin_id);
	}
});

$(document).on(
		'click',
		"#clientAccountSettingLink",
		function() {
			$("#contentPage").load("/LegalBell/html/contentPages/Account.html",
					function() {
						$("#Id").val($("#client_id").text());
					});
		});

$(document).on(
		'click',
		"#userAccountSettingLink",
		function() {
			$("#contentPage").load("/LegalBell/html/contentPages/AdminAccountSettings.html",
					function() {
				var id=$("#user_id").text();
				//$("#Id").val($("#user_id").text());
				ajaxPost("NoForm", "/getAccountSettings/" + id);
						
					});
			
		});

$(document)
.on('click',
		"#createSchemeLink",
		function() {
			$(".modal-backdrop").remove();
			$("#contentPage")
					.load(
							"/LegalBell/html/contentPages/AddScheme.html",
							function() {
				$("#hiddenCreatedBy").val($("#user_id").text());
				loadExistingSchemeList();
			});						
		});

function loadExistingSchemeList(){
	$.ajax({
		url : '/LegalBell' + '/getAllSchemeList/'+'get',
		method : 'POST',
		success : function(response) {
			var jsonObject = response.result;
			var x = document.getElementById("scheme");
			for (var i = 0; i < jsonObject.length; i++) {
				for (var j = 0; j < x.length; j++) {
				if(jsonObject[i].scheme_Description==x.options[j].value){
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

$(document).on('click', "#updateSchemeLink", function() {
	ajaxPost("NoForm", "/getAllSchemeList/"+"Update");
});

function loadAllSchemeList(url, jsonObject) {
	$("#contentPage").html("");
	$("#contentPage").load("/LegalBell/html/contentPages/" + url + ".html",
			function() {
		    $("#hiddenUpdatedBy").val($("#user_id").text());
				var x = document.getElementById("scheme");
				for (var i = 0; i < jsonObject.length; i++) {
					var option = document.createElement("option");
					option.text = jsonObject[i].scheme_Description;
					option.value = jsonObject[i].scheme_Id;
					x.add(option);
				}
			});
}

function getSchemeDetails(id) {
	var scheme_Desc = document.getElementById(id).value;
	var text=$('#'+id).find('option:selected').text();
	$("#hiddenScheme").val(text);
		     $.ajax({
					url : '/LegalBell' + '/getSchemeDetails',
					method : 'POST',
					data : {
						Value : scheme_Desc,
					},
					success : function(response) {
						var dateFrom = new Date(response.result.scheme_From);
						var dateTo = new Date(response.result.scheme_To);
						var newFormDate = dateFrom.getFullYear() + '-'
								+ (dateFrom.getMonth() + 1) + '-'
								+ dateFrom.getDate();
						var newToDate = dateTo.getFullYear() + '-' + (dateTo.getMonth()
								+ 1 )+ '-' + dateTo.getDate();
						
						  $("#Scheme_Discount").val(response.result.scheme_Discount);
						  $("#Valid_From").val(newFormDate);
						  $("#Valid_To").val(newToDate);
						  $("#hiddenSchemeId").val(scheme_Desc);
						  $("#hiddenCreatedBy").val(response.result.created_By);
						  $("#hiddenCreatedDate").val(response.result.created_Date);
						  $("#hiddenScheme_Status").val(response.result.scheme_Status);
					},
					error : function() {
						loadAjaxErrorPage();
					}

				});
}

$(document).on('click',"#ClientSegmentation",function() {
			$(".modal-backdrop").remove();
			$("#contentPage")
					.load("/LegalBell/html/contentPages/ClientSegmentation.html");
							
		});

function loadClientSegmentTable(url, jsonObject) {
	$('#clientSegmentTable').dataTable().fnDestroy();
						$("#clientSegmentTable")
								.dataTable(
										{
											dom: 'lBfrtip',
									        buttons: [
									        ],
											"bProcessing" : true,
											"sort" : "position",
											"bStateSave" : false,
											"iDisplayLength" : 5,
											"iDisplayStart" : 0,
											"aaData" : jsonObject,
											"aoColumns" : [
											               
													{
														"mData" : null,
														render : function(data,type,full,meta){
														return data[2]+" "+data[3];
															} 
													},
													{
														"mData" :null,
														render : function(data,type,full,meta){
														return data[1];
														}
													},
											        {
														"mData" : null,
														render : function(data,type,full,meta){
														return data[4];
														}
													},
													{	
														"mData" : null,
														render : function(data, type,full, meta) {
														return '<input type="checkbox" id="chk" name="client_Id" value="'+ data[0]+'">';
														}
													}
										]
									});
}
function getLoadScheme() {
	$.ajax({
		url : '/LegalBell' + '/getAllSchemeList/'+'get',
		method : 'POST',
		success : function(response) {
			var jsonObject = response.result;
			var clientType=document.getElementById("hiddenClientType").value;
			var type = clientType.substring(0, 1);
			var x = document.getElementById("scheme");
			for (var i = 0; i < jsonObject.length; i++) {
				if(jsonObject[i].scheme_Description.startsWith(type.toUpperCase())){
				var option = document.createElement("option");
				option.text = jsonObject[i].scheme_Description;
				option.value = jsonObject[i].scheme_Id;
				x.add(option);
			}
			}
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}
$(document).on('click',"#segmentClientButton",function(){
	if(($("input[type='checkbox'][name='client_Id']:checked").length > 0) && 
			($("#scheme").val()!="")){
		var segmentInfo = [];
		segmentInfo.push($("#scheme").val());
	    $('input:checkbox[name=client_Id]').each(function(){	
    	if($(this).is(':checked')){
    		segmentInfo.push($(this).val());
    	}
     });	
	  ajaxPost("NoForm", "/assignClientScheme/" + segmentInfo);
    $("#clientSegmnetSpan").text("");
}else{
	$("#clientSegmnetSpan").text("Please Select Atleast One Client Or A Scheme");
}    
}); 
$(document).on(
		'click',
		"#paytmLink",
		function() {
			var paymentInfo = [];
			paymentInfo.push($("#username").text());
			paymentInfo.push($("#fixedquery").val());
			paymentInfo.push("Query");
			var radiovalue = null;
			if(($("input[type='radio'][name='slaId']:checked").length > 0)){
			$('input:radio[name=slaId]').each(function() {
				if ($(this).is(':checked')) {
					radiovalue = ($(this).val().split("-"));
				}
			});
			paymentInfo.push(radiovalue[0]);
			paymentInfo.push(radiovalue[1]);
			
			console.log(paymentInfo);
			ajaxPost('NoForm','/getPaytmMerchant/'+paymentInfo);
			}else{
				$("#rateChartSpan").text("Please select an option");
				getQueryIdAndSlaId.push(radiovalue);
				
			}					
		});
$(document).on(
		'click',
		"#hdfcLink",
		function() {
			var paymentInfo = [];
			paymentInfo.push($("#username").text());
			paymentInfo.push($("#fixedquery").val());
			var id=$("#fixedquery").val();
			if(id.startsWith("LN")){
				paymentInfo.push("LegalNotice");	
			}
			else
			{
			paymentInfo.push("Query");
			}
			var radiovalue = null;
			if(($("input[type='radio'][name='slaId']:checked").length > 0)){
			$('input:radio[name=slaId]').each(function() {
				if ($(this).is(':checked')) {
					radiovalue = ($(this).val().split("-"));
				}
			});
			paymentInfo.push(radiovalue[0]);
			paymentInfo.push(radiovalue[1]);
			
			console.log(paymentInfo);
			ajaxPost('NoForm','/getHDFCMerchant/'+paymentInfo);
			}else{
				$("#rateChartSpan").text("Please select an option");
				getQueryIdAndSlaId.push(radiovalue);
				
			}					
		});
$(document).on(
		'click',
		"#paytmInvoiceLink",
		function() {
			var paymentInfo = [];
			paymentInfo.push($("#case_Id").val());
			paymentInfo.push($("#invoice_Id").val());
			paymentInfo.push("Case");
			paymentInfo.push("Hello");
			ajaxPost('NoForm','/getPaytmMerchant/'+paymentInfo);
		});
$(document).on(
		'click',
		"#hdfcInvoiceLink",
		function() {
			var paymentInfo = [];
			paymentInfo.push($("#case_Id").val());
			paymentInfo.push($("#invoice_Id").val());
			paymentInfo.push("Case");
			paymentInfo.push("Hello");
			ajaxPost('NoForm','/getHDFCMerchant/'+paymentInfo);
		});
function invoicePayment(ids){
	var multipleID = ids.split(",");
	$("#hiddenPaymentInvoice").click();
	$("#case_Id").val(multipleID[0]);
	$("#invoice_Id").val(multipleID[1]);
	}
$(document).on('click',"#paymentGatewayButton",function() {
	$("#hiddenPaymentModel").click();
		});
function getViewOfUploadedRequestFiles(ArrayOfFile){
	var fileArray = ArrayOfFile.split("||");
	var uploadedFileInfo = [];
	uploadedFileInfo.push(fileArray[1]);
	uploadedFileInfo.push(fileArray[3]);
	uploadedFileInfo.push(fileArray[0]);
	uploadedFileInfo.push(fileArray[2]);
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
 			}
 		},
 		error : function() {
 			loadAjaxErrorPage();
 		}
 	});
}
$(document).on(
		'click',
		"#chatAdminLink",
		function() {
			var client_id = $("#client_id").text();
			$("#contentPage").load(
					"/LegalBell/html/contentPages/Chat.html");
			
		});
function onBlurManageData() {
	document.getElementById("dataTypeSpan").textContent = "";
	document.getElementById("dataFileSpan").textContent = "";
	
	}
function getDataTypeInHidden(Optionid){
	$("#hiddenDataType").val(document.getElementById(Optionid).value);
	
}
$(document).on(
		'click',
		"#NewClientDashboard",
		function() {
			$("#contentPage").load(
					"/LegalBell/html/contentPages/IndividualProfileNew.html");
		});
$(document).on(
		'click',
		"#registrationType",
		function() {
			var regType=$("#registrationValue").val();
			if(regType=="Individual"){
				$("#contentPageHome").html("");
				$("#contentPageHome").load(
						"/LegalBell/html/contentPages/IndividualRegistration.html", function() {
						});	
			}
			else if(regType=="Corporate"){
				$("#contentPageHome").html("");
				$("#contentPageHome").load(
						"/LegalBell/html/contentPages/CorporateRegistration.html", function() {
							getCompanyType();
						});	
			}
			else if(regType=="Counsel"){
				$("#contentPageHome").html("");
				$("#contentPageHome").load(
						"/LegalBell/html/contentPages/EmployeeRegistration.html", function() {
						});	
			}
			else{
				
			}
		});

function putRadioValue(value,target){
	$("#"+target).val(value);
}

$(document).on('click', "#manageRequestDetails", function() {
	var user_id = $("#user_id").text();
	var service = $("#RequestFor").val();
	var Info = user_id.concat(",");
	Info=Info.concat(service);
	ajaxPost("NoForm", "/fileManagementDetails/" + Info);
});

$(document).on('click', "#switchAccountLink", function() {
	var user_id = $("#user_id").text();
	var token = $("#userToken").text();
	var Info = user_id.concat(",");
	Info=Info.concat(token);
	$("#userToken").text("123");
	ajaxPost("NoForm", "/switchAccount/" + Info);
});




$(document).on(
		'click',
		"#rosterLinkClient",
		function() {
			
		        var client_id=$("#client_id").text();
		        //alert(client_id);
				ajaxPost("NoForm", "/allServiceNamesByClientId/" + client_id);
		});






$(document).on(
		'click',
		"#rosterLinkCorporateClient",
		function() {
			
		        var client_id=$("#client_id").text();
		        //alert(client_id);
				ajaxPost("NoForm", "/clientRoster/" + client_id);
		});


$(document).on(
		'click',
		"#rosterLinkAdmin",
		function() {
			
		        var user_id=$("#user_id").text();
		        //alert(user_id);
				ajaxPost("NoForm", "/adminRoster/" + user_id);
		});



$(document).on(
		'click',
		"#rosterLinkLawyer",
		function() {
			
		        var user_id=$("#user_id").text();
		       // alert(user_id);
				ajaxPost("NoForm", "/lawyerRoster/" + user_id);
		});




$(document).on(
		'click',
		"#updateIndividualLinkInPopUp",
		function() {
			var client_id = $("#client_id").text();
			ajaxPost("NoForm", "/fetchClientDetailsById/" + client_id);	
			});
			
		


function loadClientDetailsInPopup(jsonObject){
	var type=jsonObject.client_Type;
	//alert(type);
	if(type=="Individual"){
	$("#hiddenUpdateProfilePopUp").click();
	populateForm(jsonObject);
	getCountryList();
	}
	else{
		$("#hiddenUpdateProfileCorporate").click();
		populateForm(jsonObject);
		getCompanyType();
		getCountryList1();	
	}
}




$(document).on(
		'click',
		"#updateCorporateLinkInPopUp",
		function() {
			var client_id = $("#client_id").text();
			ajaxPost("NoForm", "/fetchClientDetailsById/" + client_id);	
			});
	



function getCountryList1() {
	
	$
			.ajax({
				url : '/LegalBell' + '/getCountryList',
				method : 'POST',
				success : function(response) {
					var jsonObject = response.result;
					alert(jsonObject);
					var x = document.getElementById("CountryId1");
					for (var i = 0; i < jsonObject.length; i++) {
						var option = document.createElement("option");
						option.text = jsonObject[i];
						x.add(option);
					}
					$("#CountryId1").val($("#hiddenCountry1").val());
					var val = $("#hiddenCountry1").val();
					if (val != "") {
						$
								.ajax({
									url : '/LegalBell' + '/getStateList',
									method : 'POST',
									data : {
										Value : val,
									},
									success : function(response) {
										var jsonObject = response.result;
										var y = document
												.getElementById("StateId1");
										for (var i = 0; i < jsonObject.length; i++) {
											var option = document
													.createElement("option");
											option.text = jsonObject[i];
											y.add(option);
										}
										$("#StateId1").val(
												$("#hiddenState1").val())
										var val1 = $("#hiddenState1").val();
										if (val1 != "") {
											$
													.ajax({
														url : '/LegalBell'
																+ '/getDistrictList',
														method : 'POST',
														data : {
															Value : val1,
														},
														success : function(
																response) {
															var jsonObject = response.result;
															var z = document
																	.getElementById("DistrictId1");
															for (var i = 0; i < jsonObject.length; i++) {
																var option = document
																		.createElement("option");
																option.text = jsonObject[i];
																z.add(option);
															}
															$("#DistrictId1")
																	.val(
																			$(
																					"#hiddenDistrict1")
																					.val());
														},
														error : function() {
															loadAjaxErrorPage();
														}

													});
										}
									},
									error : function() {
										loadAjaxErrorPage();
									}
								});
					}
				},
				error : function() {
					loadAjaxErrorPage();
				}
			});
}
function changeStateList1(Optionid, actionUrl) {
	$("select#StateId1").html('<option value="" selected>--Select--</option>');
	$("select#DistrictId1")
			.html('<option value="" selected>--Select--</option>');
	var country = document.getElementById(Optionid).value;
	$.ajax({
		url : '/LegalBell' + actionUrl,
		method : 'POST',
		data : {
			Value : country,
		},
		success : function(response) {
			var jsonObject = response.result;
			var x = document.getElementById("StateId1");
			for (var i = 0; i < jsonObject.length; i++) {
				var option = document.createElement("option");
				option.text = jsonObject[i];
				x.add(option);
			}
			$("#hiddenCountry1").val(country);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}

function changeDistrictList1(Optionid, actionUrl) {
	$("select#DistrictId1").html('<option value="" selected>--Select--</option>');
	var state = document.getElementById(Optionid).value;
	$.ajax({
		url : '/LegalBell' + actionUrl,
		method : 'POST',
		data : {
			Value : state,
		},
		success : function(response) {
			var jsonObject = response.result;
			var x = document.getElementById("DistrictId1");
			for (var i = 0; i < jsonObject.length; i++) {
				var option = document.createElement("option");
				option.text = jsonObject[i];
				x.add(option);
			}
			$("#hiddenState1").val(state);
		},
		error : function() {
			loadAjaxErrorPage();
		}
	});
}



function changeDistrictValue1(Optionid) {
	var district = document.getElementById(Optionid).value;
	$("#hiddenDistrict1").val(district);
}




//Roster 



/*$(document).on(
		'click',
		'#rosterDataTable tbody tr td.details-control',
		function() {
			var table = $('#rosterDataTable').DataTable();
			var row_clicked = $(this).closest('tr');
			var row = table.row( row_clicked );
			if (row.child.isShown() ) {
				row.child.hide();
				row_clicked.removeClass('shown');
	        }
			else
			{
			var Id=row_clicked.find("td:eq(1)").text();
			$.ajax({
				method : 'POST',
				url : '/LegalBell' + '/getAllCaseAndQueryDetails/' + Id,
				success : function(response) {
					var caseDesc = response.result;
					row.child( format(caseDesc,Id) ).show();
					row_clicked.addClass('shown');
					},
				error : function() {
					loadAjaxErrorPage();
				}
			});
			
	        }	
			//return false; 
			});

function process(obj) {
	  for (var i in obj) {
	    var child = obj[i];
	    if (child === null)
	      obj[i] = "N.A";
	    else if (typeof(child)=="object")
	      process(child);
	  }
	  return obj;
	}


function format ( result ,Id) {
    // `d` is the original data object for the row
	var data=process(result);
	if(Id.startsWith("CLO_LA")||Id.startsWith("CLO_TA")){
		var query_Created_Date=new Date(data.query_Created_Date);	
		var newQuery_Created_Date=query_Created_Date.getFullYear() + '-'
		+( query_Created_Date.getMonth() + 1) + '-'
		+ query_Created_Date.getDate();
		   
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td><b>Query Id:</b></td>'+
            '<td>'+data.query_Id+'</td>'+
            '<td><b>Query Created Date:</b></td>'+
            '<td>'+newQuery_Created_Date+'</td>'+
            '<td><b>Query Status:</b></td>'+
            '<td>'+data.query_Status+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td><b>Query Category:</b></td>'+
            '<td>'+data.query_Category+'</td>'+
            '<td><b>Query Sub Category:</b></td>'+
            '<td>'+data.query_SubCategory+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td><b>Query Type:</b></td>'+
            '<td>'+data.query_Type+'</td>'+
            '<td><b>Advice For:</b></td>'+
           '<td>'+data.advice_For+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td><b>Assigned By:</b></td>'+
            '<td>'+data.assigned_By+'</td>'+
            '<td><b>Assigned Lawyer:</b></td>'+
            '<td>'+data.assigned_Lawyer+'</td>'+
        '</tr>'+
       

    '</table>';
	}
	else if(Id.startsWith("CLO_DR")){
	
		var created_On=new Date(data.created_On);
		var newCreated_On=created_On.getFullYear() + '-'
		+(created_On.getMonth() + 1) + '-'
		+ created_On.getDate();
		
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td><b>Dispute Id:</b></td>'+
            '<td>'+data.dispute_Id+'</td>'+
            '<td><b>Created Date:</b></td>'+
            '<td>'+newCreated_On+'</td>'+
            '<td><b>Current Status:</b></td>'+
            '<td>'+data.current_Status+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td><b>Dispute Category:</b></td>'+
            '<td>'+data.dispute_Category+'</td>'+
            '<td><b>Query Sub Category:</b></td>'+
            '<td>'+data.dispute_SubCategory+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td><b>Adversory Name:</b></b></td>'+
            '<td>'+data.adversory_Name+'</td>'+
            '<td><b>Adversory Address:</b></td>'+
           '<td>'+data.adversory_Address+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td><b>Assigned By:</b></td>'+
            '<td>'+data.assigned_By+'</td>'+
            '<td><b>Assigned Lawyer:</b></td>'+
            '<td>'+data.assigned_Lawyer+'</td>'+
        '</tr>'+
       

    '</table>';
	}
	
	else if(Id.startsWith("CLO_DD")){
		var created_On=new Date(data.created_On);
		var newCreated_On=created_On.getFullYear() + '-'
		+(created_On.getMonth() + 1) + '-'
		+ created_On.getDate();
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td><b>Diligence Id:</b></td>'+
            '<td>'+data.diligence_Id+'</td>'+
            '<td><b>Created Date:</b></td>'+
            '<td>'+newCreated_On+'</td>'+
            '<td><b>Current Status:</b></td>'+
            '<td>'+data.current_Status+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td><b>Diligence Category:</b></td>'+
            '<td>'+data.diligence_Category+'</td>'+
            '<td><b>Organisation Name:</b></td>'+
            '<td>'+data.organisation_Name+'</td>'+
        '</tr>'+
       '<tr>'+
            '<td><b>Assigned By:</b></td>'+
            '<td>'+data.assigned_By+'</td>'+
            '<td><b>Assigned Lawyer:</b></td>'+
            '<td>'+data.assigned_Lawyer+'</td>'+
        '</tr>'+
       

    '</table>';
	}
	
else if(Id.startsWith("CLO_CM")){
	var created_On=new Date(data.created_On);
	var newCreated_On=created_On.getFullYear() + '-'
	+(created_On.getMonth() + 1) + '-'
	+ created_On.getDate();
		
		return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td><b>Contract Id:</b></td>'+
            '<td>'+data.contract_Id+'</td>'+
            '<td><b>Created Date:</b></td>'+
            '<td>'+newCreated_On+'</td>'+
            
        '</tr>'+
        '<tr>'+
            '<td><b>Contract Category:</b></td>'+
            '<td>'+data.contract_Category+'</td>'+
            '<td><b>Current Status:</b></td>'+
            '<td>'+data.current_Status+'</td>'+
            
        '</tr>'+
       '<tr>'+
            '<td><b>Assigned By:</b></td>'+
            '<td>'+data.assigned_By+'</td>'+
            '<td><b>Assigned Lawyer:</b></td>'+
            '<td>'+data.assigned_Lawyer+'</td>'+
        '</tr>'+
       

    '</table>';
	}
else{
	var notice_Created_Date=new Date(data.notice_Created_Date);	
	var newNotice_Created_Date=notice_Created_Date.getFullYear() + '-'
	+( notice_Created_Date.getMonth() + 1) + '-'
	+ notice_Created_Date.getDate();
	return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
	'<tr>'+
    '<td><b>Notice Id:</b></td>'+
    '<td>'+data.notice_Id+'</td>'+
    '<td><b>Notice Created Date:</b></td>'+
    '<td>'+newNotice_Created_Date+'</td>'+
    '<td><b>Notice Status:</b></td>'+
    '<td>'+data.notice_Status+'</td>'+
'</tr>'+
'<tr>'+
'<td><b>Adversory Name:</b></td>'+
'<td>'+data.adversory_Name+'</td>'+
'<td><b>Adversory Address:</b></td>'+
'<td>'+data.adversory_Address+'</td>'+
'</tr>'+
'<tr>'+
    '<td><b>Assigned By:</b></td>'+
    '<td>'+data.assigned_By+'</td>'+
    '<td><b>Assigned Lawyer:</b></td>'+
    '<td>'+data.assigned_Lawyer+'</td>'+
'</tr>'+
'</table>';
}
}*/



var idleInterval;
function startTime(){
	// alert(event);
	
	 var idleTime = 0;
	 //Increment the idle time counter every second.
	 idleInterval = setInterval(function(){ timerIncrement() }, 1000);
	     //alert(idleInterval);
		   function timerIncrement()
		   {
			idleTime++;
		    if (idleTime > 600){
			 clearInterval(idleInterval);
		     doPreload();
		     }
		   }
		
		
	//Zero the idle timer on mouse movement.
		   $(this).mousemove(function(e){
		      idleTime = 0;
		   });
		   $(this).click (function(e){
			      idleTime = 0;
			   });
		   $(this).keypress(function(e){
			      idleTime = 0;
			   });
		   
		 
		   
	
	}
		   function doPreload()
		   {  $('#signInModal').modal({backdrop: 'static', keyboard: false}); 
		      $("#signInModal").modal('show');
			  
		   }


function stopTime(){
	 clearInterval(idleInterval);	
}








$(document).on(
		'click',
		'#rosterDataTable tbody tr td.details-control',
		function() {
			var table = $('#rosterDataTable').DataTable();
			var row_clicked = $(this).closest('tr');
			var row = table.row(row_clicked);
			if (row.child.isShown() ) {
				row.child.hide();
				row_clicked.removeClass('shown');
				row_clicked.removeClass('highlightExpanded');
	        }
			else
			{
			var Id=row_clicked.find("td:eq(1) input[type='hidden']").val();
			$.ajax({
				method : 'POST',
				url : '/LegalBell' + '/allCasesAndQueriesByClientId/' + Id,
				success : function(response) {
					var caseDesc = response.result.bbData;
					//row.child( format(row.data(),Id)).show();
					row.child( format(Id)).show();
					loadData(caseDesc,Id);
                    row_clicked.addClass('shown');
                    row_clicked.addClass('highlightExpanded');
					},
				error : function() {
					loadAjaxErrorPage();
				}
			});
			
	        }	
			//return false; 
			});

/*function process(obj) {
	  for (var i in obj) {
	    var child = obj[i];
	    if (child === null)
	      obj[i] = "N.A";
	    else if (typeof(child)=="object")
	      process(child);
	  }
	  return obj;
	}
*/

function format(Id) {
		 return "<table class='table table-striped custab' id='clientDataTable"+Id+"' style='width: 640px;'>" +
		 		"<thead>" +
		 		"<tr style='background:#323f3f; color:#fff;'>"+
		        "<th>Service Name</th>" +
		        "<th>Service BriefDescription</th>" +
		        "<th>Service Status</th>" +
		        "<th>Action</th>" +
		        "</tr>" +
		        "</thead>" +
		        "</table>";
}

function loadData(data,Id){
$("#clientDataTable"+Id).dataTable().fnDestroy(); 
$("#clientDataTable"+Id).DataTable( {
	"order": [[ 0, "desc" ]],
	"bProcessing" : true,
	"sort" : "position",
	"bStateSave" : false,
	"iDisplayLength" : 5,
	"iDisplayStart" : 0,
	"aaData" : data,
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
}




$(document).on(
		'click',
		'#rosterDataTableClient tbody tr td.details-client-control',
		function() {
			var table = $('#rosterDataTableClient').DataTable();
			var row_clicked = $(this).closest('tr');
			var row = table.row(row_clicked);
			if (row.child.isShown() ) {
				row.child.hide();
				row_clicked.removeClass('shown');
				row_clicked.removeClass('highlightExpanded');
	        }
			else
			{
			
			var Id=$("#client_id").text();
			var service=row_clicked.find("td:eq(0)").html().replace(/\s/g,'');
			Id=Id.concat(","+service);
			//alert(Id);
			$.ajax({
				method : 'POST',
				url : '/LegalBell' + '/getAllCasesAndQueriesByServiceName/' + Id,
				success : function(response) {
					var caseDesc = response.result.bbData;
					row.child( formatClient(service)).show();
					loadDataClient(caseDesc,service);
                    row_clicked.addClass('shown');
                    row_clicked.addClass('highlightExpanded');
					},
				error : function() {
					loadAjaxErrorPage();
				}
			});
			
	        }	
			//return false; 
			});

/*function process(obj) {
	  for (var i in obj) {
	    var child = obj[i];
	    if (child === null)
	      obj[i] = "N.A";
	    else if (typeof(child)=="object")
	      process(child);
	  }
	  return obj;
	}
*/

function formatClient(service) {
		 return "<table class='table table-striped custab' id='clientInnerDataTable"+service+"' style='width: 640px;'>" +
		 		"<thead>" +
		 		"<tr style='background:#323f3f; color:#fff;'>"+
		        "<th>Service ID</th>" +
		        "<th>Service BriefDescription</th>" +
		        "<th>Service Status</th>" +
		        "<th>Action</th>" +
		        "</tr>" +
		        "</thead>" +
		        "</table>";
}

function loadDataClient(data,service){
$("#clientInnerDataTable"+service).dataTable().fnDestroy(); 
$("#clientInnerDataTable"+service).DataTable( {
	"order": [[ 0, "desc" ]],
	"bProcessing" : true,
	"sort" : "position",
	"bStateSave" : false,
	"iDisplayLength" : 5,
	"iDisplayStart" : 0,
	"aaData" : data,
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
}