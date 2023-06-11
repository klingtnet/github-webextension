# GitHub Extension

This is a [WebExtension] that indicates whewn you're in a _non_ private GitHub repository.

## Installation

At the moment the WebExtension can only be installed _temporarily_, until Mozilla verifies my addon submission.
To install a temporary addon open [about:debugging](about:debugging#/runtime/this-firefox), click _Load Temporary Add-on..._ and select either the location of the cloned repository or a local build artifact.  Note that this needs to be done after each browser restart.

## Development

Use [web-ext] for automatic loading and re-loading of the extension.
I recommend [direnv] and [nvm] for the local development setup.
Afterwards you can just run

```sh
$ npm install
```

to install all dependencies.

[direnv]: https://github.com/direnv/direnv
[nvm]: https://github.com/nvm-sh/nvm
[webextension]: bhttps://wiki.mozilla.org/WebExtensions
[web-ext]: https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/