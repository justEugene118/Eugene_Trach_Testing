Feature: testing

  Background:
    requests are sent from Ukraine

  Scenario: run test
    Given main page of https://www.epam.com
    When page refresh
    Then get 200 OK for GET request https://www.epam.com


  Scenario: nav test
    Given main page of https://www.epam.com/
    When cursor on one of nav elements
    Then show detailed menu


  Scenario: slider test
    Given main page of https://www.epam.com/
    When cursor on one of slider elements
    Then open description info


  Scenario: language test
    Given main page of https://www.epam.com/
    When clicked on language selection button
    And clicked on other language
    Then redirected to chosen language version of page


  Scenario Outline: career page test
    Given career page https://www.epam.com/careers
    When entered <keyword>
    And chosen <country> from list
    Then displayed list of filtered available jobs

    Examples:
      | keyword | country |
      | Frontend| Ukraine |
      | Backend | Ukraine |
      | BigData | India   |
      | QA      | Austria |


  Scenario: about-video test
    Given about page https://www.epam.com/about
    When page refreshed
    Then video https://www.youtube.com/watch?v=jJPKUgsQLfU displayed


  Scenario: about-history test
    Given about page https://www.epam.com/about
    When history section is on screen
    Then animation played


  Scenario: open-source page numbers animation test
    Given open-source page open-source page
    When numbers section on screen
    Then animations played