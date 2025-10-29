package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class SampleAppLogoutTest extends BaseTest {

    @Test
    void sampleAppLogout() {
        driver.get("https://uitestingplayground.com/sampleapp");
        driver.findElement(By.cssSelector("#username")).sendKeys("Test");
        driver.findElement(By.cssSelector("#password")).sendKeys("pwd");
        driver.findElement(By.cssSelector("#login")).click();
        driver.findElement(By.cssSelector("#login")).click(); // Logout
        String text = driver.findElement(By.cssSelector("#loginstatus")).getText();
        assertEquals("User logged out.", text);
    }
}
