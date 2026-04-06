const tools = [
    { name: "Git", icon: "https://cdn.simpleicons.org/git/000000" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/000000" },
    { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/000000" },
    { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/000000" },
    { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible/000000" },
    { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/000000" },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/000000" },
    { name: "Shell", icon: "https://cdn.simpleicons.org/gnubash/000000" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/000000" },
];

const Tools = () => {
    return (
        <section className="py-10 overflow-hidden">
            <div className="relative w-full border-y-4 border-black">
                <div className="flex animate-marquee whitespace-nowrap">
                    {/* Quadruple the list for smoother seamless looping */}
                    {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
                        <div
                            key={index}
                            className="inline-flex flex-col items-center justify-center w-36 h-36 sm:w-48 sm:h-48 border-r-4 border-black flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 bg-transparent"
                        >
                            <img
                                src={tool.icon}
                                alt={tool.name}
                                className="w-14 h-14 sm:w-20 sm:h-20 mb-5 object-contain"
                            />
                            <span className="text-base sm:text-lg font-bold font-sans text-black">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
