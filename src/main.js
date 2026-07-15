import './style.css';

const resources = [
  { title: 'Critical Thinking Strategy', type: 'Teaching guide', category: 'teaching', description: 'A practical foundation for helping students think critically through historical questions.', url: '/critical-thinkingstrategy', tags: ['reasoning', 'strategy', 'all grades'] },
  { title: 'Decision Making', type: 'Teaching guide', category: 'teaching', description: 'Help students identify options, weigh values, and defend a thoughtful historical decision.', url: '/teach-decision-making', tags: ['decision-making', 'discussion', 'strategy'] },
  { title: 'Evaluating News Sources', type: 'Teaching guide', category: 'teaching', description: 'Lessons for investigating credibility, bias, and evidence in the information students encounter.', url: '/evaluating-news-sources', tags: ['media literacy', 'sources', 'current events'] },
  { title: 'Causes of the American Revolution', type: 'U.S. history', category: 'us', description: 'Investigate competing explanations and choices behind the break with Britain.', url: '/causes-of-american-revolution', tags: ['revolution', 'colonies', 'argument'] },
  { title: 'Civil War', type: 'U.S. history', category: 'us', description: 'A full curriculum page for exploring the conflict through evidence and perspective.', url: '/civil-war-curriculum', tags: ['civil war', 'slavery', 'documents'] },
  { title: 'Reconstruction & Jim Crow', type: 'U.S. history', category: 'us', description: 'Examine the contested meanings of citizenship, freedom, and equal protection.', url: '/reconstruction-jim-crow', tags: ['reconstruction', 'civil rights', 'race'] },
  { title: '1930s–1940s', type: 'U.S. history', category: 'us', description: 'Explore the Great Depression, World War II, and the choices people faced.', url: '/1930s-1940s-curriculum', tags: ['depression', 'world war ii', 'home front'] },
  { title: 'Age of Social Media', type: 'U.S. history', category: 'us', description: 'Resources for examining recent change, digital culture, and public life.', url: '/2013-2024-curriculum', tags: ['social media', 'contemporary', 'digital'] },
  { title: 'Ancient History', type: 'World history', category: 'world', description: 'Investigate the ideas, systems, and choices that shaped the ancient world.', url: '/ancient-history-curriculum', tags: ['ancient', 'civilizations', 'world history'] },
  { title: 'Renaissance', type: 'World history', category: 'world', description: 'Explore change, continuity, and the impact of new ideas in Europe.', url: '/renaissance-history-curriculum', tags: ['renaissance', 'europe', 'change'] },
  { title: '20th Century', type: 'World history', category: 'world', description: 'History curriculum focused on the questions and transformations of the modern era.', url: '/20th-century-historycurriculum', tags: ['modern', 'world wars', 'global'] },
  { title: 'Autocracy v. Democracy', type: 'Current issues', category: 'issues', description: 'A timely inquiry into political systems, civic values, and democratic decision-making.', url: '/autocracy-v-democracy', tags: ['democracy', 'civics', 'government'] },
  { title: 'Conspiracy Theories', type: 'Current issues', category: 'issues', description: 'Help students recognize claims, interrogate evidence, and reason through misinformation.', url: '/conspiracy-theories-lessons', tags: ['misinformation', 'sources', 'media literacy'] }
];

const grid = document.querySelector('#resource-grid');
const search = document.querySelector('#resource-search');
const count = document.querySelector('#result-count');
const empty = document.querySelector('#empty-state');
const clear = document.querySelector('#clear-search');
let activeFilter = 'all';

function render() {
  const query = search.value.trim().toLowerCase();
  const matches = resources.filter((item) => (activeFilter === 'all' || item.category === activeFilter) && `${item.title} ${item.type} ${item.description} ${item.tags.join(' ')}`.toLowerCase().includes(query));
  grid.innerHTML = matches.map((item) => `<a class="resource-card" href="https://www.criticalthinkinginhistory.com${item.url}" target="_blank" rel="noreferrer"><span class="resource-type ${item.category}">${item.type}</span><h3>${item.title}</h3><p>${item.description}</p><span class="resource-footer"><span>${item.tags.slice(0, 2).join(' · ')}</span><i data-lucide="arrow-up-right"></i></span></a>`).join('');
  count.textContent = `${matches.length} ${matches.length === 1 ? 'resource' : 'resources'} available`;
  empty.hidden = matches.length > 0;
  clear.hidden = !query;
  window.lucide.createIcons();
}
document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => { activeFilter = button.dataset.filter; document.querySelectorAll('.filter').forEach((el) => el.classList.toggle('active', el === button)); render(); }));
document.querySelectorAll('[data-filter-link]').forEach((link) => link.addEventListener('click', () => { activeFilter = link.dataset.filterLink; document.querySelectorAll('.filter').forEach((el) => el.classList.toggle('active', el.dataset.filter === activeFilter)); }));
search.addEventListener('input', render); clear.addEventListener('click', () => { search.value = ''; search.focus(); render(); });
const menuButton = document.querySelector('.menu-button'); const mobileMenu = document.querySelector('#mobile-menu');
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); mobileMenu.hidden = open; menuButton.innerHTML = `<i data-lucide="${open ? 'menu' : 'x'}"></i>`; window.lucide.createIcons(); });
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { mobileMenu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.innerHTML = '<i data-lucide="menu"></i>'; window.lucide.createIcons(); }));
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (event) => { event.preventDefault(); document.querySelector('#signup-message').textContent = 'Thanks. You are on the list.'; signupForm.reset(); });
document.querySelector('#year').textContent = new Date().getFullYear();
window.lucide.createIcons(); render();
