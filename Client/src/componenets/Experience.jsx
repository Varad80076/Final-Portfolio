import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Experience = () => {
  const [visibleCard, setVisibleCard] = useState(null);

  const blogPosts = [
    {
      id: 1,
      imgSrc: "/r3.png",
      imgSrc2: "/image.png",
      alt: "R3 Systems Private Limited",
      category: "Training and Internship",
      date: "2023-7-25",
      title: "R3 Systems Private Limited",
      text: "During my 1-month internship at R3 Systems Private Limited, I worked on an industry-level professional project as a Java Full Stack Developer. The role provided hands-on experience in developing scalable and efficient software solutions, including backend logic, frontend design, and integration, under the guidance of industry professionals. My primary contribution was to the PM Awas Yojana project, which streamlined the housing subsidy application process.",
    },
    {
      id: 2,
      imgSrc: "/wipro.png",
      imgSrc2: "/wipro-removebg.png",
      alt: "Wipro Limited",
      category: "Training",
      date: "2024-9-15",
      title: "Wipro Limited",
      text: "I successfully completed Java Full Stack training at Wipro Limited, where I gained in-depth knowledge of backend and frontend technologies. The training covered key concepts such as Core Java, advanced frameworks, database management, and user interface design. This program enhanced my ability to build end-to-end web applications efficiently. Upon completion, I was certified by Wipro, recognizing my proficiency in full-stack development.",
      certificate: "/Client/src/assets/Documents/Wipro TalentNext Java Full Stack Certification_1728550281448.pdf",
    },
  ];

  return (
    <article className="blog " data-page="blog">
      <header>
        <h2 className="text-3xl text-white border-b-4 mb-4 p-2 border-[#af862c] flex justify-start font-bold transition-transform duration-300 w-fit">
          Experience
        </h2>
      </header>

      <section className=" blog-posts  ">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {blogPosts.map((post) => (
            <li
              key={post.id}
              className="blog-post-item relative"
              onClick={() =>
                setVisibleCard(visibleCard === post.id ? null : post.id)
              }
            >
              {/* Back Side */}
              {visibleCard === post.id && (
                <div className="front-side w-full bg-white rounded-lg shadow-md">
                <figure className="project-img relative">
                  <img
                    src={post.imgSrc}
                    alt={post.alt}
                    loading="lazy"
                    className="w-fit h-fit flex flex-wrap object-cover rounded-lg cursor-pointer"
                  
                  />
                  {/* <i
                    className="fas fa-download absolute top-2 right-2 text-black text-3xl cursor-pointer"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = post.imgSrc;
                      link.download = post.alt || "download";
                      link.click();
                    }}
                  ></i> */}
                </figure>
              </div>
              
              
              )}

              {/* Front Side */}
              {visibleCard !== post.id && (
                <div className="back-side gap-1 bg-None h-full w-full text-white rounded-lg shadow-md">
                  <div className="p-3 w-full flex flex-col justify-between h-full shadow-[0.2px_0.2px_5px_2px_black,-0.8px_-0.8px_5px_0px_white] rounded-2xl">
                  <a href="#" className="block  rounded-lg overflow-hidden  hover:shadow-lg transition-shadow h-full no-underline ">
                <figure className="project-img  relative hover:scale-110 transition-transform duration-100">
                  <img
                    src={post.imgSrc2}
                    alt={post.alt}
                    loading="lazy"
                    className="w-full rounded-xl h-40 p-[36px] sm:h-56 object-cover bg-[#6f6f706c] text-white sm:p-4 below-sm:p-0 below-sm:h-[90px]"
                  />
                </figure>
                
                <div className="blog-meta w-full flex justify-between items-center text-sm text-white mb-2 pt-1 sm:pt-2">
                  <p className="font-medium text-gray-300 ">{post.category}</p>
                      <div className="flex items-center gap-2">
                         <span className="dot w-1 h-1 bg-gray-400 rounded-full"></span>
                         <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                      </div>
                </div>

                  </a>
                    <div>
                      <h3 className="text-lg pt-2 font-semibold text-start">
                        {post.title}
                      </h3>
                      <p className="text-sm text-start">{post.text}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Experience;
