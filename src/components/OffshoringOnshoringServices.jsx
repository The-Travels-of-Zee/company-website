import Link from "next/link";
import { Globe, MapPin, Users, Clock, DollarSign, Shield, Zap, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const OffshoringOnshoringServices = () => {
  const services = [
    {
      id: "offshoring",
      title: "Offshoring Services",
      subtitle: "Global Talent, Local Results",
      description: "Leverage skilled professionals from around the world to deliver high-quality solutions at competitive rates while maintaining seamless communication and project management.",
      icon: Globe,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100",
      features: [
        "Access to global talent pool",
        "60% cost reduction on average",
        "24/7 development cycles",
        "Faster time-to-market"
      ],
      stats: [
        { value: "60%", label: "Cost Reduction" },
        { value: "24/7", label: "Development" },
        { value: "500+", label: "Developers" }
      ]
    },
    {
      id: "onshoring",
      title: "Onshoring Services",
      subtitle: "Local Expertise, Cultural Alignment",
      description: "Partner with domestic teams who understand your market, culture, and business environment, ensuring seamless collaboration and compliance with local regulations.",
      icon: MapPin,
      color: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-100",
      features: [
        "Enhanced communication",
        "Regulatory compliance",
        "Cultural understanding",
        "Reduced project risks"
      ],
      stats: [
        { value: "100%", label: "Compliance" },
        { value: "Same", label: "Time Zone" },
        { value: "95%", label: "Satisfaction" }
      ]
    }
  ];

  const processSteps = [
    {
      title: "Consultation & Planning",
      description: "We analyze your project requirements and recommend the best approach",
      icon: Users
    },
    {
      title: "Budget-Friendly Plan",
      description: "Develop a cost-effective strategy tailored to your budget and timeline",
      icon: DollarSign
    },
    {
      title: "Professional Implementation",
      description: "Execute with our experienced team using industry best practices",
      icon: Zap
    },
    {
      title: "Ongoing Quality Review",
      description: "Continuous monitoring and optimization for exceptional results",
      icon: Shield
    },
    {
      title: "Continued Excellence",
      description: "Long-term support and maintenance to ensure sustained success",
      icon: TrendingUp
    }
  ];

  const comparisonData = [
    { criteria: "Cost Efficiency", offshoring: "High", onshoring: "Medium" },
    { criteria: "Communication", offshoring: "Good", onshoring: "Excellent" },
    { criteria: "Time Zone", offshoring: "Different", onshoring: "Same" },
    { criteria: "Cultural Fit", offshoring: "Moderate", onshoring: "High" },
    { criteria: "Talent Pool", offshoring: "Global", onshoring: "Local" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We Provide the Perfect Solution
            <br />
            <span className="text-orange-500">For Your Business Growth</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose between our offshoring and onshoring services to find the perfect match for your project requirements, budget, and business goals.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-orange-200"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={service.id} className={`${service.color} rounded-3xl p-8 border ${service.borderColor} hover:shadow-xl transition-all duration-300`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">{service.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {service.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 ${service.iconColor}`} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 px-6 bg-white ${service.iconColor} rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Compare Our Services
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-bold text-blue-600">Offshoring</th>
                  <th className="text-center py-4 px-6 font-bold text-green-600">Onshoring</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">{item.criteria}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {item.offshoring}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {item.onshoring}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-orange-500 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-orange-500 mb-2">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which service model is the perfect fit for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block">
              <button className="px-8 py-4 bg-white text-orange-500 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
                Get Free Consultation
              </button>
            </Link>
            <Link href="/portfolio" className="inline-block">
              <button className="px-8 py-4 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition duration-300 border border-white/30">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffshoringOnshoringServices;