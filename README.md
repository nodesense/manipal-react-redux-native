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
