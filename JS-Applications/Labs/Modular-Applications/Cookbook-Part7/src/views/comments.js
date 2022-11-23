import { render, html, until } from '../dom.js';
import { getCommentsByRecipeId, createComment, deleteComment, updateComment } from '../api/data.js';
import { nothing } from '../../node_modules/lit-html/lit-html.js';


const commentsTemplate = (recipe, commentForm, comments, onEdit, onDelete) => html`
<div class="section-title">
    Comments for ${recipe.name}
</div>
${commentForm}
<div class="comments">
    ${until((async () => commentsList(await comments, onEdit, onDelete))(), 'Loading comments...')}
</div>`;

const commentFormTemplate = (active, toggleForm, onSubmit) => html`
<article class="new-comment">
    ${active
    ? html`
    <h2>New comment</h2>
    <form id="commentForm" @submit=${onSubmit}>
        <textarea name="content" placeholder="Type comment"></textarea>
        <input type="submit" value="Add comment">
    </form>`
    : html`<form><button class="button" @click=${toggleForm}>Add comment</button></form>`}
</article>`;

const commentsList = (comments, onEdit, onDelete) => html`
<ul>
    ${comments.map(c => comment(c, onEdit, onDelete))}
</ul>`;


const comment = (data, onEdit, onDelete) => html`
<li class="comment">
    <header>${data.author.email}</header>
    <p>${data.content}</p>
    ${data._ownerId === sessionStorage.getItem('userId')
    ? html`
    <div class="controls">
        <a class="actionLink" href="javascript:void(0)" @click=${(ev) => onEdit(ev, data.content, data._id)}>\u270E
            Edit</a>
        <a class="actionLink" href="javascript:void(0)" @click=${()=> onDelete(data._id)}>\u2716 Delete</a>
    </div>`
    : nothing}
</li>`;



const commentEditTemplate = (content, onEditSubmit) => html`
<form @submit=${onEditSubmit}>
    <textarea name="content" .value=${content}></textarea>
    <input type="submit" value="Edit comment">
</form>`;

export function showComments(recipe) {
    const recipeId = recipe._id;
    let formActive = false;
    const commentsPromise = getCommentsByRecipeId(recipeId);
    const result = document.createElement('div');
    renderTemplate(commentsPromise);

    return result;

    function renderTemplate(comments) {
        render(commentsTemplate(recipe, createForm(formActive, toggleForm, onSubmit), comments, onEdit, onDelete), result);
    }

    function toggleForm() {
        formActive = !formActive;
        renderTemplate(commentsPromise);
    }

    async function onSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        toggleForm();
        const comments = await commentsPromise;

        const comment = {
            content: data.get('content'),
            recipeId
        };
        console.log(comment);

        const result = await createComment(comment);

        comments.unshift(result);
        renderTemplate(comments);
    }

    function onEdit(ev, content, id) {
        render(commentEditTemplate(content, onEditSubmit), ev.target.parentElement.parentElement);

        async function onEditSubmit(event) {
            event.preventDefault();

            const data = new FormData(event.target);

            const comment = {
                content: data.get('content'),
                recipeId
            };

            const com = await updateComment(id, comment);
            const comments = await getCommentsByRecipeId(recipeId);
            const index = comments.findIndex(c => c.recipeId === id);
            comments.splice(index, 1, com);

            renderTemplate(comments);
        }
    }

    async function onDelete(id) {
        const confirmed = confirm('Are you sure you want to delete this comment?');
        if (confirmed) {
            try {
                await deleteComment(id);
                const comments = await getCommentsByRecipeId(recipeId);
                renderTemplate(comments);
            } catch (err) {
                alert(err.message);
            }
        }
    }
}

function createForm(formActive, toggleForm, onSubmit) {
    const userId = sessionStorage.getItem('userId');
    if (userId == null) {
        return '';
    } else {
        return commentFormTemplate(formActive, toggleForm, onSubmit);
    }
}