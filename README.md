# Netflix Clone

A clone of the Netflix homepage and sign-in page built using HTML, CSS, and JavaScript. This project also includes backend functionality implemented with Express.js to handle email submissions and language translation using JavaScript alone. The goal of this project is to practice and demonstrate frontend and backend development skills.

## Features

- **Home Page**: A static clone of the Netflix homepage with a hero section, features, and FAQ.
- **Sign-In Page**: A static clone of the Netflix sign-in page.
- **Language Translation**: Translate functionality to switch between English and Hindi.
- **Email Submission**: Users can enter their email to receive a welcome message via email.
- **Responsive Design**: Pages are responsive and work on different screen sizes.

## Screenshots

### Home Page
![Home Page](screenshots/home_page)

### Sign-In Page
![Sign-In Page](screenshots/sign_in_page)

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Email Service**: Nodemailer

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/netflix-clone.git
    cd netflix-clone
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory with the following content:
    ```plaintext
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    ```

4. **Run the server**:
    ```bash
    npm start
    ```

5. **Open your browser** and navigate to:
    - Home Page: `http://localhost:5500/`
    - Sign-In Page: `http://localhost:5500/login`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Folder Structure

```plaintext
netflix-clone/
│
├── public/
│   ├── style.css
│   ├── index.js
│   ├── Netflix.html
│   ├── sign_in.html
│   └── sign_in.css
│
├── screenshots/
│   ├── home_page
│   ├── sign_in_page
│
├── .env
├── server.js
├── package.json
├── README.md
└── ...

