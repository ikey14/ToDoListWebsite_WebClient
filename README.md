1. Base
2. APIDownload
3. Combined


The way that the fetch is used is a bit different in the combined version. In APIDownload, instead of slicing the data beforehand, there is a for loop with a 10 iteration limit. This is changed in Combined, where the data recieved is sliced so that only the first 10 are used, then the for loop is replaced by a for each.
