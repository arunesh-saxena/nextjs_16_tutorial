export const metadata = {
  title: "About Us",
  description: "Learn more about our company and team.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex-1 max-w-6xl mx-auto px-4 py-16">
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-extrabold mb-4">About Us</h1>
        <p className="text-slate-600 mb-6">
          Welcome to our about page. Here you can learn more about our company and team.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-4 border border-slate-100 rounded-lg bg-slate-50">
            <h2 className="font-semibold text-slate-900">Our Mission</h2>
            <p className="text-sm text-slate-500 mt-2">
              Build reliable, delightful developer experiences and useful tools for teams.
            </p>
          </div>

          <div className="p-4 border border-slate-100 rounded-lg bg-slate-50">
            <h2 className="font-semibold text-slate-900">Our Team</h2>
            <p className="text-sm text-slate-500 mt-2">
              Small, cross-functional, and focused on quality — engineering, design, and product.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
