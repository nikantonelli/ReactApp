  // This is the Link API
import LoginForm from '../f/loginForm.js';

const state = {
    username: '',
    password: '',
    error: ''
};

function Index () {
    return (
        <div>
            <LoginForm />
        </div>
    )};

export default Index;