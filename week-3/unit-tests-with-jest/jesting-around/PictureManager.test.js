const PM = require('./PictureManager')

test("addPicture should add a picture URL to the pictureURLs array", function () {
  //sanity 
  const picManager = new PM()
  expect(picManager.pictureURLs.length).toBe(0)
  
  picManager.addPicture("some_url")
  expect(picManager.pictureURLs.length).toBe(1)           //test
  expect(picManager.pictureURLs).toContain("some_url")    //double check 
})


test("remove ", function(){
    const picManager = new PM()
    expect(picManager.pictureURLs.length).toBe(0)
    
    picManager.addPicture("some_url")
    expect(picManager.pictureURLs.length).toBe(1)
    expect(picManager.pictureURLs).toContain("some_url")

    picManager.addPicture("some_url2")
    expect(picManager.pictureURLs.length).toBe(2)
    expect(picManager.pictureURLs).toContain("some_url")
    expect(picManager.pictureURLs).toContain("some_url2")

    picManager.removePicture("some_url")
    expect(picManager.pictureURLs.length).toBe(1)
    expect(picManager.pictureURLs).not.toContain("some_url")

})

