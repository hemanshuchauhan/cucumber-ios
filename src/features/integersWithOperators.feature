Feature: Using Calculation with All Operators and Integers

  Scenario: Verifying Calculation with All Operators and Integers
    Given I have the calculator app open to test All Operators and Integers Calculation
    When I enter the calculation '-5+12/3X2=' containing integers and operators
    Then The result should be '3', a positive integer