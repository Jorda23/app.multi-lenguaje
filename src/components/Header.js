import React from "react";
import es from './../img/spain.png';
import en from './../img/united-kingdom.png';
import { useTranslation } from "react-i18next";

export default function Header() {
    const [t, i18n] = useTranslation("global");

    return (
        <div>
            <h1>{t("header.hello-world")}</h1>
            <br></br>
            <div className="banderas">
            <button onClick={()=> i18n.changeLanguage("es")}><img src={es}/></button>
            <button onClick={()=> i18n.changeLanguage("en")}><img src={en}/></button>
            </div>

        </div>
    );
}

