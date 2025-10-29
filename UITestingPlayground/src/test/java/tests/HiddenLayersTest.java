package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementClickInterceptedException;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class HiddenLayersTest extends BaseTest {

    @Test
    void hiddenLayersTest() {
        driver.get("https://uitestingplayground.com/hiddenlayers");
        driver.findElement(By.cssSelector("#greenButton")).click();
        assertThrows(ElementClickInterceptedException.class,
                () -> driver.findElement(By.cssSelector("#greenButton")).click());
    }
}
