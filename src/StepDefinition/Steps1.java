package StepDefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps1 {

	
WebDriver driver;

@Given("^user launch the URL$")
public void user_launch_the_URL() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "D:\\Drivers\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("https://developer.here.com/documentation");
}

@And("^user is on homepage$")
public void user_is_on_homepage() throws Throwable {
	String expectUrl = "https://developer.here.com/documentation";
  
	String actualUrl = driver.getCurrentUrl();
	if (actualUrl.equals(expectUrl)) {
		System.out.println("True");
	}else{
		System.out.println("False");
	}
}

@When("^user click on a link$")
public void user_click_on_a_link() throws Throwable {
	List<WebElement> link = driver.findElements(By.tagName("a"));
	
	for (WebElement webElement : link) {
		webElement.click();
		if (driver.getCurrentUrl().contains("developer")) {
			driver.navigate().back();
		}
	}
  
}
	
	
}
