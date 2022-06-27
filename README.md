# telnyx-video-js-bundle-error

## How to reproduce

1. 
```bash
# install dependencies
$ npm install

# run app
$ npm run dev
```

2. Navigate to localhost:3000
3. Click on Load Bundle
4. Check the console for the output

The code interacting with the @telnyx/video bundle is at pages/index.vue

## Expected results:
The console output should show the properly imported @telnyx/video elements

## Actual results:
Webpack gives warning about not finding the exported elements and the console outputs only undefined elements