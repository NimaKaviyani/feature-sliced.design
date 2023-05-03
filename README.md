# Next.js with Feature-Sliced Design

This is a Next.js frontend web application designed using the Feature-Sliced Design architectural methodology.

## Installation and Running

To get started with the project, you can run the following commands:

```bash
npm install
# or
yarn install
```

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Next.js with Feature-Sliced Design

This is a [Next.js](https://nextjs.org/) frontend web application designed using
the [Feature-Sliced Design](https://feature-sliced.design/) architectural methodology.

## Usage

This project can be used to build small to medium-sized web applications. To add new features, it is recommended to use
the Feature-Sliced Design architectural methodology.

## File and Folder Structure

    .
    ├── ...
    ├── src                 # Feature-sliced structures.
    │   ├── app             # App-wide settings, styles and providers.
    │   ├── pages           # Next.js pages from entities, features and widgets.
    │   ├── widgets         # Compositional layer to combine entities and features into meaningful blocks.(e.g. IssuesList, UserProfile).
    │   ├── features        # User interactions, actions that bring business value to the user.(e.g. SendComment, AddToCart, UsersSearch).
    │   ├── entities        # Business entities.(e.g., User, Product, Order).
    │   │   ├── ...
    │   │   ├── user        # Slice from bussines entities.
    │   │   ├── post        # Slice from bussines entities.
    │   │   ├── comment     # Slice from bussines entities.
    │   │   │   ├── ...
    │   │   │   ├── ui      # UI components, data formatting functions
    │   │   │   ├── model   # Data storage, functions to manipulate this data
    │   │   │   ├── lib     # Logic of data manipulation, event handlers, auxiliary code
    │   │   │   ├── api     # Communication with external APIs, backend API methods
    │   │   │   └── ...
    │   │   └── ...
    │   ├── shared          # Reusable functionality, detached from the specifics of the project/business.(e.g. UIKit, libs, API).
    ├── public              # Static assets.
    └── ...

## Guide

To work with the code, you can follow the following guidelines:

- There are 6 layers in total, arranged from most responsibility and dependency to least:
-
    - App
-
    - Pages
-
    - Widgets
-
    - Features
-
    - Entities
-
    - Shared
- You don't have to use every layer in your project — only add them if you think it brings value to your project.
- Slices are the second level in the organizational hierarchy of Feature-Sliced Design. Their main purpose is to group
  code by its meaning for the product, business or just the application.
-
- Segments are the third and final level in the organizational hierarchy, and their purpose is to group code by its
  technical nature.
- There a few standardized segment names:
-
    - ui — UI components, data formatting functions
-
    - model — data storage, functions to manipulate this data
-
    - lib — logic of data manipulation, event handlers, auxiliary code
-
    - api — communication with external APIs, backend API methods

## Learn More

To learn more about Next.js, take a look at the following resource:

- [Feature-Sliced Design Documentation](https://feature-sliced.design/) - learn about Feature-Sliced Design for frontend
  projects .

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

This project is licensed under the MIT License.