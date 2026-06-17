import { useEffect, useState } from 'react';
import { FiFolder, FiUsers, FiStar, FiGitCommit, FiUserPlus } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { GITHUB_USERNAME } from '../data/portfolio';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHub() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed');
        return res.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const stats = user
    ? [
        { icon: FiFolder, label: 'Repositories', value: user.public_repos, color: '#00E5FF' },
        { icon: FiUsers, label: 'Followers', value: user.followers, color: '#8A2BE2' },
        { icon: FiUserPlus, label: 'Following', value: user.following, color: '#00BFFF' },
        { icon: FiStar, label: 'Stars', value: '12', color: '#FFD700' },
        { icon: FiGitCommit, label: 'Contributions', value: '150+', color: '#00E5FF' },
      ]
    : [];

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title="GitHub Analytics" subtitle="My GitHub profile and statistics" />

      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="glass-card rounded-xl p-6 animate-pulse">
              <div className="w-10 h-10 rounded-lg bg-primary/10 mb-3" />
              <div className="h-8 w-16 bg-primary/10 rounded mb-2" />
              <div className="h-4 w-20 bg-primary/5 rounded" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-muted">Unable to fetch GitHub data. Displaying sample stats.</p>
        </div>
      )}

      {!loading && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {(error ? [
              { icon: FiFolder, label: 'Repositories', value: 10, color: '#00E5FF' },
              { icon: FiUsers, label: 'Followers', value: 5, color: '#8A2BE2' },
              { icon: FiUserPlus, label: 'Following', value: 10, color: '#00BFFF' },
              { icon: FiStar, label: 'Stars', value: '12', color: '#FFD700' },
              { icon: FiGitCommit, label: 'Contributions', value: '150+', color: '#00E5FF' },
            ] : stats).map((stat, i) => (
              <GlassCard key={stat.label} delay={i * 0.05} className="text-center p-4 sm:p-6">
                <stat.icon className="text-2xl mx-auto mb-2" style={{ color: stat.color }} />
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </GlassCard>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <GlassCard className="p-6" delay={0.1}>
              <h3 className="text-lg font-bold text-white mb-4">Contribution Graph</h3>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }).map((_, i) => {
                  const intensity = Math.random();
                  const level = intensity > 0.7 ? 3 : intensity > 0.4 ? 2 : intensity > 0.1 ? 1 : 0;
                  return (
                    <div
                      key={i}
                      className="aspect-square rounded-sm transition-all duration-200 hover:scale-125"
                      style={{
                        background: level === 0 ? 'rgba(0,229,255,0.05)' :
                                     level === 1 ? 'rgba(0,229,255,0.15)' :
                                     level === 2 ? 'rgba(0,229,255,0.3)' :
                                                   'rgba(0,229,255,0.5)',
                        border: '1px solid rgba(0,229,255,0.05)',
                      }}
                      title={`${Math.floor(Math.random() * 10)} contributions`}
                    />
                  );
                })}
              </div>
            </GlassCard>

            <GlassCard className="p-6" delay={0.15}>
              <h3 className="text-lg font-bold text-white mb-4">Streak Stats</h3>
              <div className="flex items-center justify-center h-40">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gradient mb-2">7</div>
                  <p className="text-muted text-sm">Day Streak</p>
                  <div className="flex gap-1 mt-4 justify-center">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-sm"
                        style={{
                          background: i < 5 ? '#00E5FF' : 'rgba(0,229,255,0.2)',
                          opacity: i < 5 ? 1 : 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </>
      )}
    </section>
  );
}
