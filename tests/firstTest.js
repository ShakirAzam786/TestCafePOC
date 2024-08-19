fixture `login page tests`
.page `https://gmail.com`

test('go to google and enter email', async(t) => {
  await t.typeText('#email', 'shakirazam28@gmail.com')

})