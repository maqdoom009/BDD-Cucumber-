package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	
	WebDriver driver;
	@Given("^open Fire fox and launch the application$")
	public void open_firefox_launch_the_application(){
		
		/*System.setProperty("webdriver.gecko.driver", "D:\\Drivers\\geckodriver.exe");
		driver=new FirefoxDriver();*/
		
		System.setProperty("webdriver.chrome.driver", "D:\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.get("http://newtours.demoaut.com/");
		
		}
	
	@When("^Enter the User name and password$")
	public void Enter_username_and_password(){
		driver.findElement(By.name("userName")).sendKeys("Admin");
		driver.findElement(By.name("password")).sendKeys("mercury");
		}

	@Then("^click on sign in$")
	public void Reset_the_credential() {
		driver.findElement(By.name("login")).click();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		}
	@Then("^user is on home page$")
	public void home_page_should_be_displayed() {
	String title = driver.getTitle();
	System.out.println("title of the page is ::"+ title);
	
	
}

/*
	@When("^select one way trip$")
	public void select_one_way_trip()  {
	driver.findElement(By.xpath("//input[@name='tripType'][2]")).click();
   }

	@Then("^Choose no\\.of passengers$")
	public void choose_no_of_passengers() {
    Select sel = new Select(driver.findElement(By.name("passCount")));
    sel.selectByValue("2");
}

	@Then("^select a departure city$")
	public void select_a_departure_city() {
	
	WebElement dep = driver.findElement(By.name("fromPort"));
	Select s = new Select(dep);
	s.selectByVisibleText("Frankfurt");
}

	@Then("^select Economy class$")
	public void select_Economy_class() {
    driver.findElement(By.name("servClass")).click();
}

	@Then("^click continue$")
	public void click_continue() {
	driver.findElement(By.name("findFlights")).click();

}
	@And("^close the browser$")
	public void close_the_browser(){
		driver.quit();
	}
		*/




}
