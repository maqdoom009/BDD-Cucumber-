$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Selenium_Framework/CucumberWithSelenium/Feature/MyTest.feature");
formatter.feature({
  "line": 1,
  "name": "Reset functionality on login page of the application",
  "description": "",
  "id": "reset-functionality-on-login-page-of-the-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verification of reset button",
  "description": "",
  "id": "reset-functionality-on-login-page-of-the-application;verification-of-reset-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "open Fire fox and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the User name and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on sign in",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select one way trip",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Choose no.of passengers",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select a departure city",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "select Economy class",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click continue",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.open_firefox_launch_the_application()"
});
formatter.result({
  "duration": 25201842242,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Enter_username_and_password()"
});
formatter.result({
  "duration": 879257803,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Reset_the_credential()"
});
formatter.result({
  "duration": 5356464920,
  "status": "passed"
});
formatter.match({
  "location": "Steps.home_page_should_be_displayed()"
});
formatter.result({
  "duration": 9688002,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_one_way_trip()"
});
formatter.result({
  "duration": 50152402452,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //input[@name\u003d\u0027tripType\u0027][2]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-TF80URS\u0027, ip: \u0027192.168.0.112\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\Md Junaid\\AppData\\Local\\Temp\\rust_mozprofileJXzzsw, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.25.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d69.0, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d10916.0, browserName\u003dfirefox, moz:buildID\u003d20190827005903, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: adc08350-26b0-4296-8a23-9792dbbbf97d\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027tripType\u0027][2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat StepDefinition.Steps.select_one_way_trip(Steps.java:52)\r\n\tat ✽.When select one way trip(D:/Selenium_Framework/CucumberWithSelenium/Feature/MyTest.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.choose_no_of_passengers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.select_a_departure_city()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.select_Economy_class()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});