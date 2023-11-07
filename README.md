# News reader

**"News Reader"** is an intuitive application for browsing the latest news from around the world. Utilizing a versatile API available on [news-api.org](https://news-api.org), it provides access to current news from a range of sources.

## Key Features

1. **Choice of list or tile view:**

   - The application allows users to choose their preferred way of browsing news. You can opt for the traditional list view or a more graphical tile view, customizing the app to your personal preferences.

2. **Filtering news by country:**

   - The app offers a side menu that enables you to filter news based on your chosen country. This makes it easy to find information from the country of your interest.

3. **Bilingual interface:**

   - "News Reader" provides an interface in two languages: English and Polish.

4. **Responsive web design:**
   - The app's interface is specifically designed with responsive web design in mind, ensuring a smooth and user-friendly experience, whether you're using the app on a smartphone or tablet.

## Screenshots

## How to run this project?

### Development

1. Rename .env.sample file to .env
2. Get you api key from [news-api.org/register](https://news-api.org/register) and assign it to VITE_APP_API_KEY in .env file.
3. Build the image and run container:
   ```shell
   docker-compose up -d --build
   ```
4. Try it on http://localhost:5173.
