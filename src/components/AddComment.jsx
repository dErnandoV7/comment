import classes from './AddComment.module.css'

const AddComment = ({ name, setName, comment, setComment, handleSubmit }) => {
  return (
    <div className={classes.div}>
      <p className={classes.p}>Adicionar comentário</p>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <div className={classes.input_group}>
          <label htmlFor="name">Autor:</label>
          <input
            type="text"
            placeholder="Insira seu nome"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.input_group}>
          <label htmlFor="comment">Comentário:</label>
          <textarea
            name="comment"
            id="comment"
            placeholder="Insira seu comentário"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Enviar" className={classes.enviar}/>
      </form>
    </div>
  );
};

export default AddComment;
