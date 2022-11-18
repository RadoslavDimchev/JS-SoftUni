import { render } from './api.js';
import { showCatalog } from './catalog.js';
import { showCreate } from './create.js';
import { showUpdate } from './edit.js';


const ctx = {
  update
};

update();

function update() {
  render([
    showCatalog(ctx),
    showCreate(ctx),
    showUpdate(ctx)
  ], document.body);
}