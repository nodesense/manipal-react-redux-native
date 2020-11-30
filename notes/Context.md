Not fair to pass teh data deep down the tree using PROPS

parent 1  [data]
    child 1 props - data
        child 2 - props data
            child 3 - props data
                ... data
                    .. data
                        child 10 [get data from parent 1 using props]

---
React context is basically to pass the data to Nth child without using props
use cases
    language
    theme
    global settings

store
    -- redux-store is good for global data
    -- data to be available even use leave the page/screen

    cons:
        a lot of work, need to containers, subscribe etc
    
