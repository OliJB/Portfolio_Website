//Creates the datafields for the content management system

const project = {
    name: "project",
    title: "projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "slug",
            type: "slug",
            options: {source: "name"}
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                name: "alt",
                title: "alt",
                type: "string",
                }
            ]
        },
        {
            name: "url",
            title: "URL",
            type: "url",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: 'languages',
            title: 'Languages',
            type: 'array',
            of: [{type: 'string'}], 
        },
        {
            name: 'githubLink', // The name of the field (important for querying)
            title: 'GitHub Repository',
            type: 'url', // Use the 'url' type for URLs
            description: 'Link to the GitHub repository for this project',
        },
    ]
}

export default project;