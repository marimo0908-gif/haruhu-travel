const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'jbtv79m0',
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: false,
  token: 'skZ9uMCOvK0RkU3RclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8TclN8vX9N6r8T' // This is a placeholder, will use actual env var
});

async function updatePost() {
  const query = `*[_type == "post" && slug.current == "travel-summary-2026"][0]`;
  const post = await client.fetch(query);

  if (!post) {
    console.error("Post not found");
    return;
  }

  // Helper to deep update text in Portable Text blocks
  function updateText(content) {
    return content.map(block => {
      if (block._type === 'block' && block.children) {
        block.children = block.children.map(child => {
          if (child._type === 'span' && child.text) {
            let newText = child.text;
            newText = newText.replace('発券予定です', '発券。');
            newText = newText.replace('確保予定です', '確保。');
            return { ...child, text: newText };
          }
          return child;
        });
      }
      return block;
    });
  }

  const updatedBody = updateText(post.body);

  await client
    .patch(post._id)
    .set({ body: updatedBody })
    .commit();

  console.log("Post updated successfully");
}

// Use environment variables for sensitive info
const realClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-19',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

async function runFixed() {
  const query = `*[_type == "post" && slug.current == "travel-summary-2026"][0]`;
  const post = await realClient.fetch(query);

  if (!post) {
      console.error("Post not found");
      return;
  }

  function updateText(content) {
      return content.map(block => {
          if (block._type === 'block' && block.children) {
              block.children = block.children.map(child => {
                  if (child._type === 'span' && child.text) {
                      let newText = child.text;
                      // Use global replace to be safe
                      newText = newText.split('発券予定です').join('発券。');
                      newText = newText.split('確保予定です').join('確保。');
                      return { ...child, text: newText };
                  }
                  return child;
              });
          }
          return block;
      });
  }

  const updatedBody = updateText(post.body);

  await realClient
      .patch(post._id)
      .set({ body: updatedBody })
      .commit();

  console.log("Post updated successfully with real client");
}

runFixed().catch(console.error);
