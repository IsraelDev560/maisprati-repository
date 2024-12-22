import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { UserContext } from '../../contexts/UserContext';
import { useTranslation } from 'react-i18next';

const Error = styled.span`
    color: #ed1e1e;
`

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const { login } = useContext(UserContext); 
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const { t, i18n } = useTranslation();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setUser({
                ...user,
                [name]: checked
            });
        } else if (name === 'language') {
            setSelectedLanguage(value);
            i18n.changeLanguage(value); // Muda o idioma
        } else {
            setUser({
                ...user,
                [name]: value
            });
        }
    };

    const validate = () => {
        const newErrors = {}

        if (!user.email) {
            newErrors.email = t("email_error");
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            newErrors.email = t('email_invalid');
        }
        if (!user.password) {
            newErrors.password = t("password_error");
        } else if (user.password.length < 8) {
            newErrors.password = t("password_length_error");
        }

        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validateErrors = validate();

        setErrors(validateErrors);

        if (Object.keys(validateErrors).length === 0) {
            login();
            navigate('/Users');
        } else {
            setErrors(validateErrors)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="login">
                    <form onSubmit={handleSubmit}>
                        <h1>{t('sign_in')}</h1>
                        <input className="inputLogins"
                            type="email"
                            name="email"
                            value={user.email}
                            placeholder={t('email_placeholder')}
                            onChange={handleChange}
                        />
                        {errors.email && <Error>{errors.email}</Error>}
                        <input className="inputLogins"
                            value={user.password}
                            name="password"
                            type="password"
                            placeholder={t('password_placeholder')}
                            onChange={handleChange}
                        />
                        {errors.password && <Error>{errors.password}</Error>}
                        <button type="submit" className="redButton">{t('sign_in')}</button>

                        <span className="or">{t('or')}</span>
                        <button className="codeAcess">{t('use_access_code')}</button>
                        <span className="password">{t('forgot_password')}</span>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                name="remember"
                                onChange={handleChange}
                            />
                            <label htmlFor="remember">{t('remember_me')}</label>
                        </div>
                        <div className="lastElements">
                            <span className="gray">{t('new_here')} <span className="white">{t('subscribe_now')}</span> </span> <br /> <br />
                            <span className="small">
                                {t('protected_by_recaptcha')}
                                <span className="blue"> {t('find_out_more')}</span>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <footer>
                <div className="footer-container">
                    <div className="footer-elements">
                        <p>{t('questions')}</p>
                        <ul>
                            <li><a href="#">{t('faq')}</a></li>
                            <li><a href="#">{t('help')}</a></li>
                            <li><a href="#">{t('terms')}</a></li>
                            <li><a href="#">{t('privacy')}</a></li>
                            <li><a href="#">{t('cookie')}</a></li>
                            <li><a href="#">{t('corporate')}</a></li>
                        </ul>
                        <div className="language-select">
                            <select value={selectedLanguage} onChange={handleChange} name="language">
                                <option value="en">English</option>
                                <option value="pt">Portuguese</option>
                            </select>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
