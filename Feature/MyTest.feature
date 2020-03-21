Feature: Reset functionality on login page of the application

Scenario: Verification of reset button

Given open Fire fox and launch the application
When Enter the User name and password
Then click on sign in 
Then user is on home page




#Without Example keyword
#Scenario: Verification of reset button

#Given open Fire fox and launch the application
#When Enter the "Admin" and "mercury"
#Then click on sign in 
#Then user is on home page
#When select one way trip
#Then Choose no.of passengers
#Then select a departure city
#Then select Economy class
#Then click continue
#And close the browser




#With Example keyword
#Scenario Outline : Verification of reset button

#Given open Fire fox and launch the application
#When Enter the <username> and <password>
#Then click on sign in 
#Then user is on home page
#When select one way trip
#Then Choose no.of passengers
#Then select a departure city
#Then select Economy class
#Then click continue
#And close the browser

#Examples:
	#|username|password|
	#|Admin	 |mercury |
	#|Admin	 |mer     |









