import { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/projects");
        const fetchedProjects = response.data;
        setProjects(fetchedProjects);
        setCategories(["All", ...new Set(fetchedProjects.map((p) => p.category))]);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const filtered = activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
    setFilteredProjects(filtered);
  }, [activeCategory, projects]);

  return (
    <article className="portfolio w-full py-2" id="portfolio">
      <header className="mb-8">
        <h2 className="text-3xl text-white border-b-4 border-[#af862c] font-bold w-[120px]">
          Projects
        </h2>
      </header>

      <section>
        {/* Category Filter */}
        <div className="mb-4">
          <select
            className="block w-full sm:hidden bg-[#212122] text-gray-200 py-1 px-2 rounded-md shadow-lg"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <ul className="hidden sm:flex flex-wrap space-x-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`px-3 py-1 rounded-md ${
                    activeCategory === category
                      ? "text-[#e0b843]"
                      : "text-gray-200 hover:text-gray-400"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <a href="#" className="block no-underline">
                <figure className="relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <ion-icon name="eye-outline" className="text-white text-3xl"></ion-icon>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-xl "
                    loading="lazy"
                  />
                </figure>
                <div className="p-4">
                  <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-500">{project.category}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Projects;
