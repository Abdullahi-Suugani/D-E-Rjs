import { StrictMode, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const initialPosts = [
  { id: 1, title: 'Introduction to React', content: 'Learn the basics of building interfaces with React.' },
  { id: 2, title: 'Understanding React Router', content: 'Explore navigation and routing in React applications.' },
  { id: 3, title: 'React Hooks in Depth', content: 'Content of post 3' },
]

function Header({ page, onNavigate }) {
  return <header className="site-header">
    <div className="brand">React Blog</div>
    <nav>
      <button className={page === 'home' ? 'nav-button active' : 'nav-button'} onClick={() => onNavigate('home')}>Home</button>
      <button className={page === 'create' ? 'nav-button active' : 'nav-button'} onClick={() => onNavigate('create')}>Create Post</button>
      <button className="nav-button logout" onClick={() => onNavigate('home')}>Logout</button>
    </nav>
  </header>
}

function Home({ posts, onOpen }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase())), [posts, query])
  return <main className="panel home-panel">
    <h1>Blog Posts</h1>
    <form onSubmit={event => event.preventDefault()}>
      <input aria-label="Search posts" placeholder="Search posts" value={query} onChange={event => setQuery(event.target.value)} />
      <button className="primary full-width">Search</button>
    </form>
    <div className="post-list">
      {filtered.map(post => <button className="post-link" key={post.id} onClick={() => onOpen(post.id)}>{post.title}</button>)}
    </div>
  </main>
}

function CreatePost({ onCreate }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  function submit(event) {
    event.preventDefault()
    if (!title.trim()) return
    onCreate({ title: title.trim(), content })
  }
  return <main className="panel create-panel">
    <h1>Create a New Post</h1>
    <form onSubmit={submit}>
      <label>Title: <input value={title} onChange={event => setTitle(event.target.value)} /></label>
      <label className="content-label">Content: <textarea value={content} onChange={event => setContent(event.target.value)} /></label>
      <button className="primary create-button">Create Post</button>
    </form>
  </main>
}

function PostDetail({ post, previous, next, onOpen }) {
  return <main className="panel detail-panel">
    <a className="detail-title" href="#post" onClick={event => event.preventDefault()}>{post.title}</a>
    <div>{post.content}</div>
    <div className="pager">
      <button className="primary" disabled={!previous} onClick={() => previous && onOpen(previous.id)}>Previous</button>
      <button className="primary" disabled={!next} onClick={() => next && onOpen(next.id)}>Next</button>
    </div>
    <div>You navigated here from post ID: {previous ? previous.id : post.id}</div>
  </main>
}

function App() {
  const [posts, setPosts] = useState(initialPosts)
  const [page, setPage] = useState('home')
  const [selectedId, setSelectedId] = useState(null)
  const selectedIndex = posts.findIndex(post => post.id === selectedId)
  const selected = posts[selectedIndex]
  function openPost(id) { setSelectedId(id); setPage('detail') }
  function createPost(post) {
    const next = { ...post, id: Math.max(...posts.map(item => item.id), 0) + 1 }
    setPosts(current => [...current, next]); setPage('home')
  }
  return <div className="app-shell">
    <Header page={page} onNavigate={nextPage => { setPage(nextPage); if (nextPage !== 'detail') setSelectedId(null) }} />
    {page === 'home' && <Home posts={posts} onOpen={openPost} />}
    {page === 'create' && <CreatePost onCreate={createPost} />}
    {page === 'detail' && selected && <PostDetail post={selected} previous={posts[selectedIndex - 1]} next={posts[selectedIndex + 1]} onOpen={openPost} />}
  </div>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
