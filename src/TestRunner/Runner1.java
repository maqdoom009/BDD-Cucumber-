package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D:\\Selenium_Framework\\CucumberWithSelenium\\Feature\\Test.feature",
glue = {"StepDefinition"},

monochrome = true,

strict = true,
dryRun = false
)
public class Runner1 {

}
