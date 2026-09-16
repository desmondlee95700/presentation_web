/**
 * Dynamic Materials & Prep Scaler for Camp Counselors
 */
export function createMaterialsMarkup(game) {
  return `
    <div class="prep-container">
      <div class="prep-header">
        <div class="prep-title-block">
          <span class="badge-pill">Camp Director Tool</span>
          <h2 class="slide-heading">Materials & Supplies Scaler</h2>
          <p class="slide-subtext">Adjust the team count to automatically calculate exact supplies needed for your session.</p>
        </div>
        <div class="scaler-widget">
          <label class="scaler-label" for="team-counter">Active Camper Teams</label>
          <div class="counter-stepper">
            <button type="button" class="btn-step" id="btn-decrease-teams" aria-label="Decrease teams">−</button>
            <span class="counter-value" id="teams-count-display">2</span>
            <button type="button" class="btn-step" id="btn-increase-teams" aria-label="Increase teams">+</button>
          </div>
          <span class="scaler-hint" id="camper-estimate-display">~12 to 16 campers total</span>
        </div>
      </div>

      <div class="materials-grid" id="materials-list-container">
        <!-- Rendered dynamically -->
      </div>

      <div class="prep-craft-card">
        <div class="craft-icon">🎨</div>
        <div class="craft-content">
          <h4>Goliath Cardboard Cutout Craft Tip</h4>
          <p>Cut cardboard into a 15" x 20" rectangle. Have campers draw Goliath’s helmet, scowling face, and armor during morning art station. Use masking tape strips at the bottom to mount it firmly to the peak cup!</p>
        </div>
      </div>
    </div>
  `;
}

export function updateMaterialsDisplay(game, teamCount) {
  const container = document.getElementById('materials-list-container');
  if (!container) return;

  const countDisplay = document.getElementById('teams-count-display');
  if (countDisplay) countDisplay.textContent = teamCount;

  const camperEstimate = document.getElementById('camper-estimate-display');
  if (camperEstimate) {
    camperEstimate.textContent = `~${teamCount * 6} to ${teamCount * 8} campers total`;
  }

  container.innerHTML = game.materials.map(item => {
    let scaledQty = item.quantity;

    // Scale items intelligently
    if (item.name.toLowerCase().includes('cups') || item.name.toLowerCase().includes('cans')) {
      scaledQty = `${teamCount * 10}–${teamCount * 15} units`;
    } else if (item.name.toLowerCase().includes('balls') || item.name.toLowerCase().includes('socks')) {
      scaledQty = `${teamCount * 3}–${teamCount * 6} balls`;
    } else if (item.name.toLowerCase().includes('goliath')) {
      scaledQty = `${teamCount} figure${teamCount > 1 ? 's' : ''}`;
    } else if (item.name.toLowerCase().includes('table')) {
      scaledQty = `${teamCount} table${teamCount > 1 ? 's' : ''}`;
    } else if (item.name.toLowerCase().includes('rope') || item.name.toLowerCase().includes('tape')) {
      scaledQty = `${teamCount * 12} feet`;
    }

    return `
      <div class="material-card ${item.required ? 'required' : 'optional'}">
        <div class="material-card-top">
          <span class="material-tag">${item.required ? 'Required' : 'Optional'}</span>
          <span class="material-qty">${scaledQty}</span>
        </div>
        <h4 class="material-name">${item.name}</h4>
        <p class="material-note">${item.note}</p>
      </div>
    `;
  }).join('');
}
