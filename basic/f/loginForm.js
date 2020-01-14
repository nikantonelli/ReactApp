

    import React, { useReducer, useState } from 'react';
    import * as s from '../s/loginForm.style.js';

    function updateServer(conn, action) {
        switch (action.srvr) {
            case 'rally1':
                return {server: conn.server = "https://rally1.ralldev.com"};
            case 'eu1':
                return {server: conn.server = "https://eu1.ralldev.com"};
        }
    }

    function LoginForm() {
        const [conn, setConn]  = useReducer(updateServer, {
            username: '',
            password: '',
            server: 'https://rally1.rallydev.com',
            error: '',
            zsessionid: ''
        });

        const [userName, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const [server,setServer] = useState("https://rally1.rallydev.com");

        function handleNameChange(e) {
            setUserName(e.target.value);
        }
        function handlePassChange(e) {
            setPassword(e.target.value);
        }
        function handleSrvChange(e) {
            setServer(e.target.value);
        }
    
    return (
        <form id="login-form" method="POST" action="/admin/securityCheck">
            <h1>Rally Software</h1>
                <label style={s.authFormLabel}>
                    <span >Server</span>
                    <select value={server} name ="servers" onChange={handleSrvChange}>
                        <option value="https://rally1.rallydev.com">Rally1</option>
                        <option value="https://eu1.rallydev.com">Eu1</option>
                    </select>
                </label>
                <label style={s.authFormLabel}>
                    <span>Username</span>
                    <input id="j_username" name="j_username" type="text" 
                        value={userName} onChange= {handleNameChange}
                        
                    />
                </label>
                <label style={s.authFormLabel}>
                    <span >Password</span>
                    <input id="j_password" name="j_password" type="password"
                        value={password} onChange={handlePassChange}
                    />
                </label>
                                
                <input type="submit" id="login-button" value="Login"/>
                        <a href="/slm/resetPassword.tr">Forgot password?</a>
        </form>
    )

};
export default LoginForm;