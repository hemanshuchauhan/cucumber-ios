Feature: Using Continuous Operations with Clear Entry Function

  Scenario: Verifying Continuous Operations with Clear Entry Function
    Given I have the calculator open to test Continuous Operations with Clear Entry
    When I enter '6X3+4'
    When I hit the clear entry button
    Then The input should revert to '6*3+', removing the last entry
    When I hit the clear entry button again
    And I hit the equals button '='
    Then The result should show '18'