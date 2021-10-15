## script-blocks

"Script" "Blocks" in [Notion](https://notion.so)

<img alt="" width="600" src="https://user-images.githubusercontent.com/287268/137547890-88e955b0-e998-41f2-ad09-bdec2d5a7a15.gif">

### Usage

As a heads up, this barely works at all.

Get started by duplicating [my public "script blocks" template](https://jdan.notion.site/Script-blocks-template-cb43702f8d0e4113bce926529bd12d71). There, you'll find that script blocks have an incredibly specific format (subject to change).

<img alt="" width="600" src="https://user-images.githubusercontent.com/287268/137548463-bb371acf-0f2c-4634-8689-69af5bcea64a.png">

```
> (gear icon) script name
  ## script
  --
  [code block]
  ## input
  --
  [at least one line of text]
  --
  ## ouput
  [empty line - this is where the output will go]
  [empty line (yes, another one!)]
```

Then in Notion, do the following:

- [Create a new Notion integration](https://developers.notion.com/docs/getting-started#step-1-create-an-integration)
- Create a new page and note its ID from the address bar
  - `https://www.notion.so/[username]/[your page ID!]`
- [Share that page with your new integration](https://developers.notion.com/docs/getting-started#step-2-share-a-database-with-your-integration)
- Run the script

```sh
git clone https://github.com/jdan/notion-script-blocks.git
npm i
NOTION_SECRET=[your token here] NOTION_PAGE=[your id here] node main.js
```

### Hackerz 

`eval` is dangerous. `eval` on a node server is even more dangerous. Don't share your pages with the internet.

<img alt="a code block with the script " width="600" src="https://user-images.githubusercontent.com/287268/137547928-c1fc44fe-4eb7-47c6-bf33-fdc222d2b65c.png">
