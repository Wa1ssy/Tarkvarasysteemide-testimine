package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class ScrollbarsTest extends BaseTest {

    @Test
    void scrollbarsTest() {
        driver.get("https://uitestingplayground.com/scrollbars");
        WebElement button = driver.findElement(By.cssSelector("#hidingButton"));
        new Actions(driver).scrollToElement(button).perform();
        button.click();
    }
}
