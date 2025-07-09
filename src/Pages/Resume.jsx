import { Link } from "react-router-dom";
import React from 'react';
import '../ComponentStyling/Resume.css';

function Resume() {
    return (
        <div className="flex flex-col w-full bg-zinc-800 min-h-screen" id="Resume">
            <div className="inner-Resume-Container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h2 className="text-xl font-semibold text-white">Experience</h2>
                        <time className="mb-1 text-sm text-gray-400">Webmind, Gothenburg | October 2024 – May 2025</time>
                        <h3 className="text-lg font-semibold text-white">Junior Developer - Internship</h3>
                        <p className="text-base text-gray-400">
                            As part of my education I had the privilege of spending a few months at Webmind, an Umbraco-based web agency. During my internship, I was an active part of the development team, working with both frontend and backend to develop customized Umbraco websites in .NET environments.
                        </p>
                    </li>

                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h2 className="text-xl font-semibold text-white">Education</h2>
                        <time className="mb-1 text-sm text-gray-400">Teknikhögskolan Gothenburg | August 2023 - May 2025</time>
                        <h3 className="text-lg font-semibold text-white">Higher Vocational Education (HVE) in .NET development</h3>
                        <p className="text-base text-gray-400">
                            The education has given me a broad foundation in .NET development, with a focus on full-stack development, agile working methods and modern tools such as Git and CI/CD. Through project work that reflected the industry's requirements, and two longer internship periods (LIA), I have had the opportunity to apply my knowledge in a demanding environment.
                        </p>
                    </li>
                </ol>

                {/* Tech Stack */}
                <div className="mt-16">
                    <h2 className="text-xl font-semibold text-white mb-6">Tech Stack</h2>

                    <div className="overflow-x-auto">
                        <div className="flex flex-wrap lg:flex-nowrap gap-8 border-t border-gray-700 pt-8 min-w-full lg:min-w-[800px]">
                            {/* Block */}
                            <div className="flex-1 min-w-[200px] flex flex-col items-center text-center">
                                <h4 className="text-lg font-semibold text-gray-200">Languages & <br />Frameworks</h4>
                                <p className="text-gray-400 text-sm mt-2">
                                    C#, JavaScript, HTML, CSS, SQL<br />
                                    .NET, ASP.NET, Entity Framework, Razor, React, Tailwind
                                </p>
                            </div>

                            <div className="flex-1 min-w-[200px] flex flex-col items-center text-center">
                                <h4 className="text-lg font-semibold text-gray-200">Databases & <br /> CMS</h4>
                                <p className="text-gray-400 text-sm mt-2">
                                    SQL Server (SSMS), MongoDB<br />
                                    Umbraco CMS, Umbraco Cloud
                                </p>
                            </div>

                            <div className="flex-1 min-w-[200px] flex flex-col items-center text-center">
                                <h4 className="text-lg font-semibold text-gray-200">Tools & <br />Platforms</h4>
                                <p className="text-gray-400 text-sm mt-2">
                                    Visual Studio, VS Code, Git<br />
                                    Docker, Azure App Service, RabbitMQ<br />
                                    Unit Testing, K6
                                </p>
                            </div>

                            <div className="flex-1 min-w-[200px] flex flex-col items-center text-center">
                                <h4 className="text-lg font-semibold text-gray-200">Methodology & DevOps</h4>
                                <p className="text-gray-400 text-sm mt-2">
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
                className="button fixed bottom-6 right-3 bg-transparent text-white px-4 py-2 rounded-full shadow-lg border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
                Take me home!
            </Link>

        </div>
    );
}

export default Resume;
