import {DOMHelper} from "../../../../Helpers";

export default class Contact{
    renderButton(){
        const button = DOMHelper.createElement(
            'button',
            ['btn', 'btn-primary', 'btn-lg', 'btn-block'],
            [
                {prop: 'type', value: 'submit'}
            ]
        );
        button.innerText = "Submit";
        return button;
    }
    renderEmail(){
        const container = DOMHelper.createElement(
            'div',
            ['form-group']
        );
        const label = DOMHelper.createElement(
            'label',
            null,
            [
                {prop: 'for', value: 'email'}
            ]
        );
        const input = DOMHelper.createElement(
            'input',
            ['form-control'],
            [
                {prop: 'type', value: 'email'},
                {prop: 'id', value: 'email'},
                {prop: 'aria-describedby', value: 'emailHelp'},
                {prop: 'placeholder', value: 'Enter email'}
            ]
        );
        const small = DOMHelper.createElement(
            'small',
            ['form-text', 'text-muted'],
            [
                {prop: 'id', value: 'emailHelp'}
            ]
        );
        small.innerText = "We'll never share your email with anyone else.";
        label.innerText = "Email address";
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(small);
        return container;
    }
    renderMessage(){
        const container = DOMHelper.createElement(
            'div',
            ['form-group']
        );
        const label = DOMHelper.createElement(
            'label',
            null,
            [
                {prop: 'for', value: 'message'}
            ]
        );
        const textarea = DOMHelper.createElement(
            'textarea',
            ['form-control'],
            [
                {prop: 'rows', value: '3'},
                {prop: 'id', value: 'message'}
            ]
        );
        label.innerText = "Message";
        container.appendChild(label);
        container.appendChild(textarea);
        return container;
    }
    renderFormContainer(){
        const container = DOMHelper.createElement(
            'div',
            ['row', 'justify-content-center']
        );
        const formElement = DOMHelper.createElement(
            'form',
            ['w-50', 'pb-5']
        );
        formElement.appendChild(this.renderEmail());
        formElement.appendChild(this.renderMessage());
        formElement.appendChild(this.renderButton());
        container.appendChild(formElement);
        return container;
    }
    renderHeader(){
        const container = DOMHelper.createElement(
            'div',
            ['row', 'justify-content-center', 'p-4']
        );
        const headerElement = DOMHelper.createElement(
            'h1',
            ['text-dark', 'display-4']
        );
        headerElement.innerText = "Contact Us:";
        container.appendChild(headerElement);
        return container;
    }
    render(){
        const container = DOMHelper.createElement(
            'div',
            ['row', 'justify-content-center']
        );
        const innerContainer = DOMHelper.createElement(
            'div',
            ['container']
        );
        innerContainer.appendChild(this.renderHeader());
        innerContainer.appendChild(this.renderFormContainer());
        container.appendChild(innerContainer);
        return container;
    }
}