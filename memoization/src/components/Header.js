import React from 'react'

function Header({number, data}) {
  console.log("Header component R-rendered!")
  return (
    <div>
      Header - {number}
      <br/>
      <br/>

      <code>{JSON.stringify(data)}</code>
    </div>
  )
}
// React.memo ile sarmalanan component yeni prop alıp ya da prop değişmediği sürece re-render olmaz
export default React.memo(Header)
