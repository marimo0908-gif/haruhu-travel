const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Configure the Sanity client
let token = process.env.SANITY_API_TOKEN;
if (!token && fs.existsSync(path.join(process.cwd(), '.env.local'))) {
    const envFile = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
    const match = envFile.match(/^SANITY_API_TOKEN=["']?([^"'\s]+)["']?$/m);
    if (match) token = match[1];
}

const client = createClient({
    projectId: 'xfkazu61',
    dataset: 'production',
    apiVersion: '2024-03-01',
    useCdn: false,
    token: token,
});

/**
 * Simple Portable Text to HTML converter for note.com
 * Note: note supports a subset of HTML. We'll keep it simple.
 */
function portableTextToHtml(blocks) {
    if (!blocks) return '';

    let html = '';
    let currentListType = null;

    blocks.forEach((block) => {
        if (block._type !== 'block' || !block.children) {
            // Close list if open
            if (currentListType) {
                html += `</${currentListType}>\n`;
                currentListType = null;
            }

            // Handle custom types
            if (block._type === 'image') {
                html += `<p>[画像あり: ${block.alt || '画像'}]</p>\n`;
            } else if (block._type === 'affiliateLink') {
                html += `
<div style="border: 1px solid #ccc; padding: 15px; margin: 20px 0;">
  <h3>${block.title}</h3>
  <p>${block.description}</p>
  <ul>
    ${(block.points || []).map(p => `<li>${p}</li>`).join('')}
  </ul>
  <p><a href="${block.href}">${block.buttonText || '詳細を見る'}</a></p>
</div>\n`;
            }
            return;
        }

        const listType = block.listItem === 'bullet' ? 'ul' : (block.listItem === 'number' ? 'ol' : null);

        // List transition logic
        if (listType !== currentListType) {
            if (currentListType) {
                html += `</${currentListType}>\n`;
            }
            if (listType) {
                html += `<${listType}>\n`;
            }
            currentListType = listType;
        }

        const children = block.children.map(child => {
            if (child._type !== 'span') return '';
            let text = child.text.replace(/\n/g, '<br>');
            
            if (child.marks && child.marks.length > 0) {
                child.marks.forEach(mark => {
                    const markDef = block.markDefs && block.markDefs.find(def => def._key === mark);
                    if (markDef && markDef._type === 'link') {
                        text = `<a href="${markDef.href}">${text}</a>`;
                    } else if (mark === 'strong') {
                        text = `<strong>${text}</strong>`;
                    } else if (mark === 'em') {
                        text = `<em>${text}</em>`;
                    }
                });
            }
            return text;
        }).join('');

        if (listType) {
            html += `  <li>${children}</li>\n`;
        } else {
            switch (block.style) {
                case 'h2': html += `<h2>${children}</h2>\n`; break;
                case 'h3': html += `<h3>${children}</h3>\n`; break;
                case 'blockquote': html += `<blockquote>${children}</blockquote>\n`; break;
                default: html += `<p>${children}</p>\n`; break;
            }
        }
    });

    // Close final list if open
    if (currentListType) {
        html += `</${currentListType}>\n`;
    }

    return html;
}

/**
 * Generate Movable Type (MT) format content
 */
function generateMT(post) {
    const date = post.publishedAt ? new Date(post.publishedAt) : new Date();
    // Format: MM/DD/YYYY HH:MM:SS AM/PM or specific MT format
    // note seems to accept various formats, but let's use a standard one.
    const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

    const body = portableTextToHtml(post.body);

    return `AUTHOR: はるふー
TITLE: ${post.title}
STATUS: Publish
ALLOW COMMENTS: 1
CONVERT BREAKS: 1
PRIMARY CATEGORY: ${post.categories && post.categories[0] ? post.categories[0].title : '未分類'}
DATE: ${formattedDate}
-----
BODY:
${body}
-----
EXTENDED BODY:

-----
EXCERPT:
${post.excerpt || ''}
-----
KEYWORDS:

-----
--------
`;
}

async function run() {
    const slug = process.argv[2];
    if (!slug) {
        console.error("Usage: node scripts/export-to-note.js [slug]");
        process.exit(1);
    }

    console.log(`Fetching post with slug: ${slug}...`);

    const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        excerpt,
        publishedAt,
        body,
        "categories": categories[]->{title}
    }`;

    const post = await client.fetch(query, { slug });

    if (!post) {
        console.error(`Post not found for slug: ${slug}`);
        process.exit(1);
    }

    const mtContent = generateMT(post);
    
    const outputDir = path.join(process.cwd(), 'outputs', 'note_import');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const fileName = `note_${slug}_${new Date().getTime()}.txt`;
    const filePath = path.join(outputDir, fileName);

    fs.writeFileSync(filePath, mtContent, 'utf8');

    console.log(`\nSuccess! Exported to: ${filePath}`);
    console.log(`\nNext Steps:`);
    console.log(`1. Open note.com and login.`);
    console.log(`2. Go to "自分の記事" (My Articles).`);
    console.log(`3. Click "インポート" (Import) at the top.`);
    console.log(`4. Select the file: ${fileName}`);
    console.log(`5. Wait for note to process it. It will appear in your "下書き" (Drafts).`);
}

run().catch(console.error);
