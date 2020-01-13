$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddNewPayee.feature");
formatter.feature({
  "name": "Add\tnew\tpayee\tunder\tpay\tbills",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@add_new_payee"
    }
  ]
});
formatter.scenario({
  "name": "Add\ta\tnew\tpayee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@add_new_payee"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountSummaryStepDefs.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is on  Add New Payee tab",
  "keyword": "Given "
});
formatter.match({
  "location": "AddNewPayeeStepDefs.the_user_is_on_Add_New_Payee_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates\tnew\tpayee\tusing following\tinformation",
  "rows": [
    {
      "cells": [
        "Payee\tName",
        "The\tLaw\tOffices\tof\tHyde,\tPrice\t\u0026\tScharks"
      ]
    },
    {
      "cells": [
        "Payee\tAddress",
        "100\tSame\tst,\tAnytown,\tUSA,\t10001"
      ]
    },
    {
      "cells": [
        "Account",
        "Checking"
      ]
    },
    {
      "cells": [
        "Payee\tdetails",
        "XYZ\taccount"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AddNewPayeeStepDefs.creates_new_payee_using_following_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message\t\"The new payee The100 was successfully created.\"\tshould\tbe\tdisplayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddNewPayeeStepDefs.message_should_be_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});