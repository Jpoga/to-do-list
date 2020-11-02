import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password);
    };

    return (
        <form onSubmit={submit} className={"login-form"}>
            <div>
                <label htmlFor="username">Faça Seu Login</label>

                <input
                    type="text"
                    placeholder="Usuário"
                    name="username"
                    required
                    onChange={e => setUsername(e.target.value)}            
                />

                

                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    required
                    onChange={e => setPassword(e.target.value)}            
                />

                <button type="submit">Fazer Login</button>
            </div>

        </form>
    )
}