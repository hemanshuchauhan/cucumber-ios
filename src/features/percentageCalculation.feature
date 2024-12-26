Feature: Using Percentage Conversion in a Complex Calculation

  Scenario: Verifying Complex Percentage Calculation Functionality
    Given I have the calculator app open to test percentage calculation
    When I enter the calculation '50+10%=' with percentage in it
    Then The result should be decimal value '50.10'
    When I do subtraction as '-5='
    Then The result should be '45.10', a decimal value