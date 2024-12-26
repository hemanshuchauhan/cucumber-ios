Feature: Basic Operations like Addition, Subtraction, Multiplication and Division Functionality

  Scenario: Verifying Addition Functionality - Positive
    Given I have the calculator app open
    When I enter '2' '+' '3' and press '='
    Then The result should be '5'

  Scenario: Verifying Addition Functionality - Negative
    Given I have the calculator app open
    When I enter '2' '+' '3' and press '='
    Then The result should not be '6'

  Scenario: Verifying Subtraction Functionality - Positive
    Given I have the calculator app open
    When I enter '3' '-' '1' and press '='
    Then The result should be '2'

  Scenario: Verifying Subtraction Functionality - Negative
    Given I have the calculator app open
    When I enter '4' '-' '3' and press '='
    Then The result should not be '6'

  Scenario: Verifying Multiplication Functionality - Positive
    Given I have the calculator app open
    When I enter '3' 'X' '2' and press '='
    Then The result should be '6'

  Scenario: Verifying Multiplication Functionality - Negative
    Given I have the calculator app open
    When I enter '4' 'X' '3' and press '='
    Then The result should not be '10'

  Scenario: Verifying Division Functionality - Positive
    Given I have the calculator app open
    When I enter '4' '/' '2' and press '='
    Then The result should be '2'

  Scenario: Verifying Division Functionality - Negative
    Given I have the calculator app open
    When I enter '4' '/' '4' and press '='
    Then The result should not be '4'

  