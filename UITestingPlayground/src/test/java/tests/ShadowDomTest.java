package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ShadowDomTest extends BaseTest {

    @Test
    void shadowDomTest() {
        driver.get("https://uitestingplayground.com/shadowdom");
        WebElement shadowHost = driver.findElement(By.cssSelector("guid-generator"));
        WebElement shadowRoot = shadowHost.getShadowRoot();
        assertTrue(shadowRoot.findElement(By.cssSelector("#editField")).isDisplayed());
    }
}
