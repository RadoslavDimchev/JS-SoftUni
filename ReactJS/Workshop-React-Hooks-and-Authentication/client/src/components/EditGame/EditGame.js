const EditGame = () => {
  return (
    <section id="edit-page" className="auth">
      <form id="edit">
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input type="text" id="title" name="title" defaultValue="" />
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" defaultValue="" />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            defaultValue=""
          />
          <label htmlFor="game-img">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" defaultValue={""} />
          <input className="btn submit" type="submit" defaultValue="Edit Game" />
        </div>
      </form>
    </section>
  );
};

export default EditGame;