# EPI-PEI-SS
The Exocrine Pancreatic Insufficiency (EPI or PEI or PI) Symptom Score is a tool to help assess gastrointestinal symptoms by frequency and severity. The score of the EPI/PEI-SS can be used to aid access to diagnostic testing for EPI / PEI / PI

You can use it [https://danamlewis.github.io/EPI-PEI-SS](https://danamlewis.github.io/EPI-PEI-SS)


## Research

Research studies with the EPI/PEI-SS are ongoing. For the initial study in the general population (n=324), [check out this research paper](https://osf.io/preprints/osf/qpktg). 

Interested in collaborating on research studies to validate the EPI/PEI-SS? Reach out any time: Dana+EPI-PEI-SS@OpenAPS.org

## Building locally

Use Node.js 24.22.1 (the October 2026 security release) or a newer patched
24.x release. With nvm installed:

```sh
nvm install
nvm use
npm ci
npm run build
```

Set `SERVER_URL` in the environment or a local `.env` file when building against
the submission service. The URL is embedded in the public browser bundle, so it
must not contain credentials. Never commit the `.env` file.

Keep `.nvmrc` updated with security patches on Node 24. Pull requests run the
production build without publishing; fork pull requests do not receive the
`SERVER_URL` secret. Pushes to `main` and manual runs on `main` publish only
`index.html`, `bundle.js`, and `style.css` to the existing branch-based Pages
source. Dependency installation and builds run in a separate job with a
read-only repository token and no persisted checkout credentials.
