import { Link } from "react-router-dom";
import React from 'react';
import '../ComponentStyling/Resume.css';
import TextType from '../Components/TextType';


function Resume() {
    return (
        <div className="flex flex-col w-full bg-neutral-800 min-h-screen p-5 " id="Resume">

            <div className="inner-Resume-Container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-10 ms-4">
                    <div className="absolute  bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                    <TextType
                        text={["A journey through creativity & code"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        deletingSpeed={20}
                        loop={true}
                        className="text-2xl font-semibold text-white"
                    />
                    <p className="text-base text-neutral-200 mt-2 text-balance">
                        I have loved digital creation for as long as I can remember. I’ve always been the person with a camera in hand, capturing memories, friends, and strangers along the way. At a young age I also discovered blogging, and with it my first glimpse into CSS and HTML.

                        When it became time for high school, the natural choice was to continue exploring creativity and digital expression. I enrolled at NTI Media High School in Gothenburg where I specialized in photographic imagery and graphic design.

                        <br /><br />
                        Over the years, I have done everything from driving forklifts to working in restaurants before finding my way to Telia where I spent nearly six year working with incident and customer management.
                        Eventually I took on the role of improvement ambassador, and in this role I focused on process improvements, internal tools, and customer-facing routines. This is where I realized how much I enjoyed problem-solving, efficiency, and structure, not just in theory but in practice.
                        It was during this time that I decided to fully pursue programming, a path that allowed me to combine all the things I love: problem-solving, structure, creativity, and digital creation. I began my education in .NET development at Teknikhögskolan in Gothenburg.

                    </p>

                    <TextType
                        text={["But what about the future?"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        deletingSpeed={20}
                        loop={true}
                        className="text-xl font-semibold text-white pt-4"
                    />

                    <p className="text-base text-neutral-200 mt-2 ">
                        Looking ahead, I see a future where I can continue to grow as a developer. I am eager to take on new challenges, learn new technologies, and contribute to exciting projects. My goal is to become a well-rounded developer who can work across the entire stack, and who can contribute to both technical solutions and user experiences.

                        <br></br>
                        <br></br>
                        I would love to grow into a role such as Scrum Master or within DevOps, where I can combine technical expertise with agile leadership. <span className="text-yellow-400 font-bold" > Who knows what the future holds? I am excited to find out! </span> </p>


                </div>

                <ol className="relative border-s border-neutral-200 dark:border-gray-700">
                    <li className="mb-5 ms-4">
                        <div className="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h2 className="text-xl font-semibold text-white">Experience</h2>
                        <time className="mb-1 text-sm text-neutral-400">Webmind, Gothenburg | October 2024 – May 2025</time>
                        <h3 className="text-lg font-semibold text-white">Junior Developer - Internship</h3>
                        <p className="text-base text-neutral-400">
                            As part of my education I had the privilege of spending a few months at Webmind, an Umbraco-based web agency. During my internship and contributed to both frontend and backend development of custom Umbraco websites, gaining hands-on experience with CMS integration, cloud hosting and agile collaboration.
                        </p>
                    </li>

                    <li className="mb-2 ms-4">
                        <div className="absolute w-3 h-3 bg-neutral-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h2 className="text-xl font-semibold text-white">Education</h2>
                        <time className="mb-1 text-sm text-neutral-400">Teknikhögskolan Gothenburg | August 2023 - May 2025</time>
                        <h3 className="text-lg font-semibold text-white">Higher Vocational Education (HVE) in .NET development</h3>
                        <p className="text-base text-neutral-400">
                            The education has given me a strong foundation in .NET development, with a focus on full-stack development, agile working methods and modern tools such as Git and CI/CD. I have also gained experience in frontend development with React and Tailwind, as well as backend development with ASP.NET and Entity Framework. 
                        </p>
                    </li>
                </ol>

                {/* Tech Stack */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-white mb-5">Tech Stack</h2>

                    <div className="overflow-x-auto">
                        <div className="flex flex-wrap lg:flex-nowrap gap-8 border-t border-gray-700 pt-5 min-w-full lg:min-w-[800px]">
                            {/* Block */}
                            <div className="flex-1 min-w-[200px] flex flex-col items-center text-center">
                                <h4 className="text-lg font-semibold text-neutral-200">Languages & <br />Frameworks</h4>
                                <p className="text-neutral-400 text-sm mt-2">
                                    C#, JavaScript, HTML, CSS, SQL<br />
                                    .NET, ASP.NET, Entity Framework, Razor, React, Tailwind, ShadCn
                                </p>
                            </div>

                            <div className="flex-1 min-w-[200px] flex flex-col items-center text-center">
                                <h4 className="text-lg font-semibold text-neutral-200">Databases & <br /> CMS</h4>
                                <p className="text-neutral-400 text-sm mt-2">
                                    SQL Server (SSMS), MongoDB<br />
                                    Umbraco CMS, Umbraco Cloud
                                </p>
                            </div>

                            <div className="flex-1 min-w-[200px] flex flex-col items-center text-center">
                                <h4 className="text-lg font-semibold text-neutral-200">Tools & <br />Platforms</h4>
                                <p className="text-neutral-400 text-sm mt-2">
                                    Visual Studio, VS Code, Git<br />
                                    Docker, Azure App Service, RabbitMQ<br />
                                    Unit Testing, K6
                                </p>
                            </div>

                            <div className="flex-1 min-w-[200px] flex flex-col items-center text-center">
                                <h4 className="text-lg font-semibold text-neutral-200">Methodology & DevOps</h4>
                                <p className="text-neutral-400 text-sm mt-2">
                                    Agile, Scrum, Kanban<br />
                                    GitFlow, CI/CD pipelines
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link
                to="/"
                className="button fixed bottom-10 right-5 bg-transparent text-white px-4 py-1 rounded-full shadow-lg border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
                Take me home!
            </Link>

        </div>
    );
}

export default Resume;
