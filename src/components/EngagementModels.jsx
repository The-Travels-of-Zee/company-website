import Link from "next/link";

const EngagementModels = () => {
  const engagementModels = [
    {
      title: "Project-Based Development",
      description: "Assign dedicated PMs & developers for your software development project.",
      videoSrc: "/videos/project-based-development.mp4",
    },
    {
      title: "Team-Based Development",
      description: "Deploy a cohesive team to deliver end-to-end, custom software solutions.",
      videoSrc: "/videos/team-based-development.mp4",
    },
    {
      title: "Staff Augmentation",
      description: "Integrate top-tier app developers into your team for enhanced project success.",
      videoSrc: "/videos/staff-augmentation.mp4",
    },
  ];

  return (
    <section id="engagement-models" className="pt-16 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="feature_project_content mb-12">
          <p className="tagline_text text-brandOrange">Our Engagement Models</p>
          <h2 className="sub_heading mt-6 max-w-[900px] text-gray-800">
            Choose the perfect engagement model that aligns with your project needs and business goals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {engagementModels.map((model, index) => (
            <div
              key={index}
              className="bg-white rounded-[42px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video */}
              <div className="mb-8">
                <video
                  width="320"
                  height="240"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={model.videoPoster}
                  className="w-full h-72 object-cover rounded-lg bg-gray-100"
                >
                  <source src={model.videoSrc} type="video/mp4" />
                  <div className="w-full h-60 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">Video Preview</p>
                      <p className="text-gray-400 text-xs mt-1">{model.title}</p>
                    </div>
                  </div>
                </video>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{model.title}</h3>
                <p className="text-gray-600 leading-relaxed">{model.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href={"#contact"} aria-label="Learn More">
          <button className="group/btn relative min-w-max mx-auto font_avenir text-base font-semibold rounded-xl border-2 border-brandOrange bg-gradient-to-r from-transparent to-transparent hover:from-brandOrange hover:to-brandOrange/90 hover:text-white duration-500 px-4 py-3 overflow-hidden">
            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brandOrange/0 via-brandOrange/5 to-brandOrange/0 group-hover/btn:from-brandOrange/20 group-hover/btn:via-brandOrange/10 group-hover/btn:to-brandOrange/20 transition-all duration-500" />

            <span className="relative flex items-center justify-center gap-3 text-brandOrange group-hover/btn:text-white transition-colors duration-300">
              Book a Free Consultation
              <div className="flex items-center justify-center w-6 h-6 bg-brandOrange/10 group-hover/btn:bg-white/20 rounded-full transition-all duration-300 group-hover/btn:translate-x-1">
                <img
                  src="/icons/arrow.png"
                  alt="icon"
                  className="w-3 h-3 group-hover/btn:invert transition-all duration-300 group-hover/btn:scale-110"
                />
              </div>
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EngagementModels;
