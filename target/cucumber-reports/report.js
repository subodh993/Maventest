$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Free CRM Login Test Scenario2",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@whats"
    },
    {
      "line": 18,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#When title of login page is Free CRM"
    }
  ],
  "line": 23,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 25,
      "value": "#Then user is on home page"
    },
    {
      "line": 26,
      "value": "#Then Close the browser"
    }
  ],
  "line": 29,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario2;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 30,
      "id": "free-crm-login-feature;free-crm-login-test-scenario2;;1"
    },
    {
      "cells": [
        "Subodh",
        "Gaur"
      ],
      "line": 31,
      "id": "free-crm-login-feature;free-crm-login-test-scenario2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Free CRM Login Test Scenario2",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@wip"
    },
    {
      "line": 18,
      "name": "@whats"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#When title of login page is Free CRM"
    }
  ],
  "line": 23,
  "name": "user enters \"Subodh\" and \"Gaur\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Subodh",
      "offset": 13
    },
    {
      "val": "Gaur",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});