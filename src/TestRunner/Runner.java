package TestRunner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="D:\\Selenium_Framework\\CucumberWithSelenium\\Feature\\MyTest.feature",//path of the feature file
glue={"StepDefinition"},//path of the step definition file

//format = {"pretty","html:test-output"},//to generate different types of reporting

monochrome = true,// display the console o/p in proper readable format

strict = true, // it checks if any step is not defined in step definition file

dryRun = true // to check the mapping is proper btn feature file and step defn file
)
public class Runner {

}
