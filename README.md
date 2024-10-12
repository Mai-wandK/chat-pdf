# Chat with Your PDF

This application allows users to upload their PDF files and engage in natural language conversations with them. Using advanced AI models, users can query and interact with the content of their PDFs in a meaningful way.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Firebase Setup](#firebase-setup)
  - [Pinecone Setup](#pinecone-setup)
  - [Clerk Setup](#clerk-setup)
- [Usage](#usage)

## Features

- **Upload PDFs**: Easily upload PDF files for processing.
- **AI-Powered Conversations**: Chat with your PDFs using OpenAI’s GPT-4.
- **Document Splitting**: PDF content is split into manageable chunks for efficient querying.
- **Embeddings and Search**: Pinecone is used to create vector embeddings for efficient querying of document content.
- **Authentication**: Secure user authentication with Clerk.
- **Cloud Storage**: Firebase is used for storing user files and file metadata.

## Technologies Used

- **[OpenAI GPT-4](https://openai.com)**: For generating natural language responses based on PDF content.
- **[Langchain](https://langchain.com)**: To manage document loaders, embedding generation, and AI-driven conversation flows.
- **[Firebase](https://firebase.google.com)**: For real-time database and cloud storage functionality.
- **[Clerk](https://clerk.dev)**: For authentication and user management.
- **[Next.js](https://nextjs.org)**: React framework for server-side rendering and API routes.
- **[Tailwind CSS](https://tailwindcss.com)**: For responsive and utility-first styling.
- **[React](https://reactjs.org)**: For building the user interface.
- **[Typescript](https://www.typescriptlang.org)**: For type-safe code development.
- **[Pinecone](https://www.pinecone.io)**: For storing and querying vector embeddings of the document content.

## Getting Started

### Prerequisites

Before setting up the project, ensure you have the following tools installed:

- **Node.js**: [Download here](https://nodejs.org)
- **npm** or **yarn**: A package manager for handling dependencies
- An **OpenAI API key** for using GPT models
- A **Firebase** project set up
- A **Clerk** API key for authentication
- A **Pinecone** API key for managing vector embeddings

