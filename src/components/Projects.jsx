import React from "react";

const projects = [
  {
    title: "Gota_Learn",
    description:
      "An interactive platform for learning new skills with engaging content.",
    src: "gota_learn.jpg", // Replace with the actual path to your image
    githubLink: "https://github.com/Nang-Kalayar/Gota-learn-spring-react",
   
  },
  {
    title: "Book-Shop",
    description: "An online bookstore with a wide range of books and features.",
    src: "book_shop.jpg", // Replace with the actual path to your image
    githubLink: "https://github.com/Nang-Kalayar/bookshop-angular-spring",
  
  },
  {
    title: "Yum-Eat",
    description: "A food delivery app with a focus on user-friendly design.",
    src: "yum_eat.jpg", // Replace with the actual path to your image
    githubLink: "https://github.com/Nang-Kalayar/tailwindcss-yum-eat-project",
 
  },
];

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-11">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;