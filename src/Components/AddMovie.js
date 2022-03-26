
import React, { useState } from "react";
import Modal from "react-modal";
import { Rating } from "react-simple-star-rating";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
const AddMovie = ({ handeladd }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [form, setForm] = useState({
    title: "",
    descreption: "",
    posterurl: "",
    
  });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  const handelsumbit = (e) => {
    e.preventDefault();
    handeladd({...form,rating});
    setForm({
      title: "",
      descreption: "",
      posterurl: "",
      rate: 0,
    });
    closeModal();
  };
  const handelchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <button onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handelsumbit}>
          <label htmlFor="">name</label>
          <input
            required
            onChange={handelchange}
            type="text"
            name="title"
            value={form.title}
          />{" "}
          <br />
          <label htmlFor="">desc</label>
          <input
            required
            onChange={handelchange}
            type="text"
            name="descreption"
            value={form.descreption}
          />{" "}
          <br />
          <label htmlFor="">posterurl</label>
          <input
            required
            onChange={handelchange}
            type="url"
            name="posterurl"
            value={form.posterurl}
          />
          <br />
          <label htmlFor="">rate</label>
          <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
          <button>submit</button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;

