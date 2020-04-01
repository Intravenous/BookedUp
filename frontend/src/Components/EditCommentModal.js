import React from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'
import auth from '../lib/auth'

const Modal = ({ handleChange, handleSubmit, closeModal, modalState, comment, book, commentId }) => {
  if (!modalState) {
    return null
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit Comment</p>
          <button className="delete" onClick={closeModal} />
        </header>

        <section className="modal-card-body">
          <div className="content">
            <textarea className="textarea" name="EditedComment"
              onChange={handleChange}
              placeholder={comment.editedComment}
              rows="5">
            </textarea>
          </div>
        </section>

        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSubmit}>Save changes</button>
          <button className="button" onClick={closeModal}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired
  // comment: PropTypes.string
}

class EditCommentModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalState: false,
      comment: {}
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState(prev => {
      const newState = !prev.modalState
      return { modalState: newState }
    })
    this.setState({ comment: this.props })
  }

  handleChange(event) {
    const { name, value } = event.target
    const data = { ...this.state.comment, [name]: value }
    this.setState({ comment: data })
    // console.log(this.state.comment)
  }

  handleSubmit(event, comment) {
    // console.log('Hello')
    event.preventDefault()
    // console.log(event)
    console.log(this.state.comment)
    const bookId = this.props.book
    console.log(this.props)
    const commentId = this.props.commentId
    axios.put(`/api/books/${bookId}/comment/${commentId}`, 
      this.state.comment, { headers: { Authorization: `Bearer ${auth.getToken()}` } })
      .then(res => {
        // console.log(res.data)
        this.setState({ comment: res.data })
      })
    // .then(() => this.props.history.push('/profile/:user_id'))
    // .catch(err => this.setState({ errors: err.response.data.errors }))
  }


  // This is the render of the modal button will appear on the profile page
  render() {
    // console.log(this.props)
    // console.log(this.state.comment)
    return (
      <span id="editSymbol" className="icon is-small">
        <p onClick={this.toggleModal}>
          <i className="fas fa-edit"></i>
        </p>
      

        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          comment={this.state.comment}
          handleChange={(event) => this.handleChange(event)}
          handleSubmit={(event) => this.handleSubmit(event, event.target.comment )}
        ></Modal>
      </span>
    )
  }

}

export default EditCommentModal