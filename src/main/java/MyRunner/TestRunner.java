package MyRunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.ClassRule;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;



	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "src/main/java/Features/login.feature", 
			glue={"stepDefinitions"}, 
			monochrome = true, 
			snippets = SnippetType.CAMELCASE,
//			tags = {"~@what"},
			
	//		plugin = {"pretty","summary"},
			strict = true
//			plugin = {"pretty","html:target/cucumber-reports"},
//			cucumber.execution.wip = true,
		
//			dryRun = true
			//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
			)
	 
	public class TestRunner {
		@BeforeClass
		public static void setUP1(){
			System.out.println("@BeforeClass");
		}
		
		@AfterClass
		public static void tearDown1(){
			System.out.println("@AfterClass");
		}
		
/*		@ClassRule
		public static void tearDown3(){
			System.out.println("@AfterClass");
		}*/
	}
	
	//ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as @SmokeTest OR @RegressionTest
	//ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests tagged as @SmokeTest AND @RegressionTest
	

