$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/TransferMoney.feature");
formatter.feature({
  "name": "Transfer Money",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@transfer_money"
    }
  ]
});
formatter.scenario({
  "name": "User should be able to transfer money successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@transfer_money"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on Account Summary page",
  "keyword": "Given "
});
formatter.match({
  "location": "TransferMoneyStepDefs.theUserIsOnAccountSummaryPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Transfer Money",
  "keyword": "When "
});
formatter.match({
  "location": "TransferMoneyStepDefs.the_user_clicks_on_Transfer_Money()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters valid transfer information and the user clicks on continue",
  "keyword": "And "
});
formatter.match({
  "location": "TransferMoneyStepDefs.the_user_enters_valid_transfer_information_and_the_user_clicks_on_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "TransferMoneyStepDefs.the_user_clicks_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see \"You successfully submitted your transaction.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "TransferMoneyStepDefs.the_user_should_see_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});