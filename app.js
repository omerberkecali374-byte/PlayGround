const LEAGUES = {
  England: {
    name: 'Premier League',
    clubs: [
      ['Arsenal', '🟠', 84],
      ['Liverpool', '🔴', 86],
      ['Manchester City', '🔵', 89],
      ['Chelsea', '🔵', 81],
      ['Tottenham Hotspur', '⚪', 80],
      ['Newcastle United', '⚫', 79],
      ['Aston Villa', '🟣', 78],
      ['Manchester United', '🔴', 82]
    ]
  },
  Spain: {
    name: 'La Liga',
    clubs: [
      ['Real Madrid', '👑', 90],
      ['Barcelona', '🔵', 88],
      ['Atlético Madrid', '🔴', 84],
      ['Athletic Club', '🦁', 78],
      ['Real Sociedad', '🔵', 77],
      ['Villarreal', '🟡', 76],
      ['Sevilla', '⚪', 75],
      ['Real Betis', '🟢', 76]
    ]
  },
  Germany: {
    name: 'Bundesliga',
    clubs: [
      ['Bayern Munich', '🔴', 89],
      ['Borussia Dortmund', '🟡', 84],
      ['Bayer Leverkusen', '🔴', 84],
      ['RB Leipzig', '🔴', 82],
      ['Eintracht Frankfurt', '🦅', 78],
      ['VfB Stuttgart', '🔴', 78],
      ['VfL Wolfsburg', '🟢', 75],
      ['SC Freiburg', '⚫', 74]
    ]
  },
  Italy: {
    name: 'Serie A',
    clubs: [
      ['Inter Milan', '🔵', 87],
      ['AC Milan', '🔴', 84],
      ['Juventus', '⚪', 84],
      ['Napoli', '🔵', 83],
      ['Roma', '🟡', 79],
      ['Atalanta', '🔵', 81],
      ['Lazio', '🦅', 78],
      ['Fiorentina', '🟣', 77]
    ]
  },
  France: {
    name: 'Ligue 1',
    clubs: [
      ['Paris Saint-Germain', '🔵', 88],
      ['Monaco', '🔴', 80],
      ['Marseille', '⚪', 79],
      ['Lille', '🔴', 78],
      ['Olympique Lyonnais', '🔵', 77],
      ['OGC Nice', '⚫', 76],
      ['RC Lens', '🟡', 75],
      ['Stade Rennais', '🔴', 75]
    ]
  },
  Portugal: {
    name: 'Primeira Liga',
    clubs: [
      ['Benfica', '🔴', 83],
      ['FC Porto', '🔵', 83],
      ['Sporting CP', '🟢', 82],
      ['Braga', '🔴', 76],
      ['Vitória SC', '⚫', 73],
      ['Boavista', '⚫', 69],
      ['Famalicão', '🔵', 70],
      ['Casa Pia', '⚫', 68]
    ]
  }
};

const PLAYER_POOL = [
  { name: 'Kylian Mbappé', pos: 'ST', rating: 92, value: 180, nation: 'France', face: '⚡' },
  { name: 'Erling Haaland', pos: 'ST', rating: 91, value: 165, nation: 'Norway', face: '👑' },
  { name: 'Jude Bellingham', pos: 'CM', rating: 90, value: 145, nation: 'England', face: '✨' },
  { name: 'Vinícius Júnior', pos: 'LW', rating: 90, value: 150, nation: 'Brazil', face: '💫' },
  { name: 'Mohamed Salah', pos: 'RW', rating: 89, value: 75, nation: 'Egypt', face: '⚡' },
  { name: 'Kevin De Bruyne', pos: 'CM', rating: 89, value: 55, nation: 'Belgium', face: '🎯' },
  { name: 'Lamine Yamal', pos: 'RW', rating: 88, value: 120, nation: 'Spain', face: '🌟' },
  { name: 'Harry Kane', pos: 'ST', rating: 89, value: 95, nation: 'England', face: '🎯' },
  { name: 'Declan Rice', pos: 'DM', rating: 87, value: 95, nation: 'England', face: '🛡️' },
  { name: 'Rodri', pos: 'DM', rating: 90, value: 110, nation: 'Spain', face: '🧠' },
  { name: 'Bukayo Saka', pos: 'RW', rating: 88, value: 130, nation: 'England', face: '💨' },
  { name: 'Pedri', pos: 'CM', rating: 87, value: 100, nation: 'Spain', face: '🎩' },
  { name: 'Lautaro Martínez', pos: 'ST', rating: 88, value: 100, nation: 'Argentina', face: '🔥' },
  { name: 'Victor Osimhen', pos: 'ST', rating: 87, value: 90, nation: 'Nigeria', face: '💪' },
  { name: 'Rafael Leão', pos: 'LW', rating: 87, value: 95, nation: 'Portugal', face: '⚡' },
  { name: 'Federico Valverde', pos: 'CM', rating: 88, value: 110, nation: 'Uruguay', face: '🏃' },
  { name: 'Virgil van Dijk', pos: 'CB', rating: 88, value: 45, nation: 'Netherlands', face: '🧱' },
  { name: 'Alisson Becker', pos: 'GK', rating: 89, value: 45, nation: 'Brazil', face: '🧤' },
  { name: 'Jamal Musiala', pos: 'AM', rating: 88, value: 110, nation: 'Germany', face: '✨' },
  { name: 'Bruno Fernandes', pos: 'AM', rating: 87, value: 70, nation: 'Portugal', face: '🎯' },
  { name: 'Antonio Rüdiger', pos: 'CB', rating: 86, value: 42, nation: 'Germany', face: '🧱' },
  { name: 'Theo Hernandez', pos: 'LB', rating: 85, value: 38, nation: 'France', face: '🚀' },
  { name: 'Gianluigi Donnarumma', pos: 'GK', rating: 88, value: 48, nation: 'Italy', face: '🧤' },
  { name: 'Militão', pos: 'CB', rating: 84, value: 36, nation: 'Brazil', face: '🧱' }
];

const STARTING_SQUAD = [
  ['David Riley', 'GK', 79],
  ['Ethan Cole', 'RB', 78],
  ['Mason Grant', 'CB', 81],
  ['Noah Price', 'CB', 80],
  ['Leo Warren', 'LB', 77],
  ['Daniel Shaw', 'DM', 82],
  ['Tom Reed', 'CM', 83],
  ['Aiden Ross', 'RW', 84],
  ['Callum Holt', 'ST', 85],
  ['Joshua Flynn', 'ST', 82],
  ['Miles King', 'LW', 81],
  ['Oliver Hart', 'GK', 73],
  ['Ben Harris', 'CB', 75],
  ['Frank Curtis', 'CM', 76],
  ['Leo Finch', 'ST', 77]
];

const CHAMPIONS_CLUBS = ['Real Madrid', 'Manchester City', 'Bayern Munich', 'Inter Milan', 'Paris Saint-Germain', 'Arsenal', 'Liverpool', 'Barcelona', 'Juventus', 'Benfica'];
const CONFERENCE_CLUBS = ['FC Porto', 'Sporting CP', 'Villarreal', 'Lazio', 'Braga', 'Athletic Club', 'Fiorentina', 'Monaco', 'Stade Rennais', 'Atalanta'];

let state = loadState();
let activeView = 'overview';
let marketFilter = 'All';

function loadState() {
  try {
    const saved = localStorage.getItem('touchline-career');
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    return null;
  }
}

function saveState() {
  localStorage.setItem('touchline-career', JSON.stringify(state));
}

function findLeagueByClub(clubName) {
  for (const country in LEAGUES) {
    const league = LEAGUES[country];
    const found = league.clubs.find(team => team[0] === clubName);
    if (found) {
      return { country, league: league.name, badge: found[1], strength: found[2] };
    }
  }
  return null;
}

function makeStartingState(clubName) {
  const details = findLeagueByClub(clubName);
  const table = {};
  const leagueClubs = LEAGUES[details.country].clubs;
  leagueClubs.forEach(([name, badge, strength]) => {
    table[name] = {
      name,
      badge,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      gf: 0,
      ga: 0,
      pts: 0,
      form: []
    };
  });

  const squad = STARTING_SQUAD.map(([name, pos, rating], index) => ({
    name,
    pos,
    rating: Math.min(94, rating + Math.round((details.strength - 80) / 2)),
    value: Math.max(5, Math.round((rating + 8) * 1.2)),
    face: ['🧤', '🛡️', '🧱', '🧱', '🛡️', '🧠', '🎯', '💨', '⚽', '⚽', '💨', '🧤', '🧱', '🧠', '⚽'][index],
    age: 24 + (index % 6)
  }));

  return {
    club: clubName,
    badge: details.badge,
    league: details.league,
    country: details.country,
    budget: 120,
    season: 1,
    week: 0,
    squad,
    bought: [],
    log: [`Welcome to ${clubName}. The board wants trophies and a European run.`],
    results: [],
    table,
    formation: '4-3-3',
    euroCompetition: CHAMPIONS_CLUBS.includes(clubName) ? 'Champions League' : 'Conference League',
    euroMatches: 0,
    euroWins: 0,
    euroPoints: 0,
    euroResults: []
  };
}

function render() {
  if (!state) {
    renderWelcome();
    return;
  }

  app.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">✦</div>
          <div class="brand-name">touch<span>line</span></div>
        </div>
        <div class="side-label">Manager</div>
        <nav class="nav">
          ${makeNavItem('overview', '◫', 'Overview')}
          ${makeNavItem('squad', '♙', 'Squad')}
          ${makeNavItem('transfers', '⇄', 'Transfers')}
          ${makeNavItem('fixtures', '▦', 'Fixtures')}
          ${makeNavItem('table', '▤', 'Standings')}
          ${makeNavItem('europe', '✦', 'Europe')}
        </nav>
        <div class="side-bottom">
          <div class="side-label">Club</div>
          <div class="club-mini">
            <div class="club-mini-top">
              <div class="club-badge">${state.badge}</div>
              <div>
                <strong>${escapeHtml(state.club)}</strong>
                <small>${escapeHtml(state.league)}</small>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <div>
            <div class="eyebrow">${escapeHtml(state.country)} · Season ${state.season}</div>
            <h1>${pageTitle()}</h1>
          </div>
          <div class="top-actions">
            <div class="season-pill">€${state.budget}m budget</div>
            <button class="icon-btn" id="reset-btn" title="Start new career">↻</button>
            <div class="avatar">${state.badge}</div>
          </div>
        </header>

        <section class="view ${activeView === 'overview' ? 'active' : ''}">${overviewView()}</section>
        <section class="view ${activeView === 'squad' ? 'active' : ''}">${squadView()}</section>
        <section class="view ${activeView === 'transfers' ? 'active' : ''}">${transfersView()}</section>
        <section class="view ${activeView === 'fixtures' ? 'active' : ''}">${fixturesView()}</section>
        <section class="view ${activeView === 'table' ? 'active' : ''}">${tableView()}</section>
        <section class="view ${activeView === 'europe' ? 'active' : ''}">${europeView()}</section>
      </main>
    </div>
    <div class="toast"></div>
  `;

  bindControls();
}

function renderWelcome() {
  const clubButtons = Object.entries(LEAGUES).flatMap(([country, league]) =>
    league.clubs.map(([name, badge, strength]) => `
      <button class="club-option" data-start="${escapeHtml(name)}">
        <strong>${badge} ${escapeHtml(name)}</strong>
        <small>${escapeHtml(country)} · ${escapeHtml(league.name)}</small>
      </button>
    `)
  ).join('');

  app.innerHTML = `
    <div class="modal-backdrop">
      <div class="modal">
        <div class="brand" style="padding:0 0 17px">
          <div class="brand-mark">✦</div>
          <div class="brand-name">touch<span>line</span></div>
        </div>
        <h2>Choose your club</h2>
        <p>Build a squad of famous stars, dominate your domestic league, and chase continental glory in the Champions League and Conference League.</p>
        <div class="club-options">${clubButtons}</div>
        <div class="modal-foot">European leagues only · Real clubs · Career mode</div>
      </div>
    </div>
  `;

  document.querySelectorAll('[data-start]').forEach(button => {
    button.addEventListener('click', () => {
      state = makeStartingState(button.dataset.start);
      saveState();
      activeView = 'overview';
      render();
    });
  });
}

function makeNavItem(view, icon, label) {
  return `<button class="${activeView === view ? 'active' : ''}" data-view="${view}"><span class="nav-icon">${icon}</span>${label}</button>`;
}

function pageTitle() {
  const titles = {
    overview: 'Club overview',
    squad: 'First team',
    transfers: 'Transfer market',
    fixtures: 'Fixtures & results',
    table: 'League table',
    europe: 'European campaign'
  };
  return titles[activeView] || 'Club overview';
}

function bindControls() {
  document.querySelectorAll('[data-view]').forEach(button => {
    button.addEventListener('click', () => {
      activeView = button.dataset.view;
      render();
    });
  });

  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      marketFilter = button.dataset.filter;
      render();
    });
  });

  document.querySelectorAll('.sign-btn').forEach(button => {
    button.addEventListener('click', () => buyPlayer(button.dataset.player));
  });

  const playButton = document.getElementById('play-match');
  if (playButton) {
    playButton.addEventListener('click', playMatch);
  }

  const resetButton = document.getElementById('reset-btn');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      if (confirm('Start a brand new career? Your current save will be cleared.')) {
        localStorage.removeItem('touchline-career');
        state = null;
        activeView = 'overview';
        render();
      }
    });
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function formatMoney(value) {
  return `€${value}m`;
}

function showToast(message, error = false) {
  const toast = document.querySelector('.toast');
  if (!toast) {
    return;
  }
  toast.textContent = message;
  toast.classList.toggle('toast-error', error);
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

function getCurrentLeague() {
  return LEAGUES[state.country];
}

function getLeagueClubNames() {
  return getCurrentLeague().clubs.map(([name]) => name).filter(name => name !== state.club);
}

function getClubStrength(clubName) {
  const league = findLeagueByClub(clubName);
  return league ? league.strength : 75;
}

function getTeamAttack(squad) {
  return squad.filter(player => ['ST', 'LW', 'RW', 'AM'].includes(player.pos)).reduce((total, p) => total + p.rating, 0) / Math.max(1, squad.filter(player => ['ST', 'LW', 'RW', 'AM'].includes(player.pos)).length);
}

function getTeamDefence(squad) {
  return squad.filter(player => ['GK', 'CB', 'LB', 'RB', 'DM'].includes(player.pos)).reduce((total, p) => total + p.rating, 0) / Math.max(1, squad.filter(player => ['GK', 'CB', 'LB', 'RB', 'DM'].includes(player.pos)).length);
}

function getOverallStrength() {
  return (getTeamAttack(state.squad) + getTeamDefence(state.squad)) / 2;
}

function getNextLeagueOpponent() {
  const names = getLeagueClubNames();
  return names[state.week % names.length] || names[0];
}

function getSortedTable() {
  return Object.values(state.table).sort((a, b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf || a.name.localeCompare(b.name));
}

function ordinal(n) {
  const remainder100 = n % 100;
  if (remainder100 >= 11 && remainder100 <= 13) return `${n}th`;
  const remainder10 = n % 10;
  const suffix = { 1: 'st', 2: 'nd', 3: 'rd' }[remainder10] || 'th';
  return `${n}${suffix}`;
}

function tableMarkup(rows, cap = rows.length) {
  return `
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Club</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        ${rows.slice(0, cap).map((row, index) => `
          <tr class="${row.name === state.club ? 'you-row' : ''}">
            <td class="pos">${index + 1}</td>
            <td><span class="club-cell"><span class="mini-crest">${row.badge}</span>${escapeHtml(row.name)}</span></td>
            <td>${row.played}</td>
            <td>${row.wins}</td>
            <td>${row.draws}</td>
            <td>${row.losses}</td>
            <td>${(row.gf - row.ga) >= 0 ? '+' : ''}${row.gf - row.ga}</td>
            <td class="points">${row.pts}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function activityMarkup() {
  const feed = state.log.slice(-3).reverse();
  if (!feed.length) {
    return '<div class="empty-note">No manager updates yet.</div>';
  }

  return feed.map((text, index) => `
    <div class="activity">
      <div class="activity-icon">${index === 0 ? '✦' : '◷'}</div>
      <div class="activity-text">${text}<small>${index === 0 ? 'Just now' : `${index + 1} weeks ago`}</small></div>
    </div>
  `).join('');
}

function overviewView() {
  const tableRows = getSortedTable();
  const clubRow = tableRows.find(row => row.name === state.club) || { played: 0, pts: 0 };
  const rank = tableRows.findIndex(row => row.name === state.club) + 1;
  const nextOpponent = getNextLeagueOpponent();
  const nextOppStrength = getClubStrength(nextOpponent);

  return `
    <div class="grid overview-grid">
      <article class="card hero-card">
        <div class="hero-head">
          <div>
            <div class="club-overline">${escapeHtml(state.country)} · ${escapeHtml(state.league)}</div>
            <h2 class="club-title">${escapeHtml(state.club)}</h2>
            <div class="club-subtitle">Build a squad worthy of Europe.</div>
          </div>
          <div class="rank-chip">${ordinal(rank)} in league</div>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <small>League points</small>
            <strong>${clubRow.pts} <em>PTS</em></strong>
          </div>
          <div class="hero-stat">
            <small>Matches played</small>
            <strong>${clubRow.played} <em>/ 14</em></strong>
          </div>
          <div class="hero-stat">
            <small>Budget</small>
            <strong>${formatMoney(state.budget)}</strong>
          </div>
        </div>
      </article>

      <article class="card fixture-card">
        <div>
          <div class="card-heading">
            <h2>Next fixture</h2>
            <span class="fixture-type">${state.week % 4 === 3 ? 'European' : state.league}</span>
          </div>
          <div class="fixture-teams">
            <div class="team-side">
              <span class="team-crest">${state.badge}</span>
              <strong>${escapeHtml(state.club)}</strong>
            </div>
            <div class="vs">VS</div>
            <div class="team-side">
              <span class="team-crest">${getBadgeForClub(nextOpponent)}</span>
              <strong>${escapeHtml(nextOpponent)}</strong>
            </div>
          </div>
          <div class="fixture-meta">
            <span>Matchday ${state.week + 1}</span>
            <span>${state.week % 4 === 3 ? 'European night' : 'League game'}</span>
          </div>
        </div>
        <button class="primary-btn" id="play-match">▶ Play match</button>
      </article>
    </div>

    <div class="grid lower-grid">
      <article class="card">
        <div class="card-heading">
          <h2>League table</h2>
          <button class="text-btn" data-view="table">Full table →</button>
        </div>
        ${tableMarkup(tableRows, 5)}
      </article>

      <article class="card">
        <div class="card-heading">
          <h2>Manager inbox</h2>
          <button class="text-btn" data-view="fixtures">All activity</button>
        </div>
        <div class="activity-list">${activityMarkup()}</div>
      </article>
    </div>
  `;
}

function squadView() {
  const avg = Math.round(state.squad.reduce((total, player) => total + player.rating, 0) / state.squad.length);
  return `
    <div class="grid section-grid">
      <article class="card">
        <div class="card-heading">
          <h2>Senior squad</h2>
          <span class="tag">${state.formation}</span>
        </div>
        <div class="squad-list">
          ${state.squad.map(player => `
            <div class="player-row">
              <div class="player-avatar">${player.face}</div>
              <div>
                <div class="player-name">${escapeHtml(player.name)}</div>
                <div class="player-meta">${player.pos} · ${player.age} yrs</div>
              </div>
              <div class="rating">${player.rating}</div>
              <span class="tag">${player.pos}</span>
              <div class="player-value">${formatMoney(player.value)}</div>
            </div>
          `).join('')}
        </div>
      </article>

      <aside class="card">
        <div class="card-heading">
          <h2>Squad report</h2>
        </div>
        <div class="hero-stat" style="margin-bottom:18px">
          <small>Squad rating</small>
          <strong>${avg} <em>AVG</em></strong>
        </div>
        <div class="activity-list">
          <div class="activity">
            <div class="activity-icon">⚽</div>
            <div class="activity-text"><strong>${state.squad.filter(player => player.pos === 'ST').length} strikers</strong><small>Attack depth</small></div>
          </div>
          <div class="activity">
            <div class="activity-icon">🛡</div>
            <div class="activity-text"><strong>${state.squad.filter(player => ['CB', 'LB', 'RB', 'GK'].includes(player.pos)).length} defenders</strong><small>Back line cover</small></div>
          </div>
          <div class="activity">
            <div class="activity-icon">💶</div>
            <div class="activity-text"><strong>${formatMoney(state.budget)} left</strong><small>Transfer budget</small></div>
          </div>
        </div>
        <hr style="border:0;border-top:1px solid var(--line);margin:18px 0">
        <div class="standings-note">Your squad is the engine of your title charge. Buy stars in the transfer market to improve the team.</div>
        <button class="secondary-btn" data-view="transfers" style="width:100%;margin-top:15px">Browse transfer market →</button>
      </aside>
    </div>
  `;
}

function transfersView() {
  const entries = PLAYER_POOL.filter(player => {
    if (marketFilter === 'All') return true;
    if (marketFilter === 'ST') return player.pos === 'ST';
    if (marketFilter === 'Winger') return ['LW', 'RW'].includes(player.pos);
    if (marketFilter === 'CM') return ['CM', 'AM'].includes(player.pos);
    if (marketFilter === 'DM') return player.pos === 'DM';
    if (marketFilter === 'CB') return ['CB', 'LB', 'RB'].includes(player.pos);
    if (marketFilter === 'GK') return player.pos === 'GK';
    return true;
  });

  const buttons = ['All', 'ST', 'Winger', 'CM', 'DM', 'CB', 'GK'];
  return `
    <div class="view-toolbar">
      <div>
        <h2>Transfer market</h2>
        <div class="eyebrow" style="margin-top:5px">Sign famous players to push for the title.</div>
      </div>
      <div class="season-pill">Budget: <strong style="color:var(--green)">${formatMoney(state.budget)}</strong></div>
    </div>

    <div class="filter-tabs" style="margin-bottom:16px">
      ${buttons.map(filter => `
        <button class="${marketFilter === filter ? 'active' : ''}" data-filter="${filter}">${filter}</button>
      `).join('')}
    </div>

    <div class="grid market-grid">
      ${entries.map(player => {
        const signed = state.bought.includes(player.name);
        const unaffordable = state.budget < player.value;
        return `
          <article class="card market-card">
            <div class="market-person">
              <div class="market-face">${player.face}</div>
              <div>
                <div class="market-name">${escapeHtml(player.name)}</div>
                <div class="market-info">${player.pos} · ${player.nation}</div>
              </div>
            </div>
            <div class="market-stats">
              <span>Rating <strong>${player.rating}</strong></span>
              <span>Value <strong>${formatMoney(player.value)}</strong></span>
            </div>
            <button class="primary-btn sign-btn" data-player="${escapeHtml(player.name)}" ${signed || unaffordable ? 'disabled' : ''}>${signed ? '✓ Signed' : unaffordable ? 'Not enough funds' : `Buy · ${formatMoney(player.value)}`}</button>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

function fixturesView() {
  const rows = [];
  for (let index = 0; index < Math.max(8, state.results.length + 4); index++) {
    if (index < state.results.length) {
      const result = state.results[index];
      rows.push(`
        <div class="match-row">
          <div class="match-date">Matchday ${index + 1}</div>
          <div class="match-opponent">${escapeHtml(result.home ? state.club : result.opponent)} <span>${result.home ? 'vs' : '@'}</span> ${escapeHtml(result.home ? result.opponent : state.club)}</div>
          <div class="match-score">${result.home ? `${result.gf} - ${result.ga}` : `${result.ga} - ${result.gf}`}</div>
          <div class="match-status">${result.comp}</div>
        </div>
      `);
      continue;
    }

    const nextClub = getLeagueClubNames()[index % Math.max(1, getLeagueClubNames().length)] || state.club;
    rows.push(`
      <div class="match-row">
        <div class="match-date">Matchday ${index + 1}</div>
        <div class="match-opponent">${escapeHtml(state.club)} <span>vs</span> ${escapeHtml(nextClub)}</div>
        <div class="match-score">— : —</div>
        <div class="match-status">${index % 4 === 3 ? 'Europe' : 'Upcoming'}</div>
      </div>
    `);
  }

  return `
    <div class="view-toolbar">
      <h2>Season schedule</h2>
      <span class="season-pill">${state.week} matches played</span>
    </div>
    <div class="fixture-list">${rows.join('')}</div>
  `;
}

function tableView() {
  const rows = getSortedTable();
  return `
    <div class="view-toolbar">
      <h2>${escapeHtml(state.league)}</h2>
      <span class="season-pill">Season ${state.season}</span>
    </div>
    <div class="card">
      ${tableMarkup(rows)}
      <p class="standings-note">The league title is yours if you can outlast the best clubs in Europe. Win games, sign stars, and keep everyone fit.</p>
    </div>
  `;
}

function europeView() {
  const points = state.euroPoints || 0;
  return `
    <div class="grid competition-cards" style="margin-bottom:17px">
      <article class="card competition-card">
        <span class="comp-icon">🏆</span>
        <span class="comp-badge">⭐</span>
        <h3>Champions League</h3>
        <p>Europe's elite club competition with the biggest stage and the toughest opposition.</p>
      </article>
      <article class="card competition-card">
        <span class="comp-icon">🌟</span>
        <span class="comp-badge">✦</span>
        <h3>Conference League</h3>
        <p>A fresh route to European nights and a real chance to win silverware.</p>
      </article>
      <article class="card competition-card">
        <span class="comp-icon">🏟️</span>
        <span class="comp-badge">🏠</span>
        <h3>${escapeHtml(state.league)}</h3>
        <p>Domestic title race. The main objective remains winning the league.</p>
      </article>
    </div>

    <div class="grid section-grid">
      <article class="card">
        <div class="card-heading">
          <h2>${state.euroCompetition}</h2>
          <span class="tag">${state.euroMatches}/8 matches</span>
        </div>
        <p class="standings-note">Your club is fighting in the ${state.euroCompetition}. Qualify with good results and keep your momentum over the season.</p>
        ${euroTableMarkup()}
      </article>
      <aside class="card">
        <div class="card-heading">
          <h2>European campaign</h2>
        </div>
        <div class="hero-stat" style="margin-bottom:12px">
          <small>Competition</small>
          <strong style="font-size:17px">${state.euroCompetition}</strong>
        </div>
        <div class="hero-stat" style="margin-bottom:12px">
          <small>Points</small>
          <strong>${points} <em>PTS</em></strong>
        </div>
        <div class="activity-text">
          ${state.euroMatches ? `${state.euroWins} wins from ${state.euroMatches} European matches.` : 'Your continental adventure starts with your next European fixture.'}
          <small>European games come on every fourth matchday.</small>
        </div>
      </aside>
    </div>
  `;
}

function euroTableMarkup() {
  const fixtureList = state.euroResults.length ? state.euroResults : [];
  const rows = [
    { name: state.club, badge: state.badge, played: state.euroMatches, points: state.euroPoints }
  ];

  fixtureList.forEach(item => {
    const existing = rows.find(entry => entry.name === item.opponent);
    if (!existing) {
      rows.push({ name: item.opponent, badge: item.badge || '⚽', played: 1, points: item.result === 'W' ? 3 : item.result === 'D' ? 1 : 0 });
    } else {
      existing.played += 1;
      existing.points += item.result === 'W' ? 3 : item.result === 'D' ? 1 : 0;
    }
  });

  const sorted = rows.sort((a, b) => b.points - a.points || a.name.localeCompare(b.name));
  return `
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Club</th>
          <th>P</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        ${sorted.map((row, index) => `
          <tr class="${row.name === state.club ? 'you-row' : ''}">
            <td class="pos">${index + 1}</td>
            <td><span class="club-cell"><span class="mini-crest">${row.badge}</span>${escapeHtml(row.name)}</span></td>
            <td>${row.played}</td>
            <td class="points">${row.points}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function getBadgeForClub(clubName) {
  const info = findLeagueByClub(clubName);
  return info ? info.badge : '⚽';
}

function buyPlayer(playerName) {
  const player = PLAYER_POOL.find(item => item.name === playerName);
  if (!player) {
    return;
  }

  if (state.bought.includes(player.name)) {
    showToast('This player already joined your squad.', true);
    return;
  }

  if (state.budget < player.value) {
    showToast('Not enough budget for that signing.', true);
    return;
  }

  state.budget -= player.value;
  state.bought.push(player.name);
  state.squad.push({
    name: player.name,
    pos: player.pos,
    rating: player.rating,
    value: player.value,
    face: player.face,
    age: 24 + Math.floor(Math.random() * 6)
  });

  state.log.push(`<strong>Signing complete:</strong> ${escapeHtml(player.name)} joins ${escapeHtml(state.club)} for ${formatMoney(player.value)}.`);
  state.log = state.log.slice(-12);
  saveState();
  render();
  showToast(`${player.name} signed!`);
}

function generateGoals(teamPower, opponentPower) {
  const difference = teamPower - opponentPower;
  let goals = 0;

  if (difference > 10) {
    goals = 2 + (Math.random() > 0.55 ? 1 : 0) + (Math.random() > 0.75 ? 1 : 0);
  } else if (difference > 3) {
    goals = 1 + (Math.random() > 0.68 ? 1 : 0) + (Math.random() > 0.88 ? 1 : 0);
  } else if (difference > -3) {
    goals = Math.round(Math.random() * 2) + 1;
  } else if (difference > -10) {
    goals = Math.round(Math.random() * 2);
  } else {
    goals = Math.round(Math.random() * 1);
  }

  return Math.max(0, Math.min(5, goals));
}

function updateLeagueTable(teamName, opponentName, myGoals, oppGoals) {
  const team = state.table[teamName];
  const opponent = state.table[opponentName];

  if (!team || !opponent) {
    return;
  }

  team.played += 1;
  opponent.played += 1;
  team.gf += myGoals;
  team.ga += oppGoals;
  opponent.gf += oppGoals;
  opponent.ga += myGoals;

  if (myGoals > oppGoals) {
    team.wins += 1;
    team.pts += 3;
    opponent.losses += 1;
    team.form.push('W');
    opponent.form.push('L');
  } else if (myGoals < oppGoals) {
    team.losses += 1;
    opponent.wins += 1;
    opponent.pts += 3;
    team.form.push('L');
    opponent.form.push('W');
  } else {
    team.draws += 1;
    opponent.draws += 1;
    team.pts += 1;
    opponent.pts += 1;
    team.form.push('D');
    opponent.form.push('D');
  }

  team.form = team.form.slice(-5);
  opponent.form = opponent.form.slice(-5);
}

function playMatch() {
  const leagueNames = getLeagueClubNames();
  const opponentName = getNextLeagueOpponent();
  const isEuropean = state.week % 4 === 3;
  const teamStrength = getOverallStrength();
  const opponentStrength = getClubStrength(opponentName);
  const myGoals = generateGoals(teamStrength, opponentStrength);
  const oppGoals = generateGoals(opponentStrength, teamStrength);

  const home = Math.random() > 0.45;
  const myScore = home ? myGoals : oppGoals;
  const oppScore = home ? oppGoals : myGoals;
  const result = myScore > oppScore ? 'W' : myScore === oppScore ? 'D' : 'L';

  if (isEuropean) {
    const euroList = state.euroCompetition === 'Champions League' ? CHAMPIONS_CLUBS : CONFERENCE_CLUBS;
    const euroOpponent = euroList[(state.euroMatches + Math.floor(state.week / 4)) % euroList.length] || state.club;
    state.euroMatches += 1;
    if (result === 'W') state.euroWins += 1;
    if (result === 'W') state.euroPoints += 3;
    if (result === 'D') state.euroPoints += 1;
    state.euroResults.push({ opponent: euroOpponent, badge: getBadgeForClub(euroOpponent), result, gf: myScore, ga: oppScore });
    state.results.push({ opponent: euroOpponent, gf: myScore, ga: oppScore, home, comp: state.euroCompetition, result });
    state.log.push(`<strong>European night:</strong> ${escapeHtml(state.club)} ${myScore}-${oppScore} ${escapeHtml(euroOpponent)} in the ${state.euroCompetition}.`);
  } else {
    updateLeagueTable(state.club, opponentName, myScore, oppScore);
    state.results.push({ opponent: opponentName, gf: myScore, ga: oppScore, home, comp: state.league, result });
    state.log.push(`<strong>${result === 'W' ? 'Victory' : result === 'D' ? 'Draw' : 'Defeat'}</strong> ${escapeHtml(state.club)} ${myScore}-${oppScore} ${escapeHtml(opponentName)} in ${escapeHtml(state.league)}.`);
  }

  state.week += 1;
  state.log = state.log.slice(-12);

  if (state.week >= 14) {
    finishSeason();
  }

  saveState();
  render();
  showToast(`${state.club} ${myScore}-${oppScore} ${isEuropean ? 'European rival' : opponentName}`);
}

function finishSeason() {
  const table = getSortedTable();
  const rank = table.findIndex(row => row.name === state.club) + 1;
  const prize = rank === 1 ? 40 : rank <= 4 ? 25 : 12;
  state.budget += prize;
  const titleText = rank === 1 ? `won the ${state.league}!` : `finished ${ordinal(rank)} in ${state.league}.`;
  state.log.push(`<strong>Season complete:</strong> ${escapeHtml(state.club)} ${titleText} Board bonus: ${formatMoney(prize)}.`);

  state.season += 1;
  state.week = 0;
  state.results = [];
  state.euroMatches = 0;
  state.euroWins = 0;
  state.euroPoints = 0;
  state.euroResults = [];
  state.euroCompetition = rank <= 4 ? 'Champions League' : 'Conference League';

  const leagueClubs = getCurrentLeague().clubs;
  state.table = {};
  leagueClubs.forEach(([name, badge, strength]) => {
    state.table[name] = {
      name,
      badge,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      gf: 0,
      ga: 0,
      pts: 0,
      form: []
    };
  });

  saveState();
}

render();
