export default class Contact{
    renderButton(){
        const button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('btn-lg');
        button.classList.add('btn-block');
        button.innerText = "Submit";
        return button;
    }
    renderEmail(){
        const container = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        const small = document.createElement('small');
        input.setAttribute('type','email');
        input.setAttribute('id','email');
        input.setAttribute('aria-describedby','emailHelp');
        input.setAttribute('placeholder','Enter email');
        input.classList.add('form-control');
        small.setAttribute('id','emailHelp');
        small.classList.add('form-text');
        small.classList.add('text-muted');
        small.innerText = "We'll never share your email with anyone else.";
        label.setAttribute('for', 'email');
        label.innerText = "Email address";
        container.classList.add('form-group');
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(small);
        return container;
    }
    renderMessage(){
        const container = document.createElement('div');
        const label = document.createElement('label');
        const textarea = document.createElement('textarea');
        textarea.setAttribute('rows','3');
        textarea.setAttribute('id','message');
        textarea.classList.add('form-control');
        label.setAttribute('for', 'message');
        label.innerText = "Message";
        container.classList.add('form-group');
        container.appendChild(label);
        container.appendChild(textarea);
        return container;
    }
    renderFormContainer(){
        const container = document.createElement('div');
        const formElement = document.createElement('form');
        container.classList.add('row');
        container.classList.add('justify-content-center');
        formElement.classList.add('w-50');
        formElement.classList.add('pb-5');
        formElement.appendChild(this.renderEmail());
        formElement.appendChild(this.renderMessage());
        formElement.appendChild(this.renderButton());
        container.appendChild(formElement);
        return container;
    }
    renderHeader(){
        const container = document.createElement('div');
        const headerElement = document.createElement('h1');
        container.classList.add('row');
        container.classList.add('justify-content-center');
        container.classList.add('p-4');
        headerElement.classList.add('text-dark');
        headerElement.classList.add('display-4');
        headerElement.innerText = "Contact Us:";
        container.appendChild(headerElement);
        return container;
    }
    render(){
        const container = document.createElement('div');
        const innerContainer = document.createElement('div');
        container.classList.add('row');
        container.classList.add('justify-content-center');
        innerContainer.classList.add('container');
        innerContainer.appendChild(this.renderHeader());
        innerContainer.appendChild(this.renderFormContainer());
        container.appendChild(innerContainer);
        return container;
    }
}