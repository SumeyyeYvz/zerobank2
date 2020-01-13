package com.ZeroBank2.step_definitions;

import com.ZeroBank2.pages.AddNewPayeePage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.Map;

public class AddNewPayeeStepDefs   {
    AddNewPayeePage addNewPayeePage=new AddNewPayeePage();

    @Given("the user is on  Add New Payee tab")
    public void the_user_is_on_Add_New_Payee_tab() {
        addNewPayeePage.GoToAddNewPayeeTab();

    }

    @Then("message	{string}	should	be	displayed")
    public void message_should_be_displayed(String expectedMessage) {
       Assert.assertTrue(addNewPayeePage.actualMessage.isDisplayed());
       Assert.assertEquals(expectedMessage,addNewPayeePage.PayeeCal());

    }

     @Given("creates	new	payee	using following	information")
     public void creates_new_payee_using_following_information(Map<String,String >payeeInfo){
        addNewPayeePage.createNewPayee(payeeInfo.get("Payee\tName"),payeeInfo.get("Payee\tAddress"),payeeInfo.get("Account"),payeeInfo.get("Payee\tdetails"));
     }



}



