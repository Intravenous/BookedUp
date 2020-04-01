// Your frontend starts here..sfas
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

import NavBar from './Components/Navbar'
import Home from './Components/Home'

import Register from './Components/Register'
import Login from './Components/Login'

import UserProfile from './Components/UserProfile'

import CategoriesShownToNewUser from './Components/CategoriesShownToNewUser'
import NewUserAddsCategories from './Components/NewUserAddsCategories'

import SearchNewBooks from './Components/SearchNewBooks'
import SingleBook from './Components/SingleBook'
import DetailedBookPage from './Components/DetailedBookPage'

import BookComment from './Components/BookComment'
import UpdateComments from './Components/UpdateComments'

import CreateBookClub from './Components/CreateBookClub'
import AllBookClubs from './Components/AllBookClubs'
import SingleBookClub from './Components/SingleBookClub'
import MyBookClubs from './Components/MyBookClubs'
import CommentsOnTheBookClub from './Components/CommentsOnTheBookClub'

import UserLibrary from './Components/UserLibrary'

const App = () => (
  
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/categories" component={CategoriesShownToNewUser} />
      <Route path="/categories/:user_id" component={NewUserAddsCategories} />
      <Route exact path="/profile/:user_id" component={UserProfile} />
      <Route exact path="/books/new" component={SearchNewBooks} />
      <Route exact path="/books/:book_id" component={DetailedBookPage}/>
      <Route exact path="/book/:webId" component={SingleBook} />
      <Route exact path="/books/:book_id/comments" component={BookComment} />
      <Route path="/book/:book_id/comment/:comment_id" component={UpdateComments} />
      <Route exact path="/bookclubs" component={AllBookClubs} />
      <Route exact path="/bookclubs/new" component={CreateBookClub} />
      <Route exact path="/bookclub/:bookclub_id" component={SingleBookClub} />
      <Route path="/bookclubs/myBookClubs" component={MyBookClubs} />
      <Route path="/bookclubs/myBookClubs/:bookclub_id/comments" component={CommentsOnTheBookClub} />

      <Route exact path="/mylibrary" component={UserLibrary} />

    </Switch>
  </BrowserRouter>
  
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)