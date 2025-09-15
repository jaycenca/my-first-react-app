import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx';
import TodoListWithObject from './curly-braces/MixedObjectCurlyBrace.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListWithObject />
  </StrictMode>,
)
