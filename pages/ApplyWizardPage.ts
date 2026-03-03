import {Page} from "@playwright/test";
import {RegisterPage} from "./RegisterPage";
import ApplyForJobPage from "./ApplyForJobPage";
import AboutYouPage from "./AboutYouPage";
import SupportingInfoPage from "./SupportingInfoPage";
import {EqualoppsPage} from "./EqualoppsPage";
import {DeclarationPage} from "./DeclarationPage";


export default class ApplyWizardPage {

public registerPage: RegisterPage;    
public JobApplyPage: ApplyForJobPage;
public aboutYouPage: AboutYouPage;
public supportingInfoPage: SupportingInfoPage;
public equaloppsPage: EqualoppsPage;
public declarationPage: DeclarationPage;


constructor(public page: Page) {

    this.registerPage = new RegisterPage(page);
    this.JobApplyPage= new ApplyForJobPage(page);
    this.aboutYouPage = new AboutYouPage(page);
    this.supportingInfoPage = new SupportingInfoPage(page);
    this.equaloppsPage = new EqualoppsPage(page);
    this.declarationPage = new DeclarationPage(page);   

}
};
