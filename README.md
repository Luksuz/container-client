# Container Serial Number Recognition client

## ABOUT THIS PROJECT

This repository contains the codebase for a container serial number recognition web application. The app allows users to upload an image of a shipping container, and it automatically detects and extracts the serial number region from the image. It then provides the extracted serial number as text, which conforms to the ISO standard (1 10-digit number).

## TO USE THE APP

### INSTALLATION

To use the application locally, follow these steps:

#Clone the repository

```bash
cd client
npm install
npm start
```

Open the application:

Once the development server starts, open your web browser and navigate to `http://localhost:3000` to access the Container Serial Number Recognition App.

### USAGE

1. **Upload Image**: Use the provided file upload interface to select and upload an image of a shipping container.

2. **Processing**: The app will automatically process the uploaded image to detect and extract the serial number region.

3. **Output**: Once processing is complete, the app will display the region of the image where the serial number was detected and provide the extracted serial number in text format.

## FEATURES

- **Image Upload**: Allows users to upload images of shipping containers.
- **Serial Number Recognition**: Automatically detects and extracts the serial number region from the uploaded image.
- **ISO Standard**: Ensures the extracted serial number conforms to the ISO standard (1 10-digit code).
- **User-friendly Interface**: Provides a simple and intuitive interface for easy interaction and usage.

## TECHNOLOGIES USED

- **React.js**: Frontend framework for building user interfaces.
- **HTML/CSS**: Standard web technologies for structure and styling.

## CONTRIBUTING

Contributions to improve or extend the Container Serial Number Recognition App are welcome. If you have suggestions, feature requests, or bug fixes, please feel free to submit a pull request or open an issue.
