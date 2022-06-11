import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img className={styles.cover} src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=30" alt="" />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/79115354?v=4"/>
        {/* <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/79115354?v=4" alt="" /> */}
        <strong>Lázaro Pimentel</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#" size={20}>
          <PencilLine/>
          Editar seu perfil
        </a>
      </footer>
      
    </aside>
  )
}