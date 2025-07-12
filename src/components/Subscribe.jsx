import siteMetadata from "@/data/siteMetadata";
import CustomNewsletterForm from "./CustomNewsletterForm";
import { Mail } from "lucide-react";

const Subscribe = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-blue-100 backdrop-blur-sm text-cyan-600 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-cyan-200 shadow-sm">
            <Mail className="w-5 h-5 animate-pulse text-cyan-500" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Subscribe
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Stay Updated
            </span>
            <br />
            <span className="text-gray-800">With Our Latest News</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Get exclusive insights, industry updates, and early access to our latest AI and ML solutions — straight to your inbox.
          </p>

          {siteMetadata.newsletter.provider && (
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
                <CustomNewsletterForm title="Subscribe" apiUrl="/api/newsletter" />
              </div>
            </div>
          )}

          {/* Additional features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3 border border-cyan-200">
                <Mail className="w-6 h-6 text-cyan-500" />
              </div>
              <p className="text-gray-500 text-sm">Weekly Updates</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3 border border-cyan-200">
                <span className="text-cyan-500 text-xl">🚀</span>
              </div>
              <p className="text-gray-500 text-sm">Early Access</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-3 border border-cyan-200">
                <span className="text-cyan-500 text-xl">💡</span>
              </div>
              <p className="text-gray-500 text-sm">Industry Insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
