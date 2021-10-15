const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

function isScriptBlock(block) {
  return (
    block.type === "toggle" &&
    block.has_children &&
    block.toggle.text[0].text.content.startsWith("⚙️")
  );
}

function concatenateText(arr) {
  return arr.map((i) => i.text.content).join("");
}

setInterval(async () => {
  const response = await notion.blocks.children.list({
    block_id: process.env.NOTION_PAGE,
  });

  const scripts = response.results.filter(isScriptBlock);

  Promise.all(
    scripts.map(async ({ id }) => {
      const { results } = await notion.blocks.children.list({
        block_id: id,
      });

      /**
       * ## script
       * --
       * <code>
       * ## input
       * --
       * [many blocks]
       * ## output
       * --
       * one block
       * [empty]
       */

      const codeBlock = results[2];
      const inputBlocks = results.slice(5, -4);
      const outputBlock = results[results.length - 2];

      const code = concatenateText(codeBlock.code.text);
      const inputs = inputBlocks.map((block) =>
        concatenateText(block.paragraph.text)
      );

      const fn = eval(code);
      const result = fn(...inputs);

      if (result.toString() !== concatenateText(outputBlock.paragraph.text)) {
        console.log("updating", outputBlock.id);
        await notion.blocks.update({
          block_id: outputBlock.id,
          paragraph: {
            text: [
              {
                type: "text",
                text: {
                  content: result.toString(),
                },
              },
            ],
          },
        });
      }
    })
  );
}, 3000);
