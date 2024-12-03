// Import dependencies
import { PROJECTS } from "../constants"; // Import projects data
import { motion } from "framer-motion"; // Import motion library for animations

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Section Heading with Smooth Drop Animation */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible when in view
        initial={{ opacity: 0, y: -100 }} // Start hidden and above the viewport
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      {/* Projects List */}
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center gap-4">
            {/* Image Column */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Slide in from left
              initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth easing
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-lg shadow-md"
              />
            </motion.div>

            {/* Text and Details Column */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Slide in from right
              initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth easing
              className="w-full max-w-xl lg:w-3/4"
            >
              {/* Project Title */}
              <h6 className="mb-2 font-semibold text-lg text-neutral-200">
                {project.title}
              </h6>

              {/* Project Description */}
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.1 }} // Slight scale-up on hover
                    transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth hover animation
                    className="mr-2 rounded-lg bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-800 shadow-md"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;