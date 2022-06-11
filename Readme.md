# Ignite Feed

Projeto com objetivo de estudos e prática de programação. Criação de Feed Ignite da Rocketseat.

# Tecnologias e Ferramentas
- CSS modules
- Reactjs
- phosphor-react - serve para pegar os mesmos ícones do figma através de uma biblioteca em React.

### Anotações

* Estiliza o componente irmão em diante. No caso a partir do segundo post receberão essa configuração.
~~~~css
.post + .post {
  margin-top: 2rem;
}
~~~~
* :focus-within - um elemento é renderizado quando o elmento com este pseudo-classe for focado. Neste caso, a caixa de comentário ao ser focado, um botão de "Comentar" é renderizado na tela.
~~~~css
.commentForm footer{
  visibility: hidden;
  max-width: 0;
}
.commentForm:focus-within footer{
  visibility: visible;
  max-width: none;
}
~~~~
* Criando um componente avatar que recebe a estilização de acordo com a props.
~~~~react

//Componente Avatar
export function Avatar({hasBorder = true, src}) {
  //hasBorder é definido como padrão o valor true. Conceito de desestruturação.

  //Uma outra maneira alternativa.
  // const hasBorder = props.hasBorder !== false

  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="" />
  )
}

//Componente sendo usados em dois lugares por exemplo, com renderização de estilos diferentes
//Em Comment
<Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/79115354?v=4" alt="" />
<Avatar src="https://avatars.githubusercontent.com/u/79115354?v=4"/>

~~~~

* Intl - Api que permite a formatação de data, numero de acordo com o país.
~~~~js
  const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt)
~~~~

* date-fns
* 

### Key no React
#### Por que única?
3 momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente;

#### Por que não posso usar o índice do array?

Quando alteramos as posições dos indices, o react vai comparar e entender que precisa renderizar todo o código. Sendo assim o uso justificável de um id informativo.

### Recomendações de Código
Cria variáveis com significado.
Exemplo dentro do projeto.
~~~~js
  const isNewCommentEmpty = newCommentText.length === 0

...
  //Código sujo
  <button type="submit" disabled={newCommentText.length === 0}>Publicar</button>

  //Código Limpo, usando a variavel
  <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
~~~~

### Função em React - Forma correta!
~~~~js
  //Não fazer, pois ao executar o programa, automaticamente executa a função
  <button onClick={setLikeCount(likeCount + 1)}>

  //Forma correta, usando arrow function
  <button onClick={() => setLikeCount(likeCount + 1)}>
~~~~
* No projeto esta usando a forma Clean Code

### Closures no React
Sempre que você for atualizar uma informação, e essa informação depende do valor que tinha anteriormente é sempre bom usar esse padrão de função
~~~~js
function handleLikeComment(){
  setLikeCount((state) => {
    return state + 1
  })
}
~~~~

### Typescript

* Tipificação de Funções e de Paramêtros.

* Uso de extensões do Typescript para todas as props.

  ~~~~tsx
  import { ImgHTMLAttributes } from 'react'
  import styles from './Avatar.module.css'
  
  interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean
  }
  
  export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    // const hasBorder = props.hasBorder !== false
    return (
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        {...props}
        // src={src}
        // alt={alt}
      />
    )
  }
  ~~~~