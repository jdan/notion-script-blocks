## script-blocks

"Script" "Blocks" in [Notion](https://notion.so)

![demo](https://user-images.githubusercontent.com/287268/137547890-88e955b0-e998-41f2-ad09-bdec2d5a7a15.gif)

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

### hackerz 

`eval` is dangerous. `eval` on a node server is even more dangerous. Don't share your pages with the internet.

![image](https://user-images.githubusercontent.com/287268/137547928-c1fc44fe-4eb7-47c6-bf33-fdc222d2b65c.png)
