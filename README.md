# Workflow Builder

Workflow Builder is a user-friendly and dynamic application crafted to enable users to effortlessly construct, modify, and visually represent intricate workflows. Whether handling extensive datasets or complex processes, our tool provides an intuitive drag-and-drop interface for constructing workflows comprising numerous steps (nodes) and their interconnections (edges). From data filtering and retrieval to streamlining and applying diverse array methods, our platform supports saving multiple workflows, ensuring they are retrievable even after reloading.

# Screenshot

<img width="1080" alt="Screenshot 2024-07-02 at 7 46 36 AM" src="https://github.com/himasnhuJasani/web-flow-buider/assets/117925566/7dd601a6-044e-408f-b099-18ea7573b1c2">

<img width="1079" alt="Screenshot 2024-07-02 at 7 47 24 AM" src="https://github.com/himasnhuJasani/web-flow-buider/assets/117925566/d3e9f953-d1bc-4c8a-af20-640bf1f3d00f">

# Live Link

[Live Link](https://web-flow-buider.vercel.app/)


# Features

-   **Create New Workflow:** Easily create and manage workflows that persist even after reloading.
-   **CSV File Integration:** Seamlessly add and handle CSV files within your workflows..
-   **Node Management:** Two types of nodes available:

    -   **File Select Node:** Choose CSV files for integration.

    -   **Filter Node:** Apply filters to manipulate CSV data.

-   **Drag and Drop:** Intuitively move nodes across the canvas.. 
-   **Node Connections:** Connect nodes with arrows to establish data flow.
-   **Data Display:** Click on nodes to view their data outputs below the canvas.
-   **Export Data:** Export selected node data as CSV files.
-   **Save Workflow:** Save entire workflows effortlessly, preserving node positions and connections. Accessible via the 'Save Workflow' option in the top-right corner.

## Installation

To install the necessary dependencies, use Node.js v18.18.2 or later, and run:

```bash
npm install
```
git clone https://github.com/himasnhuJasani/web-flow-buider.git
npm install

## Usage

To start the development server, run:

```bash
npm run start
```

## Folder Structure

Here is an overview of the folder structure of the project:

```bash


data/
└── sample-data.csv
src/
├── assets/
│   └── svg/
│       └── logo.svg
├── components/
│   ├── CustomButton/
│   │   └── index.tsx
│   ├── DataTable/
│   │   ├── index.tsx
│   │   └── TableStyle.css
│   ├── Node/
│   │   ├── FileNode/
│   │   │   └── index.tsx
│   │   └── FilterNode/
│   │       └── index.tsx
│   └── Form/
│       ├── CsvInput.tsx
│       └── CustomInput.tsx
├── layout/
│   ├── Footer.tsx
│   ├── FooterStyle.css
│   ├── Header.tsx
│   ├── HeaderStyle.css
│   ├── BackgroundLayout.tsx
│   ├── BackgroundLayoutStyle.css
│   ├── SidePanel.tsx
│   └── SidePanelStyle.css
├── pages/
│   ├── Dashboard/
│   │   ├── DashboardStyle.css
│   │   └── index.tsx
│   └── WorkflowBuilder/
│       ├── FlowCanvas.tsx
│       ├── WorkflowBuilder.tsx
│       └── WorkflowBuilderStyle.css
├── store/
│   ├── edgeSlice.ts
│   ├── nodeSlice.ts
│   ├── store.ts
│   └── workflowSlice.ts
├── utils/
│   ├── convertToCSV.ts
│   └── findNestedData.ts
├── App.tsx
├── index.css
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
├── .gitignore
├── file-saver.d.ts
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── webpack.config.ts

```

## Contributing

We welcome contributions from the community! Here's how you can get involved:

--Fork the repository.
--Create a new branch (git checkout -b feature-branch).
--Make your changes.
--Commit your changes (git commit -m 'Add new feature').
--Push to the branch (git push origin feature-branch).
--Open a Pull Request.


```bash
git checkout -b feature-branch
git commit -m 'Add new feature'
git push origin feature-branch
```


