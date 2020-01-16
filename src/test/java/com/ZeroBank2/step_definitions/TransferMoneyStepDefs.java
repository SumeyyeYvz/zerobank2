package com.ZeroBank2.step_definitions;

import com.ZeroBank2.pages.LoginPage;
import com.ZeroBank2.pages.TransferMoneyPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class TransferMoneyStepDefs {
    TransferMoneyPage transferMoneyPage=new TransferMoneyPage();

    LoginPage loginPage = new LoginPage();

    @Given("the user is on Account Summary page")
    public void theUserIsOnAccountSummaryPage() {
        loginPage.Login();


    }
    @When("the user clicks on Transfer Money")
    public void the_user_clicks_on_Transfer_Money() throws InterruptedException {
        transferMoneyPage.transferFundsTab.click();
    }
    @When("the user enters valid transfer information and the user clicks on continue")
    public void the_user_enters_valid_transfer_information_and_the_user_clicks_on_continue() {
        transferMoneyPage.TransferMoney();
    }

    @When("the user clicks on submit button")
    public void the_user_clicks_on_submit_button() {
        transferMoneyPage.continueButton.click();
    }

    @Then("the user should see {string} message")
    public void the_user_should_see_message(String expectedMessage) {
        String actualMessage=transferMoneyPage.transferMessage.getText();
        Assert.assertEquals(expectedMessage,actualMessage);
    }

}
