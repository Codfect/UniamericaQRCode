import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

import Header from '../../components/Header';

function Alunos() {
    return (
        <>
            <Header />
            <main>
                <section class="title">
                    <h2>Alunos Cadastrados</h2>
                    <Link to="alunos/cadastrar" className="button">+ Cadastrar Alunos</Link>
                </section>

                <section class="alunos">
                        <section key="aluno.id" class="aluno-item">
                        <section class="avatar">
                            <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar-1280x720.jpg"
                                alt="aluno.nomecompleto" class="avatar" />
                        </section>
                        <span>aluno.nomecompleto</span>
                    </section>                        

                </section>
            </main>
        </>
    );
}

export default Alunos;
