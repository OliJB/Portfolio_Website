import { createClient, groq } from "next-sanity";

export async function getprojects(){
    const client = createClient({
        projectId: "edxnw8ks",
        dataset: "production",
        apiVersion: "2025-01-09",
    });
    
    //fetch the data from sanity using groq
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset -> url,
            url,
            content,
            languages,
            githubLink,
        }`
    )
}
