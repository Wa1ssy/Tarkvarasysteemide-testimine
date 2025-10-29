package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class AjaxDataTest extends BaseTest {

    @Test
    void ajaxDataTest() {
        driver.get("https://uitestingplayground.com/ajax");
        driver.findElement(By.cssSelector("#ajaxButton")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".bg-success")));
        assertEquals("Data loaded with AJAX get request.", 
                driver.findElement(By.cssSelector(".bg-success")).getText());
    }
}
