export default class Logo {
    renderNavAnchor(){
        const anchorElement = document.createElement('a');
        anchorElement.classList.add('navbar-brand');
        anchorElement.innerText = "Cagarweyne Restaurant";
        return anchorElement;
    }
    renderNavElement(){
        const navElement = document.createElement('nav');
        navElement.classList.add('navbar');
        navElement.classList.add('navbar-dark');
        navElement.classList.add('bg-primary');
        navElement.classList.add('d-flex');
        navElement.classList.add('justify-content-center');
        navElement.classList.add('rounded-lg');
        navElement.appendChild(this.renderNavAnchor());
        return navElement;
    }
    render(){
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('col-2');
        logoContainer.appendChild(this.renderNavElement());
        return logoContainer;
    }
}