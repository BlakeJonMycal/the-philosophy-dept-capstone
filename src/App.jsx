import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { PostList } from './components/posts/PostList'
import { NavBar } from './components/nav/NavBar'
import { PostDetails } from './components/posts/PostDetails'



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <Outlet />
        </>
      }>
        <Route path="myLibrary">
          <Route index element={<PostList />} />
            <Route path=":myLibraryId" element={<PostDetails />} />
        </Route>
      </Route>
    </Routes>
  )
}
