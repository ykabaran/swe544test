$(function() {
  $("#menuIntroduction").on("click", function(){
    loadIntroduction();
  });
  
  $("#menuTestPlan").on("click", function(){
    loadTestPlan();
  });
  
  $("#menuTestNotes").on("click", function(){
    loadTestNotes();
  });
  
  $(".menuTestUser").on("click", function(){
    loadTestUser($(this));
  });
  
  $(".menuTestCase").on("click", function(){
    loadTestCase($(this));
  });
});

function clearActiveMenu(){
  $(".menuItem").removeClass("active");
  $(".contentView").hide();
}

function loadIntroduction(){
  clearActiveMenu();
  
  $("#menuIntroduction").addClass("active");
  $("#introductionView").show();  
}

function loadTestPlan(){
  clearActiveMenu();
  
  $("#menuTestPlan").addClass("active");
  $("#testPlanView").show();
}

function loadTestNotes(){
  clearActiveMenu();
  
  $("#menuTestNotes").addClass("active");
  $("#testNotesView").show();
}

function loadTestUser(testUser){
  clearActiveMenu();
  
  testUser.addClass("active");
  var contentView = $("#dynamicView");
  
  var userId = testUser.attr("user-id");
  var testUserTemplate = _.template($("#testUserTemplate").html());
  var contentHtml = testUserTemplate(users[userId]);

  contentView.html(contentHtml);
  contentView.show();
}

function loadTestCase(testCase){
  clearActiveMenu();
  
  testCase.addClass("active");
  var contentView = $("#dynamicView");
  
  var caseId = testCase.attr("test-id");
  var testCaseTemplate = _.template($("#testCaseTemplate").html());
  var contentHtml = testCaseTemplate(tests[caseId]);

  contentView.html(contentHtml);
  contentView.show();
}