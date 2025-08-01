import fm from 'front-matter';

const files = import.meta.glob('/src/content/awards/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
});

const posts = Object.entries(files).map(([path, raw]) => {
    const { attributes, body } = fm(raw);
    const slug = path.split('/').pop().replace('.md', '');
    return {
        slug,
        title: attributes.title,
        date: attributes.date ? String(attributes.date) : '',
        description: attributes.description || '',
        thumbnail: attributes.thumbnail || '',
        tags: attributes.tags || [],
        content: body,
    };
});

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export default posts;
