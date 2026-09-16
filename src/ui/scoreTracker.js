import { sfx } from '../utils/sfx.js';

export class ScoreTracker {
  constructor() {
    this.teams = [
      { name: 'Red Davids', score: 0, color: '#ef4444' },
      { name: 'Blue Davids', score: 0, color: '#3b82f6' }
    ];
    this.activeTeamIndex = 0;
  }

  renderMarkup() {
    return `
      <div class="scorekeeper-widget">
        <div class="scorekeeper-header">
          <span class="scorekeeper-title">🏆 Match Scoreboard</span>
          <span class="active-turn-pill" id="active-team-indicator">Turn: ${this.teams[this.activeTeamIndex].name}</span>
        </div>
        <div class="score-teams-row">
          ${this.teams.map((t, idx) => `
            <div class="score-team-card ${idx === this.activeTeamIndex ? 'active' : ''}" id="team-card-${idx}">
              <div class="team-name" style="color: ${t.color}">${t.name}</div>
              <div class="team-score-num" id="score-val-${idx}">${t.score}</div>
              <div class="team-quick-btns">
                <button type="button" class="btn-score-add" data-team="${idx}" data-pts="10">+10 Cup</button>
                <button type="button" class="btn-score-goliath" data-team="${idx}" data-pts="50">★ +50 Goliath</button>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="score-actions-row">
          <button type="button" class="btn-score-switch" id="btn-switch-turn">Switch Active Turn</button>
          <button type="button" class="btn-score-reset" id="btn-reset-scores">Reset Scores</button>
        </div>
      </div>
    `;
  }

  initEvents() {
    const addBtns = document.querySelectorAll('.btn-score-add, .btn-score-goliath');
    addBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const teamIdx = parseInt(e.target.dataset.team, 10);
        const pts = parseInt(e.target.dataset.pts, 10);
        this.addPoints(teamIdx, pts);
      });
    });

    const switchBtn = document.getElementById('btn-switch-turn');
    if (switchBtn) {
      switchBtn.addEventListener('click', () => {
        this.activeTeamIndex = (this.activeTeamIndex + 1) % this.teams.length;
        this.updateDOM();
        sfx.playClick();
      });
    }

    const resetBtn = document.getElementById('btn-reset-scores');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.teams.forEach(t => t.score = 0);
        this.updateDOM();
        sfx.playClick();
      });
    }
  }

  addPoints(teamIdx, points) {
    this.teams[teamIdx].score += points;
    this.updateDOM();
    if (points >= 50) {
      sfx.playGoliathBonus();
    } else {
      sfx.playCupHit();
    }
  }

  recordPhysicsKnockdown(cupsKnocked, goliathKnocked) {
    const pts = cupsKnocked * 10 + (goliathKnocked ? 50 : 0);
    if (pts > 0) {
      this.teams[this.activeTeamIndex].score += pts;
      this.updateDOM();
    }
  }

  updateDOM() {
    this.teams.forEach((t, idx) => {
      const valEl = document.getElementById(`score-val-${idx}`);
      if (valEl) valEl.textContent = t.score;

      const card = document.getElementById(`team-card-${idx}`);
      if (card) {
        card.classList.toggle('active', idx === this.activeTeamIndex);
      }
    });

    const indicator = document.getElementById('active-team-indicator');
    if (indicator) {
      indicator.textContent = `Turn: ${this.teams[this.activeTeamIndex].name}`;
    }
  }
}
