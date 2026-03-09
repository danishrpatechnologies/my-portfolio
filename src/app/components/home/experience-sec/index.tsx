import React from 'react';

const ExperienceSec = () => {
    const experiences = [
         {
            year: "2026+",
            title: "UI/UX Designer / Frontend Developer",
            company: "RPA Technologies",
            type: "Fulltime",
            description: "Designed AI-enhanced UI, built responsive web applications, and created Power BI dashboards for data-driven insights while maintaining scalable design systems."
        },
        {
            year: "2023",
            title: "UI/UX Developer",
            company: "MindRuby Technologies",
            type: "Fulltime",
            description: "Designed AI-powered UI, built responsive web pages, implemented personalization features, and maintained scalable design systems."
        },
        {
            year: "2022",
            title: "UI & Website Developer",
            company: "SynQues",
            type: "Fulltime",
            description: "Designed user-friendly layouts, maintained design systems, conducted competitive analysis, and wrote front-end code."
        },
        {
            year: "2020",
            title: "Graphic Designer & UI/UX Designer",
            company: "Magnet Brains",
            type: "Fulltime",
            description: "Managed website, developed checkout pages, collaborated with stakeholders, and guided creative projects using WordPress, Adobe Photoshop, Illustrator, and Premiere Pro."
        }
        
    ];

    return (
        <section>
            <div className="py-16 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 03 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;