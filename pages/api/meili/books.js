import MeiliSearch from 'meilisearch';

export default async (req, res) => {
  try {
    const client = new MeiliSearch({
      host: process.env.MEILISEARCH_HOST,
      apiKey: process.env.MEILISEARCH_API_KEY,
    });

    if (!client)
      return res.status(500).json({
        error: new Error('Missing MeiliSearch environment variables'),
      });

    const index = client.getIndex('books');
    const query = 'h'; // search query, in this case we want all books with the letter h
    const search = await index.search(query, { limit: 5 });

    res.json(search.hits);
  } catch (error) {
    res.status(500).json({ error });
  }
};
