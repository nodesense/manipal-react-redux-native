1000 items to show

Mobile 1080 pixel, width, 1920 pixel height

each item will take about 200 pixel height

approx 10 items can be shown on screen

FlatList
    FlatList will create 1000 v.doms for each items
    for any update, it will diff 1000 v.dom for each items

    on the UI,
    the memory for all 1000 items and views are created, but use 
    can see only 10 items, then scroll to find more items

    cons: memory is created, not good
    pros: simple and easy to use, for smaller set ofcomponents/items

VirtualizedList

    Looks into view port, ie how many pixel avaialble, height of each item.

    ONLY create memory for the one what is displayed
    ie create memory for only 10 items, render only 10 items
    When use scroll, it creates the memory for other items on need basic

    pros: memory effieint, good for long list
