Publish/Susbcribe

Publish the data and subscribe as many times

notify the data changes to other listeners

n = 0

n = 1 [need to notify that n value got changed]

Subject n$ = new Subject()
n$.next(0) ;; // publishing 0
n$.next(1); publishing 1

--

other component/part of teh code

n$.subscribe(value => {
    // this function is called for every time next() called
})