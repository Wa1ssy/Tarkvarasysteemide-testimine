package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TextInputTest extends BaseTest {

    @Test
    void textInputTest() {
        driver.get("https://uitestingplayground.com/textinput");
        driver.findElement(By.cssSelector("#newButtonName")).sendKeys("Hello");
        driver.findElement(By.cssSelector("#updatingButton")).click();
        assertEquals("Hello", driver.findElement(By.cssSelector("#updatingButton")).getText());
    }
}
