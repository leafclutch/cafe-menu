import React from "react";

const Service = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 sm:pt-28 md:pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-64 w-64 md:h-80 md:w-80 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-64 w-64 md:h-80 md:w-80 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Our Services
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            End-to-End Technology <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            From concept to deployment, we provide comprehensive technology services that transform your business and drive measurable results.
          </p>
        </div>
      </section>

      {/* Software Services Section */}
      <section id="software" className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Text / Heading */}
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-accent"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Software Services</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Custom software solutions tailored to your unique business requirements.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md">
                <h3 className="mb-2 font-semibold text-foreground">Custom Software Development</h3>
                <p className="text-sm text-muted-foreground">
                  Bespoke applications designed from scratch to solve your specific challenges.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md">
                <h3 className="mb-2 font-semibold text-foreground">Backend Systems & APIs</h3>
                <p className="text-sm text-muted-foreground">
                  Robust, scalable backend architectures and RESTful APIs for seamless integration.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md">
                <h3 className="mb-2 font-semibold text-foreground">Scalable Enterprise Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade systems built to handle growing demands and complex workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web" className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Text / Heading */}
            <div className="lg:order-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-accent"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Web Development</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Modern web solutions that combine stunning design with powerful functionality.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 lg:order-1">
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md">
                <h3 className="mb-2 font-semibold text-foreground">Responsive Websites</h3>
                <p className="text-sm text-muted-foreground">
                  Beautiful, mobile-first websites that look perfect on every device.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md">
                <h3 className="mb-2 font-semibold text-foreground">Web Applications</h3>
                <p className="text-sm text-muted-foreground">
                  Feature-rich web apps with intuitive interfaces and seamless user experiences.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md">
                <h3 className="mb-2 font-semibold text-foreground">Dashboards & Admin Panels</h3>
                <p className="text-sm text-muted-foreground">
                  Data-driven dashboards for real-time insights and efficient management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Section */}
      <section id="app" className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Text / Heading */}
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-accent"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">App Development</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md">
                <h3 className="mb-2 font-semibold text-foreground">Android & iOS Apps</h3>
                <p className="text-sm text-muted-foreground">
                  Native applications optimized for each platform's unique capabilities.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md">
                <h3 className="mb-2 font-semibold text-foreground">Cross-Platform Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Build once, deploy everywhere with React Native and Flutter.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-md">
                <h3 className="mb-2 font-semibold text-foreground">Performance-Focused Development</h3>
                <p className="text-sm text-muted-foreground">
                  Fast, responsive apps optimized for the best user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;

