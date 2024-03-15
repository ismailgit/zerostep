import { test } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test('zerostep example', async ({ page }) => {
  await page.goto('https://mytestingthoughts.com/Sample/home.html')
  const aiArgs = {page, test}

  const data = {
    first_name: 'Ismail',
    last_name: 'Isleem',
    gender: 'male',
    hobbies: 'Swimming',
    office: 'MCTC',
    username: 'ismail.90',
    password: 'Automation4Playwright',
    email: 'ismail@mailinator.com',
    contact_phone: '962780106080',
    additional_info: 'This is an additional info about the test with Zerotest using PlayWright'
  }
  
  await ai(`Type "${data.first_name}" in the first name field`, aiArgs)
  await ai(`Type "${data.last_name}" in the last name field`, aiArgs)
  await ai(`Click "${data.gender}" from gender`, aiArgs)
  await ai(`Click "${data.hobbies}" from Hobbies multiple select list`, aiArgs)
  await ai(`Select "${data.office}" from Department / Office drop down list`, aiArgs)
  await ai(`Type "${data.username}" in the username field`, aiArgs)
  await ai(`Type "${data.password}" in the password field`, aiArgs)
  await ai(`Type "${data.password}" in the confirm passowrd field`, aiArgs)
  await ai(`Type "${data.email}" in the email field`, aiArgs)
  await ai(`Type "${data.contact_phone}" in the contact no. field`, aiArgs)
  await ai(`Type "${data.additional_info}" in the Additional Info field`, aiArgs)
  await new Promise((resolve) => setTimeout(resolve, 5000));

  await ai('Click Submit button', aiArgs)
  await new Promise((resolve) => setTimeout(resolve, 5000));
})