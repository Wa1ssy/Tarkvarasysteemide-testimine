package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class MouseOverTest extends BaseTest {

    @Test
    void mouseOverTest() {
        driver.get("https://uitestingplayground.com/mouseover");
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(By.cssSelector("a[href='#']"))).click().perform();
        actions.moveToElement(driver.findElement(By.cssSelector("a[href='#']"))).click().perform();
        String count = driver.findElement(By.cssSelector("#clickCount")).getText();
        assertEquals("2", count);
    }
}
