import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const CTASection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0tMiAwaC0ydi0yaDJ2MjB6bTItMmgtMnYtMmgydjJ6bS0yIDBoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Let's discuss how we can help you achieve your business goals
                with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/request-proposal">
                  <Button
                    variant="secondary"
                    size="large"
                    className="bg-white text-emerald-600 hover:bg-gray-100 border-0"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="ghost"
                    size="large"
                    className="text-white hover:bg-white/10 border border-white/30"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
