import Link from "next/link";

export default async function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>
}) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams;
    return <div>
    <h1 className="text-4xl font-bold">Breaking News Article {articleId}</h1>
        <p>This is the content of the breaking news article.</p>
        <p>Read this article in different languages by changing the 'lang' query parameter in the URL.</p>
        <p>Reading in {lang === "en" ? "English" : lang === "es" ? "Spanish" : "French"}</p>
    <ul>
            <li><Link href={`/articles/${articleId}?lang=en`} className="text-blue-500 underline">Read in English</Link></li>
            <li><Link href={`/articles/${articleId}?lang=es`} className="text-blue-500 underline">Read in Spanish</Link></li>
            <li><Link href={`/articles/${articleId}?lang=fr`} className="text-blue-500 underline">Read in French</Link></li>
    </ul>
    </div>;
}