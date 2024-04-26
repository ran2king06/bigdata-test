
import logo from './../logo.svg';
import Button from '@mui/material/Button';

export default function HeaderComponents() {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
        </header>
    );
}