package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.*;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ClassAttributeTest extends BaseTest {

    @Test
    void classAttrAlert() {
        driver.get("https://uitestingplayground.com/classattr");
        driver.findElement(By.cssSelector(".btn-primary")).click();
        Alert alert = driver.switchTo().alert();
        assertTrue(alert.getText().contains("primary"));
        alert.accept();
    }
}
