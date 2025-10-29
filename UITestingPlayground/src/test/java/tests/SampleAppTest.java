package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class SampleAppTest extends BaseTest {

    @Test
    void sampleAppLogin() {
        driver.get("https://uitestingplayground.com/sampleapp");
        driver.findElement(By.cssSelector("#username")).sendKeys("Test");
        driver.findElement(By.cssSelector("#password")).sendKeys("pwd");
        driver.findElement(By.cssSelector("#login")).click();
        String text = driver.findElement(By.cssSelector("#loginstatus")).getText();
        assertEquals("Welcome, Test!", text);
    }
}
