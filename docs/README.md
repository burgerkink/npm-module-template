How to
---

### Basic configuration

1. Checkout this repository into your working directory.
1. Run: `npm init` and amend your particulars.
1. Open `package.json` in your editor and review URLs for `homepage`, `repository.url` and `bugs.url`
1. Review your LICENSE terms (by default it is `UNLICENSED`, and package is set to `private: true`)
1. Get into `docs/` directory and run `./config.sh` to customize your module

### Purge after basic configuration

1. Folder `docs/`* holds all relevant documentation - **please remove** this `README.md` and replace it with your own.
1. If you are done with it please also remove `docs/config.sh` 
1. Remove your `.git`, you will need to add this to your repository...
1. For both of the above you can use `npm run purge:docs` (action will remove itself from `package.json` commands, too)

`* All paths from main directory.`

### Verify your new package

```bash
npm init
```

### Code layout

 * `src/` is your code.
 * `tests/specs/jasmine/` for spec files in `jasmine`
 * `tests/specs/mocha/` for spec files in `mocha/chai`

### Commands (as per definition in `package.json`) 

Described in main [README.md](../README.md).

