# Chrome Extension Template

A modern Chrome extension template built with TypeScript, React, and Vite. This template provides a solid foundation for building Chrome extensions with modern development tools and best practices.

## Features

- 🚀 **Modern Build System**: Vite for fast development and building
- ⚛️ **React Support**: Ready for React components (optional)
- 📝 **TypeScript**: Full TypeScript support with proper Chrome API types
- 🎨 **Modern UI**: Clean, responsive popup interface
- 🔧 **Development Tools**: ESLint, TypeScript checking, and hot reload
- 📦 **Manifest V3**: Uses the latest Chrome extension manifest format
- 🗄️ **Storage API**: Chrome storage integration for data persistence
- 🔄 **Message Passing**: Communication between popup, content script, and background

## Project Structure

```
chrome-extension-template/
├── manifest.json          # Extension manifest (Manifest V3)
├── popup.html             # Popup HTML
├── popup.css              # Popup styles
├── popup.js               # Popup logic
├── content.js             # Content script
├── background.js          # Service worker (background script)
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Chrome browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sjufan84/chrome-extension-template.git
   cd chrome-extension-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the extension**
   ```bash
   npm run build
   ```

4. **Load the extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the `dist` folder
   - The extension should now appear in your extensions list

### Development

For development with hot reload:

```bash
npm run dev
```

This will watch for changes and rebuild automatically.

## Available Scripts

- `npm run build` - Build the extension for production
- `npm run dev` - Build and watch for changes during development
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Run TypeScript type checking

## Extension Components

### Popup (`popup.html`, `popup.js`, `popup.css`)
The popup interface that appears when users click the extension icon. Includes:
- Modern, responsive design
- Button interaction example
- Chrome storage integration
- Message passing to content script

### Content Script (`content.js`)
Runs on web pages and can interact with the DOM. Features:
- Message listening from popup
- Visual indicators on pages
- DOM manipulation examples
- Page modification capabilities

### Background Script (`background.js`)
Service worker that runs in the background. Handles:
- Extension installation events
- Message routing between components
- Tab updates and monitoring
- Periodic tasks and maintenance

## Chrome APIs Used

- `chrome.storage` - Data persistence
- `chrome.tabs` - Tab management
- `chrome.runtime` - Extension lifecycle and messaging
- `chrome.scripting` - Dynamic script injection
- `chrome.alarms` - Periodic tasks

## Customization

### Adding New Features

1. **Modify the popup**: Edit `popup.html`, `popup.css`, and `popup.js`
2. **Update content script**: Modify `content.js` for page interactions
3. **Enhance background**: Update `background.js` for background tasks
4. **Add permissions**: Update `manifest.json` with required permissions

### Adding React Components

If you want to use React for the popup:

1. Create React components in a `src` folder
2. Update `vite.config.ts` to include React build
3. Modify the build process to generate React-based popup

### Styling

The popup uses modern CSS with:
- CSS Grid and Flexbox
- CSS custom properties
- Responsive design
- Clean, minimal aesthetic

## Permissions

The template includes basic permissions:
- `activeTab` - Access to the current tab
- `storage` - Chrome storage API

Add more permissions in `manifest.json` as needed for your specific use case.

## Building for Production

1. **Build the extension**
   ```bash
   npm run build
   ```

2. **Test the built extension**
   - Load the `dist` folder in Chrome
   - Test all functionality
   - Check for any console errors

3. **Package for Chrome Web Store**
   - Zip the contents of the `dist` folder
   - Upload to Chrome Web Store Developer Dashboard

## Troubleshooting

### Common Issues

1. **Extension not loading**: Check `manifest.json` for syntax errors
2. **Content script not running**: Verify URL patterns in manifest
3. **Storage not working**: Check permissions in manifest
4. **Build errors**: Run `npm run type-check` and `npm run lint`

### Debug Tips

- Use Chrome DevTools for popup debugging
- Check `chrome://extensions/` for error messages
- Use `console.log` statements for debugging
- Check the Console tab in DevTools for content script logs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Resources

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/migrating/)
- [Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples)
- [Vite Documentation](https://vitejs.dev/)

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information

---

Happy coding! 🚀