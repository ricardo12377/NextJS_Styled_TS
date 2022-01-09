import * as S from './styles'
import Link from 'next/link'

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths  = data.map(post  => {
        return {
            params: { id: post.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ( context ) => {
    const id = context.params.id
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await response.json();

    return {
        props: {post: data}
    }
}

const Page = ({post}) => {
    return(
        <S.ContainerCard>
             <S.Card>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href='/posts'>
                <button>Voltar</button>
            </Link>

        </S.Card>
        </S.ContainerCard>
       
    )
}

export default Page