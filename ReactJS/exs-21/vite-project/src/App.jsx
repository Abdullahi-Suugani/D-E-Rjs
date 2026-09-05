const stats = [
  { label: "Average Grade", value: "78%", icon: "📊" },
  { label: "Courses", value: "7", icon: "📚" },
  { label: "Study Hours", value: "24h", icon: "⏰" },
  { label: "Assignments", value: "21", icon: "✍️" },
];

const courses = [
  {
    title: "React Fundamentals",
    progress: 85,
    next: "Components & Props",
    instructor: "tood",
  },
  {
    title: "JavaScript Advanced",
    progress: 25,
    next: "Async/Await",
    instructor: "yusuf",
  },
  {
    title: "UI/UX Design",
    progress: 60,
    next: "Color Theory",
    instructor: "Abdullahi aden abdii",
  },
  {
    title: "TypeScript Basics",
    progress: 10,
    next: "Interfaces",
    instructor: "yahye",
  },
  {
    title: "Node.js Essentials",
    progress: 40,
    next: "Express.js",
    instructor: "MC hamuuda",
  },
  {
    title: "Python for Beginners",
    progress: 70,
    next: "Data Structures",
    instructor: "Abdirahman",
  },
  {
    title: "Django Web Development",
    progress: 55,
    next: "Models & Views",
    instructor: "Sumaya",
  },
];

const assignments = [
  {
    title: "Build a Todo App",
    course: "React Fundamentals",
    status: "Pending",
    due: "2024-03-20",
    tone: "bg-rose-100 text-rose-600",
  },
  {
    title: "API Integration",
    course: "JavaScript Advanced",
    status: "Completed",
    due: "2024-03-18",
    tone: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Design System",
    course: "UI/UX Design",
    status: "In-progress",
    due: "2024-03-25",
    tone: "bg-amber-100 text-amber-700",
  },
];

const announcements = [
  {
    title: "New Course Available",
    copy: "Check out our new TypeScript course!",
    time: "2 hours ago",
  },
  {
    title: "Maintenance Notice",
    copy: "Platform updates scheduled for tonight",
    time: "5 hours ago",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-5 text-slate-700 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-5">
        <header className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <div>
            <h1 className="text-xl font-bold leading-tight text-slate-900">
              Welcome back, Student!
            </h1>
            <p className="mt-1 text-sm font-medium text-slate-500">
              Here's what's happening with your courses today.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Notifications"
              className="relative grid size-9 place-items-center rounded-full text-lg text-slate-700 transition hover:bg-slate-100"
            >
              <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500" />
              🔔
            </button>
            <div className="grid size-10 place-items-center rounded-full bg-fuchsia-500 text-sm font-bold text-white">
              S
            </div>
          </div>
        </header>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-5 py-5 shadow-sm"
            >
              <span className="text-2xl" aria-hidden="true">
                {stat.icon}
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  {stat.label}
                </p>
                <p className="text-2xl font-extrabold leading-tight text-slate-900">
                  {stat.value}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[2fr_1fr]">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
              Course Progress
            </h2>

            <div className="mt-5 space-y-6">
              {courses.map((course) => (
                <div key={course.title}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3 className="text-sm font-bold text-slate-800">
                      {course.title}
                    </h3>
                    <span className="text-xs font-bold text-slate-500">
                      {course.progress}%
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-slate-700"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs font-medium text-slate-500">
                    <span>Next: {course.next}</span>
                    <span>{course.instructor}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="space-y-5">
            <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">
                Upcoming Assignments
              </h2>

              <div className="mt-5 space-y-4">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.title}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">
                        {assignment.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-500">
                        {assignment.course}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${assignment.tone}`}
                      >
                        {assignment.status}
                      </span>
                      <p className="mt-1 text-[11px] font-semibold text-slate-500">
                        Due {assignment.due}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">
                Announcements
              </h2>

              <div className="mt-5 space-y-4">
                {announcements.map((item) => (
                  <article
                    key={item.title}
                    className="border-l-4 border-blue-500 py-1 pl-4"
                  >
                    <h3 className="text-sm font-bold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-600">
                      {item.copy}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold text-slate-400">
                      {item.time}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default App;
