import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import Header from './pages/home/header';

console.log(Header);

document.getElementById('content').appendChild(new Header().render());