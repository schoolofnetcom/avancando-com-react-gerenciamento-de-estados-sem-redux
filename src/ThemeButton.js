import React from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeButton(props) {
    return (
        <ThemeContext.Consumer>
            { theme => (
                <div>
                    <p>{JSON.stringify(theme)}</p>
                    <button {...props} style={{ background: theme.theme === 'light' ? '#fff' : '#000'}}>{ props.label }</button>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}