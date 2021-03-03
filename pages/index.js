import React from 'react';
import HeadContent from "../src/components/HeadContent";
import MeuProposito from "../src/components/MeuProposito";
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import PreviaPosts from "../src/components/PreviaPosts";
import BemVindo from "../src/components/BemVindo";
import UltimosEventos from "../src/components/UltimosEventos";


export default function Home() {
    return (
        <div className="container-fluid p-0 root">
            <HeadContent title={'Por Dentro da Vida'} />
            <UltimosEventos />
        </div>
    )
}