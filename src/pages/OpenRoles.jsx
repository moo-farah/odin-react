import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import data from "../data/data.json";

const OpenRoles = () => {
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState("all");
  const [location, setLocation] = useState("all");

  const teams = useMemo(
    () => [...new Set(data.map((job) => job.category))],
    [],
  );
  const locations = useMemo(
    () => [...new Set(data.map((job) => job.location))],
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.filter((job) => {
      const matchesQuery = !q || job.title.toLowerCase().includes(q);
      const matchesTeam = team === "all" || job.category === team;
      const matchesLocation = location === "all" || job.location === location;
      return matchesQuery && matchesTeam && matchesLocation;
    });
  }, [query, team, location]);

  const searchOpen = query.length > 0;

  return (
    <main className="min-h-screen bg-black pt-24 text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="mt-4 mb-8 text-3xl text-center">Careers at LionPlan</h1>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="group flex items-center gap-3 text-sm text-white/70">
            <span title="Search roles">
              <Search size={16} aria-hidden="true" />
            </span>
            <span className="shrink-0 text-white/50">{results.length} jobs</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search roles"
              aria-label="Search roles"
              className={`bg-transparent outline-none placeholder:text-white/50 transition-[width] duration-200 ${
                searchOpen
                  ? "w-48"
                  : "w-0 group-hover:w-48 group-focus-within:w-48"
              }`}
            />
          </label>

          <div className="flex gap-4">
            <select
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              aria-label="Filter by team"
              className="bg-black text-sm text-white outline-none hover:text-white/70 transition-colors duration-200"
            >
              <option value="all">All teams</option>
              {teams.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              aria-label="Filter by location"
              className="bg-black text-sm text-white outline-none"
            >
              <option value="all">All locations</option>
              {locations.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {results.length === 0 ? (
          <p className="mt-16 text-sm text-white/50">No roles match that search.</p>
        ) : (
          <ul className="mt-10">
            {results.map((job) => (
              <li
                key={job.id}
                className="flex flex-col gap-2 border-t border-white/15 hover:border-white/30 transition-colors duration-200 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <span className="font-medium">{job.title}</span>
                  <span className="ml-2 text-sm text-white/50">{job.category}</span>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-white/60">{job.location}</span>
                  <a
                    href={`mailto:jobs@lionplan.example?subject=${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    Apply now
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default OpenRoles;
