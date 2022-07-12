# Framework
Angular

# Unit test
Jest

# Structure
In "src/app" there's the main code:
    in "mocks" there is a notes mock as data for doing the test. Also contains some mock classes for testing purposes (angular routing).

    in "core" there is the main service and models. For this test we consdier "Patient" as main interface and each Patient has a list of Notes

    `app.component` is the starting point of the app, and includes the `router-outlet`to navigate through the app. It consists on 2 pages. Patients list where user selects the patient who wants to check notes, and the notes pages

# theme
the app includes angular material and uses components such as buttons, cards, icons and spinner.
in "theme" folder it includes some default style, variables for spacing and colors, and mixins to agile the development

# features
when running the app, user get's to a page with a list of patient. By selecting one, he navigates to the notes page of that user. There, he sees a list of notes order by flag (flagged first) and then by date (newer first). User can flag/unflag notes and when doing it they're sorted again.
