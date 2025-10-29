package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ClickTest extends BaseTest {

    @Test
    void clickTest() {
        driver.get("https://uitestingplayground.com/click");
        driver.findElement(By.cssSelector("#badButton")).click();
        assertTrue(driver.findElement(By.cssSelector("#badButton")).getAttribute("class").contains("btn-success"));
    }
}
