import React from 'react';
import "../styles/secondpage.css"

export const SecondPage = () => {


    return (<>
        <div class="row">
            <div class="personalphoto">
                Hola
            </div>
            <div class="tabs">

                <input type="radio" id="tab1" name="tab-control" />
                <input type="radio" id="tab2" name="tab-control" />
                <input type="radio" id="tab3" name="tab-control" />
                <ul>
                    <li title="Profile"><label for="tab1" role="button"><span>Profile</span></label></li>
                    <li title="Education"><label for="tab2" role="button"><span>Education</span></label></li>
                    <li title="Experience"><label for="tab3" role="button"><span>Experience</span></label></li>
                </ul>

                <div class="slider">
                    <div class="indicator"></div>
                </div>
                <div class="content">
                    <section>
                        <h2>Profile</h2> I am a friendly person, who likes to work in a team, always willing to help and collaborate to meet the goals of both the team and my own, I am very good at making friends and I am that friend that everyone needs
                    </section>
                    <section>
                        <h2>Education</h2>

                        Outstanding student of the University of Cuenca, throughout my student career, I have carried out several projects, both Front End and Back End such as space reservation systems, home automation, etc. I consider myself a person who likes to learn every day. investigate, solve problems and strengthen my knowledge
                    </section>
                    <section>
                        <h2>Experience</h2>
                        Futura EC: Full Stack, 6 months in the development of finantial software.<br></br>
                        LegalSat: Actual free lancer developer full Stack, development in Legal Software Nexcitus </section>
                </div>
            </div>

        </div>
    </>)
}