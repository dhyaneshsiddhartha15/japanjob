# JapanCareers

JapanCareers is a website dedicated to providing information about job opportunities, career advice, and Japanese work culture. This project is built using React and Tailwind CSS.

## Features

- Home: Landing page with an overview of the website.
- About: Information about the purpose and goals of JapanCareers.
- Jobs: Job listings for various positions in Japan.
- Career: Career advice section with tips and strategies.
- Culture: Insights into Japanese work culture.
- Blogs: Articles and posts related to work opportunities in Japan.
- Contact: Contact form to get in touch with the JapanCareers team.

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/JapanCareers.git`
2. Navigate to the project directory: `cd JapanCareers`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Contributing

Contributions are welcome! If you'd like to contribute to JapanCareers, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`
3. Make your changes and commit them: `git commit -am 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Folder Structure

```
JapanCareers/
├── src/
│   ├── api/
│   │   └── search-api.js
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   │   └── Navbar.js
│   │   └── core/
│   │       ├── AboutUsComponent/
│   │       │   ├── Counter.jsx
│   │       │   └── Review.jsx
│   │       ├── CareerAdvice/
│   │       │   └── ResumeTips.jsx
│   │       ├── CulturePage/
│   │       │   ├── JapanWork.jsx
│   │       │   ├── Opportunity.jsx
│   │       │   └── RewardsInJapan.jsx
│   │       ├── CTAButton.jsx
│   │       └── HighlightText.js
│   │   └── HomePage/
│   │       ├── About.jsx
│   │       ├── Companies.jsx
│   │       ├── ExploreJob.jsx
│   │       ├── FAQ.jsx
│   │       └── GetJobAlert.jsx
│   ├── pages/
│   │   ├── Blog.jsx
│   │   ├── Career.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Culture.jsx
│   │   ├── Home.jsx
│   │   └── JobListing.jsx
│   ├── LanguageContext.js
│   ├── index.js
│   ├── translations.js
│   └── app.css
```

## Issue with Google Search API

The JobListing component uses the Google Search API to fetch job listings. However, the API is currently expired and does not allow requests due to CORS policy restrictions. To resolve this issue, you will need to renew the API key or use a different API that supports CORS.
##Dep
Installed Packages:
-------------------
- react
- react-router-dom
- react-intl 
- axios
- tailwindcss
- react-icons
- webpack
## Deployment

The project is deployed using Vercel. To deploy the project, the `npm run build` command was used.

```bash
npm run build
```

The deployment process through Vercel ensures that the latest changes from the `main` branch are automatically deployed and hosted.

---


