interface RegistrationInterface {
    dom:HTMLDivElement;
    createAccount: () => void
}
export class Registration implements RegistrationInterface {
    dom: HTMLDivElement;
    constructor() {
        this.dom = document.createElement('div')
        this.dom.id = "container"
    }
    createAccount():void {

    }
}