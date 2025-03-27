'use client';
import Link from "next/link";
import { use } from "react";


const ArticlePage = ({params, searchParams}) => {
    const { articleId } = use( params);
    const {lang} = use( searchParams);


    return (
        <div>
            <h1>New article {articleId}</h1>
            <p>Reading in {lang}</p>
            <br/>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=sp`}>Spanish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
    );
};

export default ArticlePage;