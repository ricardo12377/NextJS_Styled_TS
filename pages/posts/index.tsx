import React from 'react'
import Link from 'next/link'
import * as S from './styles'

export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props: { posts: data }
    }
};

    type Props = {
        posts: any,
        post: object,
        id:string,
        title: string
    };

function PagePost ({ posts }:Props ) {
    return (
        <S.Main>
            <S.H1>Escolha um título para ler</S.H1>
            {posts.map((post:Props) => (
                <Link  href={'/posts/' + post.id} key={post.id}>
                    <S.Posts>
                        <S.Post>{post.title}</S.Post>
                    </S.Posts>
                </Link>
            ))}
        </S.Main>
    )
};

export default PagePost;
