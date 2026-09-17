import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

const Journey = () => {
  const journeyData = [
    {
      id: 1,
      type: "education",
      title: "BS Computer Science",
      organization: "University of the Punjab",
      location: "Punjab, Pakistan",
      period: "2021 - 2025",
      status: "Completed",
      details: "CGPA: 3.66 / 4.00",
      description:
        "Completed Bachelor's degree in Computer Science with focus on software engineering, algorithms, and modern web technologies.",
      icon: GraduationCap,
      color: "blue",
    },
    {
      id: 2,
      type: "experience",
      title: "Frontend Intern",
      organization: "Rev 9 Solutions",
      location: "Jhelum, Pakistan",
      period: "Jan 2024 - March 2024",
      status: "Completed",
      achievements: [
        "Built mini full-stack projects including blogging platform and gym e-commerce store",
        "Developed responsive UIs using React.js and Tailwind CSS",
        "Applied Redux Toolkit and React Query for state management",
        "Practiced full-stack development with Node.js and MongoDB",
      ],
      icon: Briefcase,
      color: "green",
    },
    {
      id: 3,
      type: "experience",
      title: "Associate Frontend Developer",
      organization: "Rev 9 Solutions",
      location: "Jhelum, Pakistan",
      period: "March 2024 - Present",
      status: "Current",
      achievements: [
        "Developed core features for custom payment gateway using Next.js",
        "Built automatic tax calculation flows with third-party API integration",
        "Implemented webhook logic for event-driven updates",
        "Designed tiered pricing models for subscription plans",
        "Collaborated with backend and QA teams in Agile sprints",
      ],
      icon: Briefcase,
      color: "purple",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-800",
        border: "border-blue-200",
        icon: "text-blue-600",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-800",
        border: "border-green-200",
        icon: "text-green-600",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-800",
        border: "border-purple-200",
        icon: "text-purple-600",
      },
    };
    return colors[color];
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Professional Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          My path in software development and continuous learning
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

        <div className="space-y-8">
          {journeyData.map((item, index) => {
            const colorClasses = getColorClasses(item.color);
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                id={item.type === "education" ? "education" : undefined}
                className="relative"
              >
                <div className="absolute left-4 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full bg-white border-2 ${colorClasses.border} z-10`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${colorClasses.bg} m-0.5`}
                    ></div>
                  </div>
                </div>

                <div className="ml-12 bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${colorClasses.bg}`}>
                        <Icon className={`w-5 h-5 ${colorClasses.icon}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 font-medium">
                          {item.organization}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses.bg} ${colorClasses.text}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </div>

                  {item.details && (
                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded ${colorClasses.bg} ${colorClasses.text} text-sm font-medium`}
                      >
                        {item.details}
                      </span>
                    </div>
                  )}

                  {item.description && (
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  )}

                  {item.achievements && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award
                          className={`w-4 h-4 mr-2 ${colorClasses.icon}`}
                        />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${colorClasses.bg} mt-2 flex-shrink-0`}
                            ></div>
                            <span className="text-gray-700 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Journey Summary
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Completed BS Computer Science while gaining hands-on experience as an
          Associate Frontend Developer. Specialized in building scalable web
          applications using modern technologies like Next.js, React, and
          Node.js.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">1.5+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-1">3.66</div>
            <div className="text-gray-600 text-sm">CGPA</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-1">10+</div>
            <div className="text-gray-600 text-sm">Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
