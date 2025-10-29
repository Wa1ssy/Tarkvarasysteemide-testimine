package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class DynamicIdTest extends BaseTest {

    @Test
    void dynamicIdClick() {
        driver.get("https://uitestingplayground.com/dynamicid");
        driver.findElement(By.cssSelector("button.btn-primary")).click();
    }
}
