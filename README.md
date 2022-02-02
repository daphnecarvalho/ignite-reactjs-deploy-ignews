# ig.news - Challenge: Ignews Deployment

Instruction: [Deploy do Ignews](https://www.notion.so/Desafio-01-Deploy-do-Ignews-fa97bd61c2b5449195b66a57b0cbf4a8).

## Base URL

Production: https://ignite-reactjs-deploy-ignews.vercel.app/

Local: http://localhost:3000/

## Project commands

### Prepare project

```bash
  # Install dependencies
  yarn install

  # Login to stripe
  stripe login
```

### Run project

```bash
  # Run project
  yarn dev

  # Listen to stripe
  stripe listen --forward-to localhost:3000/api/webhooks
```

### Run tests

```bash
  # Run test
  yarn test

  # Run test with coverage results
  yarn coverage
```

### Run as production

```bash
  # Run build for production
  yarn build

  # Run as production
  yarn start
```
