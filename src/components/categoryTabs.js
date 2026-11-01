import { CATEGORY_LIST } from '../data/categories.js';

/** Age-group tabs in the slide's top pill header. */
export function renderSlideCategoryTabs(activeId) {
  return CATEGORY_LIST.map(cat => `
            <button type="button" 
                    class="pill-cat-btn ${activeId === cat.id ? 'active' : ''}" 
                    data-category="${cat.id}" 
                    role="tab"
                    aria-selected="${activeId === cat.id}"
                    title="${cat.label}: ${cat.gameIds.length} Games">
              <span class="cat-pill-emoji">${cat.emoji}</span>
              <span class="cat-pill-text">${cat.tabName} <span class="cat-pill-sub">(${cat.ages})</span></span>
              <span class="cat-pill-pic">PIC: ${cat.pic}</span>
            </button>
  `).join('');
}

/** Age-group tabs at the top of the slide drawer. */
export function renderDrawerCategoryTabs(activeId) {
  return CATEGORY_LIST.map(cat => `
            <button type="button" 
                    class="drawer-pill-btn ${activeId === cat.id ? 'active' : ''}" 
                    data-drawer-cat="${cat.id}"
                    role="tab"
                    aria-selected="${activeId === cat.id}"
                    style="--tab-accent: ${cat.themeColor};">
              <span class="d-pill-label">${cat.drawerName}</span>
              <span class="d-pill-sub">${cat.ages}</span>
            </button>
  `).join('');
}
