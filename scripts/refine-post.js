const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-19',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

async function refinePost() {
  const query = `*[_type == "post" && slug.current == "travel-summary-2026"][0]`;
  const post = await client.fetch(query);

  if (!post) {
      console.error("Post not found");
      return;
  }

  const updatedBody = post.body.map(block => {
    if (block._type !== 'block') return block;

    // Fix double periods in any block
    if (block.children) {
      block.children = block.children.map(child => {
        if (child._type === 'span' && child.text) {
          child.text = child.text.split('。。').join('。');
        }
        return child;
      });
    }

    // Add link to "フライトパーク"
    if (block.children && block.children.some(c => c.text && c.text.includes('フライトパーク') && !c.marks?.length)) {
      const newChildren = [];
      block.children.forEach(child => {
        if (child._type === 'span' && child.text && child.text.includes('フライトパーク') && !child.marks?.length) {
          const parts = child.text.split('フライトパーク');
          const linkKey = `link_${Date.now()}`;
          
          newChildren.push({ _type: 'span', text: parts[0] });
          newChildren.push({ 
            _type: 'span', 
            text: 'フライトパーク', 
            marks: [linkKey] 
          });
          newChildren.push({ _type: 'span', text: parts[1] });

          if (!block.markDefs) block.markDefs = [];
          block.markDefs.push({
            _key: linkKey,
            _type: 'link',
            href: 'https://www.centrair.jp/flight-of-dreams/'
          });
        } else {
          newChildren.push(child);
        }
      });
      block.children = newChildren.filter(c => c.text !== ''); // Remove empty spans
    }

    return block;
  });

  await client
    .patch(post._id)
    .set({ body: updatedBody })
    .commit();

  console.log("Post refined successfully");
}

refinePost().catch(console.error);
