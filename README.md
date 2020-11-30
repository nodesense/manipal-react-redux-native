1. Set Up Ruby Environment

Ensure ruby is installed and up to date: 

ruby -v
Update gem's 

sudo gem update --system

2. Set Up MAC Environment

Install the Xcode Command Line Tools this is the key to install Compass.

xcode-select --install

Installing the Xcode Command Line Tools are the key to getting Compass working on OS X

3. Install Compass

sudo gem install compass

----

https://github.com/CocoaPods/CocoaPods/issues/8955

brew install cocoapods --build-from-source

 brew link --overwrite cocoapods

or 

brew upgrade cocoapods


--

in ios directory


pod install 



---

ios sdk path check 

xcrun -k --sdk iphoneos --show-sdk-path

if iphoneos is not there in path

sudo xcode-select --switch /Applications/Xcode.app
xcrun
then run again,

xcrun -k --sdk iphoneos --show-sdk-path


---

### Vector Icons

```
npm i -g react-native-cli
```

```
npm install   react-native-vector-icons

react-native link react-native-vector-icons
```


```
npm run ios
```
---


```
npm install rxjs
```

Java home to be set
```

brew cask reinstall adoptopenjdk/openjdk/adoptopenjdk8


brew cask install adoptopenjdk/openjdk/adoptopenjdk8

 

/usr/libexec/java_home -V | grep jdk

1.8.231.11 (x86_64) "Oracle Corporation" - "Java" /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
    
1.8.0_222 (x86_64) "AdoptOpenJDK" - "AdoptOpenJDK 8" /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home

use AdaptOpenJDK in JAVA_HOME not the default one

is /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home



org.gradle.java.home=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home



```


npm install redux redux-thunk react-redux


npm install @react-navigation/drawer

npm install formik yup


install react native extention

Share device or Ctrl/CMD + M 

add react native debugger
start the debugger


# Add favorites

Product List 
        PRoduct Item    
                Add to Fav Item

action-types.js
    ADD_FAVORITE
    REMOVE_FAVORITE
/state/fav.actions.js
    addFavorite( item )...
    removeFavorite(id)

/reducers/favReducer.js
    INITIAL_STATE = []
    ADD_FAVORITE
    REMOVE_FAVORITE

//store.js
    add favReducer to combine reducer

// Fav List - which display fav items
        remove - dispatch action to remove
// FavList Container
        bring favorites from stoer to component
        dispatch

Hooks
    Revise
    useMemo
    useCallback
    useState

React Native 
    Camera
    File System - known already
    GPS locations
    SQLite
    Storage
    Building
    Debugging
    Production Build
    iOS Module - call from react, call react from ios/objective C
    Java Modle - call from react, call react from android/java
    Layout - flex 
    \


Keep the signed file in the android/app directory

https://www.decoide.org/react-native/docs/signed-apk-android.html


Clear watchman watches: 

watchman watch-del-all.
Delete the node_modules folder: 

rm -rf node_modules && npm install.

Reset Metro Bundler cache:

 rm -rf /tmp/metro-bundler-cache-* or npm start -- --reset-cache.

Remove haste cache: 

rm -rf /tmp/haste-map-react-native-packager-*.


 1. Clear watchman watches: watchman watch-del-all
 2. Delete node_modules: rm -rf node_modules and run yarn install
 3. Reset Metro's cache: yarn start --reset-cache
 4. Remove the cache: rm -rf /tmp/metro-*




https://codewithchris.com/submit-your-app-to-the-app-store/


Promise
    what is promise?
        differed call
        delayed response
        async

        Promise.all([])

        async storage
            check if data in local storage
                get from local
            if not go to internet and get the data



Search Features?
    input box
        Apple
            1 char -> send request to server
            2 char -> send a request to server
            ..
            ..
                for each char added, send request to server

            debounce - 400 ms gap

            rxjs



npm install   react-native-push-notification


https://medium.com/@Jscrambler/implementing-react-native-push-notifications-in-android-apps-7e0234dee7b7

https://github.com/JscramblerBlog/RNnotifications-demo

