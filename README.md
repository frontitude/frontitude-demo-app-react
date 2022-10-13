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

## Available Scripts

In the project directory, you can run:

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
