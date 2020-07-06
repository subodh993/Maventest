Feature: Free CRM Login Feature

Background: User is Logged In
 Given user is already on Login Pages

@what 
Scenario Outline: Free CRM Login Test Scenario1

Given user is already on Login Page
#When title of login page is Free CRM
Then user enters "<username>" and "<password>"
#Then user clicks on login button
#Then user is on home page
#Then Close the browser


Examples:
	| username | password |
	| naveenk  | test@123 |
	|  tom     | test456  | 	

@whats @wip
Scenario Outline: Free CRM Login Test Scenario2

Given user is already on Login Page
#When title of login page is Free CRM
Then user enters "<username>" and "<password>"
#Then user clicks on login button
#Then user is on home page
#Then Close the browser


Examples:
	| username | password |
	| Subodh   | Gaur     |
	
			