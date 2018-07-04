# WizardMaker

To start this application follow below steps.
1)npm install
2)ng serve


Features
--------
This application contain two routes.1)login 2)Main

1)To login to the app try with any email id and password it will allow user to login.

2)In the main page i used a custom wizard component to create a shipping label .

3)The wizard module consist of 3 components.
    a)main-wizard
    b)wizard-header
    c)wizard-step

    i)main-wizard->This is the wizard conainer that contins wizard steps and wizard header.Through this model will be passed to wizard.
    ii)wizard-header->This contains the progressbar for wizard.
    iii)wizard-step->This is used to add steps to the wizard.

    As content projection is used in all the components it is easy to  customize the steps 

4)The wizard component is itself is inside its own module called wizard module.The wizard uses its own service to change the steps .

5)I have used the wizard in main.component.

6)I have used only Materilize css library for styling the shipping label and whole app.






