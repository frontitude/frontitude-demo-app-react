![frontitodo-cover](https://user-images.githubusercontent.com/91062868/189535731-4f22cc2f-5e29-4597-b60d-1d638992ba2d.jpg)

# Frontitodo
A demo todo app, demonstrating string management with Frontitude's developer tools.

Frontitodo's stack:
- React
- React Hooks
- [React-i18next](https://www.npmjs.com/package/react-i18next)


## Key points
- String files (see `public/locales`)
  - Flexibly structure your files, keeping all the files in the same folder or in multiple folders (multiple folders CLI support is coming soon).
- i18next configuration (see `i18n.js`)
  - Use `loadPath` option to support your file structure.
- `pullcopy` script (see `package.json`)
  - An easy setup that lets you configure the `frontitude pull` command once and use it frequently without having to set the options each time.
- DIY, continue to read how to install the demo app locally and see the entire process, from design to development, in action.

## See it in action (from design to development)
1. **Create a Frontitude account.** If you don't already have one, sign up for a fresh new Frontitude account, or ask for an invitation from one of your team members to join your team’s workspace.
2. **Upload content to your Frontitude account.** Clone the Frontitodo design file ([Figma](https://www.figma.com/community/file/1151453953890560555), [Adobe XD](https://frontitude-public.s3.eu-west-1.amazonaws.com/sample/Frontitodo+Sample+App.xd), Sketch (Soon)) and [upload](https://www.frontitude.com/guides/upload-content-to-frontitude) the designs to Frontitude.
3. **Set keys.** In order to reference texts from the code, you’ll need to [assign texts with unique keys](https://www.frontitude.com/guides/manage-your-copy-with-unique-keys) in Frontitude.
4. **Set up the CLI**. Install the [Frontitude CLI](https://www.npmjs.com/package/@frontitude/cli) by running `npm install -g @frontitude/cli` and then `frontitude init`.
5. **Submit a sample edit.** In the design tool, edit one of the connected texts and [sync](https://www.frontitude.com/guides/edit-copy-and-save-changes-to-frontitude) it with Frontitude.
6. **Sync edits with the code.** From the terminal, run `frontitude pull` or `npm run pullcopy` to get the latest edits.

## Available Scripts

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run pullcopy`

Pulls the latest final copy changes from the connected Frontitude workspace, using [Frontitude's CLI](https://www.npmjs.com/package/@frontitude/cli). The command merges the latest copy into the configured destination file.

Once set up, the CLI configurations are stored in `frontituderc.json` under the root folder.

## Learn More

You can learn more in the [Frontitude guides](https://www.frontitude.com/guides) section.
