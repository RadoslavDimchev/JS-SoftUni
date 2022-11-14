const section = document.getElementById('homePage');
section.remove();

export function showHome(ctx) {
  ctx.showSection(section);
}