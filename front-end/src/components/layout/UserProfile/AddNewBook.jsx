import React, { Component } from "react";
import close from "../../../assets/icons/002-x-mark.svg";
import { addBook } from "../../../store/actions/UserActions";
import { connect } from "react-redux";

class AddNewBook extends Component {
  state = {
    book: {
      name: "",
      author: "",
      price: "",
      img: "",
      category: "",
    },
    categories: null,
  };

  componentDidMount() {
    this.getCategories();
  }
  // get the categories
  getCategories = async () => {
    const res = await fetch("http://localhost:5000/main/categories");
    const { categories } = await res.json();
    this.setState({
      ...this.state,
      categories,
    });
  };
  // add fileds data to the state
  handleFieldsChange = (e) => {
    this.setState({
      ...this.state,
      book: {
        ...this.state.book,
        [e.target.name]: e.target.value,
      },
    });
  };

  // add the img selected to the state
  handleSelectImg = (e) => {
    this.setState({
      ...this.state,
      book: {
        ...this.state.book,
        [e.target.name]: e.target.files[0],
      },
    });
  };

  // submit the book
  submitBook = (e) => {
    e.preventDefault();
    // extract every single property from state
    const { name, category, author, price, img } = this.state.book;

    // create book data ogj contains state except book img
    const bookData = {
      name,
      category,
      author,
      price,
    };

    // from data
    const formData = new FormData();

    // add bookData to the form data under property bookData
    formData.append("bookData", JSON.stringify(bookData));

    // add bookimg to the form data
    formData.append("img", img);

    // extract addbook function to props
    const { addBook } = this.props;
    const { push } = this.props.history;
    // send the book to the server
    addBook(formData);
    push("/");
  };

  render() {
    // to close add book form
    const { goBack } = this.props.history;
    const { categories } = this.state;

    // return the template
    return (
      // the container of form
      <div className="new-book">
        <button className="exit" onClick={goBack}>
          <img src={close} alt="" />
        </button>

        <form onSubmit={this.submitBook}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Book Name"
              onChange={this.handleFieldsChange}
              name="name"
              value={this.state.book.name}
            />
          </div>

          <div className="input-field">
            <input
              type="text"
              placeholder="Book Author"
              onChange={this.handleFieldsChange}
              name="author"
              value={this.state.book.author}
            />
          </div>

          <div className="input-field divided">
            <input
              type="number"
              placeholder="$"
              onChange={this.handleFieldsChange}
              name="price"
              value={this.state.book.price}
            />
            <select name="" id="selection">
              {categories
                ? categories.map((category) => (
                    <option key={category.Id} value={category.name}>
                      {category.name}
                    </option>
                  ))
                : "loading"}
            </select>
          </div>

          <div className="input-field">
            <input
              type="file"
              placeholder="Book img"
              onChange={this.handleSelectImg}
              name="img"
              className="custom-file-input"
            />
          </div>

          <button className="add-book" type="submit">
            Add Book
          </button>
        </form>
      </div>
    );
  }
}

// map addbook function to the props
const mapDispachToProps = (dispatch) => {
  return {
    addBook: (bookData) => dispatch(addBook(bookData)),
  };
};

export default connect(null, mapDispachToProps)(AddNewBook);
