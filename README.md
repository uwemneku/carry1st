This is a simple E-commerce app built with Next js
<br />

- [Getting Started](#getting-started)
  - [Clone this repository](#clone-this-repository)
  - [Install dependencies](#install-dependencies)
  - [Create an .env.local](#create-an-envlocal)
  - [Start the development server](#start-the-development-server)
  - [Running unit test](#running-unit-test)
- [Folder structure](#folder-structure)
- [Deploying](#deploying)

## Getting Started

#### Clone this repository

```bash
git clone https://github.com/uwemneku/carry1st.git
```

#### Install dependencies

```bash
npm i
# or
yarn install
```

#### Create an .env.local

```txt
NEXT_PUBLIC_API_BASE_URL=https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api

```

#### Start the development server

```bash
npm run dev
# or
yarn dev

```

#### Running unit test

```bash
yarn test
# or
yarn test

```

## Folder structure

```java
├── src
|  ├── app                // Main application folder
|  ├── components         // Reusable UI components
|  ├── features           // Modules or sections of the application, each containing related components, pages, and logic
|  ├── lib                
|  |  ├── context        // Application-wide context providers
|  |  ├── util           // Utility functions and helper modules
|  ├── services           // Service layer for interacting with external APIs or performing server-side actions
|  ├── types              // Type definitions and interfaces used across the application

```

## Deploying
