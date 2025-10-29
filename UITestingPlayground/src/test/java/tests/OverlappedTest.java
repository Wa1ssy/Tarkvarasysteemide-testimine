package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class OverlappedTest extends BaseTest {

    @Test
    void overlappedTest() {
        driver.get("https://uitestingplayground.com/overlapped");
        WebElement input = driver.findElement(By.cssSelector("#name"));
        new Actions(driver).scrollToElement(input).perform();
        input.sendKeys("abc");
        assertEquals("abc", input.getAttribute("value"));
    }
}
