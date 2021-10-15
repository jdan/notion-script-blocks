## script-blocks

"Script" "Blocks" in [Notion](https://notion.so)

### usage

As a heads up, this barely works at all.

- [Create a new Notion integration](https://developers.notion.com/docs/getting-started#step-1-create-an-integration)
- Create a new page and note its ID from the address bar
  - `https://www.notion.so/[username]/[your page ID!]`
- [Share that database with your new integration](https://developers.notion.com/docs/getting-started#step-2-share-a-database-with-your-integration)
- Run the script

```sh
git clone https://github.com/jdan/cards.git
npm i
NOTION_SECRET=[your token here] NOTION_PAGE=[your id here] node main.js
```
