Feature: Error Scenarios are Caught

  Scenario: Verifying Error Scenarios are Caught
    Given I have the calculator app open to test Error Scenarios are Caught
    When I enter the calculation '6X3+4'
    When I hit the clear entry button to remove the last number
    Then The input should be showing '6*3+'
    And I hit the equals button '=' to get the solution
    Then The error pop-up is shown