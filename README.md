This is a simple E-commerce app built with Next js.
Manage Your Cart and Upload Products

<br />

- [Getting Started](#getting-started)
  - [Clone this repository](#clone-this-repository)
  - [Install dependencies](#install-dependencies)
  - [Create an .env.local](#create-an-envlocal)
  - [Start the development server](#start-the-development-server)
  - [Running unit test](#running-unit-test)
- [Folder structure](#folder-structure)
- [Deploying](#deploying)
  - [Vercel](#vercel)
  - [Other hosting platform](#other-hosting-platform)
- [Assumptions and Known Issues](#assumptions-and-known-issues)
- [Dependencies](#dependencies)
  - [Animation](#animation)
  - [Forms](#forms)
  - [API requests](#api-requests)
  - [Styling](#styling)
  - [Bottom sheets](#bottom-sheets)

## Getting Started

`For Next.js, Node.js version >= v18.17.0 is needed to run this project`

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

#### Vercel

- Import the repository to vercel
- Add `NEXT_PUBLIC_API_BASE_URL` to environmental variables with a value of <https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api>
- Click deploy

[Vercel docs on deploying](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy)

#### Other hosting platform

To deploy on other hosting platform check out the [docs](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/other-hosting-options) on vercel

## Assumptions and Known Issues

This project makes use of next js app router for performance and SEO optimization. The following assumptions are made

- All pages are statically generated
- When uploading products, the default current is `USD` and a status of `ACTIVE` is given to the product
- A mock api was created to upload images. it returns a default image url

Currently there is a bug where `generateMetaData` causes the app to freeze between pages transitions when viewing a product details page for the first time.

- [55524](https://github.com/vercel/next.js/issues/55524)
- [#50104](https://github.com/vercel/next.js/discussions/50104)

A temporary fix is to open the product details page immediately after uploading a new product, this generates the metadata and ensures the first user to view that page does not experience this issue

## Dependencies

#### Animation

- framer-motion: Enhances UI/UX with smooth animations and transitions.

#### Forms

- react-hook-form: Offers efficient management of form states and validation, optimizing form submission and data handling processes.
  
- yup: simple schema-based validation for form inputs. Works well with `react-hook-form`. @hookform/resolvers is used to resolve schema

#### API requests

- react-query: Enables seamless data fetching and management, enhancing performance by efficiently handling API requests and caching data.

#### Styling

- tailwind-merge: Merge and extend tailwind classes. This is particular useful when we want to extend/override component styles

- tailwind-styled-components: Similar to styled component this makes it possible to move long tailwind classes out of the component to make it easier to read the code

#### Bottom sheets

- vaul: Simple bottom sheet with a native feel
