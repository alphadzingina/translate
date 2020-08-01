import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        return (
            <div>
                <div><h1>TRANSLATE</h1></div>
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
                </div>
            </div>
        );
    }
}

export default LanguageSelector;