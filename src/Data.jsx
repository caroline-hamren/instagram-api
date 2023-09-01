import { useState } from 'react'

function Data() {
  let user_id='https://graph.instagram.com/me?access_token=IGQWRNUXhYWkpBcDE2YXE5NFA5ZADR0bUZABXzRvc1NtZA1pnYzJneE5XQ0pTeTZATSHdoVG1SS0o2N0ZAzbTFibWhoUV9zTVFsSjBjZA1RuUzZAxT1hXSm5sRHp5VE1fTjgzdkZA1UExHTG04Vl93S2FaUmxVYklfMC1IU0kZD';
  
  let media = 'https://graph.instagram.com/6855306157916300?fields=username,id&access_token=IGQWRNUXhYWkpBcDE2YXE5NFA5ZADR0bUZABXzRvc1NtZA1pnYzJneE5XQ0pTeTZATSHdoVG1SS0o2N0ZAzbTFibWhoUV9zTVFsSjBjZA1RuUzZAxT1hXSm5sRHp5VE1fTjgzdkZA1UExHTG04Vl93S2FaUmxVYklfMC1IU0kZD';
  
  let perm = 'https://graph.instagram.com/6855306157916300?access_token=IGQWRNUXhYWkpBcDE2YXE5NFA5ZADR0bUZABXzRvc1NtZA1pnYzJneE5XQ0pTeTZATSHdoVG1SS0o2N0ZAzbTFibWhoUV9zTVFsSjBjZA1RuUzZAxT1hXSm5sRHp5VE1fTjgzdkZA1UExHTG04Vl93S2FaUmxVYklfMC1IU0kZD&fields=media_url,permalink';
  
  let apiCall = 'https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQWRNUXhYWkpBcDE2YXE5NFA5ZADR0bUZABXzRvc1NtZA1pnYzJneE5XQ0pTeTZATSHdoVG1SS0o2N0ZAzbTFibWhoUV9zTVFsSjBjZA1RuUzZAxT1hXSm5sRHp5VE1fTjgzdkZA1UExHTG04Vl93S2FaUmxVYklfMC1IU0kZD';
  
  let test ="https://graph.instagram.com/me?fields=id,username&access_token=IGQWRNUXhYWkpBcDE2YXE5NFA5ZADR0bUZABXzRvc1NtZA1pnYzJneE5XQ0pTeTZATSHdoVG1SS0o2N0ZAzbTFibWhoUV9zTVFsSjBjZA1RuUzZAxT1hXSm5sRHp5VE1fTjgzdkZA1UExHTG04Vl93S2FaUmxVYklfMC1IU0kZD";
  
 fetch(test)
 
 
   .then(response => response.json())
   .then(data => {
     // Do something with the data
     console.log(data)
   })
   .catch(error => {
     // Handle the error
     console.log("error");
   });
  
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default Data
