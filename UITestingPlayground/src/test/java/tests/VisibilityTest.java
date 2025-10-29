package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import static org.junit.jupiter.api.Assertions.*;

public class VisibilityTest extends BaseTest {

    @Test
    void visibilityTest() {
        driver.get("https://uitestingplayground.com/visibility");
        driver.findElement(By.cssSelector("#hideButton")).click();
        assertFalse(driver.findElement(By.cssSelector("#removedButton")).isDisplayed());
    }
}
