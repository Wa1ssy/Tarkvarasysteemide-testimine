package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class LoadDelayTest extends BaseTest {

    @Test
    void loadDelayTest() {
        driver.get("https://uitestingplayground.com/loaddelay");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("button.btn-primary")));
        assertTrue(driver.findElement(By.cssSelector("button.btn-primary")).isDisplayed());
    }
}
