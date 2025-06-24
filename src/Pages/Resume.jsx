import React from 'react';
import '../ComponentStyling/Resume.css';


function Resume() {
    return (
        <div className="sticky top-0 h-[100vh] flex flex-col w-500 bg-zinc-800" id="Resume">

            <ol class="relative border-s border-gray-200 dark:border-gray-700">

                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Experience</h2>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Webmind, Gothenburg | October 2024 – May 2025</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Junior Developer - Internship</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">As part of my education I had the privilege of spending a few months at Webmind, an Umbraco-based web agency.
                        <br></br> During my internship, I was an active part of the development team, working with both frontend and backend to develop customized Umbraco websites in .NET environments.</p>

                </li>

                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Education</h2>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Teknikhögskolan Gothenburg | August 2023 - May 2025</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Higher Vocational Education (HVE) in .NET development</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">The education has given me a broad foundation in .NET development, with a focus on full-stack development, agile working methods and modern tools such as Git and CI/CD.
                        <br></br> Through project work that reflected the industry's requirements, and two longer internship periods (LIA), I have had the opportunity to apply my knowledge in a demanding environment.</p>

                </li>

            </ol>

            {/* Tech Stack */}

            <div>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Tech Stack</h2>
                        <div className="space-y-4 mt-4">

                            {/* Languages & Frameworks */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-200">Languages & Frameworks</h4>
                                <p className="text-gray-400 text-sm">
                                    C#, JavaScript, HTML, CSS, SQL<br />
                                    .NET, ASP.NET, Entity Framework, Razor, React, Tailwind
                                </p>
                            </div>

                            {/* Databases & CMS */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-200">Databases & CMS</h4>
                                <p className="text-gray-400 text-sm">
                                    SQL Server (SSMS), MySQL, MongoDB<br />
                                    Umbraco CMS, Umbraco Cloud
                                </p>
                            </div>

                            {/* Tools & Platforms */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-200">Tools & Platforms</h4>
                                <p className="text-gray-400 text-sm">
                                    Visual Studio, VS Code, Git<br />
                                    Docker, Azure App Service, RabbitMQ<br />
                                    Unit Testing, K6
                                </p>
                            </div>

                            {/* Methodology & DevOps */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-200">Methodology & DevOps</h4>
                                <p className="text-gray-400 text-sm">
                                    Agile, Scrum, Kanban<br />
                                    GitFlow, CI/CD pipelines
                                </p>
                            </div>
                        </div>
                    </li>
                </ol>

            </div>

        </div>
    );
};

export default Resume;


