package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;

public class ProgressBarTest extends BaseTest {

    @Test
    void progressBarTest() {
        driver.get("https://uitestingplayground.com/progressbar");
        driver.findElement(By.cssSelector("#startButton")).click();

        while (true) {
            int value = Integer.parseInt(driver.findElement(By.cssSelector("#progressBar"))
                    .getAttribute("aria-valuenow"));
            if (value >= 75) {
                driver.findElement(By.cssSelector("#stopButton")).click();
                break;
            }
        }
    }
}
